import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { addTodoAction } from "@/src/actions/addTodoAction";

type Props = {};

const AddTodo = ({}: Props) => {
  return (
    <div>
      <form action={addTodoAction} className="mt-6">
        <Input type="text" name="title" />
        <Button className="w-full mt-3">Add Todo</Button>
      </form>
    </div>
  );
};

export { AddTodo };
