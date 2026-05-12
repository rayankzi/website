"use server";

import { cacheLife } from "next/cache";

export async function getLastCommitDate(): Promise<string> {
  "use cache";
  cacheLife("days"); // built-in profile, ~1 day

  try {
    const res = await fetch(
      "https://api.github.com/repos/rayankzi/website/commits?per_page=1",
    );
    if (!res.ok) return "recently";
    const data = await res.json();
    const date = new Date(data[0].commit.committer.date);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "recently";
  }
}
