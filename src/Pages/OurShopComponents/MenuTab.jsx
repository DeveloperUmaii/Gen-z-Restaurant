import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // ✅ নতুন যোগ করা হয়েছে Helmet ব্যবহার করার জন্য

const MenuTab = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']; // ✅ এখানে "drink" কে plural করে "drinks" করলাম যাতে নিচে মিল থাকে
  const { category } = useParams(); // ✅ ইউজারের URL থেকে ডাইনামিক ক্যাটেগরি নেওয়া হবে
  const initialIndex = categories.indexOf(category); // ✅ ক্যাটেগরি লিস্টের মধ্যে ইউজারের দেওয়া ক্যাটেগরি কোন নাম্বারে আছে সেটা বের করলো
  const [tabIndex, setTabIndex] = useState(initialIndex); // ✅ সেই ইনডেক্সকে ট্যাবের প্রাথমিক active index বানানো হলো

  return (
    <div className="w-full flex justify-center my-6">
      {/* ✅ Helmet এখানে বসানো হলো যাতে tabIndex চেঞ্জ হলে টাইটেলও বদলায় */}
      <Helmet>
        <title>Gen-Z_R | Shop/{categories[tabIndex]} </title>
        {/* ✅ টাইটেল হবে যেমন: SALAD | Our Shop */}
      </Helmet>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        {/* Tab List */}
        <TabList className="flex justify-center space-x-8 ">
          <Tab
            className="cursor-pointer px-4 py-2 text-black 
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
          <TabCard categoryFilter={"salad"} />
        </TabPanel>
        <TabPanel>
          <TabCard categoryFilter={"pizza"} />
        </TabPanel>
        <TabPanel>
          <TabCard categoryFilter={"soup"} />
        </TabPanel>
        <TabPanel>
          <TabCard categoryFilter={"dessert"} />
        </TabPanel>
        <TabPanel>
          <TabCard categoryFilter={"drinks"} /> 
          {/* ✅ এখানে categoryFilter-এও plural "drinks" রাখা হলো */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuTab;
