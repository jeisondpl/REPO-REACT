import Title from './components/title/title'
import Ingreso from './components/input/input'
import './App.css'



function App() {

  const handleOnsubmit = (texto: string) => {
    console.log("Texto desde el padre",texto)
  }


  return (
    <>
      <Title />
      
      <p className="read-the-docs">
        Ingrese sus actividades
      </p>
     
      <Ingreso admensaje={handleOnsubmit}   />
      
    </>
  )
}

export default App
