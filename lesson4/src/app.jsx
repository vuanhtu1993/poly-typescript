import { useState } from "react";
import Avatar from "./components/avatar";
import Square from "./components/square";
import Board from "./components/board";

// Props: Là một đối tượng, truyền dữ liệu từ cha xuống con
// Props: Immuatable
const App = function () {

    return <div className="h-[100vh] flex justify-center items-center">
        <Board>
            
        </Board>
    </div>
}

export default App;