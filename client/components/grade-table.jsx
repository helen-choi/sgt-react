import React from 'react';

// function Grade(props) {
//   return (
//     <tr>
//       <td>{props.grade}</td>
//       <td>{props.grade}</td>
//       <td>{props.grade}</td>
//     </tr>
//   );
// }

export default function GradeTable(props) {
  // console.log(props.grades);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {/* {props.grades.map(grade => {
          return (
            <Grade key={grade.id} grade={grade}/>
          );
        })} */}
      </tbody>
    </table>
  );
}
