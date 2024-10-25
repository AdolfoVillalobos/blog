"use client";

import React, { useState, useEffect } from "react";

const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const newsletterUrl = process.env.NEXT_PUBLIC_NEWSLETTER_URL!;

  useEffect(() => {
    console.log("Newsletter URL:", newsletterUrl);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(newsletterUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          domain: window.location.hostname,
        }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
        setName("");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <section className="bg-white dark:bg-black">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral-900 dark:text-white">
          Subscribe to My Newsletter
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-neutral-600 dark:text-neutral-400 sm:text-xl">
          Stay updated with the latest posts, projects, and insights. Join our
          community!
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500 dark:shadow-sm-light"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              required
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-neutral-800 sm:w-fit hover:bg-neutral-700 focus:ring-4 focus:outline-none focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
          >
            Subscribe
          </button>
        </form>
        {message && (
          <p className="mt-8 text-sm text-center text-neutral-600 dark:text-neutral-400">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSubscription;
