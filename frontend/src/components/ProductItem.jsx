import React ,{useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({ id, image, price }) => {
    
    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                
            </div>
        </Link>
    )
}

export default ProductItem