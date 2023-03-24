// component Base
import { useState } from "react"
import Square from "./components/square"
import Board from "./components/board"

// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
// State: Là trạng thái (bộ nhớ) của component, nó quyết định componetn được hiện thị như thế nào
const App = () => {

    return <div
        className="h-[100vh] flex flex-col justify-center items-center">
        <Board>
            
        </Board>
    </div>
}

export default App