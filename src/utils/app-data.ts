import WhatsAppIcon from "@/assets/images/icons/whatsapp.svg";
import FoodIcon from "@/assets/images/icons/food.svg";
import FileIcon from "@/assets/images/icons/file.svg";
import PhoneIcon from "@/assets/images/icons/phone.svg";
import MailIcon from "@/assets/images/icons/mail.svg";
import ScooterIcon from "@/assets/images/icons/scooter.svg";
import OrderIcon from "@/assets/images/icons/order.svg";
import AgreementIcon from "@/assets/images/icons/agreement.svg";
import steak from "@/assets/images/steak.png";
import food from "@/assets/images/food.png";
import OnGoingIcon from "@/assets/images/icons/ongoing.svg";
import DeliveredIcon from "@/assets/images/icons/delivered.svg";
import CompletedIcon from "@/assets/images/icons/condition-completed.svg";
import CookIcon from "@/assets/images/icons/cook.svg";

type TUserMenuList = { title: string; link: string };

export const filterList: string[] = [
  "Все",
  "Закуски",
  "Салаты",
  "Горячее",
  "Детское",
  "Десерты",
  "Напитки",
];

export const ordersFilterList: string[] = [
  "Все",
  "Текущие",
  "Доставлены",
  "Отменены",
];

export const userMenuList: TUserMenuList[] = [
  { title: "Мои заказы", link: "/orders" },
  { title: "Депозит", link: "/deposit" },
  { title: "Привязанные карты", link: "/cards" },
  { title: "Мои адреса", link: "/address" },
  { title: "Мои данные", link: "/my-data" },
  { title: "Выйти", link: "/" },
];

export const footerList = [
  { title: "WhatsApp", icon: WhatsAppIcon, link: "#" },
  { title: "Меню для частных клиентов", icon: FoodIcon, link: "#" },
  {
    title: "Политика конфиденциальности",
    icon: FileIcon,
    link: "/confidential",
  },
  { title: "+7 (945) 450-46-60", icon: PhoneIcon, link: "tel: 79454504660" },
  { title: "Меню для корпоративных заказов", icon: OrderIcon, link: "#" },
  { title: "Пользовательское соглашение", icon: AgreementIcon, link: "/rules" },
  { title: "Написать на E-mail", icon: MailIcon, link: "#" },
  { title: "О доставке", icon: ScooterIcon, link: "#" },
];

export const sliderList = [
  {
    title: "Доставка из ресторана в керамической посуде",
    btn: "Сториз о сервисе",
    img: steak,
  },
  { title: "Великолепный баннер", btn: "", img: "" },
  {
    title: "Горячая закуска с цыпленком",
    btn: "Посмотреть",
    img: food,
  },
];

export const rulesInfo = [
  {
    title: "1. Общие положения",
    descriptions: [
      `1.1. ООО «ЯНДЕКС» (далее — «Яндекс») предлагает пользователю сети
  Интернет (далее – Пользователь) - использовать свои сервисы на
  условиях, изложенных в настоящем Пользовательском соглашении (далее
  — «Соглашение», «ПС»). Соглашение вступает в силу с момента
  выражения Пользователем согласия с его условиями в порядке,
  предусмотренном п. 1.4 Соглашения.`,
      `1.2. Яндекс предлагает Пользователям доступ к широкому спектру
  сервисов, включая средства навигации, коммуникации, поиска,
  размещения и хранения разного рода информации и материалов
  (контента), персонализации контента, совершения покупок и т. д. Все
  существующие на данный момент сервисы ООО «ЯНДЕКС» и других
  компаний, условия использования которых ссылаются на данное
  Соглашение, а также любое развитие их и/или добавление новых
  является предметом настоящего Соглашения.`,
      `1.3. Использование сервисов Яндекса регулируется настоящим
  Соглашением, а также следующими документами, которые являются
  неотъемлемой частью настоящего соглашения:`,
    ],
  },
];

export const confidentialInfo = [
  {
    title: "1. Что регулирует настоящая политика конфиденциальности",
    description: `Настоящая политика конфиденциальности (далее — Политика) действует в
    отношении всей информации, включая персональные данные в понимании
    применимого законодательства (далее — «Персональная информация»),
    которую ООО «ЯНДЕКС» и/или его аффилированные лица, в том числе
    входящие в одну группу с ООО «ЯНДЕКС» (далее — «Яндекс»), могут
    получить о Вас в процессе использования Вами любых сайтов, программ,
    продуктов и/или сервисов Яндекса (далее вместе — «Сервисы»),
    информацию о которых Вы можете найти на сайтах yandex.ru, yandex.com,
    yandex.ua, yandex.by, yandex.kz, yandex.com.tr, yandex.co.il и других
    принадлежащих Яндексу сайтах (далее вместе — «Сайты»), а также в ходе
    исполнения Яндексом / его аффилированными лицами любых соглашений и
    договоров, заключенных с Вами в связи с использованием Вами Сервисов.
    Яндекс может также получать Персональную информацию от своих партнеров
    (далее — «Партнеры»), сайты, программы, продукты или сервисы которых
    Вы используете (например, от рекламодателей Яндекса или служб такси)
    из других источников с общедоступными`,
  },
];

export const conditionList = [
  { title: "Оформлен", icon: OnGoingIcon, id: 0 },
  { title: "Готовиться", icon: CookIcon, id: 1 },
  { title: "В доставке", icon: DeliveredIcon, id: 2 },
  { title: "Готово", icon: CompletedIcon, id: 3 },
];
