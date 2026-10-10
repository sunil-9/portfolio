import axios from "axios";
import moment from "moment";
import { XMLParser, XMLValidator } from "fast-xml-parser";

const text = (value) => String(value?.["#text"] ?? value ?? "");
const safeUrl = (value) => {
  try {
    const url = new URL(text(value));
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch { return ""; }
};

export const parseMediumFeed = (xml) => {
  if (XMLValidator.validate(xml) !== true) throw new Error("Invalid RSS XML");
  const feed = new XMLParser({ ignoreAttributes: false, parseTagValue: false }).parse(xml);
  if (feed.rss?.channel === undefined) throw new Error("Missing RSS channel");
  const items = feed.rss.channel.item || [];
  return (Array.isArray(items) ? items : [items]).map((item) => {
    const content = text(item["content:encoded"] || item.description);
    const description = content.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
    const categories = item.category || [];
    const date = moment(text(item.pubDate));
    return {
      title: text(item.title),
      url: safeUrl(item.link || item.guid),
      thumbnail: safeUrl(content.match(/<img\b[^>]*\bsrc=["']([^"']+)["']/i)?.[1]),
      date: date.isValid() ? date.format("YYYY - MMM DD") : "",
      description: description.slice(0, 180) + (description.length > 180 ? "…" : ""),
      categories: (Array.isArray(categories) ? categories : [categories]).map(text),
    };
  }).filter((item) => item.title && item.url);
};

const getMediumArticles = async ({ username = "sunil-9" } = {}) => {
  const handle = (username || "sunil-9").trim().replace(/^@+/, "");
  try {
    const { data } = await axios.get(`https://medium.com/feed/@${encodeURIComponent(handle)}`, {
      responseType: "text", timeout: 10000, maxContentLength: 5 * 1024 * 1024,
    });
    return parseMediumFeed(data);
  } catch {
    console.warn("Medium feed unavailable; articles will retry during revalidation.");
    return [];
  }
};
export default getMediumArticles;
