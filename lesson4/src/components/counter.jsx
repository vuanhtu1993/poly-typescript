import { useEffect, useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(10)
    const [image, setImage] = useState(null)

    const handleIncrease = () => {
        setCounter(counter + 1)
    }

    const handleShowImage = async () => {
        const data = await fetch('https://picsum.photos/200/300')
        setImage(data.url)
    }

    // Render không kiểm soát
    // Sai về cơ chế
    // handleShowImage()

    useEffect(() => {
        handleShowImage()
        // const interval = setInterval(() => {
        //     setCounter(counter + 1)
        // }, 1000)

        // return () => clearInterval(interval)
    }, [counter])
    // []: Chạy 1 lần duy nhất
    // [counter]: Chạy mà phụ thuộc counter

    console.log(counter);

    return <>
        <h2>Counter: {counter}</h2>
        <img src={image} alt="" />
        <button className="bg-pink-500" onClick={handleIncrease}>+ counter</button>
    </>
}

export default Counter