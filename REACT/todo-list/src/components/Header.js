import { FaBars, FaBorderAll, FaImages } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="container flex">
      <div className="">
        <FaBars />
      </div>
      <div className="">
        <FaBorderAll />
      </div>
      <div className="">
        <FaImages />
      </div>
      <div className="">
        <div>
          <img
            src="https://images.pexels.com/photos/7571856/pexels-photo-7571856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Man in Black Crew Neck Shirt"
          />
        </div>
      </div>
    </div>
  );
}
