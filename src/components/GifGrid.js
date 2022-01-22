
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
    //const state = useFetchGifs();

    const {data, loading } = useFetchGifs();

    // const [images, setImages] = useState([]);
   
    // useEffect(()=>{
    //     getGifs(category)
    //         .then (setImages) 
    //         //.then (imgs => setImages(imgs)) 
    // }, [ category ])


            /*
                    images.map( itemImg => (
                        <li key= { itemImg.id }>{ itemImg.title }</li>
                    ))
                    */
                   /*
                    images.map( ({id, title }) => (
                        <li key= { id }>{ title }</li>
                    ))
                   */
    return (
        <>
        <h3 className='card animate__animated animate__bounce animate__fadeIn'> { category } </h3>

        { loading && <p className='card animate__animated animate__bounce animate__flash'>'Cargando...'</p>}

        <div className="card-grid"> 
                {
        
                    data.map( img => (
                        <GifGridItem 
                            key={ img.id } 
                            {...img }
                        />                              
                    ))

                }
        </div>
        </>
    )
}
