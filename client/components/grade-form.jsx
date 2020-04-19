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
  }

  handleSubmit(event) {
    event.preventDefault();
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
        <input type="name" id="name" name="name" value={this.state.name} placeholder="Name" />
        <input type="course" id="course" name="course" value={this.state.course} placeholder="Course" />
        <input type="grade" id="grade" name="grade" value={this.state.grade} placeholder="Grade" />
        <button type="submit">Add</button>
        <button onClick="">Cancel</button>
      </form>
    );
  }
}
