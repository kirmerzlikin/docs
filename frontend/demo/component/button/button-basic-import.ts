import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactExample from './button-basic';

export class Example extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: 'open' });
    createRoot(root).render(React.createElement(ReactExample));
  }
}
