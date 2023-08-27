import Head from "next/head"
import localFont from 'next/font/local'

const seasonFont = localFont({
    src: '../../../public/fonts/the-seasons/Fontspring-DEMO-theseasons-reg.otf',
    display: "auto",
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en" className={seasonFont.className}>
                <body>{children}</body>
            </html>
        </>
    )
}