import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export default function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Todo App
          </h1>
          <p className='text-sm text-center font-bold italic text-yellow-500'>Implemented by using Redux Tool Kit</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={addTodoHandler} className="space-y-6">
            <div>
              <label
                htmlFor="task"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Add Task
              </label>
              <div className="mt-2">
                <input
                  name="task"
                  type="text"
                  required
                  placeholder="Enter your task..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
