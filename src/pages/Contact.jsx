import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";

const ContactPage = () => {
  return (
    <section className="container grid grid-cols-1 gap-8 py-12 dark:text-white md:grid-cols-2">
      <div>
        <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm">
          <HiMailOpen className="text-6xl" />
        </div>
        <h1 className="mb-2 text-center text-3xl font-bold md:text-left">Get in touch</h1>
        <p className="mb-6 text-center text-slate-600 dark:text-slate-300 md:text-left">
          Open to freelance, full-time, and collaborations.
        </p>
      </div>

      <div className="space-y-6">
        <form className="space-y-4 rounded-xl border border-gray-100 bg-white p-6 shadow dark:border-gray-800 dark:bg-gray-900">
          <div>
            <label className="mb-1 block text-sm">Name</label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-700"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">Phone Number</label>
            <input
              type="tel"
              className="w-full rounded border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-700"
              placeholder="Your phone number"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">Email</label>
            <input
              type="email"
              className="w-full rounded border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-700"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm">Message</label>
            <textarea
              rows="5"
              className="w-full rounded border border-gray-300 bg-transparent px-3 py-2 dark:border-gray-700"
              placeholder="Tell me about your project"
            />
          </div>
          <button type="button" className="primary-btn">
            Send Message
          </button>
        </form>

        <div className="grid gap-3">
          <a
            href="mailto:agabaeldon@gmail.com"
            className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 hover:shadow dark:border-gray-800 dark:bg-gray-900"
          >
            <FaEnvelope className="text-xl text-primary" />
            <span>agabaeldon@gmail.com</span>
          </a>
          <div className="rounded-xl border border-gray-100 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
            <div className="mb-2 flex items-center gap-3">
              <FaPhone className="text-xl text-primary" />
              <span className="font-semibold">Phone</span>
            </div>
            <div className="flex flex-col gap-2 pl-8">
              <a href="tel:+256765026870" className="hover:underline">
                0765026870
              </a>
              <a href="tel:+256751501556" className="hover:underline">
                0751501556
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <section className="mt-8 rounded-xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-3 text-xl font-semibold">Find me on</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/256765026870"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 hover:shadow dark:border-gray-800"
            >
              <FaWhatsapp className="text-green-500" /> WhatsApp
            </a>
            <a
              href="https://www.facebook.com/agabaeldonofficial"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 hover:shadow dark:border-gray-800"
            >
              <FaFacebookF className="text-blue-600" /> Facebook
            </a>
            <a
              href="https://www.linkedin.com/in/agabaeldon/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 hover:shadow dark:border-gray-800"
            >
              <FaLinkedinIn className="text-blue-700" /> LinkedIn
            </a>
            <a
              href="https://twitter.com/agabaeldon"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 hover:shadow dark:border-gray-800"
            >
              <FaTwitter className="text-sky-500" /> Twitter
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactPage;
