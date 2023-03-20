import React from "react"

const Avatar = ({user, showInfo, age}) => {
    age = 21
    return <>
        <div>Tên: {user.name}</div>
        <div>Tuổi: {age}</div>
        <div>Avatar: <img src={user.image} alt="" /></div>
        <button onClick={showInfo}>Magic</button>
    </>
}

export default Avatar