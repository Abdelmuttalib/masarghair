import { LogoText, Section, SectionTag } from "@/components/common";
import { PageContainer } from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MSC />
    </>
  );
}

function MSC() {
  return (
    <div className="font-sans">
      <div>
        <div className="h-screen w-screen relative">
          <div className="z-30 w-full top-0 h-16 flex items-center justify-center bg-transparent backdrop-blur-xl sticky">
            <PageContainer className="flex items-center justify-between">
              <div className="flex items-center gap-x-6">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                  MSC
                  <span className="ml-2 font-normal text-gray-300 text-base sm:text-xl">
                    Moroccan Solar Cells
                    {/* Securico */}
                  </span>
                </h3>
                {/* <span className="text-gray-400">
                  POS
                </span> */}
              </div>
              <div className="text-white hidden sm:flex sm:items-center">
                {/* <nav className="flex items-center gap-6">
                  {[
                    {
                      href: "#about",
                      label: "About",
                    },
                    {
                      href: "#team",
                      label: "Team",
                    },
                  ].map((link, i) => (
                    <Link key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </nav> */}
                {/* <Button className="rounded-none text-base py-4 px-6">
                  Get Started
                </Button> */}
              </div>
            </PageContainer>
          </div>
          <div className="absolute inset-0">
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1674168481499-983f0968a68f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              // src="https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="size-full object-cover"
            />
          </div>
          {/* nav */}
          {/* <div className="bg-red-400"></div> */}
          {/* hero */}
          <div className="absolute h-full w-full flex flex-col size-full justify-end py-32 items-end">
            <PageContainer className="flex items-end">
              <div className="text-white flex flex-col gap-6 max-w-2xl">
                <Typography
                  variant="7xl/medium"
                  className="text-white tracking-tighter"
                >
                  Powering Morocco’s Future with
                  <br />
                  <span className="text-lightgreen">Solar Innovation.</span>
                  {/* Embrace the
                  sun, <br />
                  <span className="text-lime-500">embrace your power.</span> */}
                </Typography>
                <Typography variant="lg/normal" className="text-white">
                  Moroccan Solar Cells (MSC) is building the nation’s first
                  large-scale photovoltaic module production — from silicon to
                  solar panels. Our mission: deliver clean, sustainable, and
                  locally made energy solutions for Morocco and the world.
                </Typography>
                {/* <div>
                  <Button className="rounded-none text-base py-4 px-6">
                    Get Started
                  </Button>
                </div> */}
                <div>
                  <Button
                    className="rounded-none text-base py-4 px-6 backdrop-blur-lg"
                    asChild
                  >
                    <Link href={"/#video"}>Watch Video</Link>
                  </Button>
                </div>
              </div>
            </PageContainer>
          </div>
        </div>
        {/* About */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid gap-10">
              <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-6">
                <div className="col-span-5 lg:col-span-3">
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                      <SectionTag id="about" className="">
                        About
                      </SectionTag>
                      <Typography
                        variant="5xl/medium"
                        className="tracking-tighter"
                      >
                        Pioneering Morocco’s Photovoltaic Industry
                      </Typography>
                      <Typography variant="lg/normal">
                        MSC (Moroccan Solar Cells) is developing Morocco’s first
                        large-scale solar PV manufacturing facilities, covering
                        the full value chain: ingots, wafers, cells, and
                        modules.
                      </Typography>

                      <div>
                        <Button
                          className="rounded-none text-base py-5 px-6 bg-lightgreen text-darkgreen hover:bg-lightgreen/90"
                          asChild
                        >
                          <Link href="/about-us">About MSC</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-5 lg:col-span-3 pt-2 lg:pt-14">
                  <div>
                    <div>
                      <div className="flex flex-col gap-6">
                        <Typography
                          variant="4xl/medium"
                          className="tracking-tighter"
                        >
                          Technology Partner: H2GEMINI
                        </Typography>

                        <Typography variant="lg/normal" className="">
                          In partnership with H2GEMINI (Germany), MSC is
                          bringing advanced Heterojunction Technology (HJT) to
                          Morocco, enabling local production integration of over
                          76%. With an initial capacity of 1.2 GW, our goal is
                          to scale up to 10 GW, creating thousands of jobs and
                          positioning Morocco among the world’s top solar
                          producers.
                        </Typography>

                        <div className="flex gap-4 items-center relative bg-darkgreen">
                          <div className="absolute w-full h-0.5 bg-lightgreen"></div>
                          <div className="z-10">
                            {/* eslint-disable @next/next/no-img-element */}
                            <img
                              src="/images/H2GEMINI-ppt.webp"
                              alt=""
                              className="w-full max-w-xs"
                            />
                          </div>
                          <div className="relative size-12 bg-darkgreen inline-flex items-center justify-center text-white">
                            <div className="absolute w-full h-0.5 bg-lightgreen"></div>
                            <div className="absolute w-full h-0.5 bg-lightgreen rotate-90"></div>
                            <div className="absolute w-full h-0.5 bg-lightgreen rotate-45"></div>
                            <div className="absolute w-full h-0.5 bg-lightgreen -rotate-45"></div>
                          </div>
                          <div className="z-10 bg-darkgreen">
                            <Typography
                              variant="7xl/medium"
                              className="tracking-tight text-lightgreen"
                            >
                              MSC
                            </Typography>
                          </div>
                        </div>

                        <div>
                          <Button
                            className="rounded-none text-base py-5 px-6 bg-lightgreen text-darkgreen hover:bg-lightgreen/90"
                            asChild
                          >
                            <a
                              href="https://www.h2gemini.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Visit H2GEMINI
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 sm:gap-4 lg:gap-2 xl:gap-4">
                {[
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/add613f9-445e-4924-a817-e93fc34d4aa0-scaled-e1708698047702.jpg",
                    process: "Cristalisation",
                    description:
                      "With christalisation pullers high-purity silicon is grown to produce wafers.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/312da068-5e78-4ef9-a923-562e8045cb60-e1708697943670.jpg",
                    process: "Wafering",
                    description:
                      "The high-purity silicon is cut into thin wafers using wire saws.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/d15c0954-1aff-4081-a8cf-633c4b510dca-e1708697904572.jpg",
                    process: "Cell manufacturing",
                    description:
                      "By applying different thin layers, the wafer becomes a photovoltaic cell that can generate electricity from light.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/3kxpy-2prl0-e1708698106933.jpg",
                    process: "Module Manufacturing",
                    description:
                      "BThe cells are laminated in strings to form a module, creating a resistant and powerful end product.",
                  },
                ].map((j, i) => (
                  <div
                    key={j.process}
                    className="relative col-span-1 bg-darkgreen items-center justify-center"
                  >

                    <div className="absolute top-0 left-0 w-8 h-8 bg-lightgreen grid grid-cols-3 grid-rows-3 gap-[0.5px] p-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="bg-emerald-800"></div>
                      ))}
                    </div>
                    <img src={j.img} alt="" className="w-full" />
                    <div className="p-4 xl:p-6 flex flex-col gap-2 text-white">
                      <Typography
                        variant="2xl/medium"
                        className="text-lightgreen tracking-tight"
                      >
                        {j.process}
                      </Typography>
                      <Typography variant="lg/normal" className="text-white">
                        {j.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div> */}
              </div>
              <div>
                {/* <div className="col-span-5 lg:col-span-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 flex-wrap">
                    {[
                      {
                        heading: "$1.7B",
                        description: "Total planned investment by 2035",
                      },
                      {
                        heading: "1.2 GW",
                        description: "Initial annual production capacity",
                      },
                      {
                        heading: ">24.8%",
                        description: "HJT cell efficiency achieved",
                      },
                      {
                        heading: "76%+",
                        description:
                          "Local manufacturing integration in Morocco",
                      },

                      {
                        heading: "1st in Africa, EU & MENA",
                        description: "Fully integrated PV production",
                      },

                      {
                        heading: "Global Exports",
                        description: "Serving EU, USA, India, Africa",
                      },
                    ].map((s) => (
                      <div key={s.heading} className="bg-darkgreen p-4">
                        <Typography
                          variant="3xl/semibold"
                          className="text-lightgreen tracking-tight"
                        >
                          {s.heading}
                        </Typography>
                        <Typography variant="lg/normal" className="text-white">
                          {s.description}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div> */}
                <div className="col-span-5 lg:col-span-3 pt-4 lg:pt-10">
                  <div>
                    <div>
                      <div className="flex flex-col gap-6">
                        <Typography
                          variant="4xl/medium"
                          className="tracking-tighter"
                        >
                          MSC OASIS – Phase 1 (2025–2026)
                        </Typography>

                        <div className="flex gap-4 items-center relative">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 flex-wrap">
                            {[
                              {
                                heading: "€240 Million",
                                description: "Investment (2025–2026)",
                              },
                              {
                                heading: "1.2 GW",
                                description:
                                  "Initial annual production capacity",
                              },
                              {
                                heading: "1,000",
                                description: "Direct skilled jobs",
                              },
                              {
                                heading: "3,000",
                                description: "Indirect jobs",
                              },
                              {
                                heading: "€20 Million",
                                description:
                                  "Already invested in planning, technology studies & business plan",
                              },
                              {
                                heading: "€54 Million",
                                description:
                                  "Secured in patents & IP to anchor innovation",
                              },
                              {
                                heading: ">24.8%",
                                description: "HJT cell efficiency achieved",
                              },
                              {
                                heading: "76%+",
                                description:
                                  "Local manufacturing integration in Morocco",
                              },
                            ].map((s) => (
                              <div key={s.heading} className="bg-darkgreen p-4">
                                <Typography
                                  variant="3xl/semibold"
                                  className="text-lightgreen tracking-tight"
                                >
                                  {s.heading}
                                </Typography>
                                <Typography
                                  variant="lg/normal"
                                  className="text-white"
                                >
                                  {s.description}
                                </Typography>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* project overview */}

        <Section id="oasis" className="">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="" className="">
                    OASIS
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      MSC OASIS: Integrated PV Production for Morocco’s Energy
                      Future
                    </Typography>
                    <Typography variant="lg/normal">
                      MSC OASIS is more than a factory — it’s a flagship project
                      designed to strengthen Morocco’s energy independence and
                      global positioning in renewable energy.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full text-left">
                  {[
                    {
                      title: "Energy Security",
                      description:
                        "Reduce dependence on energy imports and secure supply",
                    },
                    {
                      title: "Job Creation",
                      description:
                        "Reduce dependence on energy imports and secure supply",
                    },
                    {
                      title: "Strategic Positioning",
                      description:
                        "Elevating Morocco as a renewable energy hub in Africa and globally",
                    },

                    {
                      title: "Ecosystem Development",
                      description:
                        "Empowering suppliers, SMEs, and service providers",
                    },
                    {
                      title: "Technology Transfer",
                      description:
                        "Bringing world-class H2GEMINI technology and expertise into Morocco",
                    },
                  ].map((j) => (
                    <div
                      key={j.title}
                      className={cn(
                        "relative p-4 bg-white border-b-2 border border-darkgreen/15 border-b-darkgreen flex flex-col gap-2"
                      )}
                    >
                      <div className="size-6 bg-lightgreen/70 absolute top-0 right-0 inline-flex items-center justify-center text-xl text-white">
                        <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Typography
                          className="text-darkgreen tracking-tight"
                          variant="2xl/medium"
                        >
                          {/* {i + 1}.  */}
                          {j.title}
                        </Typography>
                        <Typography
                          className="text-darkgreen/70 tracking-tight"
                          variant="lg/medium"
                        >
                          {j.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <img
                  src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                  alt=""
                  className="w-full"
                /> */}
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* What we do */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-5">
              <div className="col-span-5 lg:col-span-3">
                <div className="flex flex-col gap-10">
                  {/* <SectionTag id="what-we-do" className="bg-lime-100">
                    What we do
                  </SectionTag> */}

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      From Silicon to Solar: Morocco’s First PV Manufacturing
                      Hub
                    </Typography>
                    <Typography variant="lg/normal">
                      MSC brings the full solar value chain to Morocco — from
                      crystallization and wafering to module production. With
                      cutting-edge technology and a global team of experts, we
                      aim to produce up to 10 GW annually, making Morocco a
                      leader in renewable energy.
                      {/* MSC is a Moroccan company that
                      develops projects for the production of the latest
                      generation of photovoltaic modules in Morocco. With an
                      international team with years of experience and a large
                      network in the PV industry, the entire value chain from
                      silicon to the finished photovoltaic module is to be
                      brought to Morocco.
                      <br />
                      We have set ourselves the goal of starting with an annual
                      production of 1 GW and then expanding production to 10
                      GW/a. */}
                    </Typography>
                  </div>

                  {/* <div>
                    <Button className="rounded-none text-base py-4 px-6">
                      Get Started
                    </Button>
                  </div> */}
                </div>
              </div>
              <div className="col-span-5 lg:col-span-2">
                <div className="bg-lightgreen">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    // src="https://framerusercontent.com/images/axh6uBVzfcWemJ09UA0Xht6Wv8.jpg?scale-down-to=1024"
                    alt=""
                    className="w-full"
                  />
                  <div className="p-6 flex flex-col gap-4">
                    <LogoText />

                    <p>
                      At MSC, we are creating Morocco’s renewable future with
                      world-class photovoltaic technology. Our production line
                      delivers next-generation solar modules that are efficient,
                      durable, and locally manufactured — supporting energy
                      independence and sustainability.
                      {/* MSC was founded with a
                      vision to drive sustainable energy solutions that empower
                      individuals, businesses, and communities. */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 sm:gap-4 lg:gap-2 xl:gap-4">
                {[
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/add613f9-445e-4924-a817-e93fc34d4aa0-scaled-e1708698047702.jpg",
                    process: "Cristalisation",
                    description:
                      "With christalisation pullers high-purity silicon is grown to produce wafers.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/312da068-5e78-4ef9-a923-562e8045cb60-e1708697943670.jpg",
                    process: "Wafering",
                    description:
                      "The high-purity silicon is cut into thin wafers using wire saws.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/d15c0954-1aff-4081-a8cf-633c4b510dca-e1708697904572.jpg",
                    process: "Cell manufacturing",
                    description:
                      "By applying different thin layers, the wafer becomes a photovoltaic cell that can generate electricity from light.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/3kxpy-2prl0-e1708698106933.jpg",
                    process: "Module Manufacturing",
                    description:
                      "BThe cells are laminated in strings to form a module, creating a resistant and powerful end product.",
                  },
                ].map((j) => (
                  <div
                    key={j.process}
                    className="relative col-span-1 bg-darkgreen items-center justify-center"
                  >
                    {/* <div className="w-10 h-10 bg-lightgreen absolute top-0 left-0 items-center justify-center grid grid-cols-3">
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                    </div> */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-lightgreen grid grid-cols-3 grid-rows-3 gap-[0.5px] p-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="bg-emerald-800"></div>
                      ))}
                    </div>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img src={j.img} alt="" className="w-full" />
                    <div className="p-4 xl:p-6 flex flex-col gap-2 text-white">
                      <Typography
                        variant="2xl/medium"
                        className="text-lightgreen tracking-tight"
                      >
                        {j.process}
                      </Typography>
                      <Typography variant="lg/normal" className="text-white">
                        {j.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* Technology */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-5">
              <div className="col-span-5 lg:col-span-3">
                <div className="flex flex-col gap-10">
                  <SectionTag id="technology" className="">
                    Technology
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Next-Generation HJT Solar Technology
                    </Typography>
                    <Typography variant="lg/normal">
                      MSC’s production is based on Heterojunction Technology
                      (HJT), one of the most efficient photovoltaic cell
                      technologies available today.
                    </Typography>
                    <div>
                      <div className="grid grid-cols-1 gap-2 md:gap-10 bg-white md:grid-cols-2 w-full text-left py-4">
                        {[
                          "Cell efficiency above 24.8%",
                          "High bifaciality and long lifespan",
                          "Lower levelised cost of energy (LCOE) compared to P-type cells",
                          "Competitive beyond Asia’s economies of scale",
                        ].map((j) => (
                          <div key={j} className="bg-white flex flex-col">
                            <span className="size-6 bg-darkgreen inline-flex items-center justify-center text-white">
                              <CheckIcon className="w-5 h-5 text-lightgreen" />
                            </span>
                            <div>
                              <Typography
                                variant="xl/medium"
                                className="bg-darkgreen text-white p-2"
                              >
                                {j}
                              </Typography>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* <div>
                    <Button className="rounded-none text-base py-4 px-6">
                      Get Started
                    </Button>
                  </div> */}
                </div>
              </div>
              <div className="col-span-5 lg:col-span-2">
                <div className="pt-8">
                  <div className="flex items-end justify-end">
                    <div className="aspect-square overflow-hidden bg-darkgreen p-2 outline-1 -outline-offset-1 outline-black/10">
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1689561799161-7d5852ee10a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="block size-full object-cover border-2 border-lightgreen"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* product */}
        {/* Technology */}
        <Section id="product" className="">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-8">
              <div className="col-span-5 lg:col-span-4">
                <div className="flex flex-col gap-10 pt-8">
                  <div className="flex flex-col gap-6">
                    <SectionTag id="value" className="">
                      Product
                    </SectionTag>
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Our Flagship Module
                    </Typography>
                    <Typography variant="lg/normal">
                      The MSC GEMINI 710–730W bifacial HJT module combines
                      ultra-high efficiency, desert-proof durability, and a
                      40-year guarantee — built for Morocco and beyond.
                      <br />
                      <br />
                      Ultra-high efficiency. Proven durability. Designed for
                      Morocco & the world.
                    </Typography>
                    <div className="flex flex-col gap-10">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 w-full text-left py-2 lg:grid-cols-1">
                        {[
                          "710–730W Power Range",
                          "23.5% Efficiency",
                          "40-Year Guarantee",
                          "Desert-Proven Reliability",
                        ].map((j) => (
                          <div
                            key={j}
                            className={cn(
                              "relative p-4 bg-white border-b-2 border border-darkgreen/15 border-b-darkgreen flex flex-col gap-2"
                            )}
                          >
                            <div className="size-6 bg-lightgreen/70 absolute top-0 right-0 inline-flex items-center justify-center text-xl text-white">
                              <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                              <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                              <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                              <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                            </div>

                            <div className="flex flex-col gap-2">
                              <Typography
                                className="text-darkgreen tracking-tight"
                                variant="2xl/medium"
                              >
                                {/* {i + 1}.  */}
                                {j}
                              </Typography>
                              {/* <Typography
                                className="text-darkgreen/70 tracking-tight"
                                variant="lg/medium"
                              >
                                {j}
                              </Typography> */}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full text-left py-2 lg:grid-cols-1">
                        {[
                          "710–730W Power Range",
                          "23.5% Efficiency",
                          "40-Year Guarantee",
                          "Desert-Proven Reliability",
                        ].map((j, i) => (
                          <div
                            key={j}
                            className="bg-darkgreen border relative grid grid-cols-8"
                          >
                            <div
                              className={cn(
                                "col-span-8 p-2 lg:p-3 bg-darkgreen",
                                {
                                  "": i % 2 === 1,
                                }
                              )}
                            >
                              <Typography
                                variant="xl/semibold"
                                className="text-white tracking-tight"
                              >
                                {j}
                              </Typography>
                            </div>
                          </div>
                        ))}
                      </div> */}
                      <div>
                        <Button
                          className="rounded-none text-base py-5 px-6 bg-lightgreen text-darkgreen hover:bg-lightgreen/90"
                          asChild
                        >
                          <Link href="/product">View Product</Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* <div>
                    <Button className="rounded-none text-base py-4 px-6">
                      Get Started
                    </Button>
                  </div> */}
                </div>
              </div>
              <div className="col-span-5 lg:col-span-4">
                <div className="">
                  <div className="flex items-end justify-end">
                    <div className="overflow-hidden">
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src="/images/PVModuleHJT.png"
                        alt=""
                        className="block size-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* Video */}
        <Section id="video" className="">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="video" className="">
                    Video
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Inside the Technology
                    </Typography>
                    <Typography variant="lg/normal">
                      See how MSC, in partnership with H2GEMINI, brings advanced
                      solar technology to Morocco.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-5">
                <div className="relative w-full h-full p-1 md:p-2.5 border border-black/10 rounded-lg overflow-hidden shadow-xl bg-white/20 backdrop-blur-xl">
                  {/* <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] shadow-sm ring-1 ring-black/5 [--padding:theme(spacing.2)] bg-gray-100 -z-10"></div> */}
                  {/* <img
                    src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                    className="h-full rounded-md ring-1 ring-black/10 w-full"
                  /> */}
                  <video
                    controls
                    playsInline
                    // poster="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg" // optional thumbnail image
                    className="w-full h-auto rounded-md ring-1 ring-black/10"
                  >
                    <source
                      src="/videos/msc-h2gemini-video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* <img
                  src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                  alt=""
                  className="w-full"
                /> */}
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* Technology */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="value" className="">
                    Value
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Made in Morocco,
                      <br /> For the World
                    </Typography>
                    <Typography variant="2xl/normal">
                      By localizing every step of production, MSC strengthens
                      Morocco’s energy independence, creates local jobs, and
                      offers high-quality solar technology to international
                      markets.
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="col-span-5 lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-1 w-full text-left py-4">
                  {[
                    {
                      percentage: "100%",
                      title: "Ingots",
                      description: "made in Morocco.",
                    },
                    {
                      percentage: "100%",
                      title: "Wafers",
                      description: "made in Morocco.",
                    },
                    {
                      percentage: "100%",
                      title: "Cells",
                      description: "made in Morocco.",
                    },
                    {
                      percentage: "76.7%",
                      title: "Modules",
                      description: "produced locally.",
                    },
                    // "Ingots: 100% made in Morocco",
                    // "Wafers: 100% made in Morocco",
                    // "Cells: 100% made in Morocco",
                    // "Modules: 76.7% produced locally",
                  ].map((j, i) => (
                    <div
                      key={j.title}
                      className="bg-darkgreen border relative grid grid-cols-3"
                    >
                      {/* <span className="size-6 bg-darkgreen inline-flex items-center justify-center text-white">
                              <CheckIcon className="w-5 h-5 text-lightgreen" />
                            </span> */}
                      <div
                        className={cn(
                          "flex items-center justify-center bg-lightgreen",
                          {
                            // "bottom-0": i < 2,
                            // "top-0": i > 1,
                            "order-last": i % 2 === 0,
                            "left-0": i % 2 === 1,
                          }
                        )}
                      >
                        <Typography
                          variant="4xl/semibold"
                          className="text-darkgreen p-1"
                        >
                          {j.percentage}
                        </Typography>
                      </div>
                      <div
                        className={cn("col-span-2 p-6", {
                          "": i % 2 === 1,
                        })}
                      >
                        <Typography
                          variant="3xl/semibold"
                          className="text-white tracking-tight"
                        >
                          {j.title}
                        </Typography>
                        <Typography
                          variant="2xl/medium"
                          className="text-white tracking-tight"
                        >
                          {j.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* <Section className="bg-darkgreen text-white">
          <PageContainer
            size="md"
            className="flex flex-col gap-y-12 items-center"
          >
            <div className="text-center flex flex-col gap-12">
              <Typography
                variant="5xl/medium"
                className="text-white tracking-tighter"
              >
                The MSC Advantage
              </Typography>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-3xl mx-auto w-full text-left">
                {[
                  {
                    title: "Local Manufacturing Power",
                    subtitle: "1 GW Annual Production",
                    description:
                      "MSC is launching Morocco’s first photovoltaic module factory, starting with 1 GW capacity and scaling to 10 GW to meet global demand.",
                  },
                  {
                    title: "Full Solar Value Chain",
                    subtitle: "From Silicon to Module",
                    description:
                      "We bring every step of solar manufacturing — crystallization, wafering, cell, and module production — directly to Morocco.",
                  },
                  {
                    title: "Global Expertise",
                    subtitle: "International Team, Local Impact",
                    description:
                      "Our experienced international network in the PV industry is building Morocco’s place in the global renewable energy market.",
                  },
                  {
                    title: "Sustainable Growth",
                    subtitle: "Driving Energy Independence",
                    description:
                      "By producing high-efficiency solar technology locally, we reduce imports, strengthen Morocco’s economy, and cut carbon emissions.",
                  },
                ].map((j, i) => (
                  <div
                    key={j.title}
                    className={cn(
                      "p-6 border-b-2 border-lightgreen bg-[#2b5254] flex flex-col gap-2",
                      {
                        "border-b-0": i > 1,
                        "border-t-2": i > 1,
                      }
                    )}
                  >
                    <div>
                      <Typography
                        className="text-lightgreen tracking-tight"
                        variant="2xl/medium"
                      >
                        {j.title}
                      </Typography>
                      <Typography
                        className="text-white tracking-tight"
                        variant="xl/medium"
                      >
                        {j.subtitle}
                      </Typography>
                    </div>
                    <Typography variant="base/normal" className="text-white">
                      {j.description}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </Section> */}
        <Section className="relative bg-gray-100/70">
          <PageContainer
            size="xl"
            className="flex flex-col gap-y-12 items-center"
          >
            <div className="text-center flex flex-col gap-16">
              {/* <SectionTag id="what-we-do" className="bg-transparent">
                What we do
              </SectionTag> */}
              <Typography
                variant="5xl/medium"
                className="text-darkgreen tracking-tighter"
              >
                The MSC Advantage
                {/* We’re proud to advance renewable innovation, making a real
                impact on communities and the environment. */}
              </Typography>

              <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 text-left">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full text-left">
                  {[
                    {
                      title: "Local Manufacturing Power",
                      subtitle: "1 GW Annual Production",
                      description:
                        "MSC is launching Morocco’s first photovoltaic module factory, starting with 1 GW capacity and scaling to 10 GW to meet global demand.",
                    },
                    {
                      title: "Full Solar Value Chain",
                      subtitle: "From Silicon to Module",
                      description:
                        "We bring every step of solar manufacturing — crystallization, wafering, cell, and module production — directly to Morocco.",
                    },
                    //                   3. Global Expertise
                    // International Team, Local Impact
                    // Our experienced international network in the PV industry is building Morocco’s place in the global renewable energy market.

                    // 4. Sustainable Growth
                    // Driving Energy Independence
                    // By producing high-efficiency solar technology locally, we reduce imports, strengthen Morocco’s economy, and cut carbon emissions.
                    {
                      title: "Global Expertise",
                      subtitle: "International Team, Local Impact",
                      description:
                        "Our experienced international network in the PV industry is building Morocco’s place in the global renewable energy market.",
                    },
                    {
                      title: "Sustainable Growth",
                      subtitle: "Driving Energy Independence",
                      description:
                        "By producing high-efficiency solar technology locally, we reduce imports, strengthen Morocco’s economy, and cut carbon emissions.",
                    },
                  ].map((j, i) => (
                    <div
                      key={j.title}
                      className={cn(
                        "relative p-4 bg-white border-b-2 border-lightgreen flex flex-col gap-2"
                      )}
                    >
                      <div className="size-6 bg-lightgreen absolute top-0 right-0 inline-flex items-center justify-center text-xl text-white">
                        <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                      </div>

                      <div>
                        <Typography
                          className="text-darkgreen tracking-tight"
                          variant="2xl/medium"
                        >
                          {i + 1}. {j.title}
                        </Typography>
                        <Typography
                          className="text-darkgreen/70 tracking-tight"
                          variant="xl/medium"
                        >
                          {j.subtitle}
                        </Typography>
                      </div>
                      <Typography
                        variant="base/normal"
                        className="text-darkgreen"
                      >
                        {j.description}
                      </Typography>
                    </div>
                    // <div
                    //   key={j.title}
                    //   className={cn(
                    //     "relative p-6 border-b-2 border-lightgreen bg-darkgreen flex flex-col gap-2",
                    //     {
                    //       "border-b-0": i > 1,
                    //       "border-t-2": i > 1,
                    //     }
                    //   )}
                    // >
                    //   <div className="size-6 bg-lightgreen absolute top-0 right-0 inline-flex items-center justify-center text-xl text-white">
                    //     <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                    //     <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                    //     <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                    //     <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                    //   </div>

                    //   <div>
                    //     <Typography
                    //       className="text-lightgreen tracking-tight"
                    //       variant="2xl/medium"
                    //     >
                    //       {j.title}
                    //     </Typography>
                    //     <Typography
                    //       className="text-white tracking-tight"
                    //       variant="xl/medium"
                    //     >
                    //       {j.subtitle}
                    //     </Typography>
                    //   </div>
                    //   <Typography variant="base/normal" className="text-white">
                    //     {j.description}
                    //   </Typography>
                    // </div>
                  ))}
                </div>
                <div className="bg-darkgreen order-first xl:order-last">
                  {/* eslint-disable @next/next/no-img-element */}
                  <img
                    src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                    // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full opacity-90"
                  />
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
        {/*  */}
        {/* Technology */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-5">
              <div className="col-span-5 lg:col-span-5">
                <div className="flex flex-col gap-10">
                  <SectionTag id="technology" className="">
                    Project
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Project Status
                    </Typography>

                    <div>
                      <div className="grid grid-cols-1 gap-2 md:gap-6 bg-white md:grid-cols-2 w-full text-left py-4 lg:grid-cols-3">
                        {[
                          "Dossier submitted to AMDIE (under review)",
                          "Site secured: 17 hectares in Al Ouatia, Guelmim region (near Tan-Tan)",
                          "Banking partners: Attijariwafa Bank (AFC), Bank Populaire (UPLINE)",
                          "Investors & Offtakes: LOIs with MGH and US Holding",
                          "Registration number: R6800/56",
                        ].map((j) => (
                          <div
                            key={j}
                            className="p-3 border border-darkgreen/30 flex gap-2 bg-lightgreen/10"
                          >
                            <div className="flex gap-2">
                              <span className="size-6 h-5 bg-darkgreen flex items-center justify-center text-white mt-1">
                                <CheckIcon className="w-5 h-4 text-lightgreen" />
                              </span>
                              <Typography
                                as="span"
                                variant="xl/medium"
                                className="text-darkgreen"
                              >
                                {j}
                              </Typography>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* <div>
                    <Button className="rounded-none text-base py-4 px-6">
                      Get Started
                    </Button>
                  </div> */}
                </div>
              </div>
              {/* <div className="col-span-5 lg:col-span-2">
                <div className="pt-8">
                  <div className="flex items-end justify-end">
                    <div className="aspect-square overflow-hidden bg-darkgreen p-2 outline-1 -outline-offset-1 outline-black/10">
                      <img
                        src="https://images.unsplash.com/photo-1689561799161-7d5852ee10a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="block size-full object-cover border-2 border-lightgreen"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </PageContainer>
        </Section>
        {/* <Section className="text-darkgreen">
          <PageContainer
            size="sm"
            className="flex flex-col gap-12 items-center"
          >
            <div className="text-center flex flex-col gap-20">
              <SectionTag id="team" className="bg-darkgreen">
                Team
              </SectionTag>
              <Typography
                variant="6xl/medium"
                className="text-darkgreen tracking-tighter"
              >
                Our Team - Leadership Driving Morocco’s Solar Future
              </Typography>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {[
                  {
                    name: "Ahmed Jaafar",
                    title: "CEO",
                    description: "Founder / CEO",
                    image: "/images/ahmed-jaafar.webp",
                  },
                  {
                    name: "Dr. Dirk Habermann",
                    title: "CTO",
                    description: "Founder / CTO",
                    image: "/images/dr-dirk.webp",
                  },
                ].map((team) => (
                  <div
                    key={team.name}
                    className="relative border-2 border-darkgreen"
                  >
                    <img
                      src={team.image}
                      alt=""
                      className="w-full h-96 object-cover"
                    />
                    <div className="px-4 py-3 flex flex-col gap-1 absolute bottom-0 left-0 right-0 bg-darkgreen/50 backdrop-blur-xl text-left">
                      <Typography
                        variant="xl/medium"
                        className="text-white tracking-tight"
                      >
                        {team.name}
                      </Typography>

                      <Typography variant="base/normal" className="text-white">
                        {team.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </Section> */}
        <Section id={"team"} className="bg-darkgreen">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="flex flex-col gap-16">
              <div className="text-center flex flex-col items-center gap-4">
                <SectionTag id="team" className="bg-darkgreen text-white">
                  Team
                </SectionTag>
                <Typography
                  variant="6xl/medium"
                  className="text-white tracking-tighter"
                >
                  Our Team
                </Typography>
                {/* - Leadership Driving Morocco’s Solar Future */}
              </div>
              {/* <Typography variant="lg/normal" className="">
                Discover sustainable solutions that reduce costs and
                environmental impact. Take the first step today!
              </Typography> */}
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="flex flex-col gap-6">
                  <Typography
                    variant="5xl/medium"
                    className="text-white tracking-tighter"
                  >
                    Leadership Driving Morocco’s{" "}
                    <span className="text-lightgreen">Solar </span>Future
                  </Typography>

                  <Typography
                    variant="xl/normal"
                    className="text-white tracking-tight max-w-lg"
                  >
                    Our leadership combines international expertise in
                    photovoltaics with a deep commitment to Morocco’s renewable
                    future.
                    <br />
                    <br />
                    Together, they guide MSC in shaping a solar industry with
                    both local impact and global reach.
                  </Typography>

                  {/* <div className="grid gap-4 py-4">
                    {[
                      "Proven international expertise in photovoltaics",
                      "Commitment to Morocco’s renewable future",
                      "Pioneering the nation’s first integrated solar value chain",
                      "Driving innovation from silicon to solar modules",
                    ].map((j, i) => (
                      <div
                        key={j}
                        className="relative border-lightgreen flex gap-2 items-center"
                      >
                        <div>
                          <CheckCircle2Icon className="w-5 h-5 fill-current text-darkgreen stroke-lightgreen" />
                        </div>
                        <div className="text-white">
                          <p>{j}</p>
                        </div>
                      </div>
                    ))}
                  </div> */}
                  {/* - Leadership Driving Morocco’s Solar Future */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 order-first lg:order-last">
                  {[
                    {
                      name: "Ahmed Jaafar",
                      title: "CEO",
                      description: "Founder / CEO",
                      bio: "Ahmed Jaafar co-founded Moroccan Solar Cells (MSC) with the ambition of transforming Morocco into a photovoltaic manufacturing leader. With a deep-rooted vision for sustainable industry, he oversees MSC's strategic direction, investor outreach, and operational launch.",
                      image: "/images/ahmed-jaafar.webp",
                    },
                    {
                      name: "Dr. Dirk Habermann",
                      title: "CTO",
                      description: "Founder / CTO",
                      bio: "Dr. Dirk Habermann brings over 25 years of experience in semiconductors and photovoltaics. Before co-founding MSC, he held CTO positions at Meyer Burger AG and the Schmid Group. He is also co-founder of H2GEMINI, a leader in advanced PV technologies, and holds more than 45 international patents. At MSC, Dr. Habermann leads technology development, ensuring innovation and efficiency across the entire solar value chain.",
                      image: "/images/dr-dirk.webp",
                    },
                  ].map((team) => (
                    <div
                      key={team.name}
                      className="relative border-2 border-darkgreen"
                    >
                      <div className="size-6 bg-white absolute bottom-0 right-0 inline-flex items-center justify-center text-xl text-white z-10">
                        <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                      </div>
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src={team.image}
                        alt=""
                        className="w-full h-96 object-cover"
                      />
                      <div className="px-4 py-3 flex flex-col gap-1 absolute bottom-0 left-0 right-0 bg-darkgreen/50 backdrop-blur-xl text-left">
                        <Typography
                          variant="xl/medium"
                          className="text-white tracking-tight"
                        >
                          {team.name}
                        </Typography>
                        {/* <Typography variant="lg/normal" className="text-white">
                        {team.title}
                      </Typography> */}
                        <Typography
                          variant="base/normal"
                          className="text-white"
                        >
                          {team.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
      </div>
    </div>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
