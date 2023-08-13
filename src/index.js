import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { RoomProvider } from "./Context";
import App from "./App";
import * as serviceWorker from "./serviceWorker";



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <RoomProvider>
    <Router>

<App />
    </Router>

  </RoomProvider>


);

// ReactDOM.render(
//   <RoomProvider>
//     <Router>
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     </Router>
//   </RoomProvider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
