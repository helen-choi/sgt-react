import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  handleCancelClick() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="name" id="name" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
        <input type="course" id="course" name="course" value={this.state.course} onChange={this.handleChange} placeholder="Course" />
        <input type="grade" id="grade" name="grade" value={this.state.grade} onChange={this.handleChange} placeholder="Grade" />
        <button type="submit">Add</button>
        <button onClick={this.handleCancelClick}>Cancel</button>
      </form>
    );
  }
}
