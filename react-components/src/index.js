import React from 'react'; //this is the first line of every component, allows us to write JSX in our files
import ReactDOM from 'react-dom'; //allows us to put our JSX on the HTML, 
                                  //for the most part, this is the only file that will have this, most components willb e inside this
import './index.css'; //react uses webpack to import of the CSS that sets some base CSS
import App from './Components/App/App'; //This tells us where to look for this file
import registerServiceWorker from './registerServiceWorker'; //ignore for now

//This <App /> goes in to the index.html at 'root'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
