"use client";

import { cn } from "@/lib/utils";
import GridPattern from "@/registry/components/magicui/grid-pattern";
import LinearGradient from "@/registry/components/magicui/linear-gradient";

const GridPatternLinearGradient = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 shadow-2xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Grid Pattern
      </p>
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      />
      <LinearGradient
        to="rgba(120,119,198,0.3)"
        from="rgba(0,0,0,0.0)"
        direction="bottom right"
      />
    </div>
  );
};

export default GridPatternLinearGradient;
