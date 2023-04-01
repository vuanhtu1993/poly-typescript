import {Outlet} from 'react-router-dom'

const UserLayout = () => {
    return <>
        <header>
            Header
        </header>
        {/* Content */}
        <Outlet/>
        <footer>
            Footer
        </footer>
    </>
}

export default UserLayout