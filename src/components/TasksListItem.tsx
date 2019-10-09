import * as React from "react";
import {Task} from "../models/task";

interface Props {
    task: Task;
    onDelete: (task: Task) => void;
}

export const TasksListItem: React.FunctionComponent<Props> = ({task, onDelete}) => {
    const onClick = () => {
        onDelete(task);
    };

    return (
        <li>
            {task.name} <button onClick={onClick}>X</button>
        </li>
    )
}