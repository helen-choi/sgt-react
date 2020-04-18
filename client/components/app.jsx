import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades: grades });
        // this.getAverageGrade();
      });
    // .catch(err => console.error('Uh oh, fetch failed!', err));
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
