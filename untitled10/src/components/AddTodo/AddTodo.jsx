import styles from './AddTodo.module.css'
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

const AddTodo = ({todo, setTodo}) => {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
            }]
        )
        setValue('')
    }

    return(
        <div className={styles.container}>
            <div className={styles.contBtn}>
                <button>Список</button>
                <button className={styles.notific1Btn}>Напоминания</button>
                <button>Еще</button>
            </div>
            <div className={styles.contInp}>
                <input
                    className={styles.input}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    placeholder='Введите текст'
                />
                <button onClick={saveTodo}><span className={styles.btnText}>Добавить</span>+</button>
            </div>
        </div>
)}

export default AddTodo