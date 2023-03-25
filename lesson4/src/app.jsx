import { useState } from "react"
import Avatar from "./components/avatar"

// Props: Là một đối tượng, để truyền dữ liệu từ cha xuống con, nhưng không có chiều ngược lại
// Props: Immutable >< mutable
const App = () => {
    const [count, setCount] = useState(10)
    // let count = 10

    const increase = () => {
        setCount(count + 1)
        console.log(count);
    }

    return <div className="flex justify-center items-center h-[100vh]">
        <div>Count: {count}</div>
        <button onClick={increase} className="bg-red-300">+1 count</button>
    </div>
}

export default App