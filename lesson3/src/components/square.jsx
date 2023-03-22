import {useState} from 'react'
const Square = () => {
    const [value, setValue] = useState()
    function play() {
        setValue("X")
    }
    return <>
        <button
            onClick={play}
            className="w-[70px] h-[70px] bg-[#14bdac] text-3xl text-white">
            {value}
        </button>
    </>
}

export default Square