import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SectionTitleWrapper = styled.h1`
  font-size: 60px;
  font-weight: 400;
  line-height: 72px;
  text-align: center;
`;

export default function SectionTitle({ name }) {
  return <SectionTitleWrapper>{name}</SectionTitleWrapper>;
}

SectionTitle.propTypes = {
  name: PropTypes.string,
};
