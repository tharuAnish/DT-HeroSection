import logo from "../assets/logo.png"

const NAVBAR_CLASSES = {
  container: "mx-auto flex items-center justify-between",
  logo: "h-[35px] mr-2 cursor-pointer",
  menuLink:
    "hover:text-blue-500 p-3 text-sm hover:underline transition hover:duration-100",
  contactBtn:
    "border border-blue-500 text-blue-500 px-6 py-[7px] font-semibold rounded-full hover:shadow-lg transition hover:duration-300",
  demoBtn:
    "bg-gradient-to-r from-blue-800 to-sky-400 text-white px-6 py-[7px] rounded-full font-semibold hover:shadow-lg hover:bg-blue-600 transition hover:duration-300 hover:from-blue-900 hover:to-sky-500 ",
}

const MENU_ITEMS = [
  { name: "About Us", href: "#" },
  { name: "How It Works", href: "#" },
  { name: "Features", href: "#" },
  { name: "Clinics", href: "#" },
  { name: "Product", href: "#" },
  { name: "Testimonial", href: "#" },
  { name: "Pricing", href: "#" },
]

const Navbar = () => {
  return (
    <nav className="p-4 wrapper ">
      <div className={NAVBAR_CLASSES.container}>
        <div className="flex items-center basis-1/4">
          <img src={logo} alt="Logo" className={NAVBAR_CLASSES.logo} />
        </div>
        <ul className="flex space-x-[10px] text-zinc-700  ">
          {MENU_ITEMS.map((item) => (
            <li key={item.name}>
              <a href={item.href} className={NAVBAR_CLASSES.menuLink}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-3 basis-1/4 justify-end">
          <a href="#" className={NAVBAR_CLASSES.contactBtn}>
            Contact Us
          </a>
          <a href="#" className={NAVBAR_CLASSES.demoBtn}>
            Book A Demo
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
