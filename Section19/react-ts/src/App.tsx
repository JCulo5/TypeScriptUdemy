import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import CourseGoals from './components/CourseGoals.tsx';
import { useState } from 'react';

function App() {

  const [goals, setGoals]=useState([
        {
          id:1,
          title: "Learn TypeScript", 
          description: "Understand the basics of TypeScript"
        },
        {
          id:2,
          title: "Practice TS", 
          description: "Practice the basics of TypeScript2"
        }
          ]);
  return (
    <main>
      <Header image={{src: goalsImg, alt: "Goals"}} >
        <h1>My Goals</h1>
      </Header>
      <CourseGoals goals={goals}/>
    </main>
  );
}

export default App
