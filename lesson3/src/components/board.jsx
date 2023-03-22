const Board = ({children}) => {
    return <div className="grid grid-cols-3 gap-2 w-[240px]">
        {children}
    </div>
}

export default Board