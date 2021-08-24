import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';

export const FeaturedIcon = styled.span`
  border: 1px solid black;
  position: absolute;
  margin: 10px;
  z-index: 999;
  background-color: white;
  text-align: center;
  border-radius: 2px;
  ${breakpointsMedia({
    xs: css`
      width: 147px;
      height: 31px;
      font-size: 24px;
    `,
    md: css`
      width: 228px;
      height: 48px;
      font-size: 38px;
    `,
  })}
`;

export const CardFeaturedWrapper = styled.div`
  height: 320px;
  border-radius: 2px;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
  transition: 0.3s;
  align-self: center;
  display: flex;
  border: 1px solid rgba(0,0,0,0.35);
  ${breakpointsMedia({
    xs: css`
      order:1;
      width: 287px;
      flex-direction: column;
      margin-bottom: 20px;
    `,
    md: css`
      order: 2;
      width: 900px;
      flex-direction: row;
    `,
  })}
  &:hover { 
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
  }
`;

export const CardImage = styled.img`
  height: 100%;
  ${breakpointsMedia({
    xs: 'width: 288px',
    md: 'width: 593px',
  })}
`;

export const CardBody = styled.div`
  display: block;
  width: 307px;
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  display: block;
  ${breakpointsMedia({
    xs: css`
      font-size: 24px;
      width: 100%;
      text-align: center;
    `,
    md: css`
      font-size: 32px;
      width: 108px;
      margin-left: 35px;
      text-align: left;
    `,
  })}
`;

export const CardText = styled.div`
  width: 250px;
  height: 109px;
  font-family: "Fira Sans", sans-serif;
  font-size: 18px;
  line-height: 22px;
  margin-left: 35px;
  ${breakpointsMedia({
    xs: css`
      display: none;
    `,
    md: css`
      display: block;
    `,
  })}
`;

export default function CardFeatured({ imageMobile, imageDesktop }) {
  return (
    <CardFeaturedWrapper>
      <FeaturedIcon>Bootcamp</FeaturedIcon>
      <MediaQuery maxWidth={767}>
        <CardImage src={imageMobile} />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <CardImage src={imageDesktop} />
      </MediaQuery>
      {' '}
      <CardBody>
        <CardTitle>Instalura</CardTitle>
        <CardText>
          Utilizando o poder do NextJs e do Styled Components aliado
          com boas práticas de desenvolvimento.
        </CardText>
      </CardBody>
    </CardFeaturedWrapper>
  );
}

CardFeatured.propTypes = {
  imageMobile: PropTypes.string,
  imageDesktop: PropTypes.string,
};
