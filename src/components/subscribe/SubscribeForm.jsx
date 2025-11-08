import React, { useState } from "react";
import { FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 dark:border-gray-800">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 mb-3">
                <FaEnvelope className="text-xl text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 dark:text-white">
                Stay Updated
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Get the latest updates on new projects and tech insights
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-sm" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-700 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`px-6 py-3 rounded-lg font-semibold text-white text-sm transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap ${
                    isSubmitted
                      ? "bg-green-500 cursor-not-allowed"
                      : "bg-primary hover:bg-primary/90 hover:shadow-md"
                  } ${isSubmitting ? "opacity-70 cursor-wait" : ""}`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Subscribing...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FaCheckCircle className="text-sm" /> Done!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" /> Subscribe
                    </>
                  )}
                </button>
              </div>

              {isSubmitted && (
                <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 text-xs flex items-center gap-2">
                    <FaCheckCircle className="text-green-500" />
                    Thank you! You'll receive updates soon.
                  </p>
                </div>
              )}

              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeForm;

