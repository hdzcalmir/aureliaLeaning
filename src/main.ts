import Aurelia from 'aurelia';
import { MyApp } from './my-app';
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

Aurelia
  .app(MyApp)
  .start();
