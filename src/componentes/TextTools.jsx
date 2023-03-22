import { useState } from 'react'
import '../App.css'

function TextTools() {
  const [text, setText] = useState('')

  function capitalize(str) {
    console.log(str)
    const resultado = str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
      return a.toUpperCase()
    });
    return resultado
  }

  function alternarLetras(str) {
    let resultado = "";
    for(let i = 0; i < str.length; i++) {
      if(i % 2 === 0) {
        resultado += str[i].toUpperCase();
      } else {
        resultado += str[i].toLowerCase();
      }
    }
    return resultado;
  }

  function invertido(str) {
    let resultado = "";
    for(let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  }
  return (
    <div className="App">
      <h1>Transforme o texto</h1>
      <button onClick={() => setText('')}>Limpar</button>
      <div className='textBox'>
        <textarea  type="text" value={text} placeholder='Informe o texto' name="texto" id="texto" onChange={(text) => {
          setText(text.target.value)
        }} />
        <div>

          <button onClick={(event) => {
            event.preventDefault()
            setText(text.toUpperCase())
          }}>MAIUSCULO</button>

          <button onClick={(event) => {
            event.preventDefault()
            setText(text.toLowerCase())
          }}>minusculo</button>

          <button onClick={(event) => {
            event.preventDefault()
            setText(capitalize(text))
          }}>Capitalize</button>

          <button onClick={(event) => {
            event.preventDefault()
            setText(text.replaceAll(' ',',').replaceAll('\n',','))

          }}>Separa,por,vingula</button>

          <button onClick={(event) => {
            event.preventDefault()
            setText(alternarLetras(text))
          }}>OnDa</button>

          <button onClick={(event) => {
            event.preventDefault()
            setText(invertido(text))
          }}>Invertido | oditrevnI</button>
        </div>
      </div>
    </div>
  )
}

export default TextTools