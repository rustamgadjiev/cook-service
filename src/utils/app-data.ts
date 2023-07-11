type TUserMenuList = { title: string; link: string };

export const filterList: string[] = [
  "Все",
  "Любимое",
  "Закуски",
  "Салаты",
  "Горячее",
  "Детское",
  "Десерты",
  "Напитки",
];

export const userMenuList: TUserMenuList[] = [
  { title: "Мои заказы", link: "/" },
  { title: "Депозит", link: "/" },
  { title: "Привязанные карты", link: "/" },
  { title: "Мои адреса", link: "/" },
  { title: "Мои данные", link: "/" },
  { title: "Выйти", link: "/" },
];
