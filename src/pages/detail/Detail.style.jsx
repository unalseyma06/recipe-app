import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 0.5;
`;

export const DetailHeaderText = styled.h1`
  color: #fff;
  margin: 25px;
`;

export const DetailPart = styled(Flex)`
  flex-direction: row;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #e1f1dd;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
  }
`;

export const NutrientsPart = styled.div`
  width: 400px;
  font-size: 1.7rem;
  line-height: 1.5;
  text-align: right;
  margin-right: 20px;
`;

export const ImgContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
    justify-content: center;
  }
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      width: 70%;
    }
  }
`;
export const IngContainer = styled.div`
  width: 400px;
  font-size: 1.4rem;
  margin: 2rem;
  line-height: 1.5;
`;

export const IngNumber = styled.span`
  font-weight: bold;
  border: 2px solid #e1f1dd;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: #e1f1dd;
  padding: 1px 5px;
  border-radius: 5px;
`;
