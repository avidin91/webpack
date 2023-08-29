import Post from '@modules/Post'
import json from '@/assets/json.json'
import WebpackLogo from './assets/icon-square-big'
import './styles/styles'
import xml from './assets/PurchaseOrder';
import csv from './assets/JavaScript';
import * as $ from 'jquery';
import './babel'
import React from "react";
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const post = new Post('Webpack Post Title', WebpackLogo)
$('pre').addClass('code').html(post.toString())

const App = () => (
    <div className="container">
        <h1>Webpack course</h1>
        <hr />
        <div className="logo"></div>
        <hr />
        <pre />
    </div>
)

root.render(<App />);

console.log('Post to string: ', post.toString())
console.log('JSON: ', json)
console.log('xml: ', xml)
console.log('csv: ', csv)