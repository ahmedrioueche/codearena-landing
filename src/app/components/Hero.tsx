"use client";
import React from "react";
import { Play, Code } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroBanner = () => {
  const router = useRouter();

  return (
    <section className="relative mt-16 mb-24">
      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-6 z-10 text-center md:text-left">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">Master Coding in the</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300">
              Ultimate Arena
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-blue-100 opacity-90 max-w-lg mx-auto md:mx-0">
            Challenge yourself, compete with others, and elevate your
            programming skills with AI-powered guidance tailored to your
            learning style.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <a
              href="/#start-now"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md text-white font-medium hover:opacity-90 transition-opacity flex items-center"
              aria-label="Start Your Journey"
            >
              <Code size={18} className="mr-2" aria-hidden="true" />
              <span>Start Your Journey</span>
            </a>
            <button
              onClick={() => router.push("/auth/signup")}
              className="px-6 py-3 border border-blue-300 rounded-md text-blue-200 font-medium hover:bg-blue-900 hover:bg-opacity-20 transition flex items-center"
              aria-label="Signup for Free"
            >
              <Play size={18} className="mr-2" aria-hidden="true" />
              <span>Signup for Free</span>
            </button>
          </div>

          {/* Developer Count */}
          <div className="flex items-center space-x-4 pt-4 justify-center md:justify-start">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-gray-800"
                  style={{
                    background: `linear-gradient(${
                      45 * i
                    }deg, #4CC9F0, #7209B7)`,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm text-blue-200">
              Join <span className="font-bold">10,000+</span> developers
              improving their skills
            </p>
          </div>
        </div>

        {/* Right Column: Code Challenge Card */}
        <div className="relative z-10 mt-8 md:mt-0">
          <article className="relative bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-700 shadow-xl backdrop-blur-sm">
            {/* Decorative Elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-400" />

            {/* Challenge Details */}
            <div className="space-y-4">
              <header className="flex justify-between items-center">
                <h2 className="text-sm text-blue-300 font-medium">
                  Challenge #42: Optimization Algorithms
                </h2>
                <div className="text-xs px-2 py-1 bg-blue-900 bg-opacity-50 rounded text-blue-300">
                  Advanced
                </div>
              </header>

              {/* Code Snippet */}
              <pre className="bg-gray-800 bg-opacity-70 rounded p-4 font-mono text-sm text-blue-100">
                <code>
                  <div className="text-blue-300">
                    function optimizeRoute(points) {"{"}
                  </div>
                  <div className="pl-4">// Your solution here</div>
                  <div className="pl-4 text-green-300">
                    // Find the shortest path visiting all points
                  </div>
                  <div className="pl-4 text-purple-300">return path;</div>
                  <div>{"}"}</div>
                </code>
              </pre>

              {/* AI Assistant */}
              <footer className="flex justify-between items-center text-sm">
                <div className="text-blue-200">
                  <span className="text-green-400">●</span> AI Assistant
                  Available
                </div>
                <button
                  className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded text-white text-sm"
                  aria-label="Solve Now"
                >
                  Solve Now
                </button>
              </footer>
            </div>
          </article>

          {/* Decorative Blurred Circles */}
          <div className="absolute -top-6 right-12 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 -left-12 w-24 h-24 bg-blue-400 rounded-full blur-3xl opacity-20" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
