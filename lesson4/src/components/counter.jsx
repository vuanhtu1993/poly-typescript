const { useState, useEffect } = require("react")

const Counter = () => {
    const [count, setCount] = useState(10)
    const [image, setImage] = useState(null)

    const handleShowImage = async () => {
        const data = await fetch("https://picsum.photos/200/300")
        setImage(data.url)
    }

    // useEffect 2
    useEffect(() => {
        setCount(count + 1)
        // const interval = setInterval(() => {
        //     handleShowImage()
        //     // setCount(count + 1)
        // }, 1000)

        // return () => clearInterval(interval)
    }, [])
    // Cách 1: Không có tham số thứ 2
    // Cách 2: Chỉ chạy 1 lần
    // Cách 3: Update phụ thuộc vào một state hay props khác
    

    // Render 1
    return <>
        <h1>Count: {count}</h1>
        <img src={image} alt="" />
        <button className="bg-blue-500" onClick={() => setCount(count + 1)}>+ count</button>
    </>
}

export default Counter