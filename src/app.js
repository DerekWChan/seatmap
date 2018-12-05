'use strict';

class App extends React.Component {
  render() {
    return (
      <div class="container">
          Welcome to Lola Seats!!
          <span class="title">
        </span>
        <span class="instructions">
          To get started, edit src/app.js to render your seat map component.
          {"\n\n"}
          Seat map data should be imported from data/seat.json.
        </span>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
