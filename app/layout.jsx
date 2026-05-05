import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/pagination';

export const metadata = {
  title: 'Rishabh Chandra | Front-End Developer in Lucknow',
  description:
    'Portfolio of Rishabh Chandra Lal - Front-End Developer in Lucknow, India. Specializing in React JS, responsive web design, and modern user experiences.',
  keywords: [
    'Rishabh Chandra Lal',
    'Front-End Developer Lucknow',
    'React Developer Lucknow',
    'Web Developer Portfolio',
    'Responsive Websites India',
  ],
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
