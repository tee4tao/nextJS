import { getTask } from "@/utils/action";
import React from "react";
import Link from "next/link";
import EditForm from "@/components/EditForm";

const TaskPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          Back to Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default TaskPage;
