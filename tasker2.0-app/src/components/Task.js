import React from "react";

function Task(){
    return(
        <tr className="taskCard">
            
            <td>
                <button className="favoriteButton">	&#9734;</button>
            </td>
            <td>task</td>
            <td>category</td>
            <td>status</td>
            <td>
                <button className="completeButton">&#x2713;</button>
                <button className="editButton">&#9999;</button>
                <button className="deleteButton">&#128465;</button>
            </td>
        
        </tr>
    )
}

export default Task