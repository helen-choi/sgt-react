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
    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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

  deleteGrade(gradeId) {
    const grades = this.state.grades.concat();
    const targetIndex = grades.findIndex(el => el.id === gradeId);
    fetch(`/api/grades/${gradeId}`, { method: 'DELETE' })
      .then(res => {
        grades.splice(targetIndex, 1);
        this.setState({ grades: grades });
      });

  }

  getAverageGrade(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += parseInt(grades[i].grade);
    }
    const average = sum / grades.length;
    return Math.ceil(average);
  }

  addGrade(newGrade) {
    const grades = this.state.grades.concat();
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(res => res.json())
      .then(grade => {
        grades.push(grade);
        this.setState({ grades: grades });
      });
  }

  render() {
    const grades = this.state.grades;
    return (
      <div className="container">
        <div className="list">
          <Header text="Student Grade Table" average={this.getAverageGrade(grades)}/>
          <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade}/>

        </div>
        <div className="form">
          <GradeForm onSubmit={this.addGrade}/>
        </div>
      </div>
    );
  }
}

export default App;
