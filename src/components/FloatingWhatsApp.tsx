"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const whatsappUrl = "https://wa.me/9779801226577?text=Hello%20Griha%20Sansar%20Pvt.%20Ltd.,%20I%20would%20like%20to%20inquire%20about%20your%20services.";

  if (pathname === "/marketing-digital") {
    return null;
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping -z-10"></span>
      
      {/* WhatsApp Custom SVG for sharp rendering */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.015 14.067 1 11.993 1c-5.441 0-9.87 4.372-9.874 9.802-.001 1.762.478 3.483 1.39 5.017l-.997 3.637 3.737-.962zm10.967-6.825c-.328-.162-1.94-.949-2.24-1.055-.3-.109-.519-.162-.738.162-.219.324-.85 1.055-1.04 1.271-.19.216-.38.243-.709.082-.328-.162-1.383-.505-2.637-1.613-.975-.863-1.632-1.93-1.823-2.254-.19-.324-.02-.5-.184-.661-.148-.146-.328-.38-.492-.568-.164-.188-.219-.324-.328-.54-.109-.216-.055-.405-.027-.567.027-.162.219-.54.328-.73.109-.189.164-.324.246-.54.083-.216.04-.405-.013-.567-.056-.162-.519-1.242-.709-1.7-.19-.457-.38-.396-.519-.403-.135-.007-.29-.009-.445-.009-.155 0-.41.057-.624.283-.214.226-.82.793-.82 1.932 0 1.139.837 2.237.952 2.392.115.155 1.648 2.492 4.02 3.502.564.24 1.004.383 1.348.491.567.178 1.082.153 1.49.093.454-.067 1.94-.785 2.213-1.545.273-.76.273-1.411.192-1.545-.08-.135-.29-.216-.618-.378z" />
      </svg>

      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs py-1 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
}
