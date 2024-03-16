import React from "react";
import Task from "./Task";

function TaskList ({ tasks }){

    console.log(tasks)
    return(
        <div className="taskList">
            <table>
                <tr>
                    <th></th>
                    <th>Task</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                <Task />
                <Task />
            </table>
            <button id="newTaskButton" >Create New Task</button>

            
        </div>
    )
}

export default TaskList