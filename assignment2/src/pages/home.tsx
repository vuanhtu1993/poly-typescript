import Product from "../components/product"

const Home = () => {
    return <div>
        <h1>Sản phẩm nổi bật</h1>
        <div className="grid grid-cols-4 gap-3">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </div>
}

export default Home