import Image from "next/image";

const Proficiencies = () => {
  const skills = [
    { name: "HTML", icon: "/tech/html.png" },
    { name: "CSS", icon: "/tech/css.png" },
    { name: "SASS", icon: "/tech/sass.png" },
    { name: "Tailwind", icon: "/tech/tailwind.png" },
    { name: "JavaScript", icon: "/tech/js.png" },
    { name: "TypeScript", icon: "/tech/ts.png" },
    { name: "React", icon: "/tech/react.png" },

    { name: "Node", icon: "/tech/nodejs.png" },
    { name: "C", icon: "/tech/c-programming.png" },
    { name: "C-Sharp", icon: "/tech/c-sharp.png" },
    { name: "Java", icon: "/tech/java.png" },
    { name: "Kotlin", icon: "/tech/kotlin.png" },
    { name: "Python", icon: "/tech/python.png" },
    { name: "Git", icon: "/tech/git.png" },
    { name: "Postgresql", icon: "/tech/postqresql.png" },

    { name: "Godot", icon: "/tech/godot.png", isNew: true },
    { name: "Aseprite", icon: "/tech/aseprite.png", isNew: true },

    // Add more skills as needed
  ];
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-10 ">
          <div className="max-w-4xl mx-auto p-8 border-2 border-double rounded-sm shadow-md shadow-teal-100 border-t-0">
            <h2 className="mt-2 mb-10 mx-auto text-3xl font-bold tracking-tight sm:text-2xl leading-7 text-teal-600">
              Proficiencies
            </h2>

            <div
              className="grid grid-cols-4 sm:grid-cols-6 gap-3
             justify-items-center"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center group"
                >
                  <div className="transform transition hover:scale-110 group-hover:shadow-lg">
                    {/* New Badge */}
                    {skill.isNew && (
                      <span className="absolute bottom-[-15px] right-0 z-50 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full transform translate-x-1/2 -translate-y-1/2">
                        NEW
                      </span>
                    )}

                    {/* Icon Container */}
                    <div className="p-2 rounded-lg bg-gray-100 shadow-md">
                      <Image
                        src={skill.icon}
                        alt={`${skill.name} Icon`}
                        className="w-12 h-12"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Proficiencies };
