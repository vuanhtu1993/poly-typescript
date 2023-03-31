import {Outlet} from 'react-router-dom'

const UserLayout = () => {
    return <>
        {/* Header */}
        <header className="bg-red-500">
            <div className="container mx-auto flex items-center gap-4">
                <img className="w-[50px]" src="/logo.png" alt="" />
                <input className="grow" type="text" placeholder="search"/>
            </div>
        </header>
        {/* Content */}
        <Outlet/>
        {/* Footer */}
        <footer>
            footer
        </footer>
    </>
}

export default UserLayout