import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import UseAuthHook from "../../../providers/ContexHook/UseAuthHook";
import hookAxiosLocal from "../../../hooks/hookAxiosLocal";

const SocialLogIn = () => {
  const { googlelogIn } = UseAuthHook();
const backEndServerLinkLocal = hookAxiosLocal();


const handleGoogleLogIn = () => {
  googlelogIn()
    .then(result => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }

  backEndServerLinkLocal.post('/users', userInfo)
    .then(res => {
      console.log(res.data);
    })
  })
}
    return (
            //   {/* Social Icons */}
              <div className="flex justify-center gap-6">
                {/* // Facebook */}
                <button
                  type="button"
                  className="btn btn-circle btn-ghost text-gray-600 hover:text-blue-600"
                >
                  <SiFacebook className="h-7 w-7" />
                </button>

                {/* // Google */}
                <button
                   onClick={handleGoogleLogIn} 
                  type="button"
                  className="btn btn-circle btn-ghost text-gray-600 hover:text-red-600"
                >
                  <FcGoogle className="h-7 w-7" />
                </button>

                {/* // GitHub */}
                <button
                  type="button"
                  className="btn btn-circle btn-ghost text-gray-600 hover:text-gray-800"
                >
                  <FaGithub className="h-7 w-7" />                 
                </button>
              </div>
    );
};

export default SocialLogIn;