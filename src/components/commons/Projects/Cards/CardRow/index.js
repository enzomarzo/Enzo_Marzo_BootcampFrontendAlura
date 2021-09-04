import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';

export const CardWrapper = styled.div`
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.35);
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
  transition: 0.3s;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover { 
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
  }
`;

const A = styled.a`
  text-decoration:none;
  color: inherit;
  margin-bottom: 10px;
`;

export const CardImage = styled.img`
  width: 100%;
  z-index: -1;
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  text-align: center;
  ${breakpointsMedia({
    xs: 'font-size: 24px',
    md: 'font-size: 32px',
  })}
  `;

export default function Card({ imageDesktop, title }) {
  return (
    <>
      <Link href={`/projects/${title}`}>
        <A>
          <CardWrapper>
            <CardImage src={imageDesktop} />
            <CardTitle>{title}</CardTitle>
          </CardWrapper>
        </A>
      </Link>
    </>
  );
}

Card.defaultProps = {
  imageDesktop: 'https://via.placeholder.com/500-230',
};

Card.propTypes = {
  imageDesktop: PropTypes.string,
  title: PropTypes.string,
};
