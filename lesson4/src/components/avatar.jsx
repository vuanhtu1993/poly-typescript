const Avatar = ({name, role}) => {
    name = "Van Duy"
    return <div className="flex items-center">
        <h1>{name}</h1>
        <img className="border-2 border-white rounded-[50%]" src="https://picsum.photos/id/237/50/50" alt="" />
        <p>{role}</p>
        <button className="bg-pink-400" onClick={console.log}>Show Info</button>
    </div>
}

export default Avatar