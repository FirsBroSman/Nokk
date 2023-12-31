import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';

export default function jsxRender(_, initState, cb) {
  try {
    const layout = React.createElement(Layout, { initState });
    const html = renderToString(layout);
    return cb(null, `<!DOCTYPE html>${html}`);
  } catch (error) {
    return cb(error);
  }
}
