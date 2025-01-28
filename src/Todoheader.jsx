import React from "react";
import { useEffect, useState } from 'react'
import Todolist from "./todolist";

export default function () {

    const [state, setstate] = useState('');

    const [inputvalue, setinputvalue] = useState('')

    const [tasks, settask] = useState([]);


    const handleclick = () => {

        if (inputvalue.trim() === "") return;
        const newtask = inputvalue;
        settask([...tasks, newtask]);

        setstate("")

    }

    const handlechange = (e) => {
        let todo = e.target.value;
        setinputvalue(todo);
        setstate();
    }



    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        if (tasks) {
            settask(tasks)
        }
    }, [])


    useEffect(() => {

        localStorage.setItem('tasks', JSON.stringify(tasks));

    }, [tasks]);

    return (
        <div className="flex items-center flex-col">


            <h1 className="text-4xl font-bold mt-12">TODO LIST</h1>

            <div className='flex flex-row gap-3 mt-14 '>

                <input type="text" className='w-96 ml-32 h-12 bg-blue-100 pl-6 border rounded-2xl font-semibold shadow-xl' value={state} name="todo" onChange={handlechange} />

                <button type="button" className="w-32 h-12 bg-blue-600 rounded-2xl font-semibold shadow-xl hover:bg-blue-700 cursor-cell" onClick={handleclick}>ADD</button>

            </div>

            {tasks != [] ?

                <Todolist tasks={tasks} settask={settask} />

                :

                " "

            }


        </div>
    )
}