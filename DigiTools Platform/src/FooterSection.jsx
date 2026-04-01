const productLinks = ['Features', 'Pricing', 'Templates', 'Integrations']
const companyLinks = ['About', 'Blog', 'Careers', 'Press']
const resourceLinks = ['Documentation', 'Help Center', 'Community', 'Contact']

const FooterSection = () => {
  return (
    <footer className="bg-[#071634] px-4 pb-6 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 pb-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <img src="/DigiToolswhitelogo.png" alt="DigiTools" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#AEB8CD]">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link} className="text-sm text-[#AEB8CD]">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link} className="text-sm text-[#AEB8CD]">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link} className="text-sm text-[#AEB8CD]">
                  {link}
                </li>
              ))}
            </ul>

            
          </div>

          <div>
            <h3 className=" text-base font-semibold text-white">Social Links</h3>
            <div className="mt-3 flex items-center gap-2.5">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <img src="/Instagram.png" alt="Instagram" className="h-3.5 w-3.5 object-contain" />
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <img src="/Facebook.png" alt="Facebook" className="h-3.5 w-3.5 object-contain" />
              </span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white">
                <img src="/x.png" alt="X" className="h-3.5 w-3.5 object-contain" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-5 text-sm text-[#7E8AA8] sm:flex-row sm:items-center">
          <p>@ 2026 DigiTools. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection