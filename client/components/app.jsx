import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    this.getGrades();
  }

  getGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(grades => {
        this.setState({ grades: grades });
      })
      .catch(err => console.error('Uh oh, fetch failed!', err));
  }

  getAverageGrade(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    const average = sum / grades.length;
    return Math.ceil(average);
  }

  render() {
    const grades = this.state.grades;
    return (
      <div className="container">

        <div className="row">
          <div className="list col-md-8">
            <Header text="Student Grade Table" />
            <GradeTable grades={this.state.grades} />
          </div>
          <div className="form col-md-4">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
