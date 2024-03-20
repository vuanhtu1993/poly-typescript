// Props: Là một đối tượng đặc biệt (không thể bị thay đổi)
// được truyền từ cha xuống con
// Là để tái sử dụng code giữa các component
const Button = (props: { title: string }) => {
    return <button>
        {props.title}
    </button>
}

export default Button