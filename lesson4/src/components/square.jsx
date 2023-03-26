import { useState } from 'react'

const Square = ({value, handlePlay}) => {

    const squareHandlePlay = () => {
        if (!value) {
            handlePlay()
        }
    }

    return <button
        onClick={squareHandlePlay}
        className="bg-[#14bdac] border-0 w-[100px] h-[100px] text-[50px] text-white">
        {value}
    </button>
}

export default Square