import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals.tsx";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn TypeScript",
      description: "Understand the basics of TypeScript",
    },
    {
      id: 2,
      title: "Practice TS",
      description: "Practice the basics of TypeScript2",
    },
  ]);

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals((prevGoals) => prevGoals.concat({id:Math.random(), title:text, description:summary}));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals" }}>
        <h1>My Goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}

export default App;
