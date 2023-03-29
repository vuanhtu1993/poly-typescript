const { useState, useEffect } = require("react")

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [image, setImage] = useState(null)

    // setCounter(counter + 1)

    const handleShowImage = async () => {
        const {url} = await fetch('https://picsum.photos/200/300')
        setImage(url)
        // setImage()
    }

    

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         handleShowImage()
    //     }, 1000)

    //     return () => clearInterval(interval)
    // }, [counter]) // Chứa các tham số mà useEffect phụ thuộc
    // console.log(counter);

    return <>
        <h1>Counter: {counter}</h1>
        <img src={image} alt="" />
        <button
            className="bg-blue-400"
            onClick={() => setCounter(counter + 1)}>+ Counter</button>
    </>
}

export default Counter