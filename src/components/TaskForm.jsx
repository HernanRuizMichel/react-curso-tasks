import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext);

  const handleSubmmit = (e) => {
    e.preventDefault();
    let task = {
      title,
      description
    }
    createTask(task);
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      
      <form action="" onSubmit={handleSubmmit} className="bg-slate-800 p-10 mb-4 ">
      <h1 className="text-white font-bold text-xl mb-2">Crea una tarea</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <textarea
        placeholder="Escribe una descripcion"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <button className="bg-indigo-600 text-white px-2 py-1  rounded-md hover:bg-indigo-400">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
