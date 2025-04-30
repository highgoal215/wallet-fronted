import React from "react";
import logoLanding from "../../assets/svg/logo.svg";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  cn,
  toggle,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <div>
      <Image
        src={logoLanding}
        width={223}
        height={32}
        className="w-[223px] h-8"
        alt="image"
      />
    </div>
  );
};

export default function TalentedLandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Talents",
    "Organizations",
    "Jobs",
    "Projects",
    "Learnings",
    "Newsfeeds",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      className=" flex w-full"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: cn("w-full justify-between p-2 border-none text-black"),
        wrapper: cn("max-w-[1440px] mx-auto "),
        toggleIcon: cn("text-green-500"),
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="talents"
            className="font-bold text-black hover:text-blue-500 hover:underline active:text-red-500 transition-colors"
          >
            Talents
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            aria-current="page"
            href="organization"
            className="font-bold text-black hover:text-blue-500 hover:underline active:text-red-500 transition-colors"
          >
            Organizations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="jobs"
            className="font-bold text-black hover:text-blue-500 hover:underline active:text-red-500 transition-colors"
          >
            Jobs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="projects"
            className="font-bold text-black hover:text-blue-500 hover:underline active:text-red-500 transition-colors"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="learnings"
            className="font-bold text-black hover:text-blue-500 hover:underline active:text-red-500 transition-colors"
          >
            Learnings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/news-feed"
            className="font-bold text-black hover:text-blue-500 hover:underline active:text-red-500 transition-colors"
          >
            Newsfeeds
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
