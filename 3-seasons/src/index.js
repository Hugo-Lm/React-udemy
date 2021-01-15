import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {
//   return (
//       <div>Hello World</div>
//   )
// }

class App extends React.Component {
  constructor() {

  };
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
};

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
)