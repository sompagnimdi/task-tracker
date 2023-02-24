const tasks = [
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
    text: 'soccer game',
    day: 'Jun 29th at 2:05am',
    reminder: true,
  }
]

const Tasks = () => {
  return (
    <> 
    {tasks.map((task) => (
      <h3>{task.text}</h3>
    ))}
      
    </>
  )
}

export default Tasks
