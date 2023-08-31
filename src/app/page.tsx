import Image from 'next/image'
import { idcard } from '../public'
import { Card } from '../components/Card'
import { ConnectKitButton } from '../components/ConnectKitButton'
import { Connected } from '../components/Connected'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <div className="h-1/6 flex justify-between p-3">
        <Image
          className="h-20 w-32 object-contain"
          src={idcard}
          alt="idcard"
        />
        <h1 className="text-5xl font-extrabold text-center mt-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-red-400 to-indigo-400">Human Proof ID</h1>
        <ConnectKitButton />
      </div>
      <div className="h-4/6 flex justify-center">
        <Connected>
          {/* <Card /> */}
        </Connected>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  )
}

