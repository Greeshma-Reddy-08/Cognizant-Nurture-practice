import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.name} - ₹{course.fee}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
