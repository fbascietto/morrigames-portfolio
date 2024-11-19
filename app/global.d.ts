type Content = {
  home: {
    title: string;
    description: {
      part1: string;
    };
    tabs: {
      intro: string;
      about: string;
      games: string;
      contact: string;
    }
  };
  about: {
    header: {
      charname: string;
      class_level_title: string;
      class_level_value: string;
      background_title: string;
      background_value: string;
      name_title: string;
      name_value: string;
    };
    cards: {
      first: Card;
      second: Card;
      third: Card;
      fourth: Card;
    };
  };
  games: {
    title: string;
    description: string;
    items: Record<string, GameItem>;
    action: string;
  };
  contact: {
    title: string;
    items: {
      discord: Card;
      email: Card;
      linkedin: Card;
      git: Card;
    };
  };
};

type Card = {
  title: string;
  description: string;
};

type GameItem = {
  title: string;
  description: string;
};

type Locales = "en" | "es";
