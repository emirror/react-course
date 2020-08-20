import React, { useState } from 'react';
import Form from './Form';
import List from './List';


export const AppContext = React.createContext(null)
function App() {
  const [allTodos, setAllTodos] = useState([])
  

  function getValue(todo) {
    setAllTodos([...allTodos, {
      id: Math.floor(Math.random() * 100) + 1,
      text: todo,
      status: true,

    }]);
    console.log(allTodos)
  }

  function getId(id) {
    const remainTodos = allTodos.filter(todos => {
      console.log(todos.id)
      return todos.id != id
    })
    setAllTodos([...remainTodos]);
  }

  function getStatus(id, chk) {

    for (let i in allTodos) {
      if (allTodos[i].id == id) {
        allTodos[i].status = chk;
        break;
      }
    }

    const DoneTodos = allTodos.filter(todo => {
      return !todo.status
    })

    const UndoneTodos = allTodos.filter(todo => {
      return todo.status
    })

    setAllTodos([...UndoneTodos]);

    let DoneTodosItems = [...DoneTodos]
    
  }




  return (
    <AppContext.Provider value={{
      getId,
      getStatus
    }
    }>
      <div className="App">
        <Form onSubmit={getValue} />
        <List propAllTodos={allTodos}/>
      </div>
    </AppContext.Provider>

  );
}

export default App;
