// store
import {
    useGetTodosQuery,
} from '../../store/api/todoApi';
//
import TodoItem from './TodoItem';


const TodoList = () => {
    const { data: todos, isLoading, isError } = useGetTodosQuery();

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    if (isError) {
        return (
            <div>Oops! Something went wrong.</div>
        );
    }

    return (
        <div className='mt-3 max-h-[550px] overflow-y-scroll'>
            {todos?.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </div>
    );
};

export default TodoList;