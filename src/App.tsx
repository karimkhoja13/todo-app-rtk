import { Provider } from 'react-redux'
import './App.css'
import { store } from './store/store'
import AddTaskForm from './components/add-task-form'

function App() {
  return (
    <Provider store={store}>
      <h1>Todo App</h1>
      <AddTaskForm />
    </Provider>
  )
}

export default App
