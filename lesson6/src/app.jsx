const List = function({onShow}) {
    return <div onClick={onShow}>List product</div>
}

const App = () => {
    return <>
        <List onShow={() => console.log("List product")}/>
    </>
}

export default App