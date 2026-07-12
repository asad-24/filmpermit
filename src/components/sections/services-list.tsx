import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { allServices } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ServicesList() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-[#0f172c]">
      <div className="mx-auto max-w-5xl">
        <div className="divide-y divide-[#0f172c]/10 overflow-hidden rounded-lg border border-[#0f172c]/10 dark:divide-white/10 dark:border-white/10">
          {allServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <details
                className="group bg-white p-6 transition open:bg-[#f5f7fb] dark:bg-white/[0.035] dark:open:bg-white/[0.07]"
                id={service.id}
                key={service.id}
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                  <span className="flex items-center gap-4">
                    <span className="flex size-11 items-center justify-center rounded-lg bg-[#0f172c] text-white dark:bg-[#00a86b] dark:text-[#0a1024]">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-lg font-black text-[#0a1024] dark:text-white">
                      {service.title}
                    </span>
                  </span>
                  <ChevronDown className="size-5 shrink-0 text-[#8490a8] transition group-open:rotate-180 dark:text-white/45" />
                </summary>
                <div className="ml-0 mt-5 grid gap-5 md:ml-[3.75rem] md:grid-cols-[1fr_auto] md:items-center">
                  <p className="text-sm leading-7 text-[#647086] dark:text-white/60">
                    {service.description}
                  </p>
                  <Link
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "bg-white dark:bg-transparent dark:text-white"
                    )}
                    href="/contact?type=permit"
                  >
                    Request Support
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
