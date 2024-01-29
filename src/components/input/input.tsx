import { useState } from "react";
function Input() {
    const [texto, setTexto] = useState('');

    function admensaje() {
        console.log('clic con boton '+ texto);
    }
 
    return (
    
        <div>
          <input type="text"
          placeholder="ingresa una actividad" 
          name='actividadtxt'
          onChange={ev =>setTexto(ev.target.value)}>
          </input>
          <button onClick={admensaje}>agregar</button>
        </div>
      
    )
  }
  
  export default Input