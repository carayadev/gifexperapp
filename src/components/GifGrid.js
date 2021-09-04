import React from 'react'
import { GifGridItems } from './GifGridItems'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
      const { data:images, loading } = useFetchGifs(category);
    
    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'>{ category }</h3>
            { loading && <p className='card animate__animated animate__flash'>Loading</p> }
             <div className='card-grid'>
                <ol>
                    { images.map(img => (
                        <GifGridItems 
                            key={img.id}
                            { ...img }
                        />
                    ))}
                </ol>
            </div>
        </>
    )
}
