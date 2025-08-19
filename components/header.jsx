"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { 
  PenBox, 
  LayoutDashboard, 
  Menu, 
  X, 
  Sparkles, 
  TrendingUp,
  Brain,
  Zap
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Badge } from "./ui/badge";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  await checkUser();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mobile menu close on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50" 
          : "bg-gradient-to-r from-slate-50/95 via-white/95 to-blue-50/95 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* AI-Themed Text Logo */}
        <Link href="/" className="group relative">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Brain className="w-8 h-8 text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-ping"></div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-none">
                    WealthGenix
                  </h1>
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-purple-500 animate-pulse" />
                    <span className="text-xs font-medium text-gray-600 tracking-wider">AI-POWERED FINANCE</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <SignedOut>
            <div className="flex items-center space-x-6">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium relative group"
              >
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
              <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200 shadow-sm">
                <Zap className="w-3 h-3 mr-1" />
                AI Beta
              </Badge>
            </div>
          </SignedOut>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button 
                variant="outline" 
                className="hidden md:flex items-center gap-2 bg-white/80 hover:bg-white border-gray-200 hover:border-purple-300 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <LayoutDashboard size={18} className="text-purple-600" />
                <span className="font-medium">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button 
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 border-0"
              >
                <PenBox size={18} />
                <span className="hidden md:inline font-medium">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button 
                variant="outline" 
                className="bg-white/80 hover:bg-white border-gray-200 hover:border-purple-300 transition-all duration-200 shadow-sm hover:shadow-md font-medium"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 ring-2 ring-purple-100 hover:ring-purple-200 transition-all duration-200 shadow-sm",
                },
              }}
            />
          </SignedIn>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200/50 animate-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <SignedOut>
              <div className="flex flex-col space-y-3">
                <a 
                  href="#features" 
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2 border-b border-gray-100 last:border-b-0"
                >
                  Features
                </a>
                <a 
                  href="#testimonials" 
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2 border-b border-gray-100 last:border-b-0"
                >
                  Testimonials
                </a>
              </div>
            </SignedOut>
            
            <SignedIn>
              <div className="flex flex-col space-y-3">
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full justify-start bg-white/80 border-gray-200 hover:border-purple-300">
                    <LayoutDashboard size={16} className="mr-2 text-purple-600" />
                    Dashboard
                  </Button>
                </Link>
                <Link href="/transaction/create">
                  <Button className="w-full justify-start bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white shadow-lg">
                    <PenBox size={16} className="mr-2" />
                    Add Transaction
                  </Button>
                </Link>
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
