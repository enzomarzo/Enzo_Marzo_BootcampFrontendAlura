import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const CardFeaturedWrapper = styled.div`
  height: 320px;
  align-self: center;
  display: flex;
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
  border: 1px solid ${({ theme }) => theme.colors.primary};
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
  text-transform: uppercase;
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
  text-transform: capitalize;
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
      <MediaQuery maxWidth={767}>
        <CardImage src={imageMobile} />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <CardImage src={imageDesktop} />
      </MediaQuery>
      {' '}
      <CardBody>
        <CardTitle>Main Project</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          molestie rhoncus vestibulum. Aenean blandit velit.
        </CardText>
      </CardBody>
    </CardFeaturedWrapper>
  );
}

CardFeatured.propTypes = {
  imageMobile: PropTypes.string,
  imageDesktop: PropTypes.string,
};
