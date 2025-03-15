import Image from 'next/image.js';
import Link from 'next/link.js';

type props = {
    width? : number,
    height?: number,
    link? : string, 
    logoSrc? : string, 
}

export default function Logo({width, height, link, logoSrc} : props){

    return  <Link href={link  ?? "/"}>
            <Image src={logoSrc ?? "/images/PlanStackerLogo2.png"} width={width ?? 100} height={height ?? 100} alt="Logo Of PlanStacker.com" priority 
            style={{width:"auto",height:"auto"}}/>
        </Link>
}