"use client";

import { Input, Button, cn } from "@heroui/react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Talented_Footer() {
  return (
    <footer
      className={cn(
        "flex w-full flex-col bg-white border-t",
        "w-full justify-between p-2 border-none",
        "w-full max-w-[1440px] mx-auto"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="">
                <Image
                  src="/Talented_ffoter.svg"
                  alt="logo"
                  width={0}
                  height={0}
                  className="w-full"
                />
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Where Passion Meets Profession
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-primary">Social Media</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="https://linkedin.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-primary">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Stay Ahead with Nuvoro Insights
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-auto"
              />
              <Button type="submit" className="flex-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <hr />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="text-center text-sm text-muted-foreground">
          © 2025 Nuvoro Tech Corp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
