import Head from "next/head";
import { useRouter } from "next/router"
import Footer from "../components/footer";
import Header from "../components/header";
import LeftBar from "../components/leftbar";
import RollingBar from "../components/rolling-bar";

export default function Portfolio(){
    const router = useRouter();
    const {id} = router.query


    return( 
        <div id="project_detail_container">
          <div className="flex flex-col w-full h-[auto] bg-[#E8EBEC] text-[#0A0A0A]" id="container">
    <Head>
 <title>Home | Joy Mun</title>
</Head>
<RollingBar/>
<Header />

<div className="flex h-full dark:bg-[#0A0A0A] dark:text-[#E8EBEC]" id="main">
  <LeftBar />

<div className="w-full pl-[2vw] ">
   <div onClick={() => router.push("/works")} className='cursor-pointer  w-full h-28 flex justify-start items-end font-semibold text-lg ' id="header-container"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>Back</div>
   <div className="p-[3vw] py-44 flex flex-col justify-around" id="Home_main">
       <p className="pl-10 p-2 pb-5 text-[6vw] font-extrabold flex justify-end  ">
       NFT COLLECTION	
       </p>
       <div id="infors_inner">
           <ul className="text-[1vw] font-bold  font-ProtoMono-SemiBold flex items-center justify-end space-x-6 " id="tags">
               <li className="rounded-3xl p-1 px-3 border-black border-2">Next.js</li>
               <li className="rounded-3xl p-1 px-3 border-black border-2">Ethers.js</li>
               <li className="rounded-3xl p-1 px-3 border-black border-2">Solidity</li>
               <li className="rounded-3xl p-1 px-3 border-black border-2">Unisqap</li>
               <li className="rounded-3xl p-1 px-3 border-black border-2">The Graph</li>
           </ul>
       </div>
   </div>
   <div className="flex flex-col h-[auto] pt-5 pr-11"   id="project-container">
     <div id="project-cover" className=" w-full h-[60vw] p-20 bg-cover bg-center  bg-[url('https://images.unsplash.com/photo-1658609509474-2932d8f4bd41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80')]">
     </div>
     <div id="project-desc" className=" w-full h-[40vw] p-20 pt-40 bg-[#0A0A0A]  text-[#E8EBEC] ">
        <button onClick={() => router.push("/works")} bg-white p-10 font-lg >Visit the Website</button>
       <div className="flex flex-col relative" >
         <p className="text-[1vw] mb-3">/Desc</p>
         <p className="text-[1.5vw] font-ProtoMono-Light ">WHEN I&apos;M NOT BUILDING OR EXPLORING NEW WEB EXPERIENCES, I&apos;M PROBABLY GOING TO GYM OR READING BOOKS.</p>
       </div>
     </div>
     

<Footer />
   </div>
</div>
</div>
</div>
        </div>
    )
}