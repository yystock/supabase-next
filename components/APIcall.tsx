"use client";
import React from "react";
import axios from "axios";

export default function APIcall() {
  async function handleAPIcall() {
    const { data } = await axios.get("/api/post");

    console.log(data);
  }

  return (
    <div className="mx-auto">
      <button className="w-10 rounded-lg bg-green-300" onClick={() => handleAPIcall()}>
        API call
      </button>
    </div>
  );
}
