function Boton(admensaje: () => ((String))) {
    const enviarTexto = () => {
        console.log('envia texto boton')
        admensaje();
    }
    return (
    
          <button onClick={admensaje}>agregar</button>
       
      
    )
  }
  
  export default Boton