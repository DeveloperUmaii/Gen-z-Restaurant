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
Step 06. Token ekhon Backend a pathaite hoibo [POst Operation SEND]
        *Header er moddhe diye pathaite hobe 
          const { data: users = [], refetch } = useQuery({
            queryKey: ["users"],
            queryFn: async () => {
              const res = await backEndServerLink.get("/users",{
                headers: {
                    authorization: `bearer ${localStorage.getItem('access-token')}`
                },
              });
              return res.data;
            },
          });

Step 07. Recieve Operation in BackEnd
          Console.log kore dekhbo token Backend server terminal a gece kina jaoar por VARIFY

Step 08. VARIFY TOKEN     //(verify hoile data asbe client side a data view hobe |verify na hole data SHOW hobe na client side )
          //Middleweare create
    const verifyToken = (req, res, next) => {
      console.log("inside verify Token", req.headers);
      if (!req.headers.authorization) {
        return res.status(401).send({ message: "forbidden - access" });
      }
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          return res.status(402).send({ message: "forbidden Access" });
        }
        req.decoded = decoded;
        next();
        console.log(decoded.foo); // bar
      });
    };
Step 09. Header Token Axios Secure Secure a set kora
            // Add a request interceptor
                  backEndServerLink.interceptors.request.use(function (config) {
                    const token = localStorage.getItem('access-token')
                    console.log('Request stop bye Interceptors :_',token)
                    config.headers.authorization = `Bearer ${token}`
                  return config;
                }),   
                function (error) { return Promise.reject(error);}
Step 10.All user theke header(Comment kora tuku) kete deoa
                const res = await backEndServerLink.get("/users"
      //             ,{
      //   headers: {
      //       authorization: `bearer ${localStorage.getItem('access-token')}`
      //   },
      // }
    );
Step 11. Axios secure a response

  useEffect(() => {
    // request interceptor
    const reqInterceptor = backEndServerLink.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        console.log('Request stop bye Interceptors :_',token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }
    );

    // response interceptor
    const resInterceptor = backEndServerLink.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error.response?.status;
        console.log('status error in the INTERCEPTORS',status)
        if (status === 401 || status === 403) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    // cleanup (VERY IMPORTANT)
    return () => {
      backEndServerLink.interceptors.request.eject(reqInterceptor);
      backEndServerLink.interceptors.response.eject(resInterceptor);
    };
  }, [logOut, navigate]);


// eituku bad 
          backEndServerLink.interceptors.response.use(function(response) {
              return response;
            }, (error) => {
              const status = error.response.status;
              console.log('status error in the INTERCEPTORS',status)
              return Promise.reject(error);
            });



Step 12.
Step 13.