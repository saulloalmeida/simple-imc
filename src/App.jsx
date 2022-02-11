import { Flex} from "@chakra-ui/react"
import { useState } from "react"

import AlturaBox from "./components/AlturaBox"
import CalcButton from "./components/CalcButton"
import Mensagem from "./components/Mensagem"
import PesoBox from "./components/PesoBox"

export default function App() {
  const [altura, setAltura] = useState(100)
  const [peso, setPeso] = useState(50)
  const [resultado, setResultado] = useState(0)
  const [mensagemText, setMensagemText] = useState('')

  function calc() {
    const alturaCorreta = altura / 100
    const result = peso / (alturaCorreta * alturaCorreta)

    if (result < 18.5) {
      setMensagemText(`${result.toFixed(2)} - Magreza`)
    } else if (result >= 18.5 && result <= 24.9) {
      setMensagemText(`${result.toFixed(2)} - Normal`)
    } else if (result >= 25 && result <= 29.9) {
      setMensagemText(`${result.toFixed(2)} - Sobrepeso`)
    } else if (result >= 30 && result <= 39.9) {
      setMensagemText(`${result.toFixed(2)} - Obesidade`)
    } else {
      setMensagemText(`${result.toFixed(2)} - Obesidade Morbida`)
    }

    setResultado(result)
  }

  function handleClick(value) {
    setPeso(peso + value)
  }

  function handleOnChange(altura){
    setAltura(altura)
  }

  return (
    <Flex direction={"column"} w="100%" h="100vh" bg="gray.800" align="center" justify="center">
      <AlturaBox handleOnChange={handleOnChange} altura={altura}/>
      <PesoBox handleClick={handleClick} peso={peso}/>
      <CalcButton calc={calc}/>

      {mensagemText !== '' && <Mensagem mensagemText={mensagemText} />}
    </Flex>

  )
}