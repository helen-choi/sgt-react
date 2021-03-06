import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td className="align-middle">{props.grade.name}</td>
      <td className="align-middle">{props.grade.course}</td>
      <td className="align-middle">{props.grade.grade}</td>
      <td className="align-middle"><button className="btn-delete" onClick={() => {
        props.deleteGrade(props.grade.id);
      }}>Delete</button></td>
    </tr>
  );
}

export default function GradeTable(props) {
  return (
    <table className=" grade-table table table-striped">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {props.grades.map(grade => {
          return (
            <Grade
              key={grade.id}
              grade={grade}
              deleteGrade={props.deleteGrade} />
          );
        })}
      </tbody>
    </table>
  );
}
