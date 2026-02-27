import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Coding : The New Industry Paradigm",
  description: "단순한 놀음이 아닌, 산업의 대전환. 바이브 코딩으로 아이디어를 실현하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Outfit:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="bg-glow">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
