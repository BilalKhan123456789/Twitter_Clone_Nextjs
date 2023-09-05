"use client"
import React, { useEffect,useState } from 'react'
import logo from '../../../Assest/logo.jpg'
import Image from 'next/image'
import axios from 'axios'
import {Tab,initTE,} from "tw-elements";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Modal, Ripple } from "tw-elements";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Home({params}) {


    
    const id = params.id

    
    const update_profile = (e)=>{

      let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `http://localhost:3000/api/get/${e}`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {
fname:data.fname,
lname:data.lname,
email:data.email,
password:data.password,
city:data.city,
dob:data.dob

        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Account Updated",{
          autoClose:2000
        })
      })
      .catch((error) => {
        console.log(error);
      });
      



    }




const [data,setdata] = useState({

  fname:"",
  lname:"",
  email:"",
  password:"",
  city:"",
  dob:""

})





const route = useRouter()

useEffect(()=>{

getdata()

initTE({ Tab, Modal, Ripple });

},[])

const uid = localStorage.getItem("id")


const getdata =()=>{


  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://localhost:3000/api/get/${uid}`,
    headers: { }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(response.data);

setdata(response.data.data)


  })
  .catch((error) => {
    console.log(error);
  });


}



console.log(data)











const goback=()=>{
route.push("/")
}









  return (
    <div className='container'>

{/* big screen Layout Start */}




<div className=" grid-cols-2 w-36 hidden md:grid  ">
<div>
<div className='hidden md:block'>
<aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">


    <a href="#">
        <Image className="w-auto h-9" src={logo} alt="."/>
    </a>

    <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex-1 -mx-3 space-y-3 ">

            {/* Search bar */}
            {/* <div className="relative mx-3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>

                <input type="text" className="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
            </div> */}

            <button  onClick={()=>route.push(`./../Home/${id}`)} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <span className="mx-2 text-sm font-medium">Home</span>
            </button>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <svg fill="none"  viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g fill="#292d32"><path d="m22 12c0-5.51-4.49-10-10-10s-10 4.49-10 10c0 2.9 1.25 5.51 3.23 7.34 0 .01 0 .01-.01.02.1.1.22.18.32.27.06.05.11.1.17.14.18.15.38.29.57.43.07.05.13.09.2.14.19.13.39.25.6.36.07.04.15.09.22.13.2.11.41.21.63.3.08.04.16.08.24.11.22.09.44.17.66.24.08.03.16.06.24.08.24.07.48.13.72.19.07.02.14.04.22.05.28.06.56.1.85.13.04 0 .08.01.12.02.34.03.68.05 1.02.05s.68-.02 1.01-.05c.04 0 .08-.01.12-.02.29-.03.57-.07.85-.13.07-.01.14-.04.22-.05.24-.06.49-.11.72-.19.08-.03.16-.06.24-.08.22-.08.45-.15.66-.24.08-.03.16-.07.24-.11.21-.09.42-.19.63-.3.08-.04.15-.09.22-.13.2-.12.4-.23.6-.36.07-.04.13-.09.2-.14.2-.14.39-.28.57-.43.06-.05.11-.1.17-.14.11-.09.22-.18.32-.27 0-.01 0-.01-.01-.02 1.99-1.83 3.24-4.44 3.24-7.34zm-5.06 4.97c-2.71-1.82-7.15-1.82-9.88 0-.44.29-.8.63-1.1 1-1.52-1.54-2.46-3.65-2.46-5.97 0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5c0 2.32-.94 4.43-2.46 5.97-.29-.37-.66-.71-1.1-1z"/><path d="m12 6.92969c-2.07 0-3.75 1.68-3.75 3.75001 0 2.03 1.59 3.68 3.7 3.74h.09.07.02c2.02-.07 3.61-1.71 3.62-3.74 0-2.07001-1.68-3.75001-3.75-3.75001z"/></g></svg>

                <span className="mx-2 text-sm font-medium">Profile</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

            <svg className='w-5 h-5' viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"><path d="m427.68 351.43c-25.68-31.43-43.81-47.43-43.81-134.08 0-79.35-40.52-107.62-73.87-121.35-4.43-1.82-8.6-6-9.95-10.55-5.85-19.91-22.25-37.45-44.05-37.45s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35-.05 86.65-18.18 102.65-43.86 134.08-10.64 13.02-1.32 32.57 17.29 32.57h308.88c18.51 0 27.77-19.61 17.19-32.57z"/><path d="m320 384v16a64 64 0 0 1 -128 0v-16"/></g></svg>



                <span className="mx-2 text-sm font-medium">Notifications</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <svg className='w-5 h-5' viewBox="0 0 1047.128 1045.334" xmlns="http://www.w3.org/2000/svg"><path d="M168.006 199.112h533.338c92.745.106 167.9 75.262 168.006 167.996v355.57c-.106 92.744-75.262 167.9-167.996 168.005h-53.996v154.65l-309.95-154.65H168.006C75.26 890.577.106 815.42 0 722.687v-355.57c.106-92.744 75.262-167.9 167.996-168.005h.01zm533.338 621.763c54.212-.053 98.144-43.986 98.198-98.192V367.12c-.053-54.213-43.986-98.145-98.192-98.2H168.007c-54.212.054-98.144 43.987-98.198 98.193v355.564c.052 54.212 43.985 98.144 98.19 98.198h186.163L577.55 932.57V820.874zm179.874-107.97h-46.772v-69.81h46.26c53.105-1.182 95.8-44.106 96.614-97.19V189.34c0-54.233-43.964-98.198-98.197-98.198H345.785c-54.233 0-98.198 43.965-98.198 98.198v46.54h-69.81v-46.54c0-92.787 75.22-168.006 168.007-168.006h533.338c92.787 0 168.006 75.22 168.006 168.006V546.06c-.645 91.477-74.3 165.54-165.556 166.84l-.123.002zM301.573 579.8h-88.89v-69.81h88.89zm177.78 0h-88.89v-69.81h88.89zm177.314 0h-88.89v-69.81h88.89z"/></svg>
                <span className="mx-2 text-sm font-medium">Messages</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
            <svg fill="none"  viewBox="0 0 20 20" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g fill="#212121"><path d="m7.5 7.25c0 .41421-.33579.75-.75.75s-.75-.33579-.75-.75.33579-.75.75-.75.75.33579.75.75z"/><path d="m6.75 11c.41421 0 .75-.3358.75-.75 0-.41421-.33579-.75-.75-.75s-.75.33579-.75.75c0 .4142.33579.75.75.75z"/><path d="m7.5 13.25c0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75.33579-.75.75-.75.75.3358.75.75z"/><path d="m9.5 7c-.27614 0-.5.22386-.5.5s.22386.5.5.5h4c.2761 0 .5-.22386.5-.5s-.2239-.5-.5-.5z"/><path d="m9 10.5c0-.2761.22386-.5.5-.5h4c.2761 0 .5.2239.5.5s-.2239.5-.5.5h-4c-.27614 0-.5-.2239-.5-.5z"/><path d="m9.5 13c-.27614 0-.5.2239-.5.5s.22386.5.5.5h4c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5z"/><path d="m3 5c0-1.10457.89543-2 2-2h10c1.1046 0 2 .89543 2 2v10c0 1.1046-.8954 2-2 2h-10c-1.10457 0-2-.8954-2-2zm2-1c-.55228 0-1 .44772-1 1v10c0 .5523.44772 1 1 1h10c.5523 0 1-.4477 1-1v-10c0-.55228-.4477-1-1-1z"/></g></svg>
                <span className="mx-2 text-sm font-medium">Lists</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>

                <span className="mx-2 text-sm font-medium">Communities</span>
            </a>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-2 text-sm font-medium">Setting</span>
            </a>
        </nav>

        <div className="mt-6">
            {/* <div className="p-3 bg-gray-100 rounded-lg dark:bg-gray-800">
                <h2 className="text-sm font-medium text-gray-800 dark:text-white">New feature availabel!</h2>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

                <img className="object-cover w-full h-32 mt-2 rounded-lg" src="https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80" alt=""/>
            </div> */}
            <div className="flex items-center justify-between mt-6">


             <a href="#" className="flex items-center gap-x-2">
                    <img className="object-cover rounded-full h-7 w-7" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" alt="avatar" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{id}</span>
                </a>
            
            
                     
                
                <button onClick={()=>goback()}  className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                </button>
            </div>
        </div>
    </div>


</aside>
</div>    




</div>

<div className="grid grid-cols-0 ml-64 w-96   ">
    
          <div>
            {" "}
            <h1 className="m-2 font-bold text-2xl">Profile</h1>

<div className='bg-gray-300 h-32 relative'>

</div>


<div className="  top-28 p-3  h-36 absolute ">
            <a href="#" className="flex  ">
              <img
                className="object-cover rounded-full h-24 w-24"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                alt="avatar"
              />
            
            </a>
            
       <h1 className='font-bold   text-2xl mt-2'>{data.fname}</h1>
       <h1 className='text-gray-500'>{data.email}</h1>

       <h1 className=' text-gray-700'>0 following <span className=' text-gray-700'>0 followers</span></h1>
    

       <button
          data-te-toggle="modal"
          data-te-target="#exampleModal"
          data-te-ripple-init
          data-te-ripple-color="light"
       className="bg-transparent mt-2   hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Edit Profile
</button>


              
            </div>







          </div>


      

      

{/* icon Div End */}







</div>
</div>


{/* Update Modal Start */}

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
                              className="text-xl mt-2 font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                              id="exampleModalLabel"
                            >
                              Edit Profile
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
                                onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}
                                value={data.fname}
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
                                  onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}
                                 value={data.lname}
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
                                onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}
                                 value={data.email}
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
                                  onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}
                                 value={data.password}
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
                                onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}
                                   value={data.city}
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
                                    onChange={(e)=>setdata({...data,[e.target.name]:e.target.value})}
                                   value={data.dob}
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
                            onClick={()=>update_profile(data._id)}
                              type="button"
                              className="ml-1 bg-black text-white p-2 rounded "
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              Update Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>


