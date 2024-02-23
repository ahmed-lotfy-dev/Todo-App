import React from "react";
import { Card } from "./ui/card";
import { Task } from "@/globals";

type Props = {};

const TaskList = (props: Props) => {
  const taskList = localStorage.getItem("tasks");
  console.log(taskList);
  return (
    <div>
      <Card>
        <h2></h2>
      </Card>
    </div>
  );
};

export default TaskList;
