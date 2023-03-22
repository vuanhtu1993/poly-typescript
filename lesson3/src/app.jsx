import { useState } from "react"
import Avavtar from "./components/avatar"

// component Base

// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
// State: Là trạng thái (bộ nhớ) của component, nó quyết định componetn được hiện thị như thế nào
const App = () => {
    const [counter, setCounter] = useState(10)
    function increase() {
        setCounter(counter + 1)
    }
    console.log(counter);
    return <div className="h-[100vh] flex flex-col justify-center items-center">
        <h1>{counter}</h1>
        <button onClick={increase} className="border hover:bg-pink-500">Tăng dần</button>
    </div>
}

export default App