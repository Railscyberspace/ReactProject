//import logo from './logo.svg';
import './App.css';
import Decrement from './components/Decrement'
import Message from './components/Message'
import Timer from './components/Timer'
//import ToDoList from './components/ToDoList'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import Login from './components/Login'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import List from './components/List'
import Greet from './components/Greet'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form'
function App()
{
  return (
    <div className="App">
      <Login></Login>
      <Counter></Counter>
      <Decrement></Decrement>
      <Message ></Message>
      <Timer></Timer>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <ParentComponent></ParentComponent>
      <UserGreeting></UserGreeting>
      <List></List>
      <Greet></Greet>
      <NameList></NameList>
      <Form></Form>

      <StyleSheet primary="true"></StyleSheet>
      <h1 className="error">error</h1>
      <h1 className={styles.sucess}>Sucess</h1>

    </div>
  )
}


export default App; 