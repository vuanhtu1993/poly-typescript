import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import HomePage from './pages/home'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = await HomePage()
