const TransformWorkflowSection = () => {
  return (
    <section className="bg-white pb-16">
      <div className="w-full bg-linear-to-r from-[#4D33F5] to-[#9D14FB] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-4xl text-center text-white">
          <h2 className="text-5xl font-bold leading-tight sm:text-6xl">Ready To Transform Your Workflow?</h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/80 sm:text-lg">
            Join thousands of professionals who are already using DigiTools to work smarter.
            <br className="hidden sm:block" />
            Start your free trial today.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="inline-flex h-12 items-center rounded-full bg-white px-8 text-lg font-semibold text-[#5A37F5]"
            >
              Explore Products
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center rounded-full border border-white/70 px-8 text-lg font-semibold text-white"
            >
              View Pricing
            </button>
          </div>

          <p className="mt-6 text-base text-white/75">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}

export default TransformWorkflowSection