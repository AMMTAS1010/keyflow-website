"use client";

import { Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 md:px-20">
        <div className="mx-auto max-w-[1440px] text-center">
          <SectionLabel>CONTACT US</SectionLabel>
          <h1 className="mt-4 text-4xl md:text-[56px] font-bold text-[#1B1B1B] leading-[1.1]">
            Let&apos;s Start a Conversation
          </h1>
          <p className="mt-6 text-lg text-[#666] max-w-2xl mx-auto">
            Have a question about our products or want to explore how Keyflow
            can transform your real estate operations? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-24 px-6 md:px-20">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-[#1B1B1B] mb-6">
              Send Us a Message
            </h2>
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
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
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
                  I&apos;m Interested In
                </label>
                <select className="w-full border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm text-[#666] focus:outline-none focus:border-[#1B1B1B] transition-colors bg-white">
                  <option>Select a product</option>
                  <option>Leaseflow</option>
                  <option>Leadsflow</option>
                  <option>Both Products</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your needs..."
                  className="w-full border border-[#E0E0E0] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#1B1B1B] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#1B1B1B] text-white px-8 py-3.5 rounded-lg font-medium hover:bg-[#333] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#F8F8F8] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#1B1B1B] flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <h3 className="text-sm font-semibold text-[#1B1B1B]">
                  Email Us
                </h3>
              </div>
              <p className="text-sm text-[#666]">hello@keyflow.ae</p>
            </div>

            <div className="bg-[#F8F8F8] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#1B1B1B] flex items-center justify-center">
                  <Clock size={18} className="text-white" />
                </div>
                <h3 className="text-sm font-semibold text-[#1B1B1B]">
                  Response Time
                </h3>
              </div>
              <p className="text-sm text-[#666]">
                We typically respond within 24 hours
              </p>
            </div>

            <div className="border border-[#E0E0E0] rounded-xl p-6">
              <h3 className="text-base font-semibold text-[#1B1B1B] mb-2">
                Prefer a Live Demo?
              </h3>
              <p className="text-sm text-[#666] mb-4">
                See Keyflow in action. Book a personalized demo with our team.
              </p>
              <Link
                href="/request-demo"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1B1B1B] hover:gap-3 transition-all"
              >
                Book a Demo <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
