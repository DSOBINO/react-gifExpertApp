import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const  categories = ['One Punch ', 'Samurai x', 'Dragon Ball'];

    const [categories, setCategories] = useState(['condor']);

    const handleAdd = (event,data) => {
    
         setCategories(cats => [...cats, data]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>  
            <hr />       
            <AddCategory setCategories = { setCategories } />
            {/* <button onClick={ (event)=> handleAdd(event,'Pico1')}>Agregar P1</button> 
            <button onClick={ (event)=> handleAdd(event,'Pico2')}>Agregar P2</button> 
            <button onClick={ (event)=> handleAdd(event,'Pico3')}>Agregar P3</button> 
            <button onClick={ (event)=> handleAdd(event,'Pico4')}>Agregar P4</button> 
            <button onClick={ (event)=> handleAdd(event,'Pico5')}>Agregar P5</button>  */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key         = { category }
                            category    = { category } 

                        />
                    ))
                }
            </ol>
        </>
    )
}
