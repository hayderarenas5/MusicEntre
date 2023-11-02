import { useState } from "react"
import PublicLayout from "../components/layouts/PublicLayout"

const PlaylistPublic = () => {

  const[isShowFront, setIsShowFront]=useState()
  return (
    <PublicLayout>
      <form className="top-24 uppercase grid rounded-md justify-center font-semibold bordergap-1 transition-all">
        <div className={`relative cassette `}>
            <div className="front">
                {/* Frontal */}
                <img src="/images/cassette.png" alt="" />
                <div className="bg-white flex p-1 items-center rounded-md w-[198px] absolute top-[15px] left-[20px] gap-1 text-sm">
                </div>
                    
            </div>
            <div className="absolute top-0 back">
                {/* Trasera */}
                <img src="/images/cassette.png" alt="" />
                <div className="bg-white flex p-1 items-center rounded-md w-[198px] absolute top-[15px] left-[20px] gap-1 text-sm">
                    
                </div>
                <div className="bg-white flex p-1 items-center rounded-md w-[198px] absolute top-[50px] left-[20px] gap-1 text-sm">
                    <textarea name="message" rows={4} className="outline-none text-black resize-none" placeholder="Mensaje"/>
                </div>
            </div>
        </div>

        <button type="button" className="border-2 border-white uppercase p-2 px-4 rounded-full max-w-max mx-auto hover:text-secondary hover:border-secondary transition-colors text-sm" onClick={()=>setIsShowFront(!isShowFront)}>{isShowFront? "Lado A" : "Lado B"}</button>

    </form>
    </PublicLayout>
  )
}

export default PlaylistPublic
