const Header = () => {
    return <header className="bg-red-500">
        <div className="container mx-auto flex gap-4 justify-start items-center">
            <img className="w-[50px]" src="/logo.png" alt="" />
            <input className="grow-1" type="text" placeholder="search"/>
        </div>
    </header>
}

export default Header