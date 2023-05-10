// store
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import { useUpdateTodoMutation, useDeleteTodoMutation } from '../../store/api/todoApi';


const TodoItem = ({ id, title, isActive }) => {
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const onRemoveTodo = () => {
        deleteTodo(id);
    }

    const onChange = (e) => {
        updateTodo({
            id,
            isActive: e.target.checked,
        });
    }

    return (
        <div className="flex items-center justify-between p-4">
            <CheckBox title={title} checked={isActive} onChange={onChange} />
            <div className="flex items-center">
                <Button
                    text='Remove'
                    className="font-semibold text-red-300 underline hover:text-red-500"
                    onClick={onRemoveTodo}
                />
            </div>
        </div>
    );
};

export default TodoItem;