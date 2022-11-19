import { FC } from 'react';
import { Button } from '../../Button/Button';
import styles from './todoItem.module.scss'

type Todo = {
    id: number,
    name: string,
    date: any
    files: string
    description: string
    checked: boolean
}

interface TodoItemProps {
    todo: Todo
    checkTodo: (id: Todo['id']) => void
    deleteTodo: (id: Todo['id']) => void
    selectEdit: (id: Todo['id']) => void
}

export const TodoItem: FC<TodoItemProps> = ({ todo, checkTodo, deleteTodo, selectEdit }) => {

    const { todoItemDisabled, todoItem } = styles

    return (
        <div className= {todo.checked ? todoItem : todoItemDisabled}>
            <div className={styles.info}>
                <div className={styles.title}>{todo.name}</div>
                <div className={styles.date}>{todo.date}</div>
                <div className={styles.desc}>{todo.description}</div>
                <div className={styles.files}>{todo.files}</div>
            </div>
            <div className={styles.btnGroup}>
                <Button
                    onClick={() => selectEdit(todo.id)}
                    text='Редактировать'
                    mode='chenged' />
                <Button
                    text='Удалить'
                    mode='deleted'
                    onClick={() => deleteTodo(todo.id)} />
                <Button
                    onClick={() => checkTodo(todo.id)}
                    text='Выполнено'
                    mode='completed' />
            </div>
        </div>
    );
}