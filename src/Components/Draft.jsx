
// import useMenu from "../hooks/useMenu";
// import ChefRecomendedCard from "../Pages/HomeComponents/ChefRecomendedCard";

// const Draft =({categoryFilter}) => {
//     const [menu, loading] = useMenu();


//   const menuItem = menu.filter((item) => item.category === categoryFilter);
//     if (loading) {
//     return <p className="text-center text-orange-500 text-lg font-bold">ডেটা লোড হচ্ছে...</p>;
//   }
//   return (
//     <div>

//       <div className="grid grid-cols-3 gap-x-2 gap-y-1">
//           {
//             menuItem.map( ChefReciepe => 
//             <ChefRecomendedCard key={ChefReciepe?._id} ChefCard ={ChefReciepe} 
//             />
//          )}
//       </div>
//     </div>
    
//   );
// };

// export default Draft;
