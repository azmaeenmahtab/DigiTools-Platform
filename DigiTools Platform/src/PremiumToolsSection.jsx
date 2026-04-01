import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
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

const PremiumToolsSection = ({ onCartCountChange = () => {} }) => {
  const [activeTab, setActiveTab] = useState('products')
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    onCartCountChange(cartItems.length)
  }, [cartItems.length, onCartCountChange])

  const addToCart = (product) => {
    if (cartItems.some((item) => item.title === product.title)) {
      return
    }

    setCartItems((prevItems) => [...prevItems, product])
    toast.success(`${product.title} added to cart`)
  }

  const removeFromCart = (title) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.title !== title))
    toast.info(`${title} removed from cart`)
  }

  const handleCheckout = () => {
    setCartItems([])
    setActiveTab('products')
    toast.success('Checkout complete. Cart cleared!')
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + Number(item.price.replace('$', '')), 0)

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#1F2637] sm:text-5xl">Premium Digital Tools</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-[#7C859C] sm:text-base">
            Choose from our curated collection of premium digital products designed to supercharge your workflow,
            boost your productivity, and elevate your creative process.
          </p>

          <div className="mt-6 inline-flex items-center rounded-full bg-[#F4F5FA] p-1.5">
            <button
              type="button"
              onClick={() => setActiveTab('products')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'products'
                  ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                  : 'text-[#606B84]'
              }`}
              aria-pressed={activeTab === 'products'}
            >
              Products
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cart')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeTab === 'cart'
                  ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'
                  : 'text-[#606B84]'
              }`}
              aria-pressed={activeTab === 'cart'}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {activeTab === 'products' ? (
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <ProductCard
                key={card.title}
                product={card}
                isInCart={cartItems.some((item) => item.title === card.title)}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-[#E8EAF2] bg-white p-6 shadow-[0_10px_28px_rgba(24,24,40,0.05)]">
            <h3 className="text-2xl font-semibold text-[#1F2637]">Your Cart</h3>

            {cartItems.length === 0 ? (
              <div className="flex min-h-72 flex-col items-center justify-center text-center">
                <img src="/shopping-cart-01.png" alt="Cart" className="h-16 w-16 object-contain opacity-70" />
                <p className="mt-4 text-lg font-semibold text-[#1F2637]">No products in cart</p>
              </div>
            ) : (
              <>
                <div className="mt-6 space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-xl bg-[#F4F5FA] p-4">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                          <img src={item.icon} alt={item.title} className="h-7 w-7 object-contain" />
                        </span>
                        <div>
                          <p className="text-2xl font-semibold text-[#1F2637]">{item.title}</p>
                          <p className="mt-1 text-base text-[#7C859C]">{item.price}</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.title)}
                        className="text-sm font-semibold text-[#FF4B8B]"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-base text-[#8A93A8]">Total:</p>
                  <p className="text-4xl font-semibold text-[#1F2637]">${cartTotal}</p>
                </div>

                <button
                  type="button"
                  onClick={handleCheckout}
                  className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-base font-semibold text-white"
                >
                  Proceed To Checkout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default PremiumToolsSection
