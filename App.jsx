import { useState } from "react";
import Heading from "./components/AppHeading";
import styles from './components/ItemContainer.module.css';
import DateInputContainer from "./components/DateInputContainer";
import MainContainer from "./components/MainContainer";

function App() {
  const [todoitems, setTodoItems] = useState([
    {
      todoName: 'Go to School',
      dueDate: '2/3/2024',
    },
    {
      todoName: 'Go to Market',
      dueDate: '2/3/2024',
    },
    {
      todoName: 'Go to Gym',
      dueDate: '3/3/2024',
    },
  ]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName}, dueDate: ${itemDueDate}`);
    const newTodoItems = [...todoitems, { todoName: itemName, dueDate: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDelete = (index) => {
    const updatedItems = [...todoitems];
    updatedItems.splice(index, 1);
    setTodoItems(updatedItems);
  };

  return (
    <>
      <Heading />
      <MainContainer>
        <DateInputContainer onNewItems={handleNewItem} />
        <div className={styles.column_container}>
          {todoitems.map((item, index) => (
            <div key={index} className={styles.container}> 
                <div>
                  <span className={styles.input_box}>{item.todoName}</span>
                </div>
              
                <div className="col-4">
                  <span style={{'margin':'33px'}}>{item.dueDate}</span>
                </div>
              
              <div className="row">
                <div className="col-12">
                  <button style={{'margin':'5px'}} type="button" className='btn btn-danger my-button' onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </>
  );
}

export default App;
