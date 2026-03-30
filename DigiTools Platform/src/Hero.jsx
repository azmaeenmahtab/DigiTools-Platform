const Hero = () => {
  return (
    <section className="bg-white px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pt-12">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#EEF0FF] px-4 py-2 text-sm font-medium text-[#5B33F8]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#6B3CFA] shadow-[0_0_0_4px_rgba(107,60,250,0.16)]" />
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-[52px] font-bold leading-[1.06] tracking-[-0.02em] text-[#232B3F] sm:text-[64px]">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#6B768E]">
            Access premium AI tools, design assets, templates, and productivity software-all in one place. Start creating faster today. Explore Products
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex h-12 items-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-7 text-[17px] font-semibold text-white shadow-[0_8px_20px_rgba(79,57,246,0.28)]"
            >
              Explore Products
            </a>

            <a
              href="#"
              className="inline-flex h-12 items-center gap-3 rounded-full border border-[#8A63FA] bg-white px-7 text-[17px] font-medium text-[#5B33F8]"
            >
              <img src="/Play.png" alt="Play icon" className="h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:justify-self-end">
          <img src="/banner.png" alt="AI productivity banner" className="h-auto w-full rounded-xl object-cover" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-44 bg-linear-to-r from-white via-white/80 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
