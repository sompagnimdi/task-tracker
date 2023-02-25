import { useState } from "react";
import Header from './components/Header';
import './Style.css';
import Tasks from './components/Tasks';

function App() {

    const [tasks, setTasks] = useState(
        [
          {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Oct 15th at 9:30am',
            reminder: true,
          },
          {
            id: 2,
            text: 'Doctors Wedding',
            day: 'Nov 10th at 6:30pm',
            reminder: true,
          },
          {
            id: 3,
            text: 'job Appointment',
            day: 'May 1st at 10:30am',
            reminder: fasle,
          },
          {
            id: 4,
            text: 'Soccer Game',
            day: 'Dec 25th at 12:05am',
            reminder: true,
          }
        ]);

    return (
        <div className='container'>
            <Header />
            <Tasks tasks={tasks} />
        </div>
    )
}


export default App

