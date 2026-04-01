const StepCard = ({ step, icon, title, description }) => {
  return (
    <article className="relative rounded-2xl border border-[#E8EAF2] bg-white px-6 py-8 text-center shadow-[0_10px_28px_rgba(24,24,40,0.04)]">
      <span className="absolute right-3 top-3 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[#6A35F8] px-2 text-xs font-semibold text-white">
        {String(step).padStart(2, '0')}
      </span>

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F0E8FF]">
        <img src={icon} alt={title} className="h-8 w-8 object-contain" />
      </div>

      <h3 className="mt-5 text-3xl font-semibold text-[#1F2637]">{title}</h3>
      <p className="mx-auto mt-3 max-w-70 text-base leading-7 text-[#7C859C]">{description}</p>
    </article>
  )
}

export default StepCard