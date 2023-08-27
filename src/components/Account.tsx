'use client'

import { useAccount, useEnsName } from 'wagmi'
import { toast } from 'react-toastify';

export function Account() {
  const { address } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const notify = () => toast("🦄 Wow so easy !");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      {ensName ?? address}
      {ensName ? ` (${address})` : null}
    </div>
  )
}
