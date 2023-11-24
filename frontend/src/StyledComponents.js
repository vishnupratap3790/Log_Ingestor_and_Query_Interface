import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

export const AlertModal = styled(Modal)`
  .modal-dialog {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .modal-content {
    background-color: #fff;
    border: 2px solid #ddd;
    border-radius: 20px;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  }

  .modal-header {
    border-bottom: none;
  }

  .modal-body {
    padding: 20px;
    text-align: center;
  }

  .modal-footer {
    border-top: none;
  }
`;



// export const StyledButton = styled(Button)`
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   padding: 10px 20px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 130vh;
`;

export const FormContainer = styled.div`
  width: 500px;
  padding: 15px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 3px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 96%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Alert = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8d7da;
  color: #721c24;
`;
