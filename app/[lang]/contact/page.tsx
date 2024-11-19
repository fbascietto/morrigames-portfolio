import {
  DiscordIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "./components/Icons";
import { getDictionary } from "@/app/dictionaries";

const actions = (content: Content) => [
  {
    title: content.contact.items.discord.title,
    description: content.contact.items.discord.description,
    href: "https://discord.com/users/lyemar_",
    icon: DiscordIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: content.contact.items.email.title,
    description: content.contact.items.email.description,
    href: "mailto:fran.ba22@gmail.com",
    icon: MailIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: content.contact.items.linkedin.title,
    description: content.contact.items.linkedin.description,
    href: "https://www.linkedin.com/in/fbascietto/",
    icon: LinkedinIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: content.contact.items.git.title,
    description: content.contact.items.git.description,
    href: "https://github.com/fbascietto",
    icon: GithubIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export default async function Contact({
  params,
}: {
  params: { lang: Locales };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="bg-white mx-10 text-gray-900 h-screen">
      <div className="max-w-4xl mx-auto p-8 border-2 border-double rounded-sm shadow-md shadow-gray-100">
        <div className="flex align-middle justify-center mb-10 mx-auto text-3xl font-bold tracking-tight sm:text-2xl leading-7 text-teal-600">
          {dict.contact.title}
        </div>
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {actions(dict).map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    "inline-flex rounded-lg p-3 ring-4 ring-white"
                  )}
                >
                  {<action.icon />}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold text-gray-900">
                  <a href={action.href} className="focus:outline-none">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {action.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
