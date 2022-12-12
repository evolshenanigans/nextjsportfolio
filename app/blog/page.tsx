"use client";

import { useState } from "react";

function Blog() {
  const [journalEntry, setJournalEntry] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch("/api/index.ts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entry: journalEntry,
      }),
    });

    if (response.ok) {
      // handle successful submission
    } else {
      // handle error
    }
  };

  return (
    <form className="bg-black" onSubmit={handleSubmit}>
      <textarea
        value={journalEntry}
        onChange={(event) => setJournalEntry(event.target.value)}
      />
      <button className="bg-white" type="submit">
        Save
      </button>
    </form>
  );
}

export default Blog;
