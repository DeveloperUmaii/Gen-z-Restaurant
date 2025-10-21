import UseAuthHook from "../providers/ContexHook/UseAuthHook";
import Contact from "./HomeComponents/Contact";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const { user } = UseAuthHook();
  const { displayName, email, photoURL } = user || {};

  return (
    <div>
      <Helmet title="Gen-Z_R|Contact" />
      <Contact />
      <div className="text-9xl">
        <h1></h1>
        <h1>{displayName}</h1>
        <h2>{email}</h2>
        <img src={photoURL} alt="User" />
      </div>
    </div>
  );
};

export default ContactUs;
