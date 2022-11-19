import { useState, FC } from 'react';
import { Button } from '../Button/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './todoPanel.module.scss'

const DEFAULT_TODO = { name: 'Уборка', description: 'Погладить, постирать, вытереть пыль, убрать за котом', date: '15.05.2022', files: 'файл какой-то' };

type Todo = {
    id: number,
    name: string,
    date: any
    files: string
    description: string
    checked: boolean
}

interface AddITodoPanel {
    mode: 'add'
    addTodo: ({ name, description, date, files }: Omit<Todo, 'id' | 'checked'>) => void;
}

interface EditITodoPanel {
    mode: 'edit'
    editTodo: Omit<Todo, 'id' | 'checked'>;
    changeTodo: ({ name, description, date, files }: Omit<Todo, 'id' | 'checked'>) => void;
}

type TodoPanelProps = AddITodoPanel | EditITodoPanel

export const TodoPanel: FC<TodoPanelProps> = (props) => {

    const isEdit = props.mode === 'edit';

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [files, setFiles] = useState('')
    const [startDate, setStartDate] = useState(new Date());

    const onClick = () => {
        const todoItem = { name: title, description: desc, date: startDate, files: files }
        if (isEdit) {
            return (
                props.changeTodo(todoItem)
            )
        } else {
            props.addTodo(todoItem)
            setTitle(DEFAULT_TODO.name)
            setDesc(DEFAULT_TODO.description)
            setFiles(DEFAULT_TODO.files)
            // setStartDate(DEFAULT_TODO.date)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.todoPanel}>
                <div className={styles.fields}>
                    <div className={styles.label}>
                        <label htmlFor='name'>
                            <div className={styles.fieldTitle}>Задача</div>
                            <input
                                className={styles.fieldItem}
                                type='text'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder='Введите текст'
                            />
                        </label>
                    </div>
                    <div className={styles.label}>
                        <label htmlFor='desc'>
                            <div className={styles.fieldTitle}>Описание</div>
                            <input
                                className={styles.fieldItem}
                                type='text'
                                value={desc}
                                onChange={e => setDesc(e.target.value)}
                                placeholder='Введите текст'
                            />
                        </label>
                    </div>
                    <div className={styles.label}>
                        <div className={styles.fieldTitle}>Дата</div>
                        <DatePicker
                            className={styles.fieldItem}
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                        />
                    </div>
                    <div className={styles.label}>
                        <label htmlFor="formId">
                            <div className={styles.fieldTitle}>Файлы</div>
                            <input
                                className={styles.fieldItem}
                                name="file"
                                type="file"
                                id="formId"
                                value={files}
                                onChange={(e) => { setFiles(e.target.value) }}
                            />
                        </label>
                    </div>
                </div>
                <div>
                    {!isEdit && (<Button
                        onClick={onClick}
                        text='Добавить'
                    />)}
                    {isEdit && (<Button
                        onClick={onClick}
                        text='Изменить'
                        mode='chenged'
                    />)}
                </div>
            </div>
        </div>
    );
}