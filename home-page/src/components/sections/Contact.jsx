import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-8 bg-neutral-50/50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full mt-3"></div>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200/80 shadow-xl shadow-neutral-100">
          
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-8">
            Send us a message
          </h3>

          {submitted ? (
            <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl text-center">
              <h4 className="font-bold text-lg mb-1">Thank you!</h4>
              <p className="text-sm">Your message has been successfully sent. We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:border-red-600 focus:bg-white transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Submit
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}