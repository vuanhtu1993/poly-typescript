import {Outlet} from 'react-router-dom'

import UserFooter from "./userFooter"
import UserHeader from "./userHeader"
import Slider from './slider'

const UserLayout = () => {
    return <>
        <UserHeader/>
        <Slider/>
        <Outlet/>
        <UserFooter/>
    </>
}

export default UserLayout