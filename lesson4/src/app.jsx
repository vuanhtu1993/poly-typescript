import { useState } from "react";
import Avatar from "./components/avatar";

// Props: Là một đối tượng, truyền dữ liệu từ cha xuống con
// Props: Immuatable
const App = function () {
    // let count = 10
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(count + 1)
        // console.log(count);
    }
    return <div className="h-[100vh] flex justify-center items-center">
        count: {count}
        <button className="border bg-red-300" onClick={handleIncrease}>Increase</button>
    </div>
}

export default App;