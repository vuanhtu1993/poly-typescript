// Props: Là một đối tượng đặc biệt (không thể bị thay đổi)
// được truyền từ cha xuống con
// Là để tái sử dụng code giữa các component
const Button = (props: { title: string }) => {
    // props.title = "Thay doi title"
    return <button
        className="rounded-md bg-[#FFD333] px-5 py-2.5 text-sm font-medium text-black"
    >
        {props.title}
    </button>
}

export default Button