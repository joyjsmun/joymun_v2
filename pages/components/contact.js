import {motion,AnimatePresence} from "framer-motion";
import Link from "next/link";


export default function Contact(){

    return(
        <>
         <div className="pt-44 pb-40" id="contacts">
          <p className="grid grid-rows-3 text-[2.5vw] font-bebas relative">
          <Link href="https://www.linkedin.com/in/joy-js-mun/" passHref><a className="cursor-pointer pl-10 p-2 border-t-2 border-black dark:border-[#E8EBEC]  hover:origin-bottom hover:scale-y-100 hover:bg-black hover:delay-200 hover:duration-700 hover:text-white hover:font-extrabold " target="_blank" >
              <p className="flex items-center space-x-40  group">
                  <span>LINKEDIN</span>
                  <span><svg className="opacity-0 group-hover:opacity-100 group-hover:duration-100 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </p></a>
            </Link>
            <Link href="https://www.linkedin.com/in/joy-js-mun/" passHref><a className="cursor-pointer  pl-10 p-2 border-t-2 border-b-2 border-black dark:border-[#E8EBEC] hover:origin-bottom hover:scale-y-100 hover:bg-black hover:delay-200 hover:duration-700 hover:text-white  hover:font-extrabold " target="_blank" >
              <p className="flex items-center space-x-40  group">
                  <span>GITHUB</span>
                  <span><svg className="opacity-0 group-hover:opacity-100 group-hover:duration-100 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </p></a>
            </Link>
            <Link href="https://www.linkedin.com/in/joy-js-mun/" passHref><a className="cursor-pointer  pl-10 p-2 border-b-2 border-black dark:border-[#E8EBEC] hover:origin-bottom hover:scale-y-100 hover:bg-black hover:delay-200 hover:duration-700 hover:text-white  hover:font-extrabold " target="_blank" >
              <p className="flex items-center space-x-40  group">
                  <span>TWITTER</span>
                  <span><svg className="opacity-0 group-hover:opacity-100 group-hover:duration-100 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </p></a>
            </Link>
          </p>
        </div>
        </>
    )
}