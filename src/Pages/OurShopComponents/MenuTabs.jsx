// import { useState } from "react";
// import TabCard from "./TabCard";

// const MenuTabs = () => {
//   const tabs = ["SALAD", "PIZZA", "SOUP", "DESSERTS", "DRINKS"];
//   const [activeTab, setActiveTab] = useState("SALAD");


//   const content = {
//     SALAD: <TabCard categoryFilter={'salads'} />,
//     PIZZA: <TabCard  categoryFilter={'pizza'} />,
//     SOUP: <TabCard  categoryFilter={'soups'} />,
//     DESSERTS: <TabCard  categoryFilter={'dessert'} />,
//     DRINKS: <TabCard  categoryFilter={'drink'} />
//   };

//   return (
//     <div className="flex flex-col justify-center items-center my-6">
//       {/* Tabs */}
//       <div className="tabs tabs-bordered mb-0">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`tab px-6 text-lg ${
//               activeTab === tab
//                 ? "font-bold text-orange-500 border-b-4 border-orange-500"
//                 : "text-black"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="">{content[activeTab]}</div>
//     </div>
//   );
// };

// export default MenuTabs;
