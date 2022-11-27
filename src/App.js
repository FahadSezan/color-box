// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as LottiePlayer from '@lottiefiles/lottie-player';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () => {
  const [color, setcolor] = useState('');
  return (
    <div className="container py-4">
      <p className="text-center fs-2">Check Color...</p>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <div className="card">
            <div className="card-header">Color Box</div>
            <div className="card-body">
              <div
                style={{ backgroundColor: color, height: '20vh' }}
                className="p-5 border shadow-sm "
              ></div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 py-5">
          <div className="card">
            <div className="card-header">Input color code</div>
            <div className="card-body text-center mb-0 py-4">
              <input
                className="border text-center shadow-none text-muted"
                type="text"
                value={color}
                onChange={(e) => setcolor(e.target.value)}
                placeholder="Color name/ hex code"
              />
              <p className="mb-0">
                <small className="mb-0">Example: Blue / #6D4EE9 </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <p className="text-center my-3">
        Assessment for{' '}
        <span className="fw-bold text-muted">
          Maliha Poly Tex Fiber Industry Ltd.
        </span>
      </p>
      <lottie-player
        className="align-middle w-100"
        src="https://assets10.lottiefiles.com/packages/lf20_ig53qvih.json"
        background="transparent"
        speed="1"
        style={{ height: '300px' }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};
export default App;
