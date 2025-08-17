import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../../data/Productdata';


const Productdetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(products.find((product) => product.id === id));

  

  return (
    <div>

        <p>
            {id}
        </p>

       { product ? (
        <div className="flex flex-col items-center p-5">
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <img src={product.image} alt={product.name} className="mb-4" />
          <p className="text-lg font-semibold">Rating: {product.rating}</p>
          <p className="text-lg font-semibold">Reviews: {product.reviews}</p>
          <p className="text-lg font-semibold">Price: {product.salePrice}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  )
}

export default Productdetails
