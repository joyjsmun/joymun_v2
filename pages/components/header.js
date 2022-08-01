import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";


export default function Header(){
  const { theme, setTheme } = useTheme();
  const router = useRouter();

    return(
        <>
      <div className='fixed top-5 w-full flex justify-end space-x-5 p-[2vw] ' id="header-menu ">
         <div className="font-ProtoMono-Light text-lg" id="title"></div>
        <div className='flex justify-around w-60 bg-[#0A0A0A] p-2 rounded-2xl font-ProtoMono-Light font-extrabold text-white dark:bg-[#f4f6f7] dark:text-[#0A0A0A]'>
          <span className="cursor-pointer " onClick={() => router.push("/")}>Home</span>
          <span className="cursor-pointer " onClick={() => router.push("/works")}>Work</span>
          <span className="cursor-pointer " onClick={() => router.push("/about")}>About</span>
        </div>
        <div className='flex justify-around w-20 bg-[#0A0A0A] p-1 rounded-full font-ProtoMono-Light text-white dark:bg-[#fcfdfe] dark:text-[#0A0A0A]' id="mode">
        <button 
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="text-white dark:text-black">
          <svg className="w-6 h-6" fill="white " stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          </button>
        </div>
      </div>
        </>
    )
}