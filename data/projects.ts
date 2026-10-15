export interface Project {
  num: string;
  title: string;
  subtitle: string;
  category: string;
  /** Live URL. Leave undefined for products without a public site. */
  url?: string;
  /** Internal SPA route. Used for dedicated product pages. */
  internalUrl?: string;
  /** Shown as the large dark card at the top of the grid. */
  featured?: boolean;
  imgUrl?: string;
}

export const projectsList: Project[] = [
  {
    num: "01",
    title: "Invoice Studio",
    subtitle:
      "Create invoices by simply chatting, with a complete invoice management system behind it.",
    category: "Product",
    featured: true,
    internalUrl: "/product",
    imgUrl: "/projects/InvoiceStudio.png"
  },
  {
    num: "02",
    title: "Our Nepali Coffee",
    subtitle: "Brand website",
    category: "Website",
    url: "https://ournepalicoffee.com",
    imgUrl: "/projects/NepaliCoffeeWebsite.png"
  },
  {
    num: "03",
    title: "Nepali Coffee POS",
    subtitle: "Point-of-sale system",
    category: "Software",
    imgUrl: "/projects/NepaliCoffeePOS.png"
  },
  {
    num: "04",
    title: "Euroace International",
    subtitle: "Company website",
    category: "Website",
    url: "https://euroaceinternational.com",
    imgUrl: "/projects/Euroace.png"
  },
  {
    num: "05",
    title: "SV Holidays",
    subtitle: "Travel agency platform",
    category: "Website",
    url: "https://thesvholidays.com",
    imgUrl: "/projects/SVHolidays.png"
  },
];