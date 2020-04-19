import React from 'react';

export default class GradeForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="name" id="name" name="name" placeholder="Name" />
        <input type="course" id="course" name="course" placeholder="Course" />
        <input type="grade" id="grade" name="grade" placeholder="Grade" />
        <button type="submit">Add</button>
        <button onClick="">Cancel</button>
      </form>
    );
  }
}
