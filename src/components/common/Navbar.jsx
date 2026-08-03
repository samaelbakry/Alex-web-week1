import { Store } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { href: "/cart", label: "Cart" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/categories", label: "Categories" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-stone-100/80 backdrop-blur-md border-b border-stone-200/60 py-3 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="bg-blue-600 text-white p-2 rounded-lg shadow-sm group-hover:bg-blue-700 transition-colors flex items-center justify-center">
            <Store className="w-6 h-6" />
          </span>
          <h1 className="font-bold text-2xl tracking-tight text-blue-900 font-sans">
            ShopMarkt
          </h1>
        </Link>

        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={"text-base font-medium transition-colors text-slate-500 hover:text-blue-800"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
