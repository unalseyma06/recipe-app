import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailContainer,
  DetailHeaderText,
  DetailPart,
  ImgContainer,
  IngContainer,
  IngNumber,
  NutrientsPart,
} from "./Detail.style";

const Detail = () => {
  const {
    state: {
      image,
      label,
      totalNutrients,
      calories,
      digest,
      ingredientLines,
      totalWeight,
    },
  } = useLocation();

  return (
    <DetailContainer>
      <DetailHeaderText>{label}</DetailHeaderText>

      <DetailPart>
        <NutrientsPart>
          <h3>Nutrients</h3>

          <p>
            {totalNutrients.CA.label} : {Math.round(totalNutrients.CA.quantity)}
            {totalNutrients.CA.unit}
          </p>
          <p>
            {totalNutrients.CHOCDF.label} :{" "}
            {Math.round(totalNutrients.CHOCDF.quantity)}
            {totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {totalNutrients.CHOLE.label} :{" "}
            {Math.round(totalNutrients.CHOLE.quantity)}
            {totalNutrients.CHOLE.unit}
          </p>
          <p>
            {totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(totalNutrients.ENERC_KCAL.quantity)}
            {totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{totalWeight}</p>
          <p>Calories: {Math.round(calories)}</p>
          {digest.slice(0, 5).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </NutrientsPart>

        <ImgContainer>
          <img src={image} alt={label} />
        </ImgContainer>

        <IngContainer>
          {ingredientLines.map((ingredient, index) => (
            <div key={index}>
              <p>
                <IngNumber>{index + 1}</IngNumber>-{ingredient}
              </p>
            </div>
          ))}
        </IngContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
