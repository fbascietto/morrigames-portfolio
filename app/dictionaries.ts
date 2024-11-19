import 'server-only'

type Locale = 'en' | 'es';
 
const dictionaries: Record<Locale, () => Promise<Content>> = {
  en: () => import('./[lang]/dictionaries/en.json').then((module) => module.default as Content),
  es: () => import('./[lang]/dictionaries/es.json').then((module) => module.default as Content),
}
 
export const getDictionary = async (locale: Locale): Promise<Content> => dictionaries[locale]()
