import Image from 'next/image'
import { idcard } from '../public'
import { ConnectKitButton } from '../components/ConnectKitButton'

export const Header = () => (
    <>
        <div className="absolute top-1 left-3">
            <Image
                className="h-20 w-32 object-contain"
                src={idcard}
                alt="idcard"
            />
        </div>
        <div className="absolute top-3 right-3">
            <ConnectKitButton />
        </div>
    </>
)