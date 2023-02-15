import ReactExample from './button-basic-react';
import { createRoot } from 'react-dom/client';

export class Example extends HTMLElement {
  
    constructor() {
        super();
        
        const root = this.attachShadow({mode: 'open'});
        createRoot(root).render(ReactExample());
    }
}


