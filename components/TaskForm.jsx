import prisma from "@/utils/db";
import { createTask } from "@/utils/action";

// const createTask = async (formData) => {
//   "use server";
//   const content = formData.get("content");
//   // some validation here

//   await prisma.task.create({
//     data: {
//       content,
//     },
//   });
//   // revalidate path
//   revalidatePath("/tasks");
// };

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          type="text"
          name="content" // Important! Anytime we're working with server actions, if we wanna access the input value, we have to set up a name
          required //so user won't submit the form with empty values
        />
        <button type="submit" className="btn join-item btn-primary">
          create task
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
