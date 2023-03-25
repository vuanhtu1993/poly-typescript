import { useState } from 'react'

const Square = () => {
    const [value, setValue] = useState(null)

    const handlePlay = () => {
        setValue("X")
    }
    return <button
        onClick={handlePlay}
        className="bg-[#14bdac] border-0 w-[100px] h-[100px] text-[50px] text-white">
        {value}
    </button>
}

export default Square