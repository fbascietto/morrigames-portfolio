import Image from "next/image";

const D20Icon = () => (
  <Image src="/icosahedron.png" alt="Dice Icon" width={38} height={38} />
);
const SwordIcon = () => (
  <Image src="/sword.png" alt="Sword Icon" width={38} height={38} />
);
const BookIcon = () => (
  <Image src="/book.png" alt="Book Icon" width={38} height={38} />
);
const WizardIcon = () => (
  <Image src="/wizard.png" alt="Wizard Icon" width={40} height={40} />
);

const features = ({ content }: { content: Content["about"]["cards"] }) => [
  {
    name: content.first.title,
    description: content.first.description,
    icon: WizardIcon,
  },
  {
    name: content.second.title,
    description: content.second.description,
    icon: D20Icon,
  },
  {
    name: content.third.title,
    description: content.third.description,
    icon: SwordIcon,
  },
  {
    name: content.fourth.title,
    description: content.fourth.description,
    icon: BookIcon,
  },
];

const Feats = ({ content }: { content: Content["about"]["cards"] }) => {
  return features({ content }).map((feature) => (
    <div key={feature.name} className="relative pl-[2rem] lg:pl-[3rem]">
      <div className="p-4 border border-gray-300 rounded-lg">
        <div className="flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg">
            <feature.icon aria-hidden="true" />
          </div>
          <div className="flex flex-col align-middle justify-center ml-8">
            <dt className="text-base font-semibold leading-7 text-gray-900">
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-600">
              {feature.description}
            </dd>
          </div>
        </div>
      </div>
    </div>
  ));
};

const CharacterDetails = ({ content }: { content: Content }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 border-2 border-double rounded-sm shadow-md shadow-teal-100 border-t-0">
      <div className="flex justify-between">
        {/* Left Column for Characteristics - not sure if this part makes sense */}
        <div className="w-1/5 flex flex-col justify-between">
          {["STR", "DEX", "CON", "INT", "WIS", "CHA"].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 border-2 border-double rounded-lg shadow-md bg-gray-100 mb-4"
            >
              <h3 className="text-2xl font-bold">18</h3>
              <p className="text-sm text-gray-500">{stat}</p>
            </div>
          ))}
        </div>
        <dl className="grid max-w-xl gap-x-8 gap-y-2 lg:max-w-none">
          <Feats content={content.about.cards} />
        </dl>
      </div>
    </div>
  );
};

export { CharacterDetails };
