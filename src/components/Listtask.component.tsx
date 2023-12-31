"use client";

import { TaskContext } from "@/context/TaskProvider";
import { dateToString } from "@/helpers/dateUtils";
import React, { useContext } from "react";
import Task from "./Task.component";
import useTask from "@/hooks/useTasks";

export default function ListTask() {
  const { listTask } = useTask(true);

  return (
    <div className="flex flex-wrap ">
      {listTask && listTask.length ? (
        <>
          {listTask.map((item) => (
            <Task key={item.id} task={item} />
          ))}
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <h2 className="font-black text-3xl text-center">No tasks yet</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Add tasks and {""}
              <span className="text-indigo-600 font-bold ">
                you can see them
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
