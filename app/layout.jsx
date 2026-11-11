import { Vazirmatn } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';
import './globals.css';

const vazir = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
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
    <html lang="fa" dir="rtl" className={`${vazir.variable}`}>
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
