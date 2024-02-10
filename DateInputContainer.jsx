import styles from './Container.module.css'
import style from './Button.module.css'
import React, { useState } from 'react';

const DateInputContainer = ({onNewItems}) =>{
 
  const[todoName, setTodoName]=useState('')
  const[dueDate, setdueDate]=useState('')


  const handleNameChange = (event) =>{
   setTodoName(event.target.value)
  }
  const handleDateChange = (event) =>{
   setdueDate(event.target.value)

  }
  const handleAddButtonClick = () => {
    if (todoName.trim() === '' || dueDate.trim() === '') {
      alert('Please enter the todo item and due date.');
    } else {
      onNewItems(todoName, dueDate);
      setTodoName('');
      setdueDate('');
    }
  };
  

  return <>
  <div className={styles.main_container}>
    <span>
      <input onChange={handleNameChange} className={styles.input_box} type="text" placeholder="Input Todo Here"  value={todoName}/>
    </span>

    <span>
      <input onChange={handleDateChange} className={styles.date_box} type="date" value={dueDate} />
    </span>

    <span>
    <button onClick={handleAddButtonClick} type="button" className={`${style.Button} btn btn-success`}>Add</button>
    </span>
  </div>
  </>
}

export default DateInputContainer;