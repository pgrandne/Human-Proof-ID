
import { Card } from '../components/Card'
import { Header } from '../components/Header';
import { Connected } from '../components/Connected'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-1/6 flex justify-center">
        <h1 className="text-5xl font-extrabold text-center mt-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-red-400 to-indigo-400">Human Proof ID</h1>
      </div>
      <div className="h-4/6 flex justify-center">
        <Connected>
          <Card />
        </Connected>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  )
}

