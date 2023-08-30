import { Account } from '../components/Account'
import Image from 'next/image'
import { radish } from '../public'
import { Balance } from '../components/Balance'
import { BlockNumber } from '../components/BlockNumber'
import { Card } from '../components/Card'
import { ConnectKitButton } from '../components/ConnectKitButton'
import { Connected } from '../components/Connected'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { ReadContract } from '../components/ReadContract'
import { ReadContracts } from '../components/ReadContracts'
import { ReadContractsInfinite } from '../components/ReadContractsInfinite'
import { SendTransaction } from '../components/SendTransaction'
import { SendTransactionPrepared } from '../components/SendTransactionPrepared'
import { SignMessage } from '../components/SignMessage'
import { SignTypedData } from '../components/SignTypedData'
import { Token } from '../components/Token'
import { WatchContractEvents } from '../components/WatchContractEvents'
import { WatchPendingTransactions } from '../components/WatchPendingTransactions'
import { WriteContract } from '../components/WriteContract'
import { WriteContractPrepared } from '../components/WriteContractPrepared'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Page() {
  const notify = () => toast("🦄 Wow so easy !");

  return (
    <>
      <div className="h-1/6 flex justify-between p-3">
        <Image
          className="h-20 w-20 object-contain"
          src={radish}
          alt="radish"
        />
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-red-400 to-indigo-400">Template</h1>
        <ConnectKitButton />
      </div>
      <Connected>
        <Account />
      </Connected>
      <div className="h-4/6 flex justify-center">
        <Card />
      </div>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default Page
