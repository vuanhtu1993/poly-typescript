import { Outlet } from "react-router-dom"

import Header from "./header"
import Slider from "./slider"

const UserLayout = () => {
    return <>
        <Header/>
        <Slider/>
        <Outlet/>
    </>
}

export default UserLayout