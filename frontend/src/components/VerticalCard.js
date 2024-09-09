import React from 'react'
import { Link } from 'react-router-dom'
import displayINRCurrency from '../helpers/displayCurrency'

const VerticalCard = ({ data, loading }) => {
    return (
        <div className='grid grid-cols-1 gap-4'>
            {loading ? (
                // Loading placeholder
                <div className='grid grid-cols-1 gap-4'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className='bg-white rounded shadow p-4 animate-pulse'>
                            <div className='h-40 bg-gray-200 rounded mb-4'></div>
                            <div className='h-6 bg-gray-200 rounded mb-2'></div>
                            <div className='h-4 bg-gray-200 rounded mb-2'></div>
                            <div className='flex justify-between items-center'>
                                <div className='w-16 h-4 bg-gray-200 rounded'></div>
                                <div className='w-24 h-4 bg-gray-200 rounded'></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                data.map((product) => (
                    <Link to={`/product/${product?._id}`} key={product?._id} className='bg-white rounded shadow p-4 hover:shadow-lg transition-shadow'>
                        <div className='h-40 bg-gray-200 rounded mb-4'>
                            <img src={product?.productImage[0]} alt={product?.productName} className='object-cover h-full w-full rounded'/>
                        </div>
                        <h2 className='text-lg font-semibold mb-2'>{product?.productName}</h2>
                        <p className='text-gray-600 mb-2'>{product?.category}</p>
                        <div className='flex justify-between items-center'>
                            <p className='text-red-500 font-semibold'>{displayINRCurrency(product?.sellingPrice)}</p>
                            {product?.price && (
                                <p className='text-gray-500 line-through'>{displayINRCurrency(product?.price)}</p>
                            )}
                        </div>
                    </Link>
                ))
            )}
        </div>
    )
}

export default VerticalCard
