import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #6666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 60px;
  max-width: 700px;

  display: flex;
  flex-direction: column;

  div {
    flex: 1;
    display: flex;
    margin-top: 10px;
  }

  input,
  select {
    flex: 1;
    font-size: 18px;
    font-weight: bold;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 6px;
    color: #3a3a3a;
    border: 2px solid #e3e3e3;
    margin-right: 5px;
  }

  button {
    height: 70px;
    font-size: 18px;
    background: #00a1d9;
    border-radius: 6px;
    border: 0;
    color: #fff;
    font-weight: bold;
    margin-top: 10px;
    transition: background-color 0.2s ease;

    &:hover {
      background: ${shade(0.2, '#00a1d9')};
    }
  }
`;

export const Success = styled.span`
  display: flex;
  align-items: center;
  background-color: #53c700;
  color: #ffff;
  font-weight: bold;
  padding: 20px 15px;
  border-radius: 6px;

  svg {
    color: #fff;
    margin-right: 15px;
  }
`;

// e62240

export const Error = styled.span`
  display: flex;
  align-items: center;
  background-color: #e62240;
  color: #ffff;
  font-weight: bold;
  padding: 20px 15px;
  border-radius: 6px;

  svg {
    color: #fff;
    margin-right: 15px;
  }
`;
