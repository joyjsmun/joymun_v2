import Head from "next/head";
import { useRouter } from "next/router";
import {motion} from "framer-motion";
import { useEffect,useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import RollingBar from "../components/rolling-bar";
import LeftBar from "../components/leftbar";

//yellow-[#95ff00]  // #dcff7d
//black bg-[#0A0A0A]
//text white-[#c7c7c7] //#dcff7d
//border-[#c7c7c7]


export default function Works(){
  const [count, setCount] = useState(1);
  const [loading,setLoading] = useState(false);

const router = useRouter();

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
    
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  
   
  return (    <>
  
    <div className="flex flex-col w-full h-[auto] bg-[#E8EBEC] text-[#0A0A0A]" id="container">
   
    <Head>
 <title>HOME | Joy Mun</title>
</Head>
<RollingBar/>
<Header />

<div className="flex h-full dark:bg-[#0A0A0A] dark:text-[#E8EBEC]" id="main">
<LeftBar />

<div className="w-full pl-[2vw] ">
   <div className='w-full h-24' id="header-container"></div>
   <div className="pl-[3vw] pt-44s" id="Home_main">
       <p className="pl-10 p-2 pb-28 text-[16vw] font-bold  font-ProtoMono-SemiBold flex items-center ">PROJECT</p>
   </div>
   <div className="grid grid-rows-6 h-[auto]"   id="project-container">
     {/* one set of works */}
     
     <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}  transition={{ duration: 0.3 }}
      id="work-left-1" className=" group w-full h-[30vw] border-b-2 border-[#E8EBEC] p-10 grid grid-cols-[1fr,1.3fr] bg-[#0A0A0A] text-[#E8EBEC] hover:bg-[#B6F84E] hover:text-[#121313] border-2">
       <div className="flex flex-col relative" >
         <p className="text-[1vw] -mb-3">/Work</p>
         <p className="text-[4vw] font-bebas">NFT Market Place</p>
         <p className="text-[1vw] font-nato w-[53%] mt-2">react snapshot pinata mui ethersjs solidity hardhat</p>
         <div onClick={() => router.push("/works/1")}  className="cursor-pointer  border-2 border-[#E8EBEC] group-hover:border-2 group-hover:border-[#0A0A0A]  w-[7vw] h-[3vw] absolute bottom-0 flex items-center  justify-start ">
         <motion.div  whileHover={{translateX:"40%", scale:1.1}} transition={{duration:0.3}} className="w-full pl-2">
         <svg className="w-12 h-12 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
         </motion.div>
         </div>
       </div>
       <div id="work-photo" className="group-hover:border-4 group-hover:border-[#0a0a0a] bg-center bg-cover   bg-[url('https://pixabay.com/get/g240e39389e8164b3697c952ad679ede6612e8a130a0db83d93519d341bd03052f341719fb0b26f82d9464753cb52c32a7ae02bd1950ab9ecb2476ce937322c56a91388ae102a0326ff8b646d44ae39e4_1920.jpg')] border-[#E8EBEC] border-4">
       </div>
     </motion.div>


     <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}  transition={{ duration: 0.3 }}
     id="work-right-2" className=" group w-full border-b-2 border-[#E8EBEC] p-10 grid grid-cols-[1.3fr,1fr] bg-[#0A0A0A] text-[#E8EBEC] hover:bg-[#B6F84E] hover:text-[#121313] border-2">
     <div id="work-photo" className="group-hover:border-4 group-hover:border-[#0a0a0a] bg-center bg-cover   bg-[url('https://pixabay.com/get/g240e39389e8164b3697c952ad679ede6612e8a130a0db83d93519d341bd03052f341719fb0b26f82d9464753cb52c32a7ae02bd1950ab9ecb2476ce937322c56a91388ae102a0326ff8b646d44ae39e4_1920.jpg')] border-[#E8EBEC] border-4">
       </div>
       <div className="flex flex-col relative pl-9" id="work-text">
         <p className="text-[1vw] -mb-3">/Work</p>
         <p className="text-[4vw] font-bebas">NFT Market Place</p>
         <p className="text-[1vw] font-nato w-[53%] mt-2">react snapshot pinata mui ethersjs solidity hardhat</p>
         <div onClick={() => router.push("/works/2")} className="cursor-pointer  border-2 border-[#E8EBEC] group-hover:border-2 group-hover:border-[#0A0A0A]  w-[7vw] h-[3vw] absolute bottom-0 flex items-center justify-start">
         <motion.div  whileHover={{translateX:"40%", scale:1.1}} transition={{duration:0.3}} className="w-full pl-2">
         <svg className="w-12 h-12 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
         </motion.div></div>
       </div>
     </motion.div>

     {/* one set of works */}
     
     <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}  transition={{ duration: 0.3 }}
      id="work-left-1" className=" group w-full h-[30vw] border-b-2 border-[#E8EBEC] p-10 grid grid-cols-[1fr,1.3fr] bg-[#0A0A0A] m text-[#E8EBEC] hover:bg-[#B6F84E] hover:text-[#121313] border-2">
       <div className="flex flex-col relative" >
         <p className="text-[1vw] -mb-3">/Work</p>
         <p className="text-[4vw] font-bebas">NFT Market Place</p>
         <p className="text-[1vw] font-nato w-[53%] mt-2">react snapshot pinata mui ethersjs solidity hardhat</p>
         <div onClick={() => router.push("/works/1")}  className="cursor-pointer  border-2 border-[#E8EBEC] group-hover:border-2 group-hover:border-[#0A0A0A]  w-[7vw] h-[3vw] absolute bottom-0 flex items-center  justify-start ">
         <motion.div  whileHover={{translateX:"40%", scale:1.1}} transition={{duration:0.3}} className="w-full pl-2">
         <svg className="w-12 h-12 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
         </motion.div>
         </div>
       </div>
       <div id="work-photo" className="group-hover:border-4 group-hover:border-[#0a0a0a] bg-center bg-cover   bg-[url('https://pixabay.com/get/g240e39389e8164b3697c952ad679ede6612e8a130a0db83d93519d341bd03052f341719fb0b26f82d9464753cb52c32a7ae02bd1950ab9ecb2476ce937322c56a91388ae102a0326ff8b646d44ae39e4_1920.jpg')] border-[#E8EBEC] border-4">
       </div>
     </motion.div>


     <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}  transition={{ duration: 0.3 }}
     id="work-right-2" className=" group w-full border-b-2 border-[#E8EBEC] p-10 grid grid-cols-[1.3fr,1fr] bg-[#0A0A0A] text-[#E8EBEC] hover:bg-[#B6F84E] hover:text-[#121313] border-2">
     <div id="work-photo" className="group-hover:border-4 group-hover:border-[#0a0a0a] bg-center bg-cover   bg-[url('https://pixabay.com/get/g240e39389e8164b3697c952ad679ede6612e8a130a0db83d93519d341bd03052f341719fb0b26f82d9464753cb52c32a7ae02bd1950ab9ecb2476ce937322c56a91388ae102a0326ff8b646d44ae39e4_1920.jpg')] border-[#E8EBEC] border-4">
       </div>
       <div className="flex flex-col relative pl-9" id="work-text">
         <p className="text-[1vw] -mb-3">/Work</p>
         <p className="text-[4vw] font-bebas">NFT Market Place</p>
         <p className="text-[1vw] font-nato w-[53%] mt-2">react snapshot pinata mui ethersjs solidity hardhat</p>
         <div onClick={() => router.push("/works/2")} className="cursor-pointer  border-2 border-[#E8EBEC] group-hover:border-2 group-hover:border-[#0A0A0A]  w-[7vw] h-[3vw] absolute bottom-0 flex items-center justify-start">
         <motion.div  whileHover={{translateX:"40%", scale:1.1}} transition={{duration:0.3}} className="w-full pl-2">
         <svg className="w-12 h-12 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
         </motion.div></div>
       </div>
     </motion.div>

      {/* one set of works */}
     
      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}  transition={{ duration: 0.3 }}
      id="work-left-1" className=" group w-full h-[30vw] border-b-2 border-[#E8EBEC] p-10 grid grid-cols-[1fr,1.3fr] bg-[#0A0A0A] m text-[#E8EBEC] hover:bg-[#B6F84E] hover:text-[#121313] border-2">
       <div className="flex flex-col relative" >
         <p className="text-[1vw] -mb-3">/Work</p>
         <p className="text-[4vw] font-bebas">NFT Market Place</p>
         <p className="text-[1vw] font-nato w-[53%] mt-2">react snapshot pinata mui ethersjs solidity hardhat</p>
         <div onClick={() => router.push("/works/1")}  className="cursor-pointer  border-2 border-[#E8EBEC] group-hover:border-2 group-hover:border-[#0A0A0A]  w-[7vw] h-[3vw] absolute bottom-0 flex items-center  justify-start ">
         <motion.div  whileHover={{translateX:"40%", scale:1.1}} transition={{duration:0.3}} className="w-full pl-2">
         <svg className="w-12 h-12 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
         </motion.div>
         </div>
       </div>
       <div id="work-photo" className="group-hover:border-4 group-hover:border-[#0a0a0a] bg-center bg-cover   bg-[url('https://pixabay.com/get/g240e39389e8164b3697c952ad679ede6612e8a130a0db83d93519d341bd03052f341719fb0b26f82d9464753cb52c32a7ae02bd1950ab9ecb2476ce937322c56a91388ae102a0326ff8b646d44ae39e4_1920.jpg')] border-[#E8EBEC] border-4">
       </div>
     </motion.div>


     <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}  transition={{ duration: 0.3 }}
     id="work-right-2" className=" group w-full border-b-2 border-[#E8EBEC] p-10 grid grid-cols-[1.3fr,1fr] bg-[#0A0A0A] text-[#E8EBEC] hover:bg-[#B6F84E] hover:text-[#121313] border-2">
     <div id="work-photo" className="group-hover:border-4 group-hover:border-[#0a0a0a] bg-center bg-cover   bg-[url('https://pixabay.com/get/g240e39389e8164b3697c952ad679ede6612e8a130a0db83d93519d341bd03052f341719fb0b26f82d9464753cb52c32a7ae02bd1950ab9ecb2476ce937322c56a91388ae102a0326ff8b646d44ae39e4_1920.jpg')] border-[#E8EBEC] border-4">
       </div>
       <div className="flex flex-col relative pl-9" id="work-text">
         <p className="text-[1vw] -mb-3">/Work</p>
         <p className="text-[4vw] font-bebas">NFT Market Place</p>
         <p className="text-[1vw] font-nato w-[53%] mt-2">react snapshot pinata mui ethersjs solidity hardhat</p>
         <div onClick={() => router.push("/works/2")} className="cursor-pointer  border-2 border-[#E8EBEC] group-hover:border-2 group-hover:border-[#0A0A0A]  w-[7vw] h-[3vw] absolute bottom-0 flex items-center justify-start">
         <motion.div  whileHover={{translateX:"40%", scale:1.1}} transition={{duration:0.3}} className="w-full pl-2">
         <svg className="w-12 h-12 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
         </motion.div></div>
       </div>
     </motion.div>
     
     
<Footer />
   </div>
</div>
</div>

</div>
</>)
}
