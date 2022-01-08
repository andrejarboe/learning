import './App.css';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      <div className="flex flex-col">
        <div className='flex '>
          
        {createArray(totalStars).map((n, i) => (
          <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
          />
          ))}
          </div>
        <p>
          {selectedStars} of {totalStars}
        </p>
      </div>
    </>
  );
}

function App() {
  const myAge = 28;
  console.log(myAge);

  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="container px-4 mx-auto w-auto">
        <h1 className="text-3xl font-bold text-red-500">My age {count}</h1>
        <h2>My count is {count}</h2>
        <div class="flex text-center">
          <button
            className="bg-purple-600 hover:bg-purple-700 transition duration-300 flex items-center justify-center text-purple-200 py-2 w-16 rounded-l"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>

          <button
            className="bg-purple-600 hover:bg-purple-700 transition duration-300 flex items-center justify-center text-purple-200 py-2 w-16 rounded-r"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>

        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked((checked) => !checked)}
        />
        <p>{checked ? 'checked' : 'not checked'}</p>
        <div className="flex">
          <StarRating totalStars={5} />
        </div>
      </div>
    </>
  );
}

export default App;
