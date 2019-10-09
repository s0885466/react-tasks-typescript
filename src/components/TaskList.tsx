import * as React from "react";
import {Task} from "../models/task";
import { TasksListItem } from "./TasksListItem";


interface Props {
    tasks: Task[];
    onDelete: (task: Task) => void;
}

export const TasksList: React.FunctionComponent<Props> = ({tasks, onDelete}) => (
    <ul>
        {tasks.map(task => (
            <TasksListItem task={task} onDelete = {onDelete}/>
        ))}
    </ul>
);
