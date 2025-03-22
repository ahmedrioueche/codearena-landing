import React from "react";
import Image from "next/image";
import { useTranslator } from "@/langs";

const ContactPage = () => {
  const translator = useTranslator();

  return (
    <section className="flex items-center justify-center min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Contact Image */}
          <div className="hidden md:block order-1">
            <div className="relative w-full h-full animate-float-cards">
              <Image
                src="/contact.svg"
                alt="Contact Illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="space-y-8 order-2">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-glow">
              {translator("getInTouch")}
            </h2>
            <p className="text-sm text-text-primary">
              {translator("contactDescription")}
            </p>

            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {translator("firstName")}
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-foreground"
                    placeholder={translator("firstName")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {translator("lastName")}
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-foreground"
                    placeholder={translator("lastName")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {translator("email")}
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-foreground"
                  placeholder={translator("email")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {translator("subject")}
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-foreground"
                  placeholder={translator("subject")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  {translator("message")}
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary bg-foreground"
                  placeholder={translator("message")}
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-500"
              >
                {translator("submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
