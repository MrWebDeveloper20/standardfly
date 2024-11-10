import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Standard Fly",
  description: " آژانس مسافرتی استاندارد فلای , بلیط هواپیما  , تور  , گردشگری ,  خدمات مسافرتی و گردشگری استاندارد فلای  ,   استاندارد فلای   ,  آژانس خدمات مسافرتی و گردشگری استاندارد فلای ,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className="w-full">        
        {children}
      </body>
    </html>
  );
}