{/* Update Modal End */}



















{/* big Screen Layout End */}

























{/* mobile Screen layout Start */}

<div className='block items-center md:hidden'>

<aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
    <nav className="flex flex-col flex-1 space-y-6">
        <a href="#">
            <Image className="w-auto h-6 " src={logo} alt=""/>
        </a>

        <Link href="./Home1" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        </Link>

        <a href="#" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
        <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
        </a>

        <a href="#" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
        <svg className='w-5 h-5' viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"><path d="m427.68 351.43c-25.68-31.43-43.81-47.43-43.81-134.08 0-79.35-40.52-107.62-73.87-121.35-4.43-1.82-8.6-6-9.95-10.55-5.85-19.91-22.25-37.45-44.05-37.45s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35-.05 86.65-18.18 102.65-43.86 134.08-10.64 13.02-1.32 32.57 17.29 32.57h308.88c18.51 0 27.77-19.61 17.19-32.57z"/><path d="m320 384v16a64 64 0 0 1 -128 0v-16"/></g></svg>

        </a>

        <a href="#" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
        <svg className='w-5 h-5' viewBox="0 0 1047.128 1045.334" xmlns="http://www.w3.org/2000/svg"><path d="M168.006 199.112h533.338c92.745.106 167.9 75.262 168.006 167.996v355.57c-.106 92.744-75.262 167.9-167.996 168.005h-53.996v154.65l-309.95-154.65H168.006C75.26 890.577.106 815.42 0 722.687v-355.57c.106-92.744 75.262-167.9 167.996-168.005h.01zm533.338 621.763c54.212-.053 98.144-43.986 98.198-98.192V367.12c-.053-54.213-43.986-98.145-98.192-98.2H168.007c-54.212.054-98.144 43.987-98.198 98.193v355.564c.052 54.212 43.985 98.144 98.19 98.198h186.163L577.55 932.57V820.874zm179.874-107.97h-46.772v-69.81h46.26c53.105-1.182 95.8-44.106 96.614-97.19V189.34c0-54.233-43.964-98.198-98.197-98.198H345.785c-54.233 0-98.198 43.965-98.198 98.198v46.54h-69.81v-46.54c0-92.787 75.22-168.006 168.007-168.006h533.338c92.787 0 168.006 75.22 168.006 168.006V546.06c-.645 91.477-74.3 165.54-165.556 166.84l-.123.002zM301.573 579.8h-88.89v-69.81h88.89zm177.78 0h-88.89v-69.81h88.89zm177.314 0h-88.89v-69.81h88.89z"/></svg>

        </a>


        <a href="#" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">

        <svg fill="none"  viewBox="0 0 20 20" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g fill="#212121"><path d="m7.5 7.25c0 .41421-.33579.75-.75.75s-.75-.33579-.75-.75.33579-.75.75-.75.75.33579.75.75z"/><path d="m6.75 11c.41421 0 .75-.3358.75-.75 0-.41421-.33579-.75-.75-.75s-.75.33579-.75.75c0 .4142.33579.75.75.75z"/><path d="m7.5 13.25c0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75.33579-.75.75-.75.75.3358.75.75z"/><path d="m9.5 7c-.27614 0-.5.22386-.5.5s.22386.5.5.5h4c.2761 0 .5-.22386.5-.5s-.2239-.5-.5-.5z"/><path d="m9 10.5c0-.2761.22386-.5.5-.5h4c.2761 0 .5.2239.5.5s-.2239.5-.5.5h-4c-.27614 0-.5-.2239-.5-.5z"/><path d="m9.5 13c-.27614 0-.5.2239-.5.5s.22386.5.5.5h4c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5z"/><path d="m3 5c0-1.10457.89543-2 2-2h10c1.1046 0 2 .89543 2 2v10c0 1.1046-.8954 2-2 2h-10c-1.10457 0-2-.8954-2-2zm2-1c-.55228 0-1 .44772-1 1v10c0 .5523.44772 1 1 1h10c.5523 0 1-.4477 1-1v-10c0-.55228-.4477-1-1-1z"/></g></svg>

        </a>









        <a href="#" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        </a>
    </nav>

    <div className="flex flex-col space-y-6">
     

        <a href="#" className="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-200 dark:bg-gray-800 bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </a>

        <a href="#">
            <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100" alt="" />
        </a>
    </div>
</aside>



</div>


{/* mobile screen layout end */}




{/* tabs content */}

{/* <!--Tabs navigation--> */}


<ToastContainer/>



    </div>
  )
}

export default Home
