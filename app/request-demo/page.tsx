"use client";

import { Monitor, MessageCircle, Settings, Calendar, CheckCircle } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

export default function RequestDemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-20">
        <div className="mx-auto max-w-[1440px] text-center">
          <SectionLabel>REQUEST A DEMO</SectionLabel>
          <h1 className="mt-4 text-4xl md:text-[56px] font-bold text-[#1B1B1B] leading-[1.1]">
            See Keyflow in Action
          </h1>
          <p className="mt-6 text-lg text-[#666] max-w-2xl mx-auto">
            Book a personalized walkthrough of our platforms and discover how
            Keyflow can transform your real estate operations.
          </p>
        </div>
      </section>

      {/* Form + Benefits */}
      <section className="pb-24 px-6 md:px-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Demo Form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-[#1B1B1B] mb-2">
              Book Your Demo
            </h2>
            <p className="text-sm text-[#666] mb-6">
              Fill in your details and we&apos;ll schedule a personalized
              walkthrough.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1B1B1B] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B1B1B] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1B1B1B] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B1B1B] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B1B1B] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+971 XX XXX XXXX"
                  className="w-full border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B1B1B] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B1B1B] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Your Role
                </label>
                <select className="w-full border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm text-[#666] focus:outline-none focus:border-[#1B1B1B] transition-colors bg-white">
                  <option>Select your role</option>
                  <option>Property Manager</option>
                  <option>Broker / Agent</option>
                  <option>Landlord</option>
                  <option>Developer</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Product Interest
                </label>
                <select className="w-full border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm text-[#666] focus:outline-none focus:border-[#1B1B1B] transition-colors bg-white">
                  <option>Select a product</option>
                  <option>Leaseflow</option>
                  <option>Leadsflow</option>
                  <option>Both Products</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1B1B1B] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#333] transition-colors"
              >
                Request Demo
              </button>
            </form>
          </div>

          {/* Benefits Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-semibold text-[#1B1B1B] mb-6">
                What to Expect
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Monitor,
                    title: "Live Product Walkthrough",
                    desc: "A guided tour of the platform tailored to your specific use case and workflows.",
                  },
                  {
                    icon: MessageCircle,
                    title: "Q&A with Our Team",
                    desc: "Get answers to your questions directly from our product specialists.",
                  },
                  {
                    icon: Settings,
                    title: "Custom Integration Plan",
                    desc: "Understand how Keyflow fits into your existing tools and systems.",
                  },
                  {
                    icon: Calendar,
                    title: "Next Steps & Timeline",
                    desc: "Walk away with a clear plan for getting started with Keyflow.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F8F8F8] flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-[#1B1B1B]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#1B1B1B] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#666] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F8F8F8] rounded-xl p-6">
              <p className="text-sm text-[#666] leading-relaxed">
                No commitment required. Free consultation with zero obligation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
