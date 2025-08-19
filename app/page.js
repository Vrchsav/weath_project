import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="text-center rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-blue-100 shadow-sm hover:shadow-md transition-all p-6"
              >
                <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Everything you need to manage your finances
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuresData.map((feature, index) => (
              <Card
                className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200/60 shadow-sm hover:shadow-lg transition-all group"
                key={index}
              >
                <CardContent className="space-y-4 pt-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 ring-1 ring-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {howItWorksData.map((step, index) => (
              <div
                key={index}
                className="text-center relative rounded-2xl bg-white/70 backdrop-blur-sm ring-1 ring-gray-100 p-8 shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                </div>
                <div className="w-14 h-14 bg-blue-50 ring-1 ring-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold tracking-tight">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">“{testimonial.quote}”</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances smarter with Welth
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 shadow-lg hover:shadow-xl transition px-8 rounded-full"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
