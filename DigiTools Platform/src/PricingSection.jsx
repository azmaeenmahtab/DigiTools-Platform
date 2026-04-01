import pricingPlans from './data/pricingPlans'
import PricingCard from './PricingCard'

const PricingSection = () => {
  return (
    <section className="bg-[#F6F7FB] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#131A2C] sm:text-4xl lg:text-6xl">Simple, Transparent Pricing</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-[#76829A] sm:text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection