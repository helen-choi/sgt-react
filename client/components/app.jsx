import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [1, 2, 3]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="list">
          <Header text="Student Grade Table" />
          <GradeTable grades={this.state.grades}/>
        </div>
      </div>
    );
  }
}

export default App;
