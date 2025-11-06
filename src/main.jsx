import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // ইমপোর্ট না করলে টেল উইন্ড কাজ করবে না ইনডেক্স সিএসএস
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/Authprovider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <AuthProvider>  {/*Sompurno web app take ei context diye cover korlam*/}
         <QueryClientProvider client={queryClient}>
               <HelmetProvider>
                 <Helmet defaultTitle="Gen-Z_Resturant" />
                 <RouterProvider router={router} />
               </HelmetProvider>
        </QueryClientProvider>
     </AuthProvider>
  </React.StrictMode>
);
