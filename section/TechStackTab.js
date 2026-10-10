import { Grid } from "@chakra-ui/react";
import React from "react";
import StackCard from "../components/StackCard";
import { techStacks } from "../constant";

export default function TechStackTab() {
  const [category, setCategory] = React.useState("All");
  const categories = ["All", ...new Set(techStacks.map((item) => item.category))];
  return <>
    <div className="filter-bar" aria-label="Filter technologies">
      {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
      {techStacks.filter((item) => category === "All" || item.category === category).map((item) => <StackCard key={item.name} stack={item} />)}
    </Grid>
  </>;
}
