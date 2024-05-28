import { useEffect, useState } from 'react'

function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setImc] = useState(0)
  const[classificacao, setClassificacao] = useState('')

  const handleChangeAltura = (e) =>{
    setAltura(parseFloat(e.target.value))
  }

  const handleChangePeso = (e) =>{
    setPeso(parseFloat(e.target.value))
  }

  const handleCalculaImc = () =>{
    setImc(peso / (altura*altura)*10000)
  }

  useEffect(() => {
    if (imc < 18.5) {
      setClassificacao('Baixo peso');
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao('Peso ideal');
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc < 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imc >= 35 && imc < 39.9) {
      setClassificacao('Obesidade grau 2');
    } else if (imc >= 40) {
      setClassificacao('Obesidade grau 3');
    } else {
      setClassificacao('');
    }
  }, [imc]);


  

  return (
    <>
    <label htmlFor="altura">Peso</label>
    <input type="number" onChange={handleChangePeso} value={peso} placeholder='Informe o seu peso' />
    <label htmlFor="peso">Altura(cm)</label>
    <input type="number" onChange={handleChangeAltura} value={altura} placeholder='Informe a sua altura' />
    
      <button onClick={handleCalculaImc}>Calcular o IMC</button>

    <p>O seu IMC é {imc.toFixed(2)}</p>
    {classificacao}

    </>
  )
}

export default App
