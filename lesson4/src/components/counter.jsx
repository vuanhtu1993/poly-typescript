const { useState, useEffect } = require("react")

const Counter = () => {
    const [count, setCount] = useState(10)
    const [image, setImage] = useState(null)

    const handleShowImage = async () => {
        const data = await fetch("https://picsum.photos/200/300")
        setImage(data.url)
    }

    

    useEffect(() => {
        handleShowImage()
        // const interval = setInterval(() => {
        //     setCount(count + 1)
        // }, 1000)

        // return () => clearInterval(interval)
    }, [])

    // []: Chỉ chạy 1 lần
    // [count] phụ thuộc vào count

    // setInterval(() => {
        //     setCount(count + 1)
        // }, 1000)

    console.log(count);

    return <>
        <h1>Count: {count}</h1>
        <img src={image} alt="" />
        <button className="bg-blue-500" onClick={handleShowImage}>+ count</button>
    </>
}

export default Counter