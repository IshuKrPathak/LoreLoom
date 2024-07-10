"use client";

import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import path from "path";

const storiesPath = "public/stories";

const StoryWriter = () => {
  const [story, setStory] = useState<string>("");
  const [pages, setPages] = useState<number>();
  const [progress, setProgress] = useState("");
  const [runStarted, setRunStarted] = useState<boolean>(false);
  const [runFinished, setRunFinished] = useState<boolean | null>(null);
  const [currentTool, setCurrentTool] = useState("");

  async function runScript() {
    setRunFinished(true);
    setRunStarted(false);

    const response = await fetch("/api/run-script", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ story, pages, path: storiesPath }),
    });
    if (response.ok && response.body) {
      console.log("Streaming Started !");
    } else {
      setRunFinished(true);
      setRunStarted(false);
      console.error("Failed to start streaming");
    }
  }

  return (
    <div className=" flex-col flex container">
      <section className=" flex-1 flex flex-col border border-orange-600 rounded-md p-10 space-y-2">
        <Textarea
          placeholder="write a story about...☁️"
          className=" text-orange-600 font-bold flex-1  "
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
        <Select onValueChange={(value) => setPages(parseInt(value))}>
          <SelectTrigger>
            <SelectValue placeholder="How many pages should the story be ?" />
            <SelectContent className="w-full">
              {Array.from({ length: 10 }, (_, i) => (
                <SelectItem key={i} value={String(i + 1)}>
                  {i + 1} Pages
                </SelectItem>
              ))}
            </SelectContent>
          </SelectTrigger>
        </Select>
        <Button
          onClick={runScript}
          disabled={!story || !pages || runStarted}
          className=" w-full bg-orange-600 "
          size={"lg"}
        >
          Generate Story
        </Button>
      </section>

      <section className=" flex-1 pb-5 mt-5">
        <div className=" flex flex-col-reverse w-full space-y-2 font-bold bg-gray-800 rounded-md text-green-500 font-mono p-10 h-96 overflow-y-auto ">
          <div>
            {runFinished === null && (
              <>
                <p className=" animate-pulse mr-5">
                  {" "}
                  I'm waiting for you to generate a story...
                </p>
                <br />
              </>
            )}
            <span className=" mr-5">{">>"}</span>
            {progress}
          </div>
          {currentTool && (
            <div className=" py-10">
              <span className=" mr-5">{"---Current Tool---"}</span>
              {currentTool}
            </div>
          )}
          {runStarted && (
            <div>
              <span className=" mr-5 animate-in">
                {"----AI Storyteller has started----"}
              </span>
              <br />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default StoryWriter;
