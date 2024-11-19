import { CharacterHeader } from "./components/Header";
import { CharacterDetails } from "./components/MainSection";
import { getDictionary } from "@/app/dictionaries";

const CharacterSheet = async ({ lang }: { lang: Locales }) => {
  const dict = await getDictionary(lang);

  return (
    <>
      <CharacterHeader content={dict} />
      <CharacterDetails content={dict} />
    </>
  );
};

export { CharacterSheet };
