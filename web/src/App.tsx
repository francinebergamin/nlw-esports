// REACT = JSX: JavaScript + XML (HTML)
interface ButtonProps{
  /* Não obrigatória: title?: string; */
  /* Obrigatória */ title?: string;
}

/* O 1º parâmetro da função exige as propriedades (props) do elemento
   e as propriedades têm que ser definidas (o que é que elas carregam? 
   Nesse caso, é ButtonProps) */
function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <Button title="Enviar 1"/>
      <Button title="Enviar 2"/>
      <Button title="Enviar 3"/>
      <Button title=""/>
    </div>
  )
}

export default App
