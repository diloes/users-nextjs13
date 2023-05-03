import Navigation from '@/components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi Primera App NextJS 13',
  description: 'Web App creada con NextJS 13',
  keywords: 'nextjs, react, javascript'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://bootswatch.com/5/flatly/bootstrap.min.css' />
      </head>
      <body className={inter.className}>
        <Navigation />
        <div className='container p-4'>{children}</div>
      </body>
    </html>
  )
}
