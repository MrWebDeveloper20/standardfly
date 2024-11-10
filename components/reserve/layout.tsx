

export default function ReserveLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: any
}>) {
  
  return (
    <html lang="en">
      <body className="w-full">
        {children}
      </body>
    </html>
  );
}
