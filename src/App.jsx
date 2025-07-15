import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>Todo App</title>
      </Helmet>

      {/* Full-width red border container */}
      <div className="min-h-screen w-screen">
        {/* Center the content inside */}
        <div className="max-w-xl mx-auto px-4 py-6">
          <AddTodo />
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
