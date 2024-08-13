"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@src/components/ui/sheet";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Logo from "@components/Logo";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="flex h-full items-center justify-between">
      <Link href="/" className="flex items-center text-2xl font-bold">
        <Image
          src="/chad-next.png"
          alt="ChadNext logo"
          width="30"
          height="30"
          className="mr-2 rounded-sm object-contain"
        />
        <p>Trackify</p>
      </Link>
      <div className="hidden items-center gap-12 lg:flex 2xl:gap-16">
        <SignedOut>
        <div className="bg-slate-200 p-3 rounded-lg">
            <SignInButton/>
            </div>
        </SignedOut>
   
      </div>
      <div className="hidden items-center gap-12 lg:flex 2xl:gap-16">
        <SignedIn>
        <div className="space-x-4 text-center text-sm leading-loose text-muted-foreground md:text-left">
          <Link
            href="#"
            className="font-semibold hover:underline hover:underline-offset-4"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="font-semibold hover:underline hover:underline-offset-4"
          >
            Transactions
          </Link>
          <Link
            href="#"
            className="font-semibold hover:underline hover:underline-offset-4"
          >
            Manage
          </Link>
        </div>
        <UserButton/>
        </SignedIn>
   
      </div>
      <Sheet open={isModalOpen} onOpenChange={setIsModalOpen}>
        <SheetTrigger className="lg:hidden">
          <span className="sr-only">Open Menu</span>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SignedOut>
          <div className="flex flex-col items-center space-y-10 py-10">
            <div className="bg-slate-200 p-3 rounded-lg">
            <SignInButton/>
            </div>
          </div>
          </SignedOut>
          <SignedIn>
          <div className="flex flex-col items-center space-y-10 py-10">
            <div className="space-y-4 text-center text-sm leading-loose text-muted-foreground">
              <Link
                href="/changelog"
                className="block font-semibold hover:underline hover:underline-offset-4"
                onClick={() => setIsModalOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/about"
                className="block font-semibold hover:underline hover:underline-offset-4"
                onClick={() => setIsModalOpen(false)}
              >
              Transactions
              </Link>
                <>
                  <Link
                    href="/dashboard"
                    className="block font-semibold hover:underline hover:underline-offset-4"
                    onClick={() => setIsModalOpen(false)}
                  >
                  Manage
                  </Link>
                </>
                <UserButton/>
            </div>
          </div>
          </SignedIn>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
