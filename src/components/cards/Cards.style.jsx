import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const MainContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 25rem;
  width: 20rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem;
  border-radius: 10px;
  margin: 0.7rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 7px 14px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.09);
  }
`;

export const Image = styled.img`
  height: 10rem;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainColor};
  color: white;
  padding: 0.7rem 1rem;
  outline: none;
  border: none;
  margin: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;
