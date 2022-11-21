import { Box, Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import StackCard from "../components/StackCard";
import { techStacks } from "../constant";
import { MotionBox } from "../utils/motion";
const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  // const category = ["All", "android", "web", "devops"];
  //get all the unique  categories form techStacks.category form constant.js
  const categories = [
    ...new Set(techStacks.map((item) => item.category)),
    "All",
  ].reverse();

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                {categories.map((cat, index) => (
          // <MotionBox whileHover={{ y: -5 }}  key={index} _hover={{
          //   borderColor: "blue.500",
          // }}>
 
                  <li
                    className="-mb-px mr-2 last:mr-0 flex-auto text-center hover:scale-110" key={index}
                   
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
                      {cat}
                    </a>
                  </li>
          // </MotionBox>
                ))}
              </ul>
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {categories.map((cat, index) => (
                  <div
                    className={openTab === index + 1 ? "block" : "hidden"}
                    id="link1"
                    key={index}
                  >
                    <Grid
                      templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                      }}
                      gap={6}
                    >
                      {techStacks
                        .filter(
                          (item) => item.category === cat || cat === "All"
                        )
                        .map((item, index) => (
                          <StackCard key={index} stack={item} />
                        ))}
                    </Grid>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
