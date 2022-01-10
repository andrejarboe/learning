import { FaBars, FaBorderAll, FaImages } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex h-[70px] items-center bg-[#20212d] px-10 drop-shadow-2xl shadow-2xl w-full space-x-4 sticky top-0">
      <div className="text-white cursor-pointer">
        <FaBars />
      </div>
      <div className="text-white flex items-center space-x-2 hover:bg-gray-900 px-[16px] py-[10px] rounded cursor-pointer">
        <FaBorderAll />
        <span>Dashboard</span>
      </div>
      <div className="text-white flex items-center space-x-2 hover:bg-gray-900 px-[16px] py-[10px] rounded cursor-pointer">
        <FaImages />
        <span>Collections</span>
      </div>
      <div className="flex-1"></div>
      <div className="text-white flex items-center">
        <img
          src="https://images.pexels.com/photos/7571856/pexels-photo-7571856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Man in Black Crew Neck Shirt"
          className="h-10 rounded-full"
        />
      </div>
    </div>
  );
}
