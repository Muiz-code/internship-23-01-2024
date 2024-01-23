import logo1 from "../Assets/logo.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/safebox.png";
import logo4 from "../Assets/1star.png";
import logo5 from "../Assets/3stars.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { database } from "../Features/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import IconText from "../components/IconText";

const SignUp = () => {
  const [action, setAction] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "Sign Up") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/dashboard");
        })
        .catch((err) => {
          alert(err.code);
          setAction(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/dashboard");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };
  return (
    <div className="w-full h-screen flex p-5 bg-white place-items-center justify-center gap-5">
      <div className="flex flex-col justify-between place-items-center bg-[#F8F3EE] h-[90vh] w-[40%] shadow-lg rounded-3xl p-10 bgc">
        <IconText
          divStyle="flex place-items-center w-[100%] gap-2"
          icon={logo1}
          iconStyle="w-[8%]"
          text="K-ICON"
          textStyle="text-2xl font-bold"
        />
        <div className="w-[100%] flex flex-col gap-[50px]">
          <h1 className="text-4xl font-medium">
            K-ICON is your <br /> ultimate icon library
          </h1>
          <IconText
            divStyle="flex place-items-center w-[100%] gap-3"
            icon={logo3}
            iconStyle="w-[20%]"
            text="We provide you the only icon manage that makes it easy to find your icons"
            textStyle="text-lg text-[#505E6C] "
          />
        </div>
        <div className="flex w-[100%] border justify-center bg-white rounded-xl p-10">
          <IconText
            divStyle="flex flex-col place-items-center w-[100%] borderRight"
            icon={logo4}
            iconStyle="w-[30%] mb-3"
            text="4 grid sizes"
            textStyle="text-md"
            text2="12, 16, 24, 32 pixel"
            text2Style="text-sm text-[#505E6C] mt-1"
          />
          <IconText
            divStyle="flex flex-col place-items-center w-[100%]"
            icon={logo5}
            iconStyle="w-[30%] mb-3"
            text="4 grid sizes"
            textStyle="text-md"
            text2="Outline. Fill. Color"
            text2Style="text-sm text-[#505E6C] mt-1"
          />
        </div>
      </div>

      <form
        className="flex flex-col bg-white w-[40%] h-[90vh] gap-3 justify-center place-items-center"
        onSubmit={(e) => {
          handleSubmit(e, action ? "Login" : "Sign Up");
        }}
      >
        <div className="flex flex-col justify-start w-[100%] p-5">
          <div className="flex place-items-center gap-2">
            <img src={logo2} className="w-[7%]" alt="" />
            <h1 className="text-4xl font-semibold text-black ">Welcome in</h1>
          </div>
          <h1 className="text-4xl font-semibold text-black">K-ICON platform</h1>
          {action ? (
            <p className="text-xl text-black ">
              Input Your Email And Password To Login
            </p>
          ) : (
            <p className="text-xl text-black ">
              Complete your sign up to get started
            </p>
          )}
        </div>
        <div className="flex place-items-center justify-center gap-5">
          <div
            className={`${
              action === false ? " underline text-black" : "cursor-pointer"
            }`}
            onClick={() => setAction(false)}
          >
            <p className="text-3xl text-black  mt-4 hover:scale-[1.03]">
              Sign Up
            </p>
          </div>
          <div
            className={`${
              action === true ? "underline text-black" : "cursor-pointer"
            }`}
            onClick={() => setAction(true)}
          >
            <p className="text-3xl text-black  mt-4 hover:scale-[1.03]">
              {" "}
              Sign In
            </p>
          </div>
        </div>
        {action ? (
          <div className="flex place-items-center justify-center w-[100%] px-4 gap-5 mt-3">
            <div className="flex gap-3 w-[35%] p-3 rounded-md border hover:outline hover:outline-[#EF846A]">
              <input type="radio" name="choice" className="radio" />
              <label className="text-sm">Myself only</label>
            </div>
            <div className="flex gap-3 w-[35%] p-3 rounded-md border hover:outline hover:outline-[#EF846A]">
              <input type="radio" name="choice" />
              <label className="text-sm">My team (5 user)</label>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {action ? (
          <div></div>
        ) : (
          <div className="flex form flex-col gap-1">
            <label htmlFor="name">FullName</label>
            <input
              type="name"
              name="name"
              placeholder="Enter FullName"
              className="p-3"
            />
          </div>
        )}

        <div className="flex form flex-col gap-1">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Example@mail.com"
            className="p-3"
          />
        </div>

        <div className="flex form flex-col gap-1">
          {action ? (
            <label htmlFor="name">Password</label>
          ) : (
            <label htmlFor="name">Create Password</label>
          )}

          <input
            type="Password"
            name="password"
            placeholder="Enter password of minimum of 6 digits"
            className="p-3"
          />
        </div>

        <button
          type="submit"
          className="bg-[#EF846A] hover:bg-[#ef856a9c] hover:scale-[1.02] py-3 px-10 w-[70%] text-white rounded-lg"
        >
          {action ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex flex-col justify-start w-[100%] ps-5 gap-4">
          <div className="flex gap-2">
            <input type="checkbox" className="border p-5" />
            <p className="text-[#888787] text-sm">
              40k+ icons with lifetime updates
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
