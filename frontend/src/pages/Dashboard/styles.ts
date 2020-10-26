import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 38px;
  color: #3a3a3a;
  max-width: 400px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  select {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 6px 0 0 6px;
    color: #3a3a3a;
    border: 2px solid #e3e3e3;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    font-size: 18px;
    background: #00a1d9;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s ease;

    &:hover {
      background: ${shade(0.2, '#00a1d9')};
    }
  }
`;
export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #f5f5f5;
    border-radius: 6px;
    width: 100%;
    padding: 20px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
