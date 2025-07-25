/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Heading,
  SimpleGrid,
  SlideFade,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import GithubCard from "../components/GithubCard";
import Paragraph from "../components/Paragraph";
import { MotionBox } from "../utils/motion";

const GithubSection = ({ repos }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const languages = [...new Set(repos.map((repo) => repo.language))].sort();
//   console.log(languages);
  //find the repos with language and get output as an array of repos with language
  let repoarray = [];
  languages.forEach((language) => {
    const reposWithLanguage = repos.filter(
      (repo) => repo.language === language
    );
    repoarray = { ...repoarray, [language]: reposWithLanguage };
  });
//   console.log(repoarray, "repoarray");

  return (
    <SlideFade in offsetY={200} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Github
      </Heading>
      <Paragraph>
        <Text>List of my top featured github repositories. 🔖</Text>
        <Text>
          Feel free to pay a visit and don't forget to leave me a star! ⭐{" "}
        </Text>
      </Paragraph>
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          {languages.map((language, index) => (
            <MotionBox whileHover={{ y: -5 }}  key={index} _hover={{
              borderColor: "blue.500",
            }}>

            <li
              className="-mb-px mr-2 last:mr-0 flex-auto text-center hover:scale-110"
              key={index}
            >
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  useColorModeValue("gray.600", "gray.400") +
                  (openTab === index + 1
                    ? "text-blueGray-600 " +
                      useColorModeValue("bg-slate-400", "bg-slate-700")
                    : "bg-blue-900")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(index + 1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                {language !== null ? language : "Others"}
              </a>
            </li>
             </MotionBox>
          ))}
        </ul>
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              {languages.map((language, index) => (
                <div
                  className={openTab === index + 1 ? "block" : "hidden"}
                  id="link1"
                  key={index}
                >
                  <Box my={5}>
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
                      {repoarray[language].map((repo) => (
                        <GithubCard
                          name={repo.name}
                          description={repo.description}
                          language={repo.language}
                          url={repo.clone_url}
                          stargazers_count={repo.stargazers_count}
                          forks_count={repo.forks_count}
                          key={repo.name}
                        />
                      ))}
                    </SimpleGrid>
                  </Box>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideFade>
  );
};

export default GithubSection;
