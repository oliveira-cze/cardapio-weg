import "../../globals.css"
import Hero from "@/src/components/organisms/Hero";

export default async function MainRoutesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <>
                <Hero /> 
                {children}
            </>
    );
}