"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "./Assest/logo.jpg";
import { useEffect } from "react";
import axios from "axios";

import { initTE } from "tw-elements";
import { Modal, Ripple } from "tw-elements";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";



export default function Home() {

const route = useRouter()

const [name,setname] = useState("")


  useEffect(() => {


//     let config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: 'http://localhost:3000/api/get',
//       headers: { }
//     };
    
//     axios.request(config)
//     .then((response) => {
// console.log(response.data)
// setname(response.data.data)




      

//     })
//     .catch((error) => {
//       console.log(error);
//     });
    






    initTE({ Modal, Ripple });
  }, []);

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const [data, setdata] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    city: "",
    dob: "",
  });

const login1 = ()=>{

 
  if(login.email=="" || login.password==""){
    toast.warning("Please Enter Data",{
      autoClose:2000
    })
   
  }else{
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3000/api/loginpost',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : {
        email:login.email,
        password:login.password
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log("login details",response.data);


// setname(response.data.data._id)


if(response.data.message=="working"){

  toast.success("Successfully Login",{
    autoClose:2000
  })
  route.push(`./Components/Home/${response.data.data.fname}`)
  localStorage.setItem("id",response.data.data._id)



}else{
  toast.error("Please Enter Correct Information ")
}



    })
    .catch((error) => {
      console.log(error);
    });
    


  }




}




  const register = () => {

    if(data.fname=="" || data.lname=="" || data.email=="" || data.password=="" || data.city=="" || data.dob==""){
     toast.warning("Please Enter Data in All Fields",{
      autoClose:2000
     })
    }else{

     
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/api/post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          fname: data.fname,
          lname: data.lname,
          email: data.email,
          password: data.password,
          city: data.city,
          dob: data.dob,
        },
      };

      axios
        .request(config)
        .then((response) => {
          console.log(response.data);

          if (response.data.message == "Successfully Signup") {
            toast.success("Thanks For Submit Details Please Login", {
              autoClose: 2000,
            });
          } else {
            toast.error("user already registered", {
              autoClose: 2000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    


    }
  };

  return (
    <>
      <section className=" body-font">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap ">
            <div className=" md:p-4 md:w-1/2 w-full">
              <div className="h-full  md:p-12">
                <Image
                  className="w-20 mt-5   md:w-96 md:mt-36 "
                  src={logo}
                  alt=".."
                />
              </div>
            </div>

            <div className="md:p-14 md:w-1/2 w-full">
              <div className="h-full  md:p-10 ">
                <div className=" mt-5    md:mt-12 ">
                  <h1 className="font-extrabold text-5xl md:text-5xl  font-sans ">
                    Happening now
                    <br /> <br />
                    <span className="font-bold text-3xl  md:text-4xl">
                      Join today.
                    </span>
                  </h1>

                  <button type="button">
                    <div className=" flex items-center justify-center font-normal border-2 border-solid w-80 py-2 mt-12 rounded-3xl text-center">
                      <div className="mr-2">
                        <svg
                          enableBackground="new 0 0 48 48"
                          height="25"
                          viewBox="0 0 48 48"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                            fill="#ffc107"
                          />
                          <path
                            d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
                            fill="#ff3d00"
                          />
                          <path
                            d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
                            fill="#4caf50"
                          />
                          <path
                            d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
                            fill="#1976d2"
                          />
                        </svg>
                      </div>
                      <p>Sign up with Google</p>
                    </div>
                  </button>

                  <button type="button">
                    <div className=" flex items-center justify-center font-semibold border-2 border-solid w-80 py-2 mt-2 rounded-3xl text-center">
                      <div className="mr-2">
                        <svg
                          height="25"
                          viewBox="0 0 512 512"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48z" />
                          <path d="m340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66z" />
                        </svg>
                      </div>
                      <p>Sign up with Apple</p>
                    </div>
                  </button>

                  <div className="flex items-center">
                    <hr className=" w-36 mt-4 " />
                    <p className="mt-3 p-1"> or </p>
                    <hr className=" w-36 mt-4" />
                  </div>

                  {/* Create Account Model */}

                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-600 text-white w-80 font-bold py-2 px-4 rounded-full"
                    data-te-toggle="modal"
                    data-te-target="#exampleModal"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Create Account
                  </button>

                  <form className="w-full max-w-lg">
                    <div
                      data-te-modal-init
                      className="fixed left-0 top-16 z-[1055] hidden h-1/2 md:h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div
                        data-te-modal-dialog-ref
                        className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
                      >
                        <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            {/* <!--Modal title--> */}
                            <h5
                              className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                              id="exampleModalLabel"
                            >
                              Create your account
                            </h5>
                            {/* <!--Close button--> */}
                            <button
                              type="button"
                              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                              data-te-modal-dismiss
                              aria-label="Close"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>

                          {/* <!--Modal body--> */}
                          <div
                            className="relative flex-auto p-4"
                            data-te-modal-body-ref
                          >
                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  htmlFor="grid-first-name"
                                >
                                  First Name
                                </label>
                                <input
                                  onChange={(e) =>
                                    setdata({
                                      ...data,
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  name="fname"
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                  id="grid-first-name"
                                  type="text"
                                  placeholder="Jane"
                                  required
                                />
                              </div>
                              <div className="w-full md:w-1/2 px-3">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  htmlFor="grid-last-name"
                                >
                                  Last Name
                                </label>
                                <input
                                  onChange={(e) =>
                                    setdata({
                                      ...data,
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  name="lname"
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-last-name"
                                  type="text"
                                  placeholder="Doe"
                                  required
                                />
                              </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  htmlFor="grid-password"
                                >
                                  Email
                                </label>
                                <input
                                  onChange={(e) =>
                                    setdata({
                                      ...data,
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  name="email"
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-password"
                                  type="email"
                                  placeholder="Enter your email"
                                  required
                                />
                              </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                              <div className="w-full px-3">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  htmlFor="grid-password"
                                >
                                  Password
                                </label>
                                <input
                                  onChange={(e) =>
                                    setdata({
                                      ...data,
                                      [e.target.name]: e.target.value,
                                    })
                                  }
                                  name="password"
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-password"
                                  type="password"
                                  placeholder="******************"
                                  required
                                />
                              </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  htmlFor="grid-city"
                                >
                                  Country
                                </label>
                                <input
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-city"
                                  type="text"
                                  placeholder="Pakistan"
                                  readOnly
                                />
                              </div>
                              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  htmlFor="grid-state"
                                >
                                  City
                                </label>
                                <div className="relative">
                                  <select
                                    onChange={(e) =>
                                      setdata({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                      })
                                    }
                                    name="city"
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state"
                                    required
                                  >
                                    <option value={"karachi"}>Karachi</option>
                                    <option value={"hyderabad"}>
                                      Hyderabad
                                    </option>
                                    <option value={"islamabad"}>
                                      Islamabad
                                    </option>
                                    <option value={"lahore"}>Lahore</option>
                                  </select>
                                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                      className="fill-current h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                  htmlFor="grid-state"
                                >
                                  Date of Birth
                                </label>
                                <div className="relative">
                                  <input
                                    onChange={(e) =>
                                      setdata({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                      })
                                    }
                                    name="dob"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-city"
                                    type="date"
                                    placeholder="Albuquerque"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <!--Modal footer--> */}
                          <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <button
                              type="button"
                              className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                              data-te-modal-dismiss
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              Close
                            </button>
                            <button
                              onClick={() => register()}
                              type="button"
                              className="ml-1 bg-black text-white p-2 rounded "
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              Register Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  <p className="text-xs w-80 mt-1.5">
                    By signing up, you agree to the Terms of Service and Privacy
                    Policy, including Cookie Use.
                  </p>

                  <h1 className="mt-14 font-bold text-1xl">
                    Already have an account?
                  </h1>

                  {/* Model button Sign in */}

                  <button
                    type="button"
                    className="border-2 border-solid hover:bg-blue-100 text-blue-500 w-80 font-bold py-2 px-4 rounded-full"
                    data-te-toggle="modal"
                    data-te-target="#staticBackdrop"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Sign in
                  </button>

                  <div
                    data-te-modal-init
                    className="fixed left-10 md:left-0  top-24 z-[1055] hidden h-full w-96   md:w-full overflow-y-auto overflow-x-hidden outline-none"
                    id="staticBackdrop"
                    data-te-backdrop="static"
                    data-te-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div
                      data-te-modal-dialog-ref
                      className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
                    >
                      <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                          {/* <!--Modal title--> */}
                          <h5
                            className="text-xl font-medium leading-normal mt-3 text-neutral-800 dark:text-neutral-200"
                            id="exampleModalLabel"
                          >
                            Sign in to X
                          </h5>
                          {/* <!--Close button--> */}
                          <button
                            type="button"
                            className="box-content mt-3 rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            data-te-modal-dismiss
                            aria-label="Close"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* <!--Modal body--> */}
                        <div data-te-modal-body-ref className="relative p-4">
                          <form className="space-y-6" action="#">
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your email
                              </label>
                              <input
                                type="email"
                                onChange={(e) =>
                                  setlogin({
                                    ...login,
                                    [e.target.name]: e.target.value,
                                  })
                                }
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@company.com"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Your password
                              </label>
                              <input
                                type="password"
                                onChange={(e) =>
                                  setlogin({
                                    ...login,
                                    [e.target.name]: e.target.value,
                                  })
                                }
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                              />
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    required
                                  />
                                </div>
                                <label
                                  htmlFor="remember"
                                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                  Remember me
                                </label>
                              </div>
                            </div>
                            <button
                            onClick={()=>login1()}
                              type="button"
                              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                              Sign in to your account
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer Section */}

      <footer>
        <ul className="md:flex hidden font-normal text-xs text-gray-500 justify-around text-center">
          <li>About</li>
          <li>Help Center</li>
          <li>Terms of Services</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Accessibility</li>
          <li>Ads Info</li>
          <li>Blog</li>
          <li>Status</li>
          <li>Careers</li>
          <li>Brands Resources</li>
          <li>Advertising</li>
        </ul>

        <p className="mt-2 text-center text-xs text-gray-500">
          Setting
          <span className=" text-center text-xs text-gray-500">
            {" "}
            © 2023 X Corp.
          </span>
        </p>
      </footer>

      <ToastContainer />
    </>
  );
}

