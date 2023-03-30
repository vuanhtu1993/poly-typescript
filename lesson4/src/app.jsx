import { useState } from "react"
import Avatar from "./components/avatar"
import Square from "./components/square"
import Board from "./components/board"
import Counter from "./components/counter"

// Props: Là một đối tượng, để truyền dữ liệu từ cha xuống con, nhưng không có chiều ngược lại
// Props: Immutable >< mutable
// State: Trạng thái (bộ nhớ) của component - Cho phép component thay đổi khi tương tác
const App = () => {
    return <div className="flex justify-center items-center h-[100vh]">
        <Counter/>
    </div>
}

export default App