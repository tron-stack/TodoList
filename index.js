function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build healthcare app',
      isCompleted: false,
    }   

  ]);
    return (<>
      ...{todos.map((todo,i) => <div keys ={i}>{todo.text}</div>)}
    </>);
}

ReactDOM.render(

    <App/>,
    document.getElementById('root')
)