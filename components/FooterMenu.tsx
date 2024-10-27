import Link from "next/link";

const menuItems: {
  heading: string;
  items: { name: string; href: string; notificationCount?: number }[];
}[] = [
  {
    heading: "Platform",
    items: [
      {
        name: "Python Django",
        href: "#",
      },
    ],
  },
  {
    heading: "Integrations",
    items: [
      {
        name: "SDK - coming soon",
        href: "#",
      },
    ],
  },
  {
    heading: "Resources",
    items: [{ name: "Documentation", href: "/docs" }],
  },
  {
    heading: "About",
    items: [
      { name: "Blog", href: "#" },
      // { name: "Careers", href: "/careers", notificationCount: 2 },
      {
        name: "About us",
        href: "#",
      },
    ],
  },

  {
    heading: "Legal",
    items: [
      { name: "Security", href: "#" },
      // { name: "Imprint", href: "/imprint" },
      {
        name: "Terms",
        href: "#",
      },
      {
        name: "Privacy",
        href: "#",
      },
    ],
  },
];

const FooterMenu = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-5 text-base gap-y-8 gap-x-2">
        {menuItems.map((menu) => (
          <div key={menu.heading}>
            <p className="pb-4 font-mono font-bold text-primary">
              {menu.heading}
            </p>
            <ul className="flex flex-col gap-3 items-start">
              {menu.items.map((item) => (
                <li key={item.name} className="relative flex gap-1">
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary/80"
                  >
                    {item.name}
                  </Link>
                  {item.notificationCount > 0 && (
                    <span className="transform -translate-y-1/4 bg-primary text-primary-foreground rounded-full h-3 w-3 text-[0.6rem] flex items-center justify-center">
                      {item.notificationCount}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div />
      </div>
      <div className="my-8 font-mono text-sm">
        © 2022-{new Date().getFullYear()} Eyygo Org
      </div>
    </div>
  );
};

export default FooterMenu;
