import ProductCard from './ProductCard'

const cards = [
  {
    icon: "/products/operation.png",
    title: 'AI Writing Pro',
    description: 'Generate high-quality content, blogs, and marketing copy in seconds with smart tone control.',
    price: '$29',
    oldPrice: '$49',
    badge: 'Best Seller',
    highlights: ['Unlimited generations', 'Brand writing templates', 'Plagiarism checker'],
  },
  {
    icon: "/products/design-tool.png",
    title: 'Design Templates Pack',
    description: '2000+ premium templates for social media, presentations, websites, and mobile app screens.',
    price: '$49',
    oldPrice: '$79',
    badge: 'Popular',
    highlights: ['2000+ templates', 'Monthly updates', 'Commercial license'],
  },
  {
    icon: "/products/portfolio.png",
    title: 'Premium Stock Assets',
    description: 'Millions of royalty-free photos, vectors, videos, and UI resources for creative projects.',
    price: '$19',
    oldPrice: '$39',
    badge: 'New',
    highlights: ['No attribution', 'Commercial use', 'HD collection'],
  },
  {
    icon: "/products/shopping-cart.png",
    title: 'Automation Toolkit',
    description: 'Automate repetitive workflows and save hours every week with prebuilt no-code automations.',
    price: '$79',
    oldPrice: '$99',
    badge: 'Pro',
    highlights: ['100+ automations', 'API integration', 'Custom workflows'],
  },
  {
    icon: "/products/social-media.png",
    title: 'Resume Builder Pro',
    description: 'Create professional resumes with AI-powered suggestions, ATS optimization, and export options.',
    price: '$15',
    oldPrice: '$29',
    badge: 'Hot',
    highlights: ['ATS optimized', '40+ templates', 'Export to PDF'],
  },
  {
    icon: "/products/writing_2327400%201.png",
    title: 'Social Media Content Kit',
    description: 'Done-for-you content prompts, captions, and branded post ideas to grow your audience faster.',
    price: '$39',
    oldPrice: '$59',
    badge: 'Top Seller',
    highlights: ['4000+ assets', 'Scheduled bundles', 'Analytics-ready packs'],
  },
]

const PremiumToolsSection = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#1F2637] sm:text-5xl">Premium Digital Tools</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-[#7C859C] sm:text-base">
            Choose from our curated collection of premium digital products designed to supercharge your workflow,
            boost your productivity, and elevate your creative process.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button type="button" className="rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-5 py-2 text-sm font-semibold text-white">
              Products
            </button>
            <button type="button" className="rounded-full border border-[#E1E3EC] bg-white px-5 py-2 text-sm font-medium text-[#606B84]">
              Cart (3)
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <ProductCard key={card.title} product={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PremiumToolsSection
