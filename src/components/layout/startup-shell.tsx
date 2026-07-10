"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";

import { StartupPreloader } from "@/components/feedback/startup-preloader";

let hasBootedApp = false;

export function StartupShell({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(hasBootedApp);
  const [showPreloader, setShowPreloader] = useState(!hasBootedApp);

  useEffect(() => {
    if (ready) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      return;
    }

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [ready]);

  const handleDone = useCallback(() => {
    hasBootedApp = true;
    setReady(true);
    window.setTimeout(() => setShowPreloader(false), 350);
  }, []);

  return (
    <>
      {showPreloader ? <StartupPreloader onDone={handleDone} /> : null}
      <div
        className={[
          "min-h-full flex flex-col transition-opacity duration-300",
          ready ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        {children}
      </div>
    </>
  );
}
