import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react/cjs/react.development";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Headers from "./components/header";
import { motion, AnimatePresence } from "framer-motion";
import LeftBar from "./components/leftbar";
import RollingBar from "./components/rolling-bar";

//bg-[#E8EBEC] text-[#0A0A0A]
//yellow-[#95ff00]  // #dcff7d
//black bg-[#0A0A0A]
//text white-[#c7c7c7] //#dcff7d
//border-[#c7c7c7]
//bg-[#A5A6A6] 어두운 배경 참고
//bg-[#CFA3F7] 보라색 배경
//text-[#B6F84E] 야광그린


export default function About(){
  const [open,toggleOpen] = useState(false);

    
  const router = useRouter();
    return(
        <>
         <div className="flex flex-col w-full h-[auto] bg-[#E8EBEC] text-[#0A0A0A]" id="container">
         <Head>
      <title>About | Joy Mun</title>
    </Head>
   
   <RollingBar/>
   <Header/>

    <div className="flex h-full dark:bg-[#0A0A0A] dark:text-[#E8EBEC]" id="main">
      <LeftBar />

    <div className="w-full pl-[2vw]">
        <div className='w-full h-24 ' id="header-container"></div>
        <div className='pl-[3vw] py-48 border-b-2 h-[40vw]  border-[#0A0A0A] dark:border-[#E8EBEC]' id="main top-title">
          <p className= "pl-1 p-2 text-[11vw] leading-[1.4em] w-full h-full tracking-tight  font-ProtoMono-LightShadow  flex items-center justify-around">
            <span className="flex flex-col items-center -space-y-10">
              <span className="tracking-tighter" >Joy Mun</span>
              <span className="text-[3vw] font-ProtoMono-SemiBold ">Web3 Developer</span>
            </span>
            <span><img className="w-[18vw]  rounded-2xl" src="/joy.jpg" /> </span>
          </p>
        </div>
        
        <div className="flex pt-24 pb-24" id="main self-desc ">
         <div className="w-[52%] p-20 pl-[10vw] flex flex-col gap-20 text-[1.5vw] font-ProtoMono-Light">
         
         <p className="" id="self-desc-1">
            PASSIONATE ABOUT WEB THREE TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES I CREATE MEMORABLE WEB EXPERIENCES.
          </p>
          <p className='' id="self-desc-2">
            WHEN I&apos;M NOT BUILDING OR EXPLORING. NEW WEB EXPERIENCES, I CREATE MEMORABLE WEB EXPERIENCES. I&apos;M PROBABLY TAKING PHOTO OR WORKING OUT AT GYM
          </p>
         </div>
         <div className=" flex items-center p-20 text-[3vw]  font-bebas ">
             <ul>
                 <li className="list-disc">WEB 3</li>
                 <li className="list-disc">CREATIVE ART</li>
                 <li className="list-disc">PHOTOGRAPH</li>
             </ul>
         </div>
        </div>
        <div className="pl-[4vw] pt-44 pb-44 border-t-2 border-black dark:border-[#E8EBEC] space-y-7" id="work-experience">
        <p className="p-2 text-[7vw] font-bold  font-ProtoMono-SemiBold">EXPERIENCES</p>
        {/* change!!!!!!!!! */}
          <div className="pl-10 cursor-pointer font-bebas text-[2vw] grid grid-cols-[1fr,1fr,1fr,1fr] duration-1000"><span>01</span><span>Frontend Developer</span><span></span><span>+</span></div>
          
        </div>

        
        <div className="pl-[4vw] pt-44 border-t-2 border-black dark:border-[#E8EBEC]" id="projects">
           <p onClick={() => router.push("/works")} className="p-2 text-[7vw] font-bold  font-ProtoMono-SemiBold flex items-center cursor-pointer  ">PROJECTS
           <span><svg className="w-20 h-20 ml-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span> 
            </p>
        </div>
        <div className="pt-44" id="tech-stacks">
          <p className="pl-10 p-2 text-center border-t-2 border-black dark:border-[#E8EBEC] text-[2.5vw] font-ProtoMono-SemiBold">&lt;code/&gt;</p>
          <p className="grid grid-cols-2 grid-rows-2 text-[2.5vw] font-bebas">
            <span className="pl-10 p-2 border-b-2 border-r-2 border-t-2 border-black dark:border-[#E8EBEC]">Web3.js</span>
            <span className="pl-10 p-2 border-b-2 border-t-2  border-black dark:border-[#E8EBEC]">React</span>
            <span className="pl-10 p-2 border-b-2 border-r-2 border-black dark:border-[#E8EBEC]">Web3.js</span>
            <span className="pl-10 p-2 border-b-2 border-black dark:border-[#E8EBEC]">React</span>
            <span className="pl-10 p-2 border-b-2 border-r-2 border-black dark:border-[#E8EBEC]">Web3.js</span>
            <span className="pl-10 p-2 border-b-2 border-black dark:border-[#E8EBEC]">React</span>
            <span className="pl-10 p-2 border-b-2 border-r-2 border-black dark:border-[#E8EBEC]">Web3.js</span>
            <span className="pl-10 p-2 border-b-2 border-black dark:border-[#E8EBEC]">React</span>
          </p>
        </div>
       <Contact />
       <Footer />
    </div>
  </div>
    
    </div>
    </>
    )
} 