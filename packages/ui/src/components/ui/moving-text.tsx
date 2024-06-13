import { cn } from "@ui/lib/utils";

function MovingText({ children, className }: any) {
  return (
    <div className={cn("m-0 p-0 animate-zoom-in", className)}>{children}</div>
  );
}

export { MovingText };
