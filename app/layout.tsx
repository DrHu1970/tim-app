import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header style={{padding:'12px', borderBottom:'1px solid #eee', display:'flex', gap:16}}>
          <Link href="/">TIM</Link>
          <nav style={{display:'flex', gap:12}}>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/sessions/new">Session anlegen</Link>
            <Link href="/login">Login</Link>
          </nav>
        </header>
        <main style={{maxWidth:960, margin:'24px auto', padding:'0 16px'}}>
          {children}
        </main>
      </body>
    </html>
  );
}
