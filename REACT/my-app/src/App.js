import './App.css';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import ProfileCard from './components/ProfileCard';
import profiles from './components/FakeData';

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'red' : 'gray'} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex ">
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
  const [name, setName] = useState('Andre');
  const [admin, setAdmin] = useState(false);
  const [fullName, setFullName] = useState('WAITING FOR DATA...')

  useEffect(() => {
    // document.title = `Celebrate ${name}`
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? 'admin' : 'not admin'}`);
  }, [admin]);


  // async await is online code 
  // lets you run the code after a different time than all your other coded
  // vs your code with is offline
  // "lets online and online cod run at the same time"
  const getRandomName = async () => {
    // get data 
    const response = await fetch('https://randomuser.me/api')
  
    // make it json object
    const data = await response.json()
  
    // do somthing with it 
    setFullName(data.results[0].name.first + ' ' + data.results[0].name.last);
    return data.result[0].picture.large
  }

  useEffect(() => {
    getRandomName();
    
  }, [])


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

      <section className="container px-4 mx-auto w-auto flex flex-col space-y-4">
        <p>Congratulations {name}!</p>
        <button
          class="bg-red-600  hover:bg-red-500 transition duration-300 py-3 px-8 rounded text-red-100"
          onClick={() => setName('Will')}
        >
          Change Winner
        </button>
        <p>{admin ? 'Logged in' : 'Not logged in'}</p>
        <button
          class="bg-blue-600  hover:bg-blue-500 transition duration-300 py-3 px-8 rounded text-red-100"
          onClick={() => setAdmin(true)}
        >
          Log In
        </button>
        <Button title="Buy" color="red" />
        <Button title="Sell" color="blue" />
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col space-y-4 ">
            {profiles.map((profile) => (
              <ProfileCard
                name={fullName}
                title={profile.title}
                image={`https://robohash.org/${Math.random()}.png`}
                imageAlt={profile.imageAlt}
                description={profile.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
