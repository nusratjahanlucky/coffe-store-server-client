
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCurd from './Components/CoffeCurd';
import { useState } from 'react';

function App() {
  const loadedCoffes = useLoaderData();
  const [coffes,setCoffes] = useState(loadedCoffes);

  return (
    <div className='m-20'>
      <h1 className='text-6xl text-center text-purple-600 my-20'>Hot And COld Coffe:{coffes.length}</h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffes.map(coffe => <CoffeCurd key={coffe._id} coffe={coffe} coffes={coffes} setCoffes={setCoffes}></CoffeCurd>)
        }
      </div>
    </div>
  )
}

export default App
