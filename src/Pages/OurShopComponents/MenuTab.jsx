import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MenuTab = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.includes(category)
    ? categories.indexOf(category)
    : 0;

  const [tabIndex, setTabIndex] = useState(initialIndex);

  return (
    <div className="w-full flex justify-center my-6 px-4">
      {/* ✅ px-4 যোগ করা হয়েছে: ছোট স্ক্রিনে content edge থেকে দূরে রাখার জন্য */}
      <Helmet>
        <title>{`Gen-Z_R | Shop/${categories?.[tabIndex] ?? "All"}`}</title>
      </Helmet>

      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="w-full max-w-6xl"
        // {/* ✅ max-w-6xl যোগ করা হয়েছে: খুব বড় স্ক্রিনে content খুব বেশি বড় না হওয়ার জন্য */}
      >
        {/* Tab List - Responsive করানো হয়েছে */}
        <TabList className="flex flex-wrap justify-center gap-4 md:gap-8 py-4">
          {/* ✅ flex-wrap: ছোট স্ক্রিনে tab নিচের line-এ চলে যাবে */}
          {/* ✅ gap-4 md:gap-8: ছোট স্ক্রিনে কম gap, বড় স্ক্রিনে বেশি gap */}
          {/* ✅ py-4: উপরে-নিচে padding যোগ করা হয়েছে */}

          <Tab
            className="cursor-pointer px-3 py-2 text-sm md:text-base text-black 
                       hover:text-orange-500 focus:outline-none transition-all duration-300
                       border-b-2 border-transparent"
            // {/* ✅ text-sm md:text-base: ছোট স্ক্রিনে ছোট text, বড় স্ক্রিনে normal text */}
            // {/* ✅ transition-all duration-300: smooth animation এর জন্য */}
            // {/* ✅ border-b-2 border-transparent: inactive tab-এ transparent border */}
            selectedClassName="font-bold text-orange-500 border-b-2 border-orange-500 text-lg"
            // {/* ✅ border-b-4 থেকে border-b-2: বেশি thick border না হওয়ার জন্য */}
            // {/* ✅ text-lg: selected tab-এ একটু বড় text */}
          >
            SALAD
          </Tab>

          <Tab
            className="cursor-pointer px-3 py-2 text-sm md:text-base text-black 
                       hover:text-orange-500 focus:outline-none transition-all duration-300
                       border-b-2 border-transparent"
            selectedClassName="font-bold text-orange-500 border-b-2 border-orange-500 text-lg">
            PIZZA
          </Tab>

          <Tab
            className="cursor-pointer px-3 py-2 text-sm md:text-base text-black 
                       hover:text-orange-500 focus:outline-none transition-all duration-300
                       border-b-2 border-transparent"
            selectedClassName="font-bold text-orange-500 border-b-2 border-orange-500 text-lg">
            SOUP
          </Tab>

          <Tab
            className="cursor-pointer px-3 py-2 text-sm md:text-base text-black 
                       hover:text-orange-500 focus:outline-none transition-all duration-300
                       border-b-2 border-transparent"
            selectedClassName="font-bold text-orange-500 border-b-2 border-orange-500 text-lg">
            DESSERT
          </Tab>

          <Tab
            className="cursor-pointer px-3 py-2 text-sm md:text-base text-black 
                       hover:text-orange-500 focus:outline-none transition-all duration-300
                       border-b-2 border-transparent"
            selectedClassName="font-bold text-orange-500 border-b-2 border-orange-500 text-lg">
            DRINKS
          </Tab>
        </TabList>

        {/* Tab Panels - Responsive padding যোগ করা হয়েছে */}
        <TabPanel className="px-2 md:px-0 py-4">
          {/* ✅ px-2 md:px-0: ছোট স্ক্রিনে side padding, বড় স্ক্রিনে no padding */}
          {/* ✅ py-4: উপরে-নিচে spacing */}
          <TabCard categoryFilter={"salad"} />
        </TabPanel>

        <TabPanel className="px-2 md:px-0 py-4">
          <TabCard categoryFilter={"pizza"} />
        </TabPanel>

        <TabPanel className="px-2 md:px-0 py-4">
          <TabCard categoryFilter={"soup"} />
        </TabPanel>

        <TabPanel className="px-2 md:px-0 py-4">
          <TabCard categoryFilter={"dessert"} />
        </TabPanel>

        <TabPanel className="px-2 md:px-0 py-4">
          <TabCard categoryFilter={"drinks"} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuTab;
