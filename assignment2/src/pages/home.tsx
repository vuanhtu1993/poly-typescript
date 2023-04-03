import { useEffect, useState } from "react"
import Product from "../components/product"
import { getAll } from "../api/products"
import { IProduct } from "../models"

const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return <div>
        <h1>Sản phẩm nổi bật</h1>
        <div className="grid grid-cols-4 gap-3">
            {products.map(product =>
                <Product
                    data={product}
                    key={product.id} />)
            }
        </div>
    </div>
}

export default Home