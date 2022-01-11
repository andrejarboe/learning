import { FaBars, FaBorderAll, FaImages } from 'react-icons/fa';
import styled from 'styled-components';

export default function Header() {
  return (
    // <div className="flex h-[70px] items-center bg-[#20212d] px-10 drop-shadow-2xl shadow-2xl w-full space-x-4 sticky top-0">
    //   <div className="text-white cursor-pointer">
    //     <FaBars />
    //   </div>
    //   <div className="text-white flex items-center space-x-2 hover:bg-gray-900 px-[16px] py-[10px] rounded cursor-pointer">
    //     <FaBorderAll />
    //     <span>Dashboard</span>
    //   </div>
    //   <div className="text-white flex items-center space-x-2 hover:bg-gray-900 px-[16px] py-[10px] rounded cursor-pointer">
    //     <FaImages />
    //     <span>Collections</span>
    //   </div>
    //   <div className="flex-1"></div>
    //   <div className="text-white flex items-center">

    //     />
    //   </div>
    // </div>
    <Wrapper>
   
      <HeaderItem>
        <FaBars />
      </HeaderItem>
   

   
      <HeaderItem>
        <FaBorderAll />
        <span>Dashboard</span>
      </HeaderItem>
   
      <HeaderItem>
        <FaImages />
        <span>Collections</span>
      </HeaderItem>

        <Placeholder />
      
      <HeaderItem>
        <Profile>
          <img
            src="https://images.pexels.com/photos/7571856/pexels-photo-7571856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Man in Black Crew Neck Shirt"
            className="h-10 rounded-full"
          />
        </Profile>
      </HeaderItem>
   
    </Wrapper>
  );
}

const Wrapper = styled.i`
  display: flex;
  height: 70px;
  background-color: #20212d;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 4px 15px 0px #121212;
  -webkit-box-shadow: 0px 4px 15px 0px #121212;
  position: sticky;
  top: 0;

`;

const HeaderItem = styled.i`
  color: #eee;
  padding: 10px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-weight: 500;
  }

  &:hover {
    background-color: #18181f;
    cursor: pointer;
  }
`;

const Placeholder = styled.i`
  flex: 1;
`;

const Profile = styled.i`
display: flex;
align-items: center;
  img {
    height: 30px;
    border-radius: 50%;
  }
`;
