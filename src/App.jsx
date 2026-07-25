import './App.css';
import TodoApp from './Components/TodoApp';

//<></> Fragment,sirve para contener elementos sin q se vea el div
function App() {



  const notas = 
  [
    {
      id: crypto.randomUUID(),
      text: "Soy la nota 1",
    },
    {
      id: crypto.randomUUID(),
      text: "Soy la nota 2",
    }
  ]

  //const TituloAPPS = {
  //  tituloAPP: "Soy To DO APP",
  //  subtitulo: "Soy Subtitulo APP"
  //}
  //{...TituloAPPS}

  return(    
    <section className='ContainerTodoApp'>
      <TodoApp notas={notas} ></TodoApp>
    </section>
  );
  
  
}

export default App;
