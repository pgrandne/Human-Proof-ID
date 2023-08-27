import { Account } from '../components/Account'
import { Balance } from '../components/Balance'
import { BlockNumber } from '../components/BlockNumber'
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
      <h1 className="text-5xl flex mt-3 justify-center">Template</h1>
      <div className="absolute top-1 md:top-2 right-1 md:right-2">
        <ConnectKitButton />
      </div>
      <Connected>
        <Account />

      </Connected>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default Page
