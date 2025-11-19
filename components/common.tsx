import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { PageContainer } from "@/components/page-container";

export function LogoText({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xl font-semibold tracking-tighter font-sans",
        className
      )}
      {...props}
    >
      MSC
    </p>
  );
}

export function SectionTag({ id, className, ...props }: SectionProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="size-3 bg-[#a6ff79]"></div>
      <Typography
        variant="sm/normal"
        className={cn("uppercase", className)}
        id={id}
        {...props}
      />
    </div>
  );
}

type SectionProps = {
  id?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function Section({ id, className, ...props }: SectionProps) {
  return (
    <section
      id={id || ""}
      className={cn("bg-white py-20 sm:py-28 lg:py-36", className)}
      {...props}
    />
  );
}

export function JoinSection() {
  return (
    <Section className="relative text-white bg-black py-72 sm:py-72 md:py-64 lg:py-72 xl:py-80">
      <div className="absolute top-0 left-0 w-full h-full bg-white/90 grid grid-cols-10 grid-rows-8 gap-[0.5px]">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="bg-black"></div>
        ))}
      </div>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src="https://images.unsplash.com/photo-1712620602288-8adb09edbef2?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1474398777522-cabeb42e8132?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1694327671697-730cc4c5b9e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src="https://framerusercontent.com/images/I63aDOGkxJKmUUtuNtByyqTZAHU.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-bottom opacity-80"
      />
      <div className="size-full absolute inset-0 flex items-center justify-center">
        <PageContainer size="sm" className="flex flex-col gap-4">
          <Typography
            variant="6xl/medium"
            className="text-white tracking-tighter"
          >
            Join the renewable energy innovation with{" "}
            <span className="text-lightgreen">MSC</span>.
          </Typography>
          <Typography variant="lg/normal" className="text-white">
            Discover sustainable solutions that reduce costs and environmental
            impact. Take the first step today!
          </Typography>

          <div className="flex gap-2 text-white flex-wrap">
            {[
              "Solar Energy",
              "Photovoltaics (PV)",
              "Renewable Innovation",
              "Sustainability",
              "Made in Morocco",
              "Future of Energy",
              "Crystallization & Wafering",
              "Global Expertise",
              "Local Impact",
            ].map((j, i) => (
              <span
                key={`${j}${i}`}
                className="relative text-white px-2.5 py-1.5 backdrop-blur-xl border border-white/15"
              >
                {/* <div className="size-2.5 bg-lightgreen absolute bottom-0 right-0 inline-flex items-center justify-center text-xl text-white">
                      <div className="absolute w-full h-px bg-darkgreen"></div>
                      <div className="absolute w-full h-px bg-darkgreen rotate-90"></div>
                      <div className="absolute w-full h-px bg-darkgreen rotate-45"></div>
                      <div className="absolute w-full h-px bg-darkgreen -rotate-45"></div>
                    </div> */}
                {j}
              </span>
            ))}
          </div>
        </PageContainer>
      </div>
    </Section>
  );
}
