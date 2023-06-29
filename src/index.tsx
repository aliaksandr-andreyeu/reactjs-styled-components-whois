import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './containers';
import { Normalize } from 'styled-normalize';

const app = document.getElementById('app');
const root = app ? createRoot(app) : null;

root
  ? root.render(
      <Fragment>
        <Normalize />
        <App />
      </Fragment>
    )
  : null;
