import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <Wrapper>
      <TodoCategoryHeader>
        <CategoryIcon style={{background: '#fd76a1'}}>
            <FaUserAlt />
        </CategoryIcon>
        <Title>Personal</Title>
      </TodoCategoryHeader>
      <TodoItem />
    </Wrapper>
  );
}

const Wrapper = styled.i`
    background-color: #20212d;
    margin-bottom: 30px;
    border-radius: 20px;
    overflow: hidden;
`;
const TodoCategoryHeader = styled.i``;
const CategoryIcon = styled.i`
  background: #fd76a1;
`;
const Title = styled.i`

`;
