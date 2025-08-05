"use client";

import React from 'react'
import localFont from "next/font/local";
import AnimatedHeading from './AnimatedHeading';
import { motion,  useAnimation } from "framer-motion";
import Image from "next/image";
 import { FaGithub, FaExternalLinkAlt,  FaEnvelope, FaLinkedin } from "react-icons/fa";

// Animation variants for scroll-based animation
const getCardVariant = (i) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
});

const funnelSans = localFont({
  src: [
    // {
    //   path: "fonts/funnel-sans/FunnelSans-SemiBold.ttf",
    //   weight: "700",
    //   style: "normal",
    // },
    {
      path: "../fonts/funnel-sans/FunnelSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-funnel-sans",
  display: "swap",
});

function ContactForm() {
  return (
    <section
  id="contact"
  className={`${funnelSans.className} mt-12 text-center bg-gradient-to-br from-blue-400 via-purple-200 to-pink-400  animate-gradient-y dark:from-gray-800 dark:via-gray-900 dark:to-black py-20 px-6 rounded-xl`}
>
  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>

  

  {/* Contact Form */}
  <form
    action="https://formspree.io/f/xnnvwwgp" // ← Replace with your Formspree or backend handler
    method="POST"
    className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md space-y-6"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <textarea
      name="message"
      rows={5}
      placeholder="Your Message"
      required
      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
      type="submit"
      className="w-full dark:bg-[#831347] bg-[#b10455] cursor-pointer hover:scale-103 duration-300  text-white py-3 rounded-md font-medium transition"
    >
      Send Message
    </button>
  </form>
</section>
  )
}

export default ContactForm
