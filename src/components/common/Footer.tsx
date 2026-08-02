import { Store } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-stone-600 mt-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white p-1.5 rounded-lg shadow-sm">
                <Store className="w-5 h-5" />
              </span>
              <span className="font-bold text-xl text-stone-900 font-sans">
                ShopMarkt
              </span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Your one-stop online shopping destination for top-quality
              products.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-stone-900 uppercase tracking-wider mb-3">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-stone-600 hover:text-blue-600 transition-colors">
                  FAQ
                </span>
              </li>
              <li>
                <span className="text-stone-600 hover:text-blue-600 transition-colors">
                  Shipping & Returns
                </span>
              </li>
              <li>
                <span className="text-stone-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} ShopMarkt. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-stone-800 transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-stone-800 transition-colors">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
