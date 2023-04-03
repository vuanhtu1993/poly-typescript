import {Link} from 'react-router-dom'
import { IProduct } from "../models"

type ProductProp = {
  data: IProduct
}

const Product = ({data}: ProductProp) => {
    return <Link to={`/product/${data.id}`} className="block">
    <img
      alt="Art"
      src={data?.images[0].base_url}
      className="w-full object-cover"
    />
  
    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
      {data.name}
    </h3>
  
    <p className="mt-2 max-w-sm text-gray-700">
      {data.description.substring(0, 30)}
    </p>
  </Link> 
}

export default Product