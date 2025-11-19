import { cn } from "@/lib/utils";

type PageContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "xl" | "full" | "md" | "sm" | "xs";
};

export function PageContainer({
  size = "default",
  children,
  className,
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8",
        {
          "max-w-2xl": size === "xs",
          "max-w-4xl": size === "sm",
          "max-w-6xl": size === "md",
          "max-w-screen-2xl": size === "xl",
          "max-w-full": size === "full",
        },
        // 'layout',
        className
      )}
    >
      {children}
    </div>
  );
}
