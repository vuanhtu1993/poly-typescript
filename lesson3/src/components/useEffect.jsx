// UseEffect

const { useState, useEffect } = require("react")

const UseEffectComponent = () => {
    const [count, setCount] = useState(0)
    const [image, setImage] = useState(null)

    const handleShowImage = async () => {
        const { url } = await fetch('https://picsum.photos/200/300')
        // console.log(data);
        setImage(url)
    }

    // useEffect(() => {
    //     // handleShowImage()
    //     setCount(count + 1)
    // })

    // Chỉ chạy 1 lần sau khi render
    // useEffect(() => {
    //     setCount(count + 1)
    // }, [])

    // Phụ thuộc vào các phần tử trong deps
    // useEffect(() => {
    //     handleShowImage()
    // }, [count])

    // Absolutly fail
    // handleShowImage()
    // setCount(count + 1)

    return <div className="flex flex-col">
        <div>
            <img src={image} alt="" />
        </div>
        <h1>{count}</h1>

        <button className="bg-red-300" onClick={() => setCount(count + 1)}>+ count</button>
    </div>
}

export default UseEffectComponent;