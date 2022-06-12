// src/components/Header (1366 x 768)
import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.primary.background};
  height: 100px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;

  nav {
    a {
      text-decoration: none;
      color: #ffffff;
      font-size: 30px;
      padding: 5px 20px 5px 0;
      transition: all 0.2s ease-in;

      & + a {
        border-left: 2px solid #ffffff;
        padding-left: 20px;
      }

      :hover {
        color: ${({ theme }) => theme.colors.primary.main};
        }
      :focus {
        color: ${({ theme }) => theme.colors.secondary.main};
      }

      &.selected {
        color: ${({ theme }) => theme.colors.secondary.main};
      }
    }
  }
`;

export const User = styled.div`
  font-size: 18px;
  color: #000;

  display: flex;
  align-items: center;

  img {
    width: 50%;
  }

  div {
    background-color: white;
    border: 1px solid #023031;
    border-radius: 50px;
    margin-right: 25px;
    max-width: 250px;
    padding: 10px 15px;
    width: 250px;

    span {
      a {
        text-decoration: none;
      }
    }
  }
`;
