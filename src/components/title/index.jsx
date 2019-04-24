import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const Title = ({
  children,
  variant,
  color,
  align,
}) => (
  <Typography variant={variant} color={color} align={align}>
    { children }
  </Typography>
);
Title.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
};


export default Title;
