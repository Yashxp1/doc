export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex flex-col gap-y-4">Navbar</nav>
      {children}
    </div>
  );
}
