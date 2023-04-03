import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

import { IProduct } from "../models"
import { getById } from "../api/product"

const ProductDetail = (props: any) => {
    const {id} = useParams() 
    
    const [product, setProduct] = useState<IProduct>({} as IProduct)

    const fetchProductById = async (id: string) => {
        try {
            const {data} = await getById(id)
            setProduct(data)
        }catch(err) {

        }
    }

    useEffect(() => {
        if(id) {
            fetchProductById(id)
        }
    }, [])
    return <div className="container mx-auto">
        <img src={product.images?.[0].base_url} alt="" />
        <h3>{product.name}</h3>
    </div>
}

export default ProductDetail