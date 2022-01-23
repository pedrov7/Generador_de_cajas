import { useState } from 'react';
import { Listadecubos } from './Listadecubos';
import ListColors from './ListOfColors';



const ShowAlert = props => {

    // const style = {backgroundColor: "red"};

    const iniciaCubos = [
        // {color: "red"},{color: "blue"},{color: "black"}, {color: "pink"}
    ]

    const [cubos, setCubos] = useState(iniciaCubos);
    const [color, setColor] = useState("");   
     

    const handleChange = (e) => { 
        setColor(e.target.value);

        
        
    }

    const handleSubmit = () =>{  
        
        const findColor = ListColors.find(item => item === color);



        // const newCubo = {color: color};
        // setCubos([...cubos, newCubo])


        if(findColor){
            const newCubo = {color: color};
            setCubos([...cubos, newCubo])
        }
        else{
            alert("Color errado");
        }

    }


    return (

    <div >
        <br></br>
        <h1>Ingrese nombres de colores en inglés y en letras minúsculas</h1>
        <br></br>
        <div onSubmit={handleChange} className="input-group mb-3">
            <input onChange = {handleChange} type="text"className="form-control" placeholder="Ingrese un color" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button onClick = {handleSubmit} type = "submit"  className="btn btn-outline-secondary" id="button-addon2">Añadir</button>
        </div>
     
   
        {/* asi se manipula el color de fondo de un HTML */}

        {/* <div className = {styles.Caja} id="pedro" style = {{backgroundColor: letra}}></div>
        <div className = {styles.Caja} id="pedro" style = {{backgroundColor: letra}}></div>
        <div className = {styles.Caja} id="pedro" style = {{backgroundColor: letra}}></div> */}

        
        <Listadecubos cubos = {cubos}/>
        

        <div>

            <p>Color Ingresado: {color}</p>
            
        </div>


    </div>

);

}   


export default ShowAlert;