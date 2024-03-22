import Banner from "../components/Banner"
import Card from "../components/Card"
import Header from "../components/Header"

const HomePage = () => {
    return <div>
        <Header />
        <Banner />
        <div className="flex gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
}

export default HomePage