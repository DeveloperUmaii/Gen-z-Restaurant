JWS json web token

Step 01. install 
npm install jsonwebtoken


step 02. import
const jwt = require('jsonwebtoken');

step 03. secret Token create
Commande liner moddhe command
    i.|node|
    ii.|require('crypto').randomBytes(64)|
    iii.|require('crypto').randomBytes(64).toString('hex')|
    iv. dot.env file token rakhte hobe ACCESS_TOKEN_SECRET=v6bt88v65e 

step 04.Token server site theke pathano, Token use ba Token Generate er jonne api toyri & Call
    // No 03.jwt Api make
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

step 05. Client side theke token recieve and Storage kora sathe 

          if (currentUser) {
        // ১. সার্ভার থেকে টোকেন নেওয়া & Store kora
        const userDetails = { email: currentUser.email };
        backEndServerLinkLocal.post('/jwt', userDetails)
        .then((res) => {
          if (res.data.token) {
            // ২. লোকাল স্টোরেজে টোকেন রাখা
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        // ৩. লগআউট করলে লোকাল স্টোরেজ থেকে টোকেন মুছে ফেলা
        localStorage.removeItem("access-token");
      }
