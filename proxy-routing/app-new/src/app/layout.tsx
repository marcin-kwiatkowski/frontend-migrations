import './globals.css';
import type { Metadata } from 'next';
import { TopBar } from '@/topbar/TopBar';
import styles from '@/app/layout.module.css';
import { Menu } from '@/menu/Menu';

export const metadata: Metadata = {
  title: 'Fakely',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <TopBar />
        <div className={styles.main}>
          <Menu />
          <div className={styles.content}>{children}</div>
        </div>
      </body>
    </html>
  );
}
