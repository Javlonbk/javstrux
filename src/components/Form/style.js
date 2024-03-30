import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 350px;
  padding: 50px 30px;
  box-sizing: border-box;

  form {
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 25px 15px;
    box-sizing: border-box;

    input[type='text'],
    input[type='tel'],
    textarea {
      margin-top: 10px;
      width: calc(100% - 30px);
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      transition: border-color 0.2s ease;

      &:focus {
        border-color: #00b2bf;
        outline: none;
      }
    }

    .error-text {
      color: #f44336;
      font-size: 12px;
      margin-top: -10px;
      margin-bottom: 25px;
    }

    .btn-send {
      width: calc(100% - 30px);
      height: 40px;
      color: #fff;
      border-radius: 10px;
      margin-top: 20px;
      background: #00b2bf;
      cursor: pointer;
      transition: background 0.3s ease;
      border: none;
      &:hover {
        background: #00818a;
      }
    }
  }
`;
