import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('books');

  const books = [
    { title: 'Atomic Habits', author: 'James Clear' },
    { title: 'Deep Work', author: 'Cal Newport' }
  ];

  const blogs = [
    { title: 'React Basics', content: 'Understanding components and props.' },
    { title: 'Conditional Rendering', content: 'Using if/else, ternary, &&, etc.' }
  ];

  const courses = [
    { name: 'ReactJS for Beginners', fee: 499 },
    { name: 'Advanced ReactJS', fee: 999 }
  ];

  let content;

  // Using if-else
  if (view === 'books') {
    content = <BookDetails books={books} />;
  } else if (view === 'blogs') {
    content = <BlogDetails blogs={blogs} />;
  } else {
    content = <CourseDetails courses={courses} />;
  }

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Blogger App</h1>

      {/* Buttons to change view */}
      <button onClick={() => setView('books')}>Show Books</button>
      <button onClick={() => setView('blogs')}>Show Blogs</button>
      <button onClick={() => setView('courses')}>Show Courses</button>

      <hr />

      {/* Render selected component */}
      {content}

      {/* Extra: Ternary rendering */}
      <p style={{ marginTop: "20px" }}>
        {view === 'books'
          ? "You are viewing Books."
          : view === 'blogs'
          ? "You are viewing Blogs."
          : "You are viewing Courses."}
      </p>

      {/* Extra: && rendering */}
      {view === 'courses' && <p>🔥 These are trending courses!</p>}
    </div>
  );
}

export default App;
