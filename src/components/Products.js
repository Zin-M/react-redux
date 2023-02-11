import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/actions/productAction'

export default function Products({ product }) {
    const dispatch = useDispatch()

    return (
        <>
            <div className="col-4 mt-4  ">
                <div className="card">
                    <img src={product.images[0]} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5>{product.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className='btn btn-sm btn-danger' onClick={() => dispatch(remove(product.id))}>Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}
