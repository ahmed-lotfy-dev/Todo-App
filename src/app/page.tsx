import { AddTodo } from "@/src/components/AddTodo";
import { getSession } from "../actions/authActions";
import LogoutButton from "../components/LogoutButton";

export default async function Home() {
  const session = await getSession();
  console.log(session.isLoggedIn);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <h1 className="text-slate-600 font-bold text-2xl">Todo App</h1>
        <div className="">
          <AddTodo />
        </div>
        {session.isLoggedIn && <LogoutButton />}
      </div>
    </main>
  );
}
