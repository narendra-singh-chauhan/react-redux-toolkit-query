// sections
import AddTodo from '../sections/todos/AddTodo';
import TodoList from '../sections/todos/TodoList';


const Todos = () => {
    return (
        <section className="app flex justify-center items-center min-h-[86vh] overflow-auto">
            <div className='border-2 ring ring-gray-100 shadow-md p-4 max-w-[1000px] mx-5 w-full px-5 pb-10'>
                <h3 className='text-4xl font-bold text-gray-900 mx-auto mb-5'>My Todos</h3>
                <AddTodo />
                <TodoList />
            </div>
        </section>
    );
};

export default Todos;