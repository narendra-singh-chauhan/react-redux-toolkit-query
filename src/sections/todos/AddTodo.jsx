// packages
import { useState } from 'react';
// components
import Button from '../../components/Button';
import InputField from '../../components/InputField';
// store
import { useAddTodoMutation } from '../../store/api/todoApi';


const AddTodo = () => {
    const [value, setValue] = useState('');
    const [addTodo] = useAddTodoMutation();

    const onAddTodo = () => {
        addTodo({
            title: value,
            isActive: false,
        });
        setValue('');
    }

    return (
        <div className='flex justify-between pb-2'>
            <InputField
                name='todo'
                id='todo'
                type='text'
                placeholder='Enter new todo'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button text='Add Todo' onClick={onAddTodo} />
        </div>
    );
};

export default AddTodo;