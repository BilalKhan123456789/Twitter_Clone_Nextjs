"use client"
import React, { useEffect,useState } from 'react'
import logo from '../../../Assest/logo.jpg'
import Image from 'next/image'

import {Tab,initTE,} from "tw-elements";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Home({params}) {

    const id = params.id

const [posting,setposting] = useState("")


const route = useRouter()



const user_post = () =>{
  console.log(posting)
}



useEffect(()=>{
    
    initTE({ Tab });


},[])




const goback=()=>{
route.push("/")
}


  return (
    <>

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

            <button  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                <span className="mx-2 text-sm font-medium">Home</span>
            </button>

            <button onClick={()=>route.push(`./../profile/${id}`)} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
            <svg fill="none"  viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g fill="#292d32"><path d="m22 12c0-5.51-4.49-10-10-10s-10 4.49-10 10c0 2.9 1.25 5.51 3.23 7.34 0 .01 0 .01-.01.02.1.1.22.18.32.27.06.05.11.1.17.14.18.15.38.29.57.43.07.05.13.09.2.14.19.13.39.25.6.36.07.04.15.09.22.13.2.11.41.21.63.3.08.04.16.08.24.11.22.09.44.17.66.24.08.03.16.06.24.08.24.07.48.13.72.19.07.02.14.04.22.05.28.06.56.1.85.13.04 0 .08.01.12.02.34.03.68.05 1.02.05s.68-.02 1.01-.05c.04 0 .08-.01.12-.02.29-.03.57-.07.85-.13.07-.01.14-.04.22-.05.24-.06.49-.11.72-.19.08-.03.16-.06.24-.08.22-.08.45-.15.66-.24.08-.03.16-.07.24-.11.21-.09.42-.19.63-.3.08-.04.15-.09.22-.13.2-.12.4-.23.6-.36.07-.04.13-.09.2-.14.2-.14.39-.28.57-.43.06-.05.11-.1.17-.14.11-.09.22-.18.32-.27 0-.01 0-.01-.01-.02 1.99-1.83 3.24-4.44 3.24-7.34zm-5.06 4.97c-2.71-1.82-7.15-1.82-9.88 0-.44.29-.8.63-1.1 1-1.52-1.54-2.46-3.65-2.46-5.97 0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5c0 2.32-.94 4.43-2.46 5.97-.29-.37-.66-.71-1.1-1z"/><path d="m12 6.92969c-2.07 0-3.75 1.68-3.75 3.75001 0 2.03 1.59 3.68 3.7 3.74h.09.07.02c2.02-.07 3.61-1.71 3.62-3.74 0-2.07001-1.68-3.75001-3.75-3.75001z"/></g></svg>

                <span className="mx-2 text-sm font-medium">Profile</span>
            </button>

            <button className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >

            
            <svg className='w-5 h-5' viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"><path d="m427.68 351.43c-25.68-31.43-43.81-47.43-43.81-134.08 0-79.35-40.52-107.62-73.87-121.35-4.43-1.82-8.6-6-9.95-10.55-5.85-19.91-22.25-37.45-44.05-37.45s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35-.05 86.65-18.18 102.65-43.86 134.08-10.64 13.02-1.32 32.57 17.29 32.57h308.88c18.51 0 27.77-19.61 17.19-32.57z"/><path d="m320 384v16a64 64 0 0 1 -128 0v-16"/></g></svg>


                <span className="mx-2 text-sm font-medium">Notifications</span>
            </button>

            <button className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
            <svg className='w-5 h-5' viewBox="0 0 1047.128 1045.334" xmlns="http://www.w3.org/2000/svg"><path d="M168.006 199.112h533.338c92.745.106 167.9 75.262 168.006 167.996v355.57c-.106 92.744-75.262 167.9-167.996 168.005h-53.996v154.65l-309.95-154.65H168.006C75.26 890.577.106 815.42 0 722.687v-355.57c.106-92.744 75.262-167.9 167.996-168.005h.01zm533.338 621.763c54.212-.053 98.144-43.986 98.198-98.192V367.12c-.053-54.213-43.986-98.145-98.192-98.2H168.007c-54.212.054-98.144 43.987-98.198 98.193v355.564c.052 54.212 43.985 98.144 98.19 98.198h186.163L577.55 932.57V820.874zm179.874-107.97h-46.772v-69.81h46.26c53.105-1.182 95.8-44.106 96.614-97.19V189.34c0-54.233-43.964-98.198-98.197-98.198H345.785c-54.233 0-98.198 43.965-98.198 98.198v46.54h-69.81v-46.54c0-92.787 75.22-168.006 168.007-168.006h533.338c92.787 0 168.006 75.22 168.006 168.006V546.06c-.645 91.477-74.3 165.54-165.556 166.84l-.123.002zM301.573 579.8h-88.89v-69.81h88.89zm177.78 0h-88.89v-69.81h88.89zm177.314 0h-88.89v-69.81h88.89z"/></svg>
                <span className="mx-2 text-sm font-medium">Messages</span>
            </button>

            <button className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
            <svg fill="none"  viewBox="0 0 20 20" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><g fill="#212121"><path d="m7.5 7.25c0 .41421-.33579.75-.75.75s-.75-.33579-.75-.75.33579-.75.75-.75.75.33579.75.75z"/><path d="m6.75 11c.41421 0 .75-.3358.75-.75 0-.41421-.33579-.75-.75-.75s-.75.33579-.75.75c0 .4142.33579.75.75.75z"/><path d="m7.5 13.25c0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75.33579-.75.75-.75.75.3358.75.75z"/><path d="m9.5 7c-.27614 0-.5.22386-.5.5s.22386.5.5.5h4c.2761 0 .5-.22386.5-.5s-.2239-.5-.5-.5z"/><path d="m9 10.5c0-.2761.22386-.5.5-.5h4c.2761 0 .5.2239.5.5s-.2239.5-.5.5h-4c-.27614 0-.5-.2239-.5-.5z"/><path d="m9.5 13c-.27614 0-.5.2239-.5.5s.22386.5.5.5h4c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5z"/><path d="m3 5c0-1.10457.89543-2 2-2h10c1.1046 0 2 .89543 2 2v10c0 1.1046-.8954 2-2 2h-10c-1.10457 0-2-.8954-2-2zm2-1c-.55228 0-1 .44772-1 1v10c0 .5523.44772 1 1 1h10c.5523 0 1-.4477 1-1v-10c0-.55228-.4477-1-1-1z"/></g></svg>
                <span className="mx-2 text-sm font-medium">Lists</span>
            </button>

            <button className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>

                <span className="mx-2 text-sm font-medium">Communities</span>
            </button>

            <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span className="mx-2 text-sm font-medium">Setting</span>
            </a>
        </nav>

        <div className="mt-6">
         
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
<div className='  '>
    
<div className="  ">
          <div>
            {" "}
            <h1 className="m-2 font-bold text-2xl">Home</h1>
          </div>

          <div className=" mb-96 p-3  h-36 ">
            <a href="#" className="flex  ">
              <img
                className="object-cover rounded-full h-9 w-9"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80"
                alt="avatar"
              />
              <input

              onChange={(e)=>setposting(e.target.value)}
                type="text"
                placeholder="What is happening?!"
                className="pl-3 w-full font-serif outline-0 text-lg"
                name=""
                id=""
              />
            </a>

            <hr className="mt-8" />

              {/* icon Div */}

            <div className="flex  mt-1.5 justify-around ">
              <svg
                className="t mt-2 w-6 h-6"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V13"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 16L10 13L15.5 15.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 19H19M22 19H19M19 19V16M19 19V22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <svg
                className=" mt-2 w-6 h-6"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m9.58442 2.00201c.39725 0 .77828.15758 1.05948.43817l1.9156 1.91135c.282.2814.4405.66343.4405 1.06183v1.67083c.5826.20592 1 .76154 1 1.41465v4.00317c0 .82849-.6716 1.5-1.5 1.5h-9c-.82843 0-1.5-.67151-1.5-1.5v-4.00317c0-.65311.4174-1.20873 1-1.41465v-3.58218c0-.82842.67157-1.5 1.5-1.5zm2.91558 5.99683h-9c-.27614 0-.5.22386-.5.5v4.00316c0 .2762.22386.5.5.5h9c.2761 0 .5-.2238.5-.5v-4.00316c0-.27614-.2239-.5-.5-.5zm-7.16704 1.00421c.6444 0 1.1668.5224 1.1668 1.16685 0 .6444-.5224 1.1667-1.1668 1.1667h-.3332v.1665c0 .2761-.22386.5-.5.5-.27615 0-.5-.2239-.5-.5v-2.00005c0-.27614.22385-.5.5-.5zm2.66678 0c.82843 0 1.5.67158 1.5 1.50005 0 .8284-.67158 1.5-1.5 1.5h-.50145c-.27614 0-.5-.2239-.5-.5v-2.00005c0-.27614.22386-.5.5-.5zm3.49906 0c.2761 0 .5.22386.5.5s-.2239.50005-.5.50005h-.499l-.0004.3344h.4994c.2761 0 .5.2239.5.5 0 .2762-.2239.5-.5.5h-.4988l.0005.1643c.0007.2761-.2226.5006-.4988.5012016-.2761.0006984-.5005-.2225016-.5012-.4987016l-.00172-.6674.00172-1.33448c.0003-.27589.2241-.49937.5-.49937zm-3.49906 1.00005h-.00145v1c.27759 0 .50145-.2239.50145-.5 0-.2762-.22386-.5-.5-.5zm-2.66678 0h-.3332v.3335h.3332c.09212 0 .1668-.0746.1668-.1667 0-.0922-.07468-.1668-.1668-.1668zm3.66704-7.00109h-4.5c-.27614 0-.5.22386-.5.5v3.49683h8v-.99884h-1.5c-.82843 0-1.5-.67157-1.5-1.5zm1 .20834v1.28965c0 .27614.2239.5.5.5h1.2936z"
                  fill="#212121"
                />
              </svg>

              <svg
                viewBox="0 0 16 16"
                className="mt-2 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m2 11h2c.51283143 0 .93550653.386027.9932722.8833761l.0067278.1166239v2c0 .51285-.38604429.9355092-.88337975.9932725l-.11662025.0067275h-2c-.51283143 0-.93550653-.386027-.9932722-.8833761l-.0067278-.1166239v-2c0-.51285.38604429-.9355092.88337975-.9932725l.11662025-.0067275h2zm12 1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.55228 0-1-.4477-1-1s.44772-1 1-1zm-10 0h-2v2h2zm0-6c.55228 0 1 .44772 1 1v2c0 .55228-.44772 1-1 1h-2c-.55228 0-1-.44772-1-1v-2c0-.55228.44772-1 1-1zm10 1c.5523 0 1 .44772 1 1 0 .51283143-.386027.93550653-.8833761.9932722l-.1166239.0067278h-6c-.55228 0-1-.44772-1-1 0-.51283143.38604429-.93550653.88337975-.9932722l.11662025-.0067278zm-10 0h-2v2h2zm.77466-5.77386c.26626364.26626364.29046942.68293223.07261736.97654222l-.07261736.08411778-2.49433 2.49433c-.14065.14066-.33142.21967-.53033.21967-.159128 0-.3130464-.0505664-.44026144-.14281088l-.09006856-.07685912-1-1c-.2928933-.29289-.2928933-.76776 0-1.06066.26626636-.26626364.68293025-.29046942.97654162-.07261736l.08411838.07261736.46967.46967 1.964-1.964c.29289-.292893.76776-.292894 1.06066 0zm9.22534.77386c.5523 0 1 .44772 1 1 0 .51283143-.386027.93550653-.8833761.9932722l-.1166239.0067278h-6c-.55228 0-1-.44772-1-1 0-.51283143.38604429-.93550653.88337975-.9932722l.11662025-.0067278z" />
              </svg>

              <svg
                className="mt-2 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                enableBackground="new 0 0 64 64"
              >
                <path
                  d="M32,2C15.432,2,2,15.432,2,32s13.432,30,30,30s30-13.432,30-30S48.568,2,32,2z M32,59.5C16.836,59.5,4.5,47.164,4.5,32
		S16.836,4.5,32,4.5c15.163,0,27.5,12.336,27.5,27.5S47.163,59.5,32,59.5z"
                />
                <circle cx="20.5" cy="26.592" r="5" />
                <circle cx="43.5" cy="26.592" r="5" />
                <path d="m44.584 40.279c-8.11 5.656-17.106 5.623-25.168 0-.97-.677-1.845.495-1.187 1.578 2.458 4.047 7.417 7.65 13.771 7.65s11.313-3.604 13.771-7.65c.658-1.083-.217-2.254-1.187-1.578" />
              </svg>

              <svg
                fill="none"
                viewBox="0 0 48 48"
                className="mt-2 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#333">
                  <path d="m12 5c0-.55228.4477-1 1-1s1 .44772 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1z" />
                  <path d="m28 5c0-.55228.4477-1 1-1s1 .44772 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1z" />
                  <g clipRule="evenodd" fillRule="evenodd">
                    <path d="m14 23h-2v2h2zm-2-2c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2v-2c0-1.1046-.8954-2-2-2z" />
                    <path d="m22 23h-2v2h2zm-2-2c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2v-2c0-1.1046-.8954-2-2-2z" />
                    <path d="m30 23h-2v2h2zm-2-2c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2v-2c0-1.1046-.8954-2-2-2z" />
                    <path d="m14 31h-2v2h2zm-2-2c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2v-2c0-1.1046-.8954-2-2-2z" />
                    <path d="m22 31h-2v2h2zm-2-2c-1.1046 0-2 .8954-2 2v2c0 1.1046.8954 2 2 2h2c1.1046 0 2-.8954 2-2v-2c0-1.1046-.8954-2-2-2z" />
                    <path d="m9 10h24c1.1046 0 2 .8954 2 2v16c.6906 0 1.3608.0875 2 .252v-16.252c0-2.20914-1.7909-4-4-4h-24c-2.20914 0-4 1.79086-4 4v24c0 2.2091 1.79086 4 4 4h19.0703c-.3581-.619-.6356-1.2905-.8183-2h-18.252c-1.10457 0-2-.8954-2-2v-24c0-1.1046.89543-2 2-2z" />
                    <path d="m36 19h-30v-2h30z" />
                    <path d="m35 42c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6zm0 2c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8z" />
                    <path d="m35 31.1787c.5523 0 1 .4477 1 1v4.2981l2.4515 1.7017c.4537.3149.5662.938.2512 1.3917-.3149.4537-.938.5662-1.3917.2513l-3.311-2.2983v-5.3445c0-.5523.4477-1 1-1z" />
                  </g>
                </g>
              </svg>

              <svg
                className="mt-2 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="var(--ci-primary-color, currentColor)"
                  d="M253.924,127.592a64,64,0,1,0,64,64A64.073,64.073,0,0,0,253.924,127.592Zm0,96a32,32,0,1,1,32-32A32.037,32.037,0,0,1,253.924,223.592Z"
                  className="ci-primary"
                />
                <path
                  fill="var(--ci-primary-color, currentColor)"
                  d="M376.906,68.515A173.922,173.922,0,0,0,108.2,286.426L229.107,472.039a29.619,29.619,0,0,0,49.635,0L399.653,286.426A173.921,173.921,0,0,0,376.906,68.515Zm-4.065,200.444L253.925,451.509,135.008,268.959C98.608,213.08,106.415,138.3,153.571,91.142a141.92,141.92,0,0,1,200.708,0C401.435,138.3,409.241,213.08,372.841,268.959Z"
                  className="ci-primary"
                />
              </svg>

              <div className="">
<button onClick={user_post} type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
</div>



              
            </div>

{/* icon Div End */}





          </div>
        </div>


</div>


</div>


</div>









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






    </>
  )
}

export default Home
