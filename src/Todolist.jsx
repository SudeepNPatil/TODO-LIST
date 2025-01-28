import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

export default function Todolist({ tasks, settask }) {


    const handleclick = (index) => {

        const updatetask = tasks.filter((_, i) => i !== index)
        settask(updatetask);

    }


    return (
        <div>
            {tasks.map((tasks, index) => (
                <div key={index} className="flex flex-row justify-center flex-wrap">

                    <div className="bg-gray-200 rounded-md w-96 h-14 mt-6 ml-20" >

                        <p className="ml-5 font-semibold text-lg mt-3">{tasks}</p>

                    </div>

                    <MdDeleteOutline size={40} className="mt-8 ml-12 text-red-600 cursor-pointer" onClick={() => handleclick(index)} />
                </div>
            ))}
        </div>
    )
}