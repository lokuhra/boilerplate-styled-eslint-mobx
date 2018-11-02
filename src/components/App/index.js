import React, { Fragment } from 'react';
import { ThemeProvider } from '@smooth-ui/core-sc';
import { Normalize } from 'styled-normalize';
import Helmet from '../Helmet';
import { theme, Button } from '../../smooth-ui';

const Btn = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Normalize />
      <Helmet />
      <Button backgroundColor="gray400">Submit</Button>
    </Fragment>
  </ThemeProvider>
);

export default Btn;
