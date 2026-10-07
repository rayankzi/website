"use client";

import { useSyncExternalStore } from "react";

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "America/Phoenix",
});

function subscribe(onChange: () => void) {
  let timeout: ReturnType<typeof setTimeout>;

  // Schedule each tick on the next whole second so the display never skips or lags a second
  const tick = () => {
    onChange();
    timeout = setTimeout(tick, 1000 - (Date.now() % 1000));
  };
  timeout = setTimeout(tick, 1000 - (Date.now() % 1000));

  return () => clearTimeout(timeout);
}

function getSnapshot() {
  return timeFormatter.format(new Date());
}

/** Current time in Phoenix; renders nothing on the server to avoid a stale, mismatched clock */
export function LocalTime() {
  const time = useSyncExternalStore(subscribe, getSnapshot, () => null);

  return <time className="tabular-nums">{time}</time>;
}
