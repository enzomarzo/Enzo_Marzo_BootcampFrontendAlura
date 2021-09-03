import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const title = css`
  font-weight: 400;
  text-align: center;
  ${breakpointsMedia({
    lg: css`font-size: 70px;`, // 100%
    md: css`font-size: 63px;`, // 90%
    sm: css`font-size: 52.5px;`, // 75%
    xs: css`font-size: 42px;`, // 60%
  })}
`;

const subTitle = css`
  font-weight: 300;
  ${propToStyle('text-align')}
  ${propToStyle('margin-top')}
  ${propToStyle('text-decoration')}
  ${breakpointsMedia({
    lg: css`font-size: 36px;`, // 100%
    md: css`font-size: 32.4px;`, // 90%
    sm: css`font-size: 27px;`, // 75%
    xs: css`font-size: 21.6px;`, // 60%
  })}
`;

const paragraph = css`
  font-weight: 300;
  text-align: left;
  line-height: 1.7em;
  word-spacing: .02em;
  ${breakpointsMedia({
    lg: css`font-size: 22px;`, // 100%
    md: css`font-size: 19.8px;`, // 90%
    sm: css`font-size: 16.5px;`, // 75%
    xs: css`font-size: 13.2px;`, // 60%
  })}
`;

export const TextStyleVariants = {
  title,
  subTitle,
  paragraph,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}`)};
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'p',
  variant: 'paragraph',
  children: null,
};

// apenas tipando os textos para sabermos o que precisa passar na hora de criar esse texto.
Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};
