'use client'

import { useAccount } from 'wagmi'

export function Connected({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount()

  if (!isConnected) return <div className="card flex flex-col justify-center text-center text-3xl font-extrabold text-indigo-500">Please Connect</div>
  return <>{children}</>
}
