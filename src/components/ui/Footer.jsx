// Footer.jsx
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  // Quick Links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Services
  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "UI/UX Design", path: "/services/ui-ux" },
    { name: "E-commerce", path: "/services/ecommerce" },
    { name: "Consulting", path: "/services/consulting" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 relative z-30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Inovix</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Inovix is dedicated to delivering cutting-edge solutions in web
            development and digital innovation. We transform ideas into reality
            with creativity and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link to={link.path} className="hover:text-cyan-400 transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((service, idx) => (
              <li key={idx}>
                <Link
                  to={service.path}
                  className="hover:text-cyan-400 transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:info@inovix.com"
                className="hover:text-cyan-400 transition"
              >
                info@inovix.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+923001234567"
                className="hover:text-cyan-400 transition"
              >
                +92 300 1234567
              </a>
            </li>
            <li>Location: Bahria Town, Rawalpindi</li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-cyan-400 transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Inovix. All rights reserved.
      </div>
    </footer>
  );
}
