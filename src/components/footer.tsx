"use client";

import { useEffect, useState } from "react";
import { getLastCommitDate } from "@/actions/github";

export function Footer() {
  const [lastUpdated, setLastUpdated] = useState<string>("recently");

  useEffect(() => {
    getLastCommitDate().then(setLastUpdated);
  }, []);

  return (
    <footer className="mt-auto border-t border-border py-6">
      <p className="text-sm text-neutral-700 dark:text-muted-foreground">
        Last updated {lastUpdated}
      </p>
    </footer>
  );
}
