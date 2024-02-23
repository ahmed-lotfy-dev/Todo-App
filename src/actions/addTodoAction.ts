"use server";
import { Tasks } from "@/globals";
import { db } from "@/src/lib/db/db";

export const getAllTasks = async () => {
  const allTasks = await db.task.findMany();
  console.log(allTasks);
};

export const addTodoAction = async (formData: FormData) => {
  console.log("Add Todo Action");
  const id = formData.get("id") as unknown as number;
  const title = formData.get("title") as string;
  const descreption = formData.get("desc") as string;
  const status = formData.get("status") as unknown as boolean;
  const newTask = db.task.create({
    data: { id, title, status, descreption, authorId: 123 },
  });
  console.log(newTask);
};
