import Avatar from "./components/avatar"

// Props: Là một đối tượng, truyền dữ liệu từ component cha xuống component con
// Imutable
const user = {
    name: "Tran Van D",
    age: 20,
    image: "https://picsum.photos/id/237/100/100"
}
const App = () => {
    // JSX
    const showInfo = () => {
        console.log("xxx")
    }
    return <>
        {user.age}
        <span className="text-red-500">Parent</span>
        <Avatar user={user} age={20} showInfo={showInfo}/>
    </>
}

export default App