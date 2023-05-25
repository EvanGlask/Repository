import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoItem from "./components/TodoItem/TodoItem";
import React, {useState} from "react";
import Footer from "./components/Footer/Footer";

const Home = () => {

    const [todo, setTodo] = useState([
    ])

    return(
        <div className='home'>
            <Header/>
            <AddTodo todo={todo} setTodo={setTodo}/>
            <TodoItem todo={todo} setTodo={setTodo}/>
            <Footer/>
        </div>
    )}


export default Home