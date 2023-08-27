import Head from "next/head"
import localFont from 'next/font/local'

export const seasonFont = localFont({
    src: '../../../public/fonts/the-seasons/Fontspring-DEMO-theseasons-reg.otf',
    display: 'swap',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Head>
                <title>Paul's Portfolio</title>
            </Head>
            <html lang="en" className={seasonFont.className}>
                <body>{children}</body>
            </html>
        </>
    )
}