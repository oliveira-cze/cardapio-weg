import Logo from "../atoms/Logo";
import facebook from "../../../public/assets/icons/social-media/facebook-brands-solid.png"
import twitter from "../../../public/assets/icons/social-media/twitter-brands-solid.png"
import whatsapp from "../../../public/assets/icons/social-media/whatsapp-brands-solid.png"
import instagram from "../../../public/assets/icons/social-media/instagram-brands-solid.png"

import Image from "next/image";

export default async function Footer() {

    return (
        <footer className="flex w-full justify-between items-center absolute px-16 py-5 bg-white-system border-t border-gray-800/20">
            <Logo />
            <div>
                <p>All Rights Reserved to WEG</p>
            </div>
            <ul className="flex gap-2">
                <li><Image src={facebook} alt="Logo of the facebook social media" width={24} height={24}/></li>
                <li><Image src={twitter} alt="Logo of the twitter social media" width={24} height={24}/></li>
                <li><Image src={whatsapp} alt="Logo of the whatsapp social media" width={24} height={24}/></li>
                <li><Image src={instagram} alt="Logo of the instagram social media" width={24} height={24}/></li>
            </ul>
        </footer>
    )
}