const navLinks = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="navbar mx-auto min-h-20 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="navbar-start gap-2">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost btn-sm p-0 text-[#111827] lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu dropdown-content z-10 mt-3 w-56 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
              {navLinks.map((link) => (
                <li key={link}>
                  <a className="text-sm font-medium text-[#111827] hover:text-[#4F39F6]">{link}</a>
                </li>
              ))}
              <li>
                <a className="text-sm font-medium text-[#111827]">Login</a>
              </li>
            </ul>
          </div>

          <a href="#" className="inline-flex items-center">
            <img src="/DigiTools.png" alt="DigiTools" className="h-11 w-auto" />
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-sm font-medium text-[#111827]">
            {navLinks.map((link) => (
              <li key={link}>
                <a className="rounded-full px-3 py-2 text-sm font-medium text-[#111827] transition-colors hover:bg-transparent hover:text-[#4F39F6]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <button className="btn btn-ghost hidden min-h-0 h-9 w-9 rounded-full p-0 text-[#111827] hover:bg-transparent lg:inline-flex" aria-label="Cart">
            <img src="/shopping-cart-01.png" alt="Cart" className="h-4 w-4" />
          </button>

          <a href="#" className="hidden text-[17px] font-medium text-[#111827] transition-colors hover:text-[#4F39F6] lg:inline-flex">
            Login
          </a>

          <a
            href="#"
            className="inline-flex h-11 items-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 text-[17px] font-semibold text-white shadow-[0_8px_20px_rgba(79,57,246,0.25)] transition-transform hover:scale-[1.02]"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar