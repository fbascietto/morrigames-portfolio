import { CompletedQuests } from "../components/CharacterSheet/components/CompletedQuests";

export default async function Games({ params }: { params: { lang: Locales } }) {
  return <CompletedQuests lang={params.lang} />;
}
