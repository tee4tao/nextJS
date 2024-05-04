"use client";
import prisma from "@/utils/db";
import { createTaskCustom } from "@/utils/action";
import { useFormStatus } from "react-dom";
// The useFormStatus Hook provides status information of the last form submission.
// useFormState is a Hook that allows you to update state based on the result of a form action.

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

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn join-item btn-primary"
      disabled={pending}
    >
      {pending ? "please wait... " : "create task"}
    </button>
  );
};

const TaskForm = () => {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          type="text"
          name="content" // Important! Anytime we're working with server actions, if we wanna access the input value, we have to set up a name
          required //so user won't submit the form with empty values
        />
        <SubmitButton />
      </div>
    </form>
  );
};
export default TaskForm;
