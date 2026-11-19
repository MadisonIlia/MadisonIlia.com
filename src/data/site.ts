export interface Book {
  id: string;
  series: string;
  bookNumber: number;
  title: string;
  year?: string;
  tagline: string;
  description: string[];
  coverImage?: string;
  coverAlt?: string;
  amazonUrl: string;
  goodreadsUrl?: string;
  isNew?: boolean;
}

export const SITE = {
  title: 'Madison Ilia — Author of Romantic Suspense',
  description:
    'Official website of indie author Madison Ilia, creator of the Navigating Justice romantic suspense series including The Crow and Blurred Alliances.',
  author: 'Madison Ilia',
  publisher: 'Rain Publishing, LLC',
  email: 'madisonilia@outlook.com',
  amazonAuthorUrl: 'https://www.amazon.com/Madison-Ilia/e/B09W45VVC5',
  analyticsId: 'G-DEKL8V60E4',
  mailchimp: {
    actionUrl:
      'https://madisonilia.us5.list-manage.com/subscribe/post?u=b5dff6ca593ab9f81a7b1be1b&id=859e952d9e',
    honeypotName: 'b_b5dff6ca593ab9f81a7b1be1b_859e952d9e',
    connectedScript:
      'https://chimpstatic.com/mcjs-connected/js/users/b5dff6ca593ab9f81a7b1be1b/3ef03beb990c37c6bc9cc831b.js',
  },
  socials: [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/madisonilia',
      handle: '@madisonilia',
      icon: '/images/icons/facebook.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/madisonilia88',
      handle: '@madisonilia88',
      icon: '/images/icons/instagram.png',
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@madisonilia',
      handle: '@madisonilia',
      icon: '/images/icons/tiktok.png',
    },
    {
      name: 'Goodreads',
      url: 'https://www.goodreads.com/author/show/22241042.Madison_Ilia',
      handle: 'Madison Ilia',
    },
  ],
} as const;

export const BOOKS: Book[] = [
  {
    id: 'blurred-alliances',
    series: 'Navigating Justice',
    bookNumber: 2,
    title: 'Blurred Alliances',
    tagline:
      '“When people from your present and past mix...you find yourself scrambling to balance truth and lies.” ~Confessions of Undercover Law Enforcement',
    description: [
      'Sophia wants what anyone wants—peace and quiet. She’s experienced enough near-death experiences to last a lifetime, but trouble has a way of finding her. Her attempts to stay off the grid are shattered when a young girl stumbles into Sophia’s new life, completely derailing her.',
      'Ace’s life, in and out of uniform, quickly spirals into the gray area where law enforcement and crime intersect. He struggles to remain neutral when someone close to him is teetering on the line of family or enemy.',
      'Sophia and Ace find themselves partners, once again, untangling a web of lies and forcing them to create barriers around the people they trust most. Their illusion of safety is shattered as they realize the betrayal runs long and deep. Nothing is off limits when protecting your own.',
      'Sophia and Ace have tasted death before; its lingering bitterness has them racked and ready for anything. Coloring outside crooked lines in a picture they intend to burn, brings them full circle to a past that won’t stay where it should. These former feds are done running. Fighting injustice with bullets, fists, and brains, they are jolted back into the world of organized crime where blood, badges, and titles mean very little when you are staring at the barrel of a gun.',
    ],
    coverImage: '/images/blurred-alliances.jpg',
    coverAlt: 'Book cover for Navigating Justice: Blurred Alliances by Madison Ilia',
    amazonUrl:
      'https://www.amazon.com/Blurred-Alliances-Navigating-Justice-Madison/dp/B0CDZ41YH5',
    goodreadsUrl:
      'https://www.goodreads.com/book/show/195882407-blurred-alliances',
    isNew: true,
  },
  {
    id: 'the-crow',
    series: 'Navigating Justice',
    bookNumber: 1,
    title: 'The Crow',
    year: '2022',
    tagline:
      'Sometimes, even with the best intentions…the lines of justice and revenge get crossed.',
    description: [
      'Sophia Dimitri has the perfect life—a great husband, a beautiful toddler, and a job she loves. She and her husband, Luka, are undercover DEA agents based in Manhattan, New York. After Luka and their son, Niklaus, are killed in a freak car incident, Sophia quickly suspects foul play.',
      'The case is abruptly closed, forcing Sophia and her partner, Ace, to take matters into their own hands. Setting out to find justice for her family they begin looking for The Crow, a drug organization tied to a world they are not equipped to navigate—a world where criminals hide behind badges, family ties don’t always mean blood, and people are rarely who they appear to be.',
      'When emotions are intertwined with blinding pain, reason doesn’t enter the equation and everyone has the potential to become a ticking time bomb, bound to detonate without notice.',
      'As the investigation comes full circle, the duo finds themselves in a fight for their lives…crossing invisible boundaries from which they can never return.',
    ],
    coverImage: '/images/the-crow.jpg',
    coverAlt: 'Book cover for Navigating Justice: The Crow by Madison Ilia',
    amazonUrl:
      'https://www.amazon.com/Crow-Navigating-Justice-Book-ebook/dp/B09RJPSP2M',
    goodreadsUrl:
      'https://www.goodreads.com/book/show/60443583-the-crow',
  },
];
