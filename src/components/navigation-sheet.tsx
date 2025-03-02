"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { Media, Pages } from "@/server/router";
import { useMediaQuery } from "@/components/hooks/use-media-query";
import Image from "next/image";
import { List, User, X } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function MobileMenu(props: { userName: string | null; userAvatar: string | null }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <List className="size-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full bg-white dark:bg-black">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Use the links below to navigate the site.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full flex-col justify-between">
            <div className="mt-0.5 flex flex-col">
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-2 pb-8">
                  <Image
                    src={Media.Logo}
                    width="48"
                    height="48"
                    alt="Morgana Logo"
                    sizes="(max-width: 640px) 32px, 48px"
                    className="size-8 sm:size-12"
                  />
                  <h3 className="text-lg font-bold tracking-tighter sm:text-xl">Morgana</h3>
                </div>
                <Button variant="ghost" className="mr-[-6px]" size="icon" onClick={() => setOpen(false)}>
                  <X className="size-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </div>
              <Link
                href={Pages.Home}
                onClick={() => setOpen(false)}
                className="ml-4 pb-4 text-lg font-bold w-fit">
                Home
              </Link>
              <Link
                href={Pages.Features}
                onClick={() => setOpen(false)}
                className="ml-4 pb-4 text-lg font-bold w-fit">
                Features
              </Link>
              <Link
                href={Pages.Pricing}
                onClick={() => setOpen(false)}
                className="ml-4 pb-4 text-lg font-bold w-fit">
                Pricing
              </Link>
              {props.userName ? (
                <>
                  <p className="mb-2 ml-4">Welcome back, {props.userName}.</p>
                  <Link
                    href={Pages.Hub}
                    onClick={() => setOpen(false)}
                    className="ml-4 pb-4 text-lg font-bold w-fit">
                    Go to Hub?
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href={Pages.Login}
                    onClick={() => setOpen(false)}
                    className="ml-4 pb-4 text-lg font-bold w-fit">
                    Login
                  </Link>
                  <Link
                    href={Pages.Signup}
                    onClick={() => setOpen(false)}
                    className="ml-4 pb-4 text-lg font-bold w-fit">
                    Sign Up
                  </Link>
                </>
              )}
              <span className="p-4">
                <Separator className="" />
              </span>
              <Link
                href={Pages.Legal}
                onClick={() => setOpen(false)}
                className="ml-4 pt-4 pb-4 pl-0.5 text-base ">
                Legal
              </Link>
              <Link
                href={Pages.Support}
                onClick={() => setOpen(false)}
                className="ml-4 pb-4 pl-0.5 text-base">
                Support
              </Link>
            </div>
            <div className="ml-4 flex justify-start gap-2">
              {props.userName && (
                <Avatar asChild className="rounded-lg">
                  <Link href={Pages.Settings} onClick={() => setOpen(false)}>
                    <AvatarImage src={props.userAvatar ?? ""} />
                    <AvatarFallback className="rounded-lg">
                      <User weight="thin" />
                    </AvatarFallback>
                  </Link>
                </Avatar>
              )}
              <ThemeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
  );
}
