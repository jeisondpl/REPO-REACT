import { useState } from 'react'

interface Props {
  admensaje: (texto: string) => void
}

function Input({ admensaje }: Props) {
 
 
  const [texto, setTexto] = useState('')

 
  return (
    <div>
      <input 
      value={texto}
      type='text' 
      placeholder='ingresa una actividad' 
      name='actividadtxt' 
      onChange={(ev) => setTexto(ev.target.value)}/>
      
      <button onClick={() => admensaje(texto)}>agregar</button>
    </div>
  )
}

export default Input
