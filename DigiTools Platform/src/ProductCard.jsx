const ProductCard = ({ product }) => {
  const isImageIcon = typeof product.icon === 'string'

  return (
    <article className="rounded-2xl border border-[#E8EAF2] bg-white p-5 shadow-[0_10px_28px_rgba(24,24,40,0.05)]">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-[#F5F6FF] text-sm">
          {isImageIcon ? (
            <img src={product.icon} alt={product.title} className="h-full w-full object-contain p-1" />
          ) : (
            product.icon
          )}
        </span>
        <span className="rounded-full bg-[#FFF2DE] px-2 py-1 text-[11px] font-medium text-[#C97A14]">
          {product.badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-[#1F2637]">{product.title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-[#7C859C]">{product.description}</p>

      <div className="mt-3 flex items-center gap-2">
        <p className="text-[22px] font-semibold text-[#1F2637]">{product.price}</p>
        <p className="text-sm text-[#A1A9BD] line-through">{product.oldPrice}</p>
      </div>

      <ul className="mt-3 space-y-1.5 text-sm text-[#677088]">
        {product.highlights.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3DCB79]" />
            {point}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-sm font-semibold text-white"
      >
        Buy Now
      </button>
    </article>
  )
}

export default ProductCard
