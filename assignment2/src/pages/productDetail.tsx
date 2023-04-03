import { useState } from "react"
import {useParams} from 'react-router-dom'

import { IProduct } from "../models"
import { getById } from "../api/product"

const ProductDetail = () => {
    // assertion
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const {id} = useParams()

    const fetchProductById = async () => {
        // const {data} = await getById()
    }

    return <div className="container">
        Chi tiet sp {id}
    </div>
}

export default ProductDetail