import styled from 'styled-components';
import { FaRegCircle, FaTrashAlt, FaCheck } from 'react-icons/fa';

export default function TodoItem() {
  return (
    <div className="flex items-center h-[50px] py-4 px-5 transition ease-in-out duration-[.3s]">
      <FaRegCircle className="text-2xl mr-5 cursor-pointer" />
      <input className="flex-1 text-xl outline-none bg-transparent" />
      <SaveTodo>
        <FaCheck />
      </SaveTodo>
      <DeleteTodo>
        <FaTrashAlt className="" />
      </DeleteTodo>
    </div>
  );
}

const DeleteTodo = styled.i`
  color: #ff1605;
  padding: 10px 16px;
  border-radius: 4px;
  margin-left: 4px;
  margin-right: -12px;

  &:hover {
    background-color: #7e2601;
    transition: 0.3s;
    cursor: pointer;
  }
`;

const SaveTodo = styled.i`
  padding: 10px 16px;
  border-radius: 4px;
  margin-right: -12px;
  color: #42c732;
  
  &:hover {
    background-color: #2b6127;
    transition: 0.3s;
    cursor: pointer;
  }
`;
