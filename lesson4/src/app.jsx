import Avatar from "./components/avatar"

// Props: Là một đối tượng, để truyền dữ liệu từ cha xuống con, nhưng không có chiều ngược lại
// Props: Immutable >< mutable
const App = () => {
    const user = {
        name: "Le Tuan Viet",
        role: "Student"
    }
    return <>
        {/* Declarative */}
        <h1>Hello world</h1>
        <h2>{user.name}</h2>
        <Avatar name={user.name} user={user} showInfo={() => console.log(user.name)}/>
    </>
}

export default App