import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const CardWrapper = styled.div`
  width: 287px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  ${breakpointsMedia({
    xs: 'height: 249px',
    md: 'height: 510px',
  })}
`;

export const CardImage = styled.img`
  width: 100%;
  ${breakpointsMedia({
    xs: 'height: 177px;',
    md: 'height: 390px',
  })}
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  ${breakpointsMedia({
    xs: 'font-size: 24px',
    md: 'font-size: 32px',
  })}
  `;

export default function Card({ imageDesktop, imageMobile, title }) {
  return (
    <>
      <CardWrapper>
        <MediaQuery maxWidth={767}>
          <CardImage src={imageMobile} />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <CardImage src={imageDesktop} />
        </MediaQuery>
        <CardTitle>{title}</CardTitle>
      </CardWrapper>
    </>
  );
}

Card.defaultProps = {
  imageMobile: 'https://via.placeholder.com/288x177',
  imageDesktop: 'https://via.placeholder.com/287x390',
};

Card.propTypes = {
  imageMobile: PropTypes.string,
  imageDesktop: PropTypes.string,
  title: PropTypes.string,
};
