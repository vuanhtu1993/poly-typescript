import React from "react"

const Avatar = ({user, age, showInfo}) => {
    user.age = 21;
    return <div className="flex items-center">
        <div>Tên: {user.name}</div>
        <div>Tuổi: {user.age}</div>
        <div>Avatar: <img className="w-[50%] border rounded-[50%]" src={user.image} alt="" /></div>
        <button onClick={showInfo}>Magic</button>
    </div>
}

export default Avatar