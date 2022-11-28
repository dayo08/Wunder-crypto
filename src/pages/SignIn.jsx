import React, { useEffect, useState } from "react";
import { SiShopware } from "react-icons/si";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { currentColor } = useStateContext();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  /*================ERROR MESSAGE============= */
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  function onLoginSubmit(e) {
    e.preventDefault();

    if (email === "") {
      setError({
        ...error,
        email: "Email is required!",
      });
    } else if (password === "") {
      setError({
        ...error,
        password: "Password is required!",
      });
    } else {
      // SignIn();
    }
  }
  /*=======SHOW PASSWORD====== */
  const onShowPassword = () => {
    setShowPass(!showPass);
  };

  //* Prevent User For Entering Spaces
  const preventSpace = (e) => {
    if (e.which === 32) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-[#20242b]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/#"
            //   onClick={handleCloseSideBar}
            className="items-center gap-3 ml-3 mt-4 mb-2 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
          >
            <SiShopware /> <span>Wunder</span>
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#2c313c] dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                autoComplete="off"
                onSubmit={onLoginSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base font-bold text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError({
                        ...error,
                        email:
                          e.target.value === "" ? "Email is required!" : "",
                      });
                    }}
                    onKeyPress={preventSpace}
                    onBlur={(e) => {
                      setEmail(e.target.value);
                      setError({
                        ...error,
                        email:
                          e.target.value === "" ? "Email is required!" : "",
                      });
                    }}
                  />
                  <p className=" text-[red] mt-2">{error.email}</p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-base font-bold text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={`${showPass ? "text" : "password"}`}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError({
                        ...error,
                        password:
                          e.target.value === ""
                            ? "Password is required!"
                            : e.target.value.length < 8
                            ? "Password must be 8 or more characters!"
                            : null,
                      });
                    }}
                    onBlur={(e) => {
                      setPassword(e.target.value);
                      setError({
                        ...error,
                        password:
                          e.target.value === ""
                            ? "Password is required!"
                            : e.target.value.length < 8
                            ? "Password must be 8 or more characters!"
                            : null,
                      });
                    }}
                    onKeyPress={preventSpace}
                  />
                  <p className="text-[red]">{error.password}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#/"
                    className="text-sm font-medium text-[#3c60c3] hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="flex justify-center">
                  <button className="  hover:bg-[#3c60c3] hover:text-white  text-[#3c60c3] border border-[#3c60c3] dark:text-white font-bold py-1 px-3 rounded ">
                    Continue
                  </button>
                </div>
                <p className="text-sm font-normal text-[#a1a5c6] text-center dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signUp"
                    className="font-medium text-[#3c60c3] hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
