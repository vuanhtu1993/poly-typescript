import Avatar from "./components/avatar";

// Props: Là một đối tượng, truyền dữ liệu từ cha xuống con
// Props: Immuatable
const App = function () {
    const users = {
        name: "Vu Anh Tu",
        role: "Project manager"
    }
    return <>
        <h1>Hello world</h1>
        <h2>{users.name}</h2>
        {/* Declaration */}
        {/* {users.map(user => <Avatar name={user.name} role={user.role}/>)} */}
        <Avatar name={users.name} role={users.role}/>
    </>
}

export default App;