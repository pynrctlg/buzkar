import { headers } from "next/headers";
import Header from "@/components/Header";
import { Logger } from 'next-axiom'

export default function Data() {

    // İstekten gelen header bilgilerini al
    const headersList = headers();

    // Proxy arkasında gerçek IP adresini almak
    const ip =
        headersList.get("x-forwarded-for")?.split(",").shift() ||
        headersList.get("x-real-ip") ||
        "IP adresi bulunamadı";


    const logger = new Logger({ source: 'rana' });
    logger.info('visitor', { id: ip });


    return (
        <div>
            <Header />
            <center style={{ "padding": "50px" }}>Çok yakında babası {ip}</center>
        </div>
    )
}