import Header from "../components/organisms/Header";
import { User } from "../types/User";
import "./globals.css"
import { cookies } from 'next/headers';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const cookieStore = await cookies();
    const meuCookie = cookieStore.get('auth_token');

    let user: User | undefined = undefined

    if (meuCookie) {
        user = {
            uuid: "1111-1111-1111-1111",
            name: "Arthur",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761",
        }
    }

    return (
        <html
            lang="en"
            className="h-full antialiased"
        >
            <body className="min-h-full flex flex-col">
                <Header
                    user={user}
                />

                {children}
            </body>
        </html>
    );
}