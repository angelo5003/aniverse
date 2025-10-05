import { Home, Search, Bookmark, User, Bell } from "lucide-react";

export const NavBarItems = [
  {
    label: "Home",
    href: "/",
    ariaLabel: "Go to homepage",
    icon: Home,
  },
  {
    label: "Bookmark",
    href: "/bookmark",
    ariaLabel: "Go to bookmark page",
    icon: Bookmark,
  },

  {
    label: "Notifications",
    href: "/notifications",
    ariaLabel: "Go to notifications",
    icon: Bell,
  },
  {
    label: "Account",
    href: "/account",
    ariaLabel: "View your account settings",
    icon: User,
  },
];
