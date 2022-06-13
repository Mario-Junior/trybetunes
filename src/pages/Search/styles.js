import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const Content = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.background};
  margin-top: 25px;

  h2 {
    margin: 20px 0 40px;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primary.background};
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;

  input {
    color: ${({ theme }) => theme.colors.primary.background};
    border: none;
    outline: none;
    background-color: none;
    height: 70px;
    margin: 20px 0 20px;
    width: 100%;
    font-size: 22px;
    padding-left: 30px;
    font-weight: 500;
    
    ::placeholder {
        color: #3F3D5680;
    }
  }

  button {
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.background};
    font-size: 28px;
    transition: all 0.2s ease-in;
    :hover {
      background-color: ${({ theme }) => theme.colors.secondary.main};
    }
    :active {
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
    :disabled {
      background-color: ${({ theme }) => theme.colors.background};
      color: #00000040;
      cursor: not-allowed;
    }
  }

  div{
    width: 300px;
  }
`;

export const CardList = styled.section`
  display: flex;
  height: 100%;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

export const CardContainer = styled.div`
  width: 280px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.primary.background};
  border-radius: 10px;
  .title {
    font-size: 22px;
    font-weight: 800;
    color: #ffffff;
    padding: 15px 15px 0;
  }
  .subtitle {
    font-size: 18px;
    color: #ffffff80;
    padding: 5px 0 0 15px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 200px;
  background: url(${(props) => props.src});
  background-size: cover;
  border-radius: 10px 10px 0 0;
  border-bottom: 2px solid #ffffff40;
`;
