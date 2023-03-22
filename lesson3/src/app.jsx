import { useState } from "react"
import Avatar from "./components/avatar"

// Props: Là một đối tượng, truyền dữ liệu từ component cha xuống component con
// Imutable
// State: Trạng thái - Bộ nhớ của component, Quyết định component được hiển thị như thế nào

const App = () => {
    const [counter, setCounter] = useState(10)
    // counter
    function increase() {
        setCounter(counter + 1)
    }
    console.log(counter);
    return <div className="flex justify-center items-center">
        <div>{counter}</div>
        <button onClick={increase} className="border hover:bg-red-300">Tăng</button>
    </div>
}

export default App