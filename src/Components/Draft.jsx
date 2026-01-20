JWS json web token

Step 01. install 
npm install jsonwebtoken


step 02. import
const jwt = require('jsonwebtoken');

step 03. secret Token create


step 04.Token server site theke pathano, Token use ba Token Generate er jonne api toyri & Call
    // No 03.jwt Api make


step 05. Client side theke token recieve and Storage kora sathe 

Step 06. Token ekhon Backend a pathaite hoibo [POst Operation SEND]


Step 07. Recieve Operation in BackEnd

Step 08. VARIFY TOKEN     //(verify hoile data asbe client side a data view hobe |verify na hole data SHOW hobe na client side )
          //Middleweare create
    const verifyToken = (req, res, next) => {

Step 09. Header Token Axios Secure Secure a set kora
            // Add a request interceptor
Step 10.All user theke header(Comment kora tuku) kete deoa

Step 11. Axios secure a response

    // response interceptor

    // cleanup (VERY IMPORTANT)
  
Step 12. api er maddhome Admin make
      // Dynamically Admin make with api ( make_admin step-1 in SERVER)

  // (make_admin step-2 in clien Side) Hook create for use  every secret Component as a ADMIN

// (no.3)import[dashboarddrawer] 

Step 13. Admin verify in Server //(no.4)

    // (no.5)
// er por sob Secure jaigai jekhane jeko chailei edit,delete,visit korte na pare oi sob jaigai 
// server a (verifyToken, verifyAdmin,) diye dite hobe 
step 14 . Crete Admin route in client side
    //  create admin route for prtecting rote from NonAdminUser!
    