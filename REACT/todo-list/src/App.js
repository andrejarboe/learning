import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

export default function App() {
  return (
    // <div className="bg-[#18181f] min-h-screen min-w-screen text-white">
    //   <Header />
    //   <div className="main flex w-screen">
    //     <div className="main-content w-screen flex justify-center ease-in-out duration-[.3s]">
    //       <div className="max-w-[700px] w-full">
    //         <div className="my-[50px] text-[30px] font-bold">Dashboard</div>
    //         <div className="mb-[20px] text-[36px] font-extrabold">
    //           Good Morning, Andre
    //         </div>
    //         <h2 className="text-3xl">Cooking</h2>
    //         <h2 className="text-3xl">Cooking</h2>
    //         <TodoList />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Wrapper>
      <Header />
      <Main>
        <MainContent>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good Morning, Andre</Greeting>
            {[<h2>Cooking</h2>, <h2>Reading</h2>]}
            <TodoItem />
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`;

const Main = styled.div`
  display: flex;
`;
const MainContent = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const TodoContent = styled.div`
  max-width: 700px;
`;

const Title = styled.div`
  margin: 50px 0;
  font-size: 30px;
  font-weight: 700;
`;

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
`;
