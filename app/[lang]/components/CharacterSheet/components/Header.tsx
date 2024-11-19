import { DragonIcon } from "./Icons/DragonIcon";

const CharacterHeader = ({ content }: { content: Content }) => {
  return (
    <div className="backdrop:bg-white mx-10 text-gray-900">
      <div className="relative max-w-4xl mx-auto p-8 border-2 rounded-sm">
        <div className="flex justify-between items-center align-middle my-auto">
          {/* Character Name on the left */}
          <div className="flex-1 pr-3 align-middle justify-center mx-auto">
            {/* Dragon Icon */}
            <DragonIcon aria-hidden="true" />
            <h1 className="flex text-3xl font-bold align-middle justify-center mx-auto">
              {content.home.title}
            </h1>
            {/* Legend beneath Character Name */}
            <p className="flex text-xs text-gray-500 align-middle justify-center mx-auto">
              {content.about.header.charname}
            </p>
          </div>

          {/* 3x2 Grid for details on the right */}
          <div className="w-3/5 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 border-2 border-double rounded-lg">
            <div className="text-center">
              <p className="text-base">
                {content.about.header.class_level_value}
              </p>
              <h2 className="text-sm font-semibold">
                {content.about.header.class_level_title}
              </h2>
            </div>
            <div className="text-center">
              <p className="text-base">
                {content.about.header.background_value}
              </p>
              <h2 className="text-sm font-semibold">
                {content.about.header.background_title}
              </h2>
            </div>
            <div className="text-center">
              <p className="text-base">{content.about.header.name_value}</p>
              <h2 className="text-sm font-semibold">
                {content.about.header.name_title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CharacterHeader };
