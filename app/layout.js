import './globals.css';

export const metadata = {
  title: 'Project Brief — Ashley M. Pickett',
  description: 'A guided workbook to plan your website, app, or brand.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
