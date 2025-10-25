export const metadata = {
  title: 'Hello World',
  description: 'Minimal Next.js app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        {children}
      </body>
    </html>
  );
}
