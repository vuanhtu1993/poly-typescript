import { useState } from "react"

const Square = () => {
    const [value, setValue] = useState(null)
    return <button
        onClick={() => setValue("X")}
        className="w-[60px] h-[60px] bg-[#14bdac] text-3xl text-white">
        {value}
    </button>
}

export default Square