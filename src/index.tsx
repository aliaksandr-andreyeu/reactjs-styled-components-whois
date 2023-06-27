import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './containers';

const app = document.getElementById('app');
const root = app ? createRoot(app) : null;

root ? root.render(<App />) : null;
