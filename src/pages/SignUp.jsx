import React, { useEffect, useState } from "react";
import { SiShopware } from "react-icons/si";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
function SignUp() {
  const [firstname, setfirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpwd, setCpwd] = useState("");
  const { currentColor } = useStateContext();
  /*================ERROR MESSAGE============= */
  const [error, setError] = useState({
    firstname: "",
    Lastname: "",
    email: "",
    password: "",
    cpwd: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  function onChangefirstname(e) {
    const input = e.currentTarget.value;
    setfirstname(input);
    setError({
      ...error,
      firstname: e.target.value === "" ? "*firstname is required!" : "",
    });
  }
  function onChangeLastname(e) {
    const input = e.currentTarget.value;
    setLastname(input);
    setError({
      ...error,
      Lastname: e.target.value === "" ? "*Lastname is required!" : "",
    });
  }
  function onChangeEmail(e) {
    setEmail(e.target.value);
    setError({
      ...error,
      email:
        e.target.value === ""
          ? "*Email address is required!"
          : !/\S+@\S+\.\S+/.test(e.target.value)
          ? "*Email address is invalid!"
          : "",
    });
  }
  function onChangePassword(e) {
    setPassword(e.target.value);
    setError({
      ...error,
      password:
        e.target.value === ""
          ? "*Password is required!"
          : e.target.value.length < 8
          ? "*Password must be 8 or more characters!"
          : null,
    });
  }
  function onChangeCpassword(e) {
    setCpwd(e.target.value);
    setError({
      ...error,
      cpwd:
        e.target.value === ""
          ? "*Confirm Password is required!"
          : e.target.value !== password
          ? "*Confirm password is not matched!"
          : null,
    });
  }

  function onLoginSubmit(e) {
    e.preventDefault();
    if (firstname === "") {
      setError({
        ...error,
        firstname: "*firstname is required!",
      });
    } else if (Lastname === "") {
      setError({
        ...error,
        Lastname: "*Lastname is required!",
      });
    } else if (email === "") {
      setError({
        ...error,
        email: "*Email address is required!",
      });
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError({
        ...error,
        email: "*Email address is invalid!",
      });
    } else if (password === "") {
      setError({
        ...error,
        password: "*Password is required!",
      });
    } else if (password.length < 8) {
      setError({
        ...error,
        password: "*Password must be 8 or more characters!",
      });
    } else if (cpwd === "") {
      setError({
        ...error,
        cpwd: "*Confirm Password is required!",
      });
    } else if (password !== cpwd) {
      setError({
        ...error,
        cpwd: "*Confirm password is not matched!",
      });
    } else {
    }
  }

  const userdata = [
    {
      id: 0,
      errorusername: error.firstname,
      type: "text",
      placeholder: "First Name",
      value: firstname,
      onChange: onChangefirstname,
    },
    {
      id: 1,
      errorusername: error.Lastname,
      type: "text",
      placeholder: "Last Name",
      value: Lastname,
      onChange: onChangeLastname,
    },
    {
      id: 2,
      errorusername: error.email,
      type: "text",
      placeholder: "User Emai",
      value: email,
      onChange: onChangeEmail,
    },
    {
      id: 3,
      errorusername: error.password,
      placeholder: "User Password",
      value: password,
      onChange: onChangePassword,
    },
    {
      id: 4,
      errorusername: error.cpwd,
      placeholder: "Confirm Password",
      value: cpwd,
      onChange: onChangeCpassword,
    },
  ];
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
                Create and account
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                autoComplete="off"
                autoCorrect="off"
                onSubmit={onLoginSubmit}
              >
                {userdata.map((items) => (
                  <>
                    <div className="">
                      <div>
                        <label
                          htmlFor="Firstname"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          {items.placeholder}
                        </label>
                        <input
                          className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                          type={items.type}
                          name="username"
                          placeholder={items.placeholder}
                          value={items.value}
                          onChange={items.onChange}
                          onKeyPress={preventSpace}
                          onBlur={items.onChange}
                        />
                      </div>
                      <p className="text-[red] mt-2">{items.errorusername}</p>
                    </div>
                  </>
                ))}

                <div className="flex justify-center">
                  <Link to="/">
                    <button className="  hover:bg-[#3c60c3] hover:text-white  text-[#3c60c3] border border-[#3c60c3] dark:text-white font-bold py-1 px-3 rounded ">
                      Continue
                    </button>
                  </Link>
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/signIn"
                    className="font-medium text-primary-600  text-[#3c60c3] hover:underline dark:text-primary-500"
                  >
                    Login here
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

export default SignUp;
