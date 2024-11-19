import Image from "next/image";
import { getDictionary } from "@/app/dictionaries";

const CompletedQuests = async ({ lang }: { lang: Locales }) => {
  const { games } = await getDictionary(lang);

  const projects = [
    {
      title: games.items["pong"].title,
      description: games.items["pong"].description,
      link: "#",
      image: "/images/pong.jpg",
    },
    {
      title: games.items["arknoid"].title,
      description: games.items["arknoid"].description,
      link: "#",
      image: "/images/arkanoid.jpg",
    },
    {
      title: games.items["invaders"].title,
      description: games.items["invaders"].description,
      link: "#",
      image: "/images/spaceinvaders.jpg",
    },
    {
      title: games.items["asteroids"].title,
      description: games.items["asteroids"].description,
      link: "#",
      image: "/images/asteroids.jpg",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl text-center">
      <div className="mx-10 ">
        <div className="max-w-4xl mx-auto p-8 border-2 border-double rounded-sm shadow-md shadow-teal-100">
          <h2 className="mt-2 mb-6 text-3xl font-bold tracking-tight sm:text-2xl leading-7 text-teal-600">
            {games.title}
          </h2>

          <p className="mb-6 mx-auto text-base max-w-2xl leading-8 text-gray-600">
            {games.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-4 border-2 border-double rounded-lg bg-gray-100 shadow-md transform transition hover:scale-105 hover:bg-teal-50"
              >
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={`${project.title} Image`}
                  className="w-full h-64 object-contain rounded-lg mb-4"
                  width={256}
                  height={256}
                />

                {/* Project Title and Details */}
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-medium hover:underline"
                >
                  {games.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { CompletedQuests };
