"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = { name: string; route: string };

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const swapLang = (lang: string): string => {
  return lang === "en" ? "es" : "en";
};

const Tabs = ({ dict }: { dict: Content["home"]["tabs"] }) => {
  const path = usePathname();
  const lang = path.split("/").at(1);

  const tabs: Tab[] = [
    { name: dict.intro, route: "" },
    { name: dict.about, route: "about" },
    { name: dict.games, route: "games" },
    { name: dict.contact, route: "contact" },
  ];

  const getCurrent = () => tabs.find((tab) => isCurrent(tab.route));
  const isCurrent = (route: string) => {
    const fixPath = `${path.split("/").at(2) || ""}`;

    return fixPath === route;
  };

  const renderLink = (tab: Tab) => {
    return (
      <Link
        key={tab.name}
        href={`/${lang}/${tab.route}`}
        aria-current={isCurrent(tab.route) ? "page" : undefined}
        className={classNames(
          isCurrent(tab.route)
            ? "bg-teal-500 text-white"
            : "text-gray-600 hover:text-gray-800",
          " px-3 py-2 text-sm font-medium"
        )}
      >
        {tab.name}
      </Link>
    );
  };

  const LangSwap = () => (
    <Link
      key="swap-lang"
      href={path.replace(lang!, swapLang(lang!))}
      className="text-gray-600 hover:text-gray-800 px-3 py-2 text-sm font-medium right-0"
    >
      {lang?.toUpperCase()}
    </Link>
  );

  return (
    <div className="relative max-w-4xl mx-auto border-2 border-b-0 rounded-sm">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          defaultValue={getCurrent()?.name}
          className="block w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav aria-label="Tabs" className="flex space-x-4">
          {tabs.map((tab) => renderLink(tab))}
          <LangSwap />
        </nav>
      </div>
    </div>
  );
};

export { Tabs };
