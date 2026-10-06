"use client";

import { useSyncExternalStore } from "react";

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "America/Phoenix",
});

function subscribe(onChange: () => void) {
  const interval = setInterval(onChange, 15_000);
  return () => clearInterval(interval);
}

function getSnapshot() {
  return timeFormatter.format(new Date());
}

/** Current time in Phoenix; renders nothing on the server to avoid a stale, mismatched clock */
export function LocalTime() {
  const time = useSyncExternalStore(subscribe, getSnapshot, () => null);

  return (
    <time className="tabular-nums">
      {time}
    </time>
  );
}
