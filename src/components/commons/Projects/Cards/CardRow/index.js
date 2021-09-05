import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';

export const CardWrapper = styled.div`
  background-color: white;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.1);
  transition: 0.3s;
  cursor: pointer;
  margin: 20px;
  &:hover { 
    box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
  }
`;

const A = styled.a`
  text-decoration:none;
  color: inherit;
`;

export const CardImage = styled.img`
  width: 100%;
  z-index: -1;
  background-size: cover;
`;

export const CardTitle = styled.h3`
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: 5px;
  margin: 0px auto;
  font-weight: 400;
  text-align: center;
  ${breakpointsMedia({
    xs: 'font-size: 18px',
    md: 'font-size: 22px',
  })}
  `;

export default function Card({ imageDesktop, title }) {
  return (
    <>
      <Link href={`/projects/${title}`}>
        <A>
          <CardWrapper>
            <CardTitle>{title}</CardTitle>
            <CardImage src={imageDesktop} />
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
