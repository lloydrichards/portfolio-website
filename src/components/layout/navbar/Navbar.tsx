"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FC } from "react";
import { Instagram, Linkedin, Github, Menu } from "lucide-react";

interface NavRouteProps {
  vertical?: boolean;
}
const NavRoutes: FC<NavRouteProps> = ({ vertical }) => {
  return (
    <NavigationMenuList className={vertical ? "flex-col gap-4" : "flex-row"}>
      <NavigationMenuItem>
        <Link href="/about" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="flex w-72 flex-col gap-4 p-4">
            <Link href="/posts" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Posts
              </NavigationMenuLink>
            </Link>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Projects
              </NavigationMenuLink>
            </Link>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/timeline" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Timeline
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Social</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="flex w-72 flex-col gap-4 p-4">
            <NavigationMenuLink
              className="flex gap-2"
              target="_blank"
              href="https://www.instagram.com/lloyd_bydesign/"
            >
              <Instagram />
              Instagram
            </NavigationMenuLink>
            <NavigationMenuLink
              className="flex gap-2"
              target="_blank"
              href="https://www.linkedin.com/in/lloyddrichards/"
            >
              <Linkedin />
              LinkedIn
            </NavigationMenuLink>
            <NavigationMenuLink
              className="flex gap-2"
              target="_blank"
              href="https://github.com/lloydrichards"
            >
              <Github />
              Github
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

export const Navbar: React.FC = () => {
  return (
    <div className="flex px-4 py-2">
      <Sheet>
        <SheetTrigger className="md:hidden">
          <div className={buttonVariants({ variant: "ghost", size: "sm" })}>
            <Menu size={32} />
          </div>
        </SheetTrigger>
        <SheetContent position="left" className="w-[80vw] py-24">
          <NavigationMenu orientation="vertical">
            <NavRoutes vertical />
          </NavigationMenu>
        </SheetContent>
      </Sheet>
      <div className="flex flex-1 items-center gap-2">
        <Link href="/" className=" text-xl normal-case">
          Lloyd Richards Design
        </Link>
      </div>

      <NavigationMenu className=" hidden justify-end md:flex">
        <NavRoutes />
      </NavigationMenu>
    </div>
  );
};
