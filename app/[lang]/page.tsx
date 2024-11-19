import { HeroArea } from "./components/HeroArea";
import { getDictionary } from "@/app/dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: "en" | "es" };
}) {

  const dict = await getDictionary(lang);
  return <HeroArea dictionary={dict} />;
}
