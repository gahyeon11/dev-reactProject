import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

//React.FC : 함수형 컴포넌트를 정의 할 때 리액트에서 사용하는 것으로
//코드를 더 명확하게 표현하기 위해서 사용

const Todolist: React.FC = () => {
  const title: string = "To Do List";
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "잠자기", isChecked: false },
    { id: 3, text: "미팅하기", isChecked: false },
  ]);
  const [newTodo, setnewTodo] = useState<string>("");

  //state : 상태관리를 위해서 사용하는 것으로
  // 상태가 변경이 되면 변수 Todos에 바로 반영시키위해서 useState 훅을 사용한다.
  // 데이터가 변경이 되면 자동으로 재렌더링 시켜준다.

  //setTodos : 변경 함수
  //<string[]> : 문자열 배열 자료형

  //구조분해 할당 : 각 배열내 데이터를 나눠서 데이터로 넣어준다.

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
                <span>
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
    </div>
  );
};
export default Todolist;
