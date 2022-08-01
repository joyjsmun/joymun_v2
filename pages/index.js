import { resolveHref } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState ,useRef } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import LeftBar from './components/leftbar'
import RollingBar from './components/rolling-bar'
import RollingBar2 from './components/rolling-bar2'


//bg-[#E8EBEC] text-[#0A0A0A]
//yellow-[#95ff00]  // #dcff7d
//black bg-[#0A0A0A]
//text white-[#c7c7c7] //#dcff7d
//border-[#c7c7c7]


export default function Home() {
  const [count, setCount] = useState(1);
  const [loading,setLoading] = useState(false);


  const router = useRouter();
  const {pg} = router.query;

  console.log(pg);

  function loadPage(){
    setLoading(true);
    
    setTimeout(() => {
    console.log("loading done");
    setLoading(false)
    },2000)
  }
  

  useEffect(() =>{
   
   //loadPage();
  },[])


 


  
  return (    <>
    <div className="flex flex-col w-full h-[auto] bg-[#E8EBEC] text-[#0A0A0A]" id="container">
    <Head>
 <title>Home | Joy Mun</title>
</Head>
<RollingBar/>
<Header />

<div className="flex h-full dark:bg-[#0A0A0A] dark:text-[#E8EBEC]" id="main">
  <LeftBar />

<div className="w-full pl-[2vw] ">
   <div className='w-full h-24' id="header-container">
   <RollingBar2/>
   </div>
   <div className="pl-[3vw] pt-24" id="Home_main">
       <p className="pl-6  text-[16vw] font-bold  font-ProtoMono-SemiBold flex items-center ">Joy Mun</p>
       <p className="pl-10 p-2 pb-10 text-[3.5vw] font-bold  font-ProtoMono-SemiBold flex items-center ">
       &lt;software-engineer type=&quot;web3&quot;/&gt;	
       </p>
   </div>
   <div className="flex flex-col h-[auto] pt-10"   id="project-container">
     <div id="left-1" className=" w-full h-[30vw] p-20 grid grid-cols-[1.2fr,1fr] bg-[#0A0A0A]  text-[#E8EBEC] dark:bg-[#E8EBEC] dark:text-[#0A0A0A] ">
       <div className="flex flex-col relative" >
         <p className="text-[1vw] -mb-3">/Work</p>
         <p className="text-[3.8vw] font-bebas">PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USERFRIENDLY INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES.</p>
       </div>
       <div ></div>
     </div>
     <div id="right-1" className=" w-full h-[auto]  p-20 grid grid-cols-[1.3fr,1fr] bg-[#0A0A0A]  text-[#E8EBEC] dark:bg-[#E8EBEC] dark:text-[#0A0A0A] ">
       <div className=''></div>
       <div className="flex flex-col relative" >
         <p className="text-[1vw] -mb-3">/Life</p>
         <p className="text-[3.8vw] font-bebas">WHEN I&apos;M NOT BUILDING OR EXPLORING NEW WEB EXPERIENCES, I&apos;M PROBABLY GOING TO GYM OR READING BOOKS.</p>
       </div>
     </div>
     
     <section className='relative w-full z-10 h-auto font-bebas' id='footer'>
        <div className="grid grid-cols-[1fr,1fr] grid-rows-1 text-[3vw] text-center h-[7vw]  border-black border-b-2 border-l-2 dark:bg-[#E8EBEC] dark:text-[#0A0A0A]">
            {/* <div className="border-t-none"></div> */}
            <div onClick={() => router.push("/works")} className=" cursor-pointer boder border-r-2 border-t-2 border-black flex flex-col justify-center items-center hover:text-[3.6vw] ">WORK</div>
            <div onClick={() => router.push("/about")} className=" cursor-pointer  border-t-2 border-black flex justify-center items-center hover:text-[3.6vw] ">ABOUT</div>
        </div>
        <div className='flex items-center justify-center space-x-3 font-nato text-[0.8vw] py-2'>
          <span>ⓒ 2022 </span>
          <span>Site by Joy Mun</span>
        </div>
      </section>
   </div>
</div>
</div>
</div>
</>)
}
