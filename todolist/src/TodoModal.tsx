import React from "react";
import { Modal, ModalBody } from "react-bootstrap";

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
  };
  
type TodoModalProps = {
    show : boolean;
    todo : Todo | null;
    handleCLose : ()=> void;
}

const TodoModal : React.FC<TodoModalProps> = ({show, todo, handleCLose}) =>{
    return(
        <div>
      <Modal show={show} onHide={handleCLose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Todo 상세 정보</Modal.Title>
          </Modal.Header>
          <ModalBody>
            {todo?.text}
          </ModalBody>
          </Modal>
        </div>
    )
}
export default TodoModal;
