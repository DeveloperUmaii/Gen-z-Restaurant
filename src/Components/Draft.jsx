
  const navigate = useNavigate();  //এর জন্য ইউজ নেভিগেট কল করলাম No.02  
  // এখন নেভিগেট এর মধ্যে path পাঠাতে হবে 
  
   const location = useLocation(); // Path পাওয়ার জন্য আমাদের লাগবে Location এই জন্য  useLocation() কল করলাম N0.03

// location:{pathname: '/login', search: '', hash: '', state: {…}, key: 'fbhxiihe'}hash: ""key: "fbhxiihe"pathname: "/login"search: ""state: {from: {…}} [[Prototype]]: Object

//এখন লোকেশন হিসেবে তো সম্পূর্ণ লোকেশন অবজেক্ট টা পাবো আমাদের শুধু পাত নেমটা লাগবে
 

  const redirectPath = location.state?.from?.pathname || "/"; //শুধু path name জন্য যে কোন একটা ভ্যালু ডিক্লেয়ার করে নাম ডিক্লেয়ার করে যেমন redirectpath, বা pathName বা locationPath, ghorardim যে কোন একটা নাম ডিক্লেয়ার করে |ডিক্লেয়ার করার যেকোনো নেম.state?.from?.pathname| লিখে pathName টা বের করে নিয়ে আসবো No.04
  //    যেইটা(pathName) (ডিক্লেয়ার করার যেকোনো নামের) redirectPath মধ্যে থাকবে 

  //No .05   রিপ্লেস ট্রু করে দিতে হবে অবশ্যই যাতে পূর্বের সম্পূর্ণ লোকেশন বা হিস্ট্রি মুছে রিপ্লেস করে দেয় ব্যাক বাটন চাপ দিলে পুনরায় যেন লগইন এ নিয়ে না আসে


    logInUser(email, password).then((result) => {
      const user = result.user;
      navigate(redirectPath, { replace: true }); // আমাদের মূলত রিরেক্ট করতে হবে No.01 
      console.log(user);
    });
  };






                       const handleCaptchaVerify = () => {
                         const captchaValue = captchaRef.current.value.trim();
                        
                         if (!captchaValue) {
                           Swal.fire({
                             title: "Warning!",
                             text: "Please enter the captcha first!",
                             icon: "warning",
                             confirmButtonColor: "#d1b48b",
                           });
                           return;
                         }
                      
                         if (validateCaptcha(captchaValue)) {
                           Swal.fire({
                             title: "✅ Captcha Matched!",
                             text: "You can now submit the form.",
                             icon: "success",
                             confirmButtonColor: "#5cb85c",
                           });
                           setDisable(false); // Enable Submit
                         } else {
                           Swal.fire({
                             title: "❌ Captcha Does Not Match!",
                             text: "Please try again.",
                             icon: "error",
                             confirmButtonColor: "#d9534f",
                           });
                           setDisable(true); // Disable Submit
                         }
                       };