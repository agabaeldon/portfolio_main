import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="container py-12 grid grid-cols-1 md:grid-cols-2 gap-8 dark:text-white">
      <div>
        <div className="h-32 w-32 mx-auto rounded-xl overflow-hidden mb-4">
          <img src="https://images.unsplash.com/photo-1529336953121-a0ce66c1a4bf?q=80&w=1200&auto=format&fit=crop" alt="Contact" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-center md:text-left">Get in touch</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6 text-center md:text-left">
          Open to freelance, full‑time, and collaborations.
        </p>
        <div className="grid gap-3">
          <a href="mailto:agabaeldon@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow">
            <FaEnvelope className="text-primary text-xl" />
            <span>agabaeldon@gmail.com</span>
          </a>
          <div className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-2">
              <FaPhone className="text-primary text-xl" />
              <span className="font-semibold">Phone</span>
            </div>
            <div className="flex flex-col gap-2 pl-8">
              <a href="tel:+256765026870" className="hover:underline">0765026870</a>
              <a href="tel:+256751501556" className="hover:underline">0751501556</a>
            </div>
          </div>
        </div>
      </div>
      <form className="bg-white dark:bg-gray-900 rounded-xl shadow border border-gray-100 dark:border-gray-800 p-6 space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input type="text" className="w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea rows="5" className="w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" placeholder="Tell me about your project" />
        </div>
        <button type="button" className="primary-btn">Send Message</button>
      </form>
      <div className="md:col-span-2">
        <section className="mt-8 p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-3">Find me on</h2>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow">
              <FaWhatsapp className="text-green-500" /> WhatsApp
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow">
              <FaFacebookF className="text-blue-600" /> Facebook
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow">
              <FaLinkedinIn className="text-blue-700" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow">
              <FaTwitter className="text-sky-500" /> Twitter
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactPage;


