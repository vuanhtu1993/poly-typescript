import { useEffect, useState } from "react"
import Product from "../components/product"
import { IProduct } from "../models"
import { getAll } from "../api/product"

const Homepage = () => {    
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchProduct = async () => {
        try {
            const {data} = await getAll()
            setProducts(data)
        } catch(err) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return <div className="container mx-auto">
        <h1>ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-4 gap-4">
            {products.map(p => <Product data={p} key={p.id}/>)}
        </div>
    </div>
}

export default Homepage