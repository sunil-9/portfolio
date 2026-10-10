import axios from "axios";

const getGithubRepos = async ({ username }) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${encodeURIComponent(username || 'sunil-9')}/repos`,
      { timeout: 10000 }
    );

    let repos = res.data;
    //filter out repos which have less than 1 star
    // repos = repos.filter((repo) => repo.stargazers_count > 0);

    //remove forked repos
    repos = repos.filter((repo) => !repo.fork);
    console.log(repos.length, "repos");

    let result = repos?.sort((a, b) => b.stargazers_count - a.stargazers_count);
    return result;
  } catch (err) {
    console.warn('GitHub repositories are temporarily unavailable.');
    return [];
  }
};

export default getGithubRepos;
