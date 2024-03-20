// React Component
const Application = () => {
    return <div>
        <img src="./image/off.png" alt="" />
        <button>Switch</button>
    </div>
}

const app = document.querySelector("#app")
// app.innerHTML = Application()
// ReactDOM - Virtual DOM
const root = ReactDOM.createRoot(app)
root.render(<Application />)