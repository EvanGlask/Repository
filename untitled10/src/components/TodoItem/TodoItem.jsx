import styles from './TodoItem.module.css'
import {useState} from "react";
import {ReactComponent as Trash} from '../icons/Trash.svg';
import {ReactComponent as Edit} from '../icons/Edit.svg';


const TodoItem = ({todo, setTodo}) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id!=id);
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
                if (item.id == id) {
                    item.title = value
                }
                return item
            })
        setTodo(newTodo)
        setEdit(null)
    }


    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return(
        <div className={styles.container}>
            <ul className={styles.ul}>
                {
                    todo.map(item => (
                        <li className={styles.li} key={item.id}>
                            {
                                edit == item.id ?
                                    <div>
                                        <input
                                            className={styles.editInput}
                                            onChange={handleChange}
                                            value={value}
                                        />
                                    </div> : <span>{item.title}</span>
                            }

                            {
                                edit == item.id ?
                                    <div>
                                        <button className={styles.editBtn} onClick={()=>saveTodo(item.id)}>Изменить</button>
                                    </div> :
                                    <div className={styles.btnCont}>
                                        <button onClick={() => deleteTodo(item.id)}>
                                            <Trash className={styles.icons}/>
                                        </button>
                                        <button
                                            onClick={() => editTodo(item.id, item.title)}>
                                            <Edit className={styles.icons}/>
                                        </button>
                                    </div>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoItem