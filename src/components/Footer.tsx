import Image from 'next/image'
import { github } from '../public'

export function Footer() {
    return (
        <footer className="absolute bottom-2 w-full flex justify-center">
            <a
                href="https://github.com/pgrandne"
                target="_blank"
                rel="noreferrer"
            >
                <Image
                    className="h-8 object-contain cursor-pointer opacity-70 hover:opacity-100"
                    src={github}
                    alt="github"
                />
            </a>
        </footer>
    )

}