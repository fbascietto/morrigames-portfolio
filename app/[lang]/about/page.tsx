import { CharacterSheet } from "../components/CharacterSheet";

export default async function Games({ params }: { params: { lang: Locales } }) {
  return <CharacterSheet lang={params.lang} />;
}
