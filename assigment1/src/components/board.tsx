import { useEffect, useState } from "react"
import Square from './square'

const Board = ({ children }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    const [timer, setTimer] = useState(3)

    const handlePlay = (position) => {
        const newGame = game.map((i, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
            return i
        })
        setGame(newGame)
        setPlayer(!player)
    }

    const handleAutoPlay = () => {
        const emptyCells = game.reduce((acc, cell, index) => (cell === null ? [...acc, index] : acc), []);
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        handlePlay(emptyCells[randomIndex]);
        setTimer(3)
    }

    const winList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    const checkWinner = () => {
        for (let i = 0; i < winList.length; i++) {
            const [p1, p2, p3] = winList[i]
            if (game[p1] && game[p1] === game[p2] && game[p2] === game[p3]) {
                return [p1, p2, p3]
            }
        }
        return null
    }

    useEffect(() => {
        if (timer < 0) {
            handleAutoPlay()
        }

        const interval = setInterval(() => {
            setTimer(timer - 1)
        }, 1000)


        return () => clearInterval(interval)

    }, [timer])


    return <div className="relative w-[100vw] h-[100vh] flex justify-center items-center ">
        <div>
            <h2>Winner is: {checkWinner()}</h2>
            <h2>Timer: {timer}</h2>
        </div>
        <div className="grid grid-cols-3 gap-3 min-w-0 ">
            <Square value={game[0]} position={0} handlePlay={handlePlay} winner={checkWinner()} />
            <Square value={game[1]} position={1} handlePlay={handlePlay} winner={checkWinner()} />
            <Square value={game[2]} position={2} handlePlay={handlePlay} winner={checkWinner()} />
            <Square value={game[3]} position={3} handlePlay={handlePlay} winner={checkWinner()} />
            <Square value={game[4]} position={4} handlePlay={handlePlay} winner={checkWinner()} />
            <Square value={game[5]} position={5} handlePlay={handlePlay} winner={checkWinner()} />
            <Square value={game[6]} position={6} handlePlay={handlePlay} winner={checkWinner()} />
            <Square value={game[7]} position={7} handlePlay={handlePlay} winner={checkWinner()} />
            <Square value={game[8]} position={8} handlePlay={handlePlay} winner={checkWinner()} />
        </div>
        <div
            style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                left: mouse.x,
                top: mouse.y,
                width: 10,
                height: 10,
            }}></div>
    </div>
}

export default Board