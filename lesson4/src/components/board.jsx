import { useState } from "react"
import Square from "./square"

const Board = () => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)

    const handlePlay = (position) => {
        // console.log(position);
        // game[position] = "X"
        const newGame = game.map((g, index) => {
            if(position === index) {
                return player ? "X" : "O"
            }
            return g
        })
        setGame(newGame)
        setPlayer(!player)
    }

    return <div className="grid grid-cols-3 gap-2">
        <Square value={game[0]} handlePlay={() => handlePlay(0)}/>
        <Square value={game[1]} handlePlay={() => handlePlay(1)}/>
        <Square value={game[2]} handlePlay={() => handlePlay(2)}/>
        <Square value={game[3]} handlePlay={() => handlePlay(3)}/>
        <Square value={game[4]} handlePlay={() => handlePlay(4)}/>
        <Square value={game[5]} handlePlay={() => handlePlay(5)}/>
        <Square value={game[6]} handlePlay={() => handlePlay(6)}/>
        <Square value={game[7]} handlePlay={() => handlePlay(7)}/>
        <Square value={game[8]} handlePlay={() => handlePlay(8)}/>
    </div>
}

export default Board