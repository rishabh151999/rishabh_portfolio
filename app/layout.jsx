import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/pagination';

export const metadata = {
  metadataBase: new URL('https://rishabh15aayaninfotech.github.io/rishabh_portfolio'),
  title: {
    default: 'Rishabh Chandra Lal | Front-End Developer in Lucknow',
    template: '%s | Rishabh Chandra Lal',
  },
  description:
    'Rishabh Chandra Lal is a Front-End Developer in Lucknow, India, specializing in React, responsive web design, modern UI development, and performance-focused portfolio websites.',
  keywords: [
    'Rishabh Chandra Lal',
    'Front-End Developer Lucknow',
    'React Developer Lucknow',
    'Web Developer Portfolio',
    'Responsive Websites India',
    'React JS Portfolio',
    'Frontend Developer India',
  ],
  alternates: {
    canonical: '/',
  },
  applicationName: 'Rishabh Chandra Lal Portfolio',
  authors: [{ name: 'Rishabh Chandra Lal' }],
  creator: 'Rishabh Chandra Lal',
  publisher: 'Rishabh Chandra Lal',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Rishabh Chandra Lal Portfolio',
    title: 'Rishabh Chandra Lal | Front-End Developer in Lucknow',
    description:
      'Portfolio of Rishabh Chandra Lal - Front-End Developer focused on React, responsive UI, and modern web experiences.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Rishabh Chandra Lal Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishabh Chandra Lal | Front-End Developer in Lucknow',
    description:
      'Portfolio of Rishabh Chandra Lal - Front-End Developer focused on React, responsive UI, and modern web experiences.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

const scripts = [
  '/js/jquery-3.7.1.min.js',
  '/js/bootstrap.min.js',
  '/js/validator.min.js',
  '/js/jquery.slicknav.js',
  '/js/swiper-bundle.min.js',
  '/js/jquery.waypoints.min.js',
  '/js/jquery.counterup.min.js',
  '/js/isotope.min.js',
  '/js/jquery.magnific-popup.min.js',
  '/js/SmoothScroll.js',
  '/js/parallaxie.js',
  '/js/gsap.min.js',
  '/js/magiccursor.js',
  '/js/SplitText.js',
  '/js/ScrollTrigger.min.js',
  '/js/jquery.mb.YTPlayer.min.js',
  '/js/wow.min.js',
  '/js/function.js',
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rishabh Chandra Lal',
  jobTitle: 'Front-End Developer',
  url: 'https://rishabh15aayaninfotech.github.io/rishabh_portfolio',
  image: 'https://rishabh15aayaninfotech.github.io/rishabh_portfolio/images/rishabh.png',
  sameAs: [
    'https://www.linkedin.com/in/rishabhchandralal/',
    'https://github.com/rishabh151999',
    'https://www.instagram.com/rishabh_chandra_15',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  email: 'rishabhchandralal15@gmail.com',
  telephone: '+919795661093',
  description:
    'Front-End Developer specializing in React, responsive user interfaces, and modern web applications.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Rishabh Chandra Lal Portfolio',
  url: 'https://rishabh15aayaninfotech.github.io/rishabh_portfolio',
  description:
    'Personal portfolio website for Rishabh Chandra Lal, a Front-End Developer based in Lucknow.',
  author: {
    '@type': 'Person',
    name: 'Rishabh Chandra Lal',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/Rishabh_Fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link href="/css/swiper-bundle.min.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" media="screen" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link href="/css/magnific-popup.css" rel="stylesheet" />
        <link href="/css/mousecursor.css" rel="stylesheet" />
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]),
          }}
        />
      </head>
      <body>
        {children}
        {scripts.map((src) => (
          <Script key={src} src={src} strategy="afterInteractive" />
        ))}
      </body>
    </html>
  );
}
