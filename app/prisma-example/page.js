import prisma from "@/utils/db";
// import { Content } from "next/font/google";

const prismaHandlers = async () => {
  // to create a task
  await prisma.task.create({
    data: {
      content: "wake up",
    },
  });
  // to get back all the tasks
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  }); // we can just leave it by involking it(without the oreerBy)
  return allTasks;
};
const PrismaPage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="text-3xl font-medium mb-4">Prisma Example </h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            😬 {task.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaPage;

{
  /*
/////Create Single Record
const task = await prisma.task.create({
  data: {
    content: 'some task',
  },
});
/////Get All Records
const tasks = await prisma.task.findMany();
/////Get record by ID or unique identifier
// By unique identifier
const user = await prisma.user.findUnique({
  where: {
    email: 'elsa@prisma.io',
  },
});

// By ID
const task = await prisma.task.findUnique({
  where: {
    id: id,
  },
});
/////Update Record
const updateTask = await prisma.task.update({
  where: {
    id: id,
  },
  data: {
    content: 'updated task',
  },
});
/////Update or create records
const upsertTask = await prisma.task.upsert({
  where: {
    id: id,
  },
  update: {
    content: 'some value',
  },
  create: {
    content: 'some value',
  },
});
/////Delete a single record
const deleteTask = await prisma.task.delete({
  where: {
    id: id,
  },
});
*/
}
