// Props: Là object đặc biệt, cho truyền dữ liệu từ cha xuống con
// Props không thể bị thay đổi
const Button = (props: { title: string }) => {
    return <button>
        {props.title}
    </button>
}

export default Button