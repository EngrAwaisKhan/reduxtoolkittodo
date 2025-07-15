import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="header">List of Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button 
          className="w-6 justify-center rounded-md bg-red-300 mx-2 py-0 text-sm/6 font-semibold text-white shadow-xs hover:bg-red-500"
          onClick={() => dispatch(removeTodo(todo.id))}> X </button>
        </li>
      ))}
    </>
  );
}

export default Todo;
