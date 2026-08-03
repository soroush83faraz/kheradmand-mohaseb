import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';
import './globals.css';

const vazir = localFont({
  src: './fonts/Vazirmatn.woff2',
  variable: '--font-vazir',
  weight: '100 900',
  display: 'swap',
});

const estedad = localFont({
  src: './fonts/Estedad.woff2',
  variable: '--font-estedad',
  weight: '100 900',
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

const themeInit = `try{if(localStorage.getItem('kma-theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${estedad.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
