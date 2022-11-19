import { TodoItem } from './TodoItem/TodoItem';
import { FC } from 'react';
import styles from './todoList.module.scss'
import { TodoPanel } from '../TodoPanel/TodoPanel';

type Todo = {
    id: number,
    name: string,
    description: string
    // date: string,
    date: any
    files: string
    checked: boolean
}

interface TodoListProps {
    todos?: Todo[]
    edit: Todo['id'] | null | undefined
    checkTodo: (id: Todo['id']) => void
    deleteTodo: (id: Todo['id']) => void
    selectEdit: (id: Todo['id']) => void
    changeTodo: ({ name, description, date, files}: Omit<Todo, 'id' | 'checked'>) => void;
    mode?: 'edit'
}

export const TodoList: FC<TodoListProps> = ({ todos, checkTodo, deleteTodo, selectEdit, edit, changeTodo }) => {
    return (
        <div className={styles.container}>
            <div className={styles.todoList}>
                {todos && todos.map((todo) => {
                    if (todo.id === edit) {
                        return (
                            <TodoPanel
                                mode='edit'
                                key={todo.id}
                                changeTodo={changeTodo}
                                editTodo={{ name: todo.name, description: todo.description, files: todo.files, date: todo.date}} />
                        )
                    } else {
                        return (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                checkTodo={checkTodo}
                                deleteTodo={deleteTodo}
                                selectEdit={selectEdit}
                            />
                        )
                    }
                })}
            </div>
        </div>
    );
}