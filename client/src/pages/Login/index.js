import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/auth.action";

const Login = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => {
    return state.authReducers;
  });
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  //* fonction te5o mel input wo t5abi fi sate
  const onInputChange = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode
    //!more exp
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };
  const OnSubmitForm = (e) => {
    e.preventDefault();
    dispatch(login(Form));
    setForm({
      email: "",
      password: "",
    });
  };
  //!is loading not work
  return isLoading ? (
    <div> wait a moment</div>
  ) : (
    <section className="pt-8  max-w-1xl flex   flex-col   gap-10 pb-16 ">
      {/* sm??  sm:space-y-5*  sm:pt-9*/}
      <div className="text-center">
        <h1 className="text-5xl pb-16 font-bold	 ">Login</h1>
      </div>
      <div className=" p-5 rounded-2xl shadow-2xl max-w-max  container mx-auto">
        <form onSubmit={(e) => OnSubmitForm(e)} action="" method="post">
          <div className="flex  flex-col relative pb-5">
            <label className="text-center text-2xl " htmlFor="email">
              Email *
            </label>
            <div>
              <div className="absolute left-2 top-[calc(50%-6px)]">
                <i className="fa-solid fa-user "></i>
              </div>

              <input
                onChange={(e) => onInputChange(e)}
                className="  px-10 min-w-[27rem] rounded-xl py-2  outline-none border focus:border-Primary"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                value={Form.email}
                placeholder="email@exemple.om"
              />
            </div>
          </div>
          <div className="flex flex-col relative">
            <label className="text-center text-2xl" htmlFor="LabPassword">
              password *
            </label>
            <div>
              <i className="fa-solid fa-lock absolute left-2 top-[calc(50%+5px)]"></i>
              <input
                onChange={(e) => onInputChange(e)}
                className=" min-w-[27rem]	 rounded-xl py-2 px-10 outline-none border focus:border-Primary"
                type="password"
                name="password"
                id="password"
                value={Form.password}
                required
                placeholder="**********"
              />
            </div>
          </div>
          <div className="pt-5 flex justify-center">
            <button
              type="submit"
              className=" bg-Info hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full "
            >
              connection
            </button>
          </div>

          <div className="flex items-center gap-1">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <label className="text-center text-base" htmlFor="LabPassword">
              Remember Me
            </label>
          </div>
        </form>

        <div className="mt-5  text-base">
          <Link className=" text-Primary" to="#">
            Forget password ?
          </Link>
          <div className="flex ">
            <p>Don't have an account ?</p>
            <span>
              <Link className="text-Primary" to="#">
                {" "}
                Sign up
              </Link>{" "}
              Now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
