import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MenuTab = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
  const {category} = useParams(); 
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);

  
  return (
    <div className="w-full flex justify-center my-6">
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        {/* Tab List */}
        <TabList className="flex justify-center space-x-8 ">
          <Tab
            className="cursor-pointer px-4 py-2  text-black 
                       hover:text-orange-500 focus:outline-none"
            selectedClassName="text-xl font-bold text-orange-500 border-b-4 border-orange-500 "
          >
            SALAD
          </Tab>
          <Tab
            className="cursor-pointer px-4 py-2 text-lg text-black 
                       hover:text-orange-500 focus:outline-none"
            selectedClassName="font-bold text-orange-500 border-b-4 border-orange-500"
          >
            PIZZA
          </Tab>
          <Tab
            className="cursor-pointer px-4 py-2 text-lg text-black 
                       hover:text-orange-500 focus:outline-none"
            selectedClassName="font-bold text-orange-500 border-b-4 border-orange-500"
          >
            SOUP
          </Tab>
          <Tab
            className="cursor-pointer px-4 py-2 text-lg text-black 
                       hover:text-orange-500 focus:outline-none"
            selectedClassName="font-bold text-orange-500 border-b-4 border-orange-500"
          >
            DESSERT
          </Tab>
          <Tab
            className="cursor-pointer px-4 py-2 text-lg text-black 
                       hover:text-orange-500 focus:outline-none"
            selectedClassName="font-bold text-orange-500 border-b-4 border-orange-500"
          >
            DRINKS
          </Tab>
        </TabList>

        {/* Tab Panels */}
        <TabPanel>
          <TabCard categoryFilter={"salad"} />,
        </TabPanel>
        <TabPanel>
          <TabCard categoryFilter={"pizza"} />,
        </TabPanel>
        <TabPanel>
          <TabCard categoryFilter={"soup"} />,
        </TabPanel>
        <TabPanel>
          <TabCard categoryFilter={"dessert"} />,
        </TabPanel>
        <TabPanel>
          <TabCard categoryFilter={"drink"} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuTab;
