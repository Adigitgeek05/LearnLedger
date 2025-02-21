

export default function Footer() {
    const footerLinks = {
      Products: [
        { name: "Global Shop", href: "#" },
        { name: "Desktop App", href: "#" },
        { name: "Mobile App", href: "#" },
        { name: "Browser Extension", href: "#" },
        { name: "View All Products", href: "#" },
      ],
      Learn: [
        { name: "Solutions", href: "#" },
        { name: "Support", href: "#" },
        { name: "About", href: "#" },
        { name: "Why Choose", href: "#" },
        { name: "OneKey", href: "#" },
      ],
      Support: [
        { name: "Help Center", href: "#" },
        { name: "Submit a Request", href: "#" },
        { name: "System Status", href: "#" },
        { name: "Firmware Update", href: "#" },
      ],
      Company: [
        { name: "Career", href: "#" },
        { name: "Our Blog", href: "#" },
        { name: "Media Kits", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "User Agreement", href: "#" },
      ],
    };
  
    const bottomLinks = ["Help", "Referral", "Co-leached", "Products"];
  
    return (
      <footer className="bg-[#111827] text-white py-12">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-[#A855F7] text-xl font-semibold mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white hover:underline transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
  
          <div className="border-t border-gray-700 my-8"></div>
  
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Learn Leedger Limited. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {bottomLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
  

  
  
  