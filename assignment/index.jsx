// React Component
const Application = () => {
    const [state, setState] = React.useState(false)
    return <div>
        <img width={80} src={state ? "./image/on.png" : "./image/off.png"} alt="" />
        <button onClick={() => setState(!state)}>Switch</button>
    </div>
}

const app = document.querySelector("#app")
// app.innerHTML = Application()
// ReactDOM - Virtual DOM
const root = ReactDOM.createRoot(app)
root.render(<Application />)