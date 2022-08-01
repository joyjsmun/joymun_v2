export default function RollingBar(){
    return(
        <>
      <div className="fixed left-[2.4vw] top-0 w-[6.5vw] z-20 border-l-2 border-r-2 border-[#0A0A0A] -space-y-14 h-full bg-[#B6F84E]" id="rolling-text-bar">
          <div className="animate-[wiggle_18s_infinite]">
          <svg height="85vw" width="8vw"><text alignmentBaseline="baseline" fontFamily="'Bebas Neue', 'cursive'" x="-60vw" y="0" fill="black" fontSize="8em" transform="rotate(-90 200,100)">Let&apos;s make something fun </text></svg>
        </div>
        <div className="animate-[wiggle_18s_infinite]">
          <svg height="85vw" width="8vw"><text alignmentBaseline="baseline" fontFamily="'Bebas Neue', 'cursive'" x="-60vw" y="0" fill="black" fontSize="8em" transform="rotate(-90 200,100)">Let&apos;s make something fun </text></svg>
        </div>
        <div className="animate-[wiggle_18s_infinite]">
          <svg height="85vw" width="8vw"><text alignmentBaseline="baseline" fontFamily="'Bebas Neue', 'cursive'" x="-60vw" y="0" fill="black" fontSize="8em" transform="rotate(-90 200,100)">Let&apos;s make something fun </text></svg>
        </div>
        <div className="animate-[wiggle_18s_infinite]">
          <svg height="85vw" width="8vw"><text alignmentBaseline="baseline" fontFamily="'Bebas Neue', 'cursive'" x="-60vw" y="0" fill="black" fontSize="8em" transform="rotate(-90 200,100)">Let&apos;s make something fun </text></svg>
        </div>
    </div>
        </>
    )
}