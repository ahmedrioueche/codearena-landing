import React from "react";
import { Linkedin, Github, Code, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Links object
  const links = {
    platform: [
      { href: "#", label: "Features", ariaLabel: "Features" },
      { href: "#", label: "Challenges", ariaLabel: "Challenges" },
      { href: "#", label: "Learn", ariaLabel: "Learn" },
      { href: "#", label: "Pricing", ariaLabel: "Pricing" },
    ],
    resources: [
      {
        href: "#",
        label: "Documentation",
        ariaLabel: "Documentation",
      },
      { href: "#", label: "API", ariaLabel: "API" },
      { href: "#", label: "Tutorials", ariaLabel: "Tutorials" },
      { href: "#", label: "Blog", ariaLabel: "Blog" },
    ],
    company: [
      { href: "#", label: "About Us", ariaLabel: "About Us" },
      { href: "#", label: "Careers", ariaLabel: "Careers" },
      { href: "#", label: "Press", ariaLabel: "Press" },
      { href: "#", label: "Contact", ariaLabel: "Contact" },
    ],
    legal: [
      {
        href: "#",
        label: "Terms of Service",
        ariaLabel: "Terms of Service",
      },
      {
        href: "#",
        label: "Privacy Policy",
        ariaLabel: "Privacy Policy",
      },
      {
        href: "#",
        label: "Cookie Policy",
        ariaLabel: "Cookie Policy",
      },
      { href: "#", label: "Security", ariaLabel: "Security" },
    ],
    social: [
      {
        href: "https://github.com/ahmedrioueche",
        icon: <Github size={18} />,
        ariaLabel: "GitHub",
      },
      {
        href: "https://www.facebook.com/ahmed.69.420",
        icon: <Facebook size={18} />,
        ariaLabel: "Facebook",
      },
      {
        href: "https://linkedin.com/in/ahmed-drioueche-aa02732b7",
        icon: <Linkedin size={18} />,
        ariaLabel: "LinkedIn",
        text: "Connect with us",
      },
    ],
  };

  return (
    <footer className="py-16 text-white">
      <div className="container mx-auto px-4 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">
                  <Code aria-label="Code Icon" />
                </span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                CodeArena
              </span>
            </div>
            <p className="text-blue-200/70 text-sm mt-4">
              Challenge yourself with coding competitions, improve your skills,
              and connect with a global community of developers.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="md:col-span-2 flex flex-col space-y-3">
            <h3 className="font-medium text-blue-300 mb-2">Platform</h3>
            {links.platform.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                aria-label={link.ariaLabel}
                onClick={(e) => e.preventDefault()}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Resources */}
          <nav className="md:col-span-2 flex flex-col space-y-3">
            <h3 className="font-medium text-blue-300 mb-2">Resources</h3>
            {links.resources.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                aria-label={link.ariaLabel}
                onClick={(e) => e.preventDefault()}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Company */}
          <nav className="md:col-span-2 flex flex-col space-y-3">
            <h3 className="font-medium text-blue-300 mb-2">Company</h3>
            {links.company.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                aria-label={link.ariaLabel}
                onClick={(e) => e.preventDefault()}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Legal */}
          <nav className="md:col-span-2 flex flex-col space-y-3">
            <h3 className="font-medium text-blue-300 mb-2">Legal</h3>
            {links.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-blue-100/80 hover:text-blue-300 transition-colors duration-300 cursor-pointer"
                aria-label={link.ariaLabel}
                onClick={(e) => e.preventDefault()}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Bar with Social Links and Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-sm text-blue-200/60 mb-4 md:mb-0">
            © {currentYear} CodeArena. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 items-center">
            {links.social.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300/80 hover:text-blue-300 transition-colors duration-300 flex items-center space-x-2"
                aria-label={link.ariaLabel}
              >
                {link.icon}
                {link.text && (
                  <span className="text-sm hidden md:inline">{link.text}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
