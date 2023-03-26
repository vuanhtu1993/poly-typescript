import { useState } from "react"

const Square = ({value, handlePlay}) => {
    return <button
        onClick={handlePlay}
        className="w-[60px] h-[60px] bg-[#14bdac] text-3xl text-white">
        {value}
    </button>
}

export default Square