const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '200+', label: 'Premium Tools' },
  { value: '4.9', label: 'Rating' },
]

const StatsBar = () => {
  return (
    <section className="w-full bg-white pb-16 pt-8">
      <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 divide-y divide-white/20 px-6 py-12 text-white sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-10 lg:px-14">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center justify-center gap-2 py-2">
              <p className="text-4xl font-semibold tracking-tight">{item.value}</p>
              <p className="text-lg font-normal text-white/75">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
