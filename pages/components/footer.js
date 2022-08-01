export default function Footer(){
    return(
        <>
        <section className='relative w-full z-10 h-auto font-bebas py-5' id='footer'>
        <div className="scroll-smooth grid grid-cols-[1fr,1fr] grid-rows-1 text-[3vw] text-center h-[8vw]  border-black border-b-2 border-r-2 dark:border-[#E8EBEC]">
            {/* <div className="border-t-none"></div> */}
            <div className="border-r-2 border-l-2 border-t-2  border-black dark:border-[#E8EBEC] flex flex-col justify-center items-center">BUY ME A COFFEE
            <p className="font-nato text-sm">If you like my work you can buy me a coffee (0.002 ETH)!<br/> You can also send it manually to noahliechti.eth</p>
            </div>
            <a href="#top"><div className="border-t-2 border-black dark:border-[#E8EBEC] flex justify-center pt-6">UP</div></a>
        </div>
        <div className='flex items-center justify-center space-x-3 font-nato text-[0.8vw] py-2'>
          <span>ⓒ 2022 </span>
          <span>Site by Joy Mun</span>
        </div>
      </section>
        </>
    )
}