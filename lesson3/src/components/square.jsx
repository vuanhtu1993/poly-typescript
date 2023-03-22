import {useState} from 'react'

const Square = () => {
    const [value, setValue] = useState()
    function play() {
        setValue("X")
    }
    return <>
    <button onClick={play} className="h-[50px] w-[50px] text-xl text-black border-0 bg-gray-300">
            {value}
        </button>
    </>
}

export default Square