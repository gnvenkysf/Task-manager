import './App.css';
import Home from './TaskManager'
import {useState} from 'react'
import {StateProvider} from './StateProvider'
import EditTask from './EditTask';
import AddTask from './AddTask'
import TaskItem from './TaskItem'

function App() {
  const [open, setOpen] = useState({add:false, edit:false, view:false})
  const value = {open, setOpen}

  const handleModalClose = () => {
    setOpen({add:false, edit:false, view:false})
  }

  return (
    <StateProvider value={value}>
      <div className='app'>
        <Home />

        {open.add &&
          <AddTask onClose={handleModalClose} open={open.add}/>
        }

        {open.edit &&
          <EditTask onClose={handleModalClose} open={open.edit} />
        }

        {open.view &&
          <TaskItem onClose={handleModalClose} open={open.view} />
        }

      </div>
    </StateProvider>
  );
}

export default App;