// React
const App = () => {
    // Declarative
    const [state, setState] = React.useState(false)
    return <div>
        <img width={80} src={state ? "./image/on.png" : "./image/off.png"} alt="" />
        <button onClick={() => setState(!state)}>Switch</button>
    </div>
}

const app = document.querySelector("#app")
// ReactDOM
const root = ReactDOM.createRoot(app)
root.render(<App />)

