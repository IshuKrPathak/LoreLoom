"use client";

import React from "react";
import { Textarea } from "./ui/textarea";
import { Select, SelectTrigger, SelectValue } from "./ui/select";

const StoryWriter = () => {
  return (
    <div className=" flex-col flex container">
      <section className=" flex-1 flex flex-col border border-orange-600 rounded-md p-10 space-y-2">
        <Textarea />
        <Select>
          <SelectTrigger>
            <SelectValue></SelectValue>
          </SelectTrigger>
        </Select>
      </section>

      <section className=" flex-1 pb-5 mt-5"></section>
    </div>
  );
};

export default StoryWriter;
