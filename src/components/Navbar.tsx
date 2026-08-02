import { Store } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { href: "/cart", label: "Cart" },
  { href: "/wishlist", label: "Wishlist" },
];

export default function Navbar() {
  return (
    <header className="bg-stone-200/70 border-gray-200 py-4 ">
      <nav className="flex items-center text-sm justify-between max-w-7xl mx-auto">
        <Link to={"/"} className="flex items-center gap-2">
          <span className="bg-blue-200 text-2xl font-bold text-white px-2 py-1 rounded-md">
            <Store />
          </span>
          <h1 className="font-bold text-blue-800 text-3xl font-sans">ShopMarkt</h1>
        </Link>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={
                "transition-colors font-medium text-lg text-[#64748B] hover:text-[#1E3A8A]"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
