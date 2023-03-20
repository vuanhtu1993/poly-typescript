import Avavtar from "./components/avatar"

// component Base

// Props: Là một đối tượng mà dùng để truyền thông tin từ Component cha xuống component con
const App = () => {
    const user = {
        name: "Vu Anh Tu",
        age: 30,
    }
    // JSX
    return (
        <div>
            <h1>Hello world</h1>
            <Avavtar user={user} showInfo={() => console.log(user)}>
                <h2>Lớp we17304</h2>
            </Avavtar>
        </div>
    )
}

export default App