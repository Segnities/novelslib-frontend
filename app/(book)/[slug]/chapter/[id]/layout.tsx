export const metadata = {  
   layoutSegments: []
}

export default function ChapterLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         {children}
      </>
   )
}