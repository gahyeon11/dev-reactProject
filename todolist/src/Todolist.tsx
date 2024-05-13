import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TodoModal from "./TodoModal";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

const Todolist: React.FC = () => {
  const title: string = "To Do List";
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "미팅하기", isChecked: false },
  ]);
  const [newTodo, setnewTodo] = useState<string>("");

  const[showDetail, setShowDetail] = useState<boolean>(false);
  //선택 여부 담기 위한 state
  const[selectedTodo, setSelectedTodo] = useState<Todo | null>(null); 
  //선택한 todo의 정보 담기 위한 state

  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      //빈 값인지 검사하는 trim
      setTodos([...todos, { id: Date.now(), text: newTodo, isChecked: false }]);
      setnewTodo("");
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  };

  const handleTodoClick = (todo : Todo)=>{
    setShowDetail(true);
    setSelectedTodo(todo);
    
  }
  const handleCloseDetail = ()=>{
    setShowDetail(false);
  }

  return (
    <div>
      <h1>{title}</h1>
      <p></p>
      <div className="containter">
        <div>
          <input
            type="text"
            placeholder="할일 입력"
            style={{ marginRight: "10px", writingMode: "horizontal-tb" }}
            onChange={(e) => setnewTodo(e.target.value)}
          />
          <Button variant="success" onClick={addTodo}>
            추가
          </Button>
        </div>
        <p></p>

        <div className="board">
          <ul>
            {todos.map((todo, index) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckedChange(todo.id);
                  }}
                ></input>
    
                <span onClick={()=>handleTodoClick(todo)}>
                  {todo.isChecked ? (
                    <del>{todo.text}</del>
                  ) : (
                    <span>{todo.text}</span>
                  )}
                </span>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="delbutton"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TodoModal show ={showDetail} todo = {selectedTodo} handleCLose= {handleCloseDetail}></TodoModal>
    </div>
  );
};
export default Todolist;
