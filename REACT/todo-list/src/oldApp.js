import './App.css';
import { useState } from 'react';

function App() {
  const fakeTasks = ['Eat dinner', 'go to gym', 'walk dog'];

  const [tasksList, setTasksList] = useState([]);
  const [task, setTask] = useState('');

  const addTaskHandler = (e) => {
    console.log('clicked');
    console.log(task);
    // add new task, ...append to tasksList
    setTasksList([task, ...tasksList]);
  };
  return (
    <>
      <div className="p-20 text-white">
        <div className="flex flex-col">
          <h2>TODO LIST APP!!</h2>
          <div>
            <input
              type="text"
              className="outline-none text-black py-3 px-8 rounded-l"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              type="submit"
              class="bg-red-600  hover:bg-red-500 transition duration-300 py-3 px-8 rounded-r text-red-100"
              onClick={addTaskHandler}
            >
              Add Task
            </button>
          </div>
          {/* task list */}
          {tasksList.map((task) => (
            <h2>• {task}</h2>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
