import {useParams} from 'react-router-dom'

const ProductDetail = () => {
    const {id} = useParams()
    console.log(id);
    
    return <h1>Product detail</h1>
}

export default ProductDetail