import React from "react"

const Avatar = ({user, age, showInfo}) => {
    user.age = 21;
    return <div className="">
        <div className="text-blue-400">Children</div>
        <div>Tên: {user.name}</div>
        <div>Tuổi: {user.age}</div>
        <div>Avatar: <img className="border rounded-[50%]" src={user.image} alt="" /></div>
        <button onClick={showInfo}>Magic</button>
    </div>
}

export default Avatar