const PricingCard = ({ plan, index }) => {
  const isFeatured = index === 1

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-6 ${
        isFeatured
          ? 'border-transparent bg-linear-to-br from-[#5A37F5] to-[#9815FA] text-white shadow-[0_18px_40px_rgba(90,55,245,0.35)]'
          : 'border-[#E8EAF2] bg-white text-[#1F2637] shadow-[0_10px_28px_rgba(24,24,40,0.04)]'
      }`}
    >
      {isFeatured && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD86E] px-3 py-1 text-xs font-semibold text-[#8A4B00]">
          Most Popular
        </span>
      )}

      <h3 className={`text-3xl font-semibold sm:text-4xl ${isFeatured ? 'text-white' : 'text-[#1F2637]'}`}>{plan.name}</h3>
      <p className={`mt-2 text-sm sm:text-base ${isFeatured ? 'text-white/85' : 'text-[#7C859C]'}`}>{plan.subtitle}</p>

      <div className="mt-5 flex items-end gap-1">
        <p className={`text-5xl font-bold leading-none sm:text-6xl ${isFeatured ? 'text-white' : 'text-[#1B2235]'}`}>{plan.price}</p>
        <p className={`pb-1 text-xl sm:pb-2 sm:text-2xl ${isFeatured ? 'text-white/85' : 'text-[#8C94A9]'}`}>/Month</p>
      </div>

      <ul className="my-6 space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-3 text-sm leading-6 sm:text-base ${isFeatured ? 'text-white/95' : 'text-[#56617A]'}`}
          >
            <img src="/Check.png" alt="Check" className="mt-1 h-4 w-4 shrink-0 object-contain" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-auto inline-flex h-12 w-full items-center justify-center rounded-full text-base font-semibold ${
          isFeatured
            ? 'bg-white text-[#5A37F5]'
            : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
        }`}
      >
        {plan.cta}
      </button>
    </div>
  )
}

export default PricingCard