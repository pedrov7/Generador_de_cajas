import React from 'react';
import styles from './Relleno.module.css';


export const Listadecubos = ({cubos}) => {
    console.log(cubos);


    const crearCubo = (item) =>{
        console.log(item.color)
        return <div className = {styles.Caja} style = {{backgroundColor: item.color}}></div>
    }


  return (

    <>
    
    {/* {cubos.map(() => (<div>Hola</div>))} */}
    {cubos.map((item) => crearCubo(item))}

    </>


  )  

};
