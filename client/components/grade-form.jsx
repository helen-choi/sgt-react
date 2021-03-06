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
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <i className="input-icon far fa-user"></i>
        <input className="input form-control" type="name" id="name" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
        <i className="input-icon far fa-list-alt"></i>
        <input className="input form-control" type="course" id="course" name="course" value={this.state.course} onChange={this.handleChange} placeholder="Course" />
        <i className="input-icon fas fa-pencil-alt"></i>
        <input className="input form-control" type="grade" id="grade" name="grade" value={this.state.grade} onChange={this.handleChange} placeholder="Grade" />
        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </form>
    );
  }
}
