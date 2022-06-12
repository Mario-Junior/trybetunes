// src/pages/Login (1366 x 768)
import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  max-width: 1366px;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Aside = styled.div`
  background: #FFF;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
  }
`;

export const Content = styled.div`
  min-width: 50%;
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.background};
  padding: 50px 100px 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      color: ${({ theme }) => theme.colors.background};
      height: 50px;
      margin: 10px 0 40px;
      outline: none;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors.background};
      border-radius: 10px;
      font-size: 24px;
      padding-left: 20px;
      transition: all 0.4s ease-in-out;
      ::placeholder {
        color: #ffffff50;
      }
      :hover {
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.background};
      }
      :focus {
        border: 2px solid ${({ theme }) => theme.colors.secondary.main};
        color: ${({ theme }) => theme.colors.background};
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
  }
`;
