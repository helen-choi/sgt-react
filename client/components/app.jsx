import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

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
    this.addGrade();
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

  addGrade() {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })
      .then(res => res.json());
    // .then(data => console.log('successfully fetching', data));
  }

  render() {
    const grades = this.state.grades;
    return (
      <div className="container">
        <div className="list">
          <Header text="Student Grade Table" average={this.getAverageGrade(grades)}/>
          <GradeTable grades={this.state.grades}/>
        </div>
        <div className="form">
          <GradeForm />
        </div>
      </div>
    );
  }
}

export default App;
