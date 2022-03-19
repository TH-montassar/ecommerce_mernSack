import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {register } from "../../actions/auth.action";

const Register = () => {
  const dispatch = useDispatch();
  const [Form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    street: "",
    zipCode: "",
    country: "",
    city: "",
    number: "",
    confirmPassword: "",
  });
  //* fonction te5o mel input wo t5abi fi sate
  const onInputChange = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode
    //!more exp
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(register(Form));

    //ba3ed maykamel yraja formul fer8a
    setForm({
      ...Form,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      street: "",
      zipCode: "",
      country: "",
      city: "",
      number: "",
      confirmPassword: "",
    });
  };
  return (
    <section className="pt-8  max-w-1xl flex   flex-col justify-between  gap-16 pb-16 ">
      {/* sm??  sm:space-y-5*  sm:pt-9*/}
      <div className="text-center">
        <h1 className="text-5xl pb-16 font-bold	">Register</h1>
        <div className="text-base font-normal">
          <h2>Manage all your Monta_product</h2>
          <p>
            let,s get you all set up so you ctttttn verify your personal account
            and begin setting up your porfile
          </p>
        </div> 
      </div>
      <div className=" p-5 rounded-2xl shadow-2xl">
        <form onSubmit={(e) => onSubmitForm(e)}>
          <div className="flex justify-between gap-2 ">
            <div className=" w-1/2">
              <label htmlFor="firstName">firstName *</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.firstName}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  autoComplete="text"
                  placeholder="ex:monta"
                />
              </div>
            </div>
            <div className=" w-1/2">
              <label htmlFor="lastName">lastName</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.lastName}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="text"
                  placeholder="last name"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2 ">
            <div className=" w-1/2">
              <label htmlFor="LabPassword">password *</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.password}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="password"
                  name="password"
                  id="passwoed"
                  required
                  placeholder="**********"
                />
              </div>
            </div>

            <div className=" w-1/2">
              <label htmlFor="confirmPassword">confirm Password *</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.confirmPassword}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="password"
                  name="password"
                  id="confirmPassword"
                  required
                  placeholder="***********"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2 ">
            <div className="w-1/2">
              <label htmlFor="number">Number</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.number}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="number"
                  name="number"
                  id="LabNumber"
                  placeholder="number"
                />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="email">email *</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.email}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="email@exemple.om"
                />
              </div>
            </div>
          </div>
          <div className="text-center pt-16">
            <h1 className="text-2xl pb-10"> Address</h1>
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-1/2">
              <label htmlFor="city">City</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.city}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="text"
                  name="city"
                  id="City"
                  placeholder="city"
                />
              </div>
            </div>

            <div className="w-1/2">
              <label htmlFor="country">Country</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.country}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="ex:tunisia"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="w-3/4">
              <label htmlFor="LabStreet">street</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.street}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="text"
                  name="street"
                  id="street"
                  placeholder="Street"
                />
              </div>
            </div>
            <div className="w-1/4">
              <label htmlFor="zipCode">zipCode</label>
              <div>
                <input
                  onChange={(e) => onInputChange(e)}
                  value={Form.zipCode}
                  className="w-full rounded-xl py-2 px-3 outline-none border focus:border-Primary"
                  type="number"
                  name="zipCode"
                  id="zipCode"
                  placeholder="zipCode"
                />
              </div>
            </div>
          </div>
          <div className="pt-5 flex justify-center">
            <button
              type="submit"
              className="px-40 bg-Info hover:bg-infoDark text-white font-bold py-2 rounded-full "
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
