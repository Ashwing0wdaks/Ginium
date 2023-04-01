import Task from "./Task";
import { useState } from 'react';
import axios from 'axios';

const TaskAdd = () => {
    const [taskName, setTaskName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [priority, setPriority] = useState('');
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const data = {
        taskName,
        startDate,
        endDate,
        priority,
       
      };
    
      axios.post('http://localhost:4000/tasks', data)
        .then((response) => {
          alert(response.data.message);
          
        })
        .catch((error) => {
          alert(error.data.message);
         
        });
    };
    return ( 
        <div className="taskadd">
      <form className='m-auto mt-5 w-50 border border-1' onSubmit={handleSubmit}>
      <h2 className="mt-3">GINIMS TASK MANAGEMENT</h2>
      <div>
        <label className='fs-4'>Task Name:</label>
        <input  className='w-50' type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
      </div>
      <div className='m-3'>
        <label className='fs-4'>Start Date:</label>
        <input className='w-50' type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </div>
      <div className='m-3'>
        <label className='fs-4'>End Date:</label>
        <input  className='w-50' type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </div>
      <div className='m-3'>
        <label className='fs-4'>Priority:</label>
        <select  className='w-50' value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="">--Select Priority--</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className='m-3'>
        <button className='btn btn-primary'>Create Task</button>
      </div>
    </form>

    <hr  className='bg-dark border border-3 '/>

    <Task/>
        </div>
     );
}
 
export default TaskAdd;