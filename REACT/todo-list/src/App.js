import './App.css';
import Header from './components/Header';

export default function App() {
  return (
    <div className="bg-[#18181f] min-h-screen min-w-screen text-white">
      <Header />
      <div className="main flex w-screen">
        <div className="main-content w-screen flex justify-center ease-in-out duration-[.3s]">
          <div className='max-w-[700px] w-full'>
            <div className='my-[50px] text-[30px] font-bold'>Dashboard</div>
            <div className='mb-[20px] text-[36px] font-extrabold'>Good Morning, Andre</div>
            <h2>Cooking</h2>
            <h2>Cooking</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
