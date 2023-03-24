import { useState } from 'react'

const Square = ({ value, position, handlePlay }) => {
    const handleSquarePlay = () => {
        if (!value) {
            handlePlay(position)
        }
    }
    return <>
        <button
            onClick={handleSquarePlay}
            className="h-[50px] w-[50px] text-xl text-white border-0 bg-[#14bdac]">
            {value}
        </button>
    </>
}

export default Square