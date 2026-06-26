import Footer from "@/src/components/organisms/Footer";
import Header from "../../components/organisms/Header";
import { User } from "../../types/User";
import "../globals.css"
import { cookies } from 'next/headers';

export default async function MainRoutesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const cookieStore = await cookies()
    const userCookie = cookieStore.get('user_data')

    const user: User | undefined = userCookie ? JSON.parse(userCookie.value) : undefined

    return (
            <>
                <Header 
                    user={user}
                />
                {children}
                <Footer/>
            </>
    );
}