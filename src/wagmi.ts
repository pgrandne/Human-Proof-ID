import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import {polygonMumbai} from 'wagmi/chains'
import { alchemyProvider } from '@wagmi/core/providers/alchemy'
import { InjectedConnector } from 'wagmi/connectors/injected'

const walletConnectProjectId = '98b3764fd9e87383e34ed659ad24d968'

  const { chains,publicClient } = configureChains(
    [polygonMumbai],
    [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! })],
)

export const config = createConfig({
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    publicClient,
  })
function jsonRpcProvider(arg0: { rpc: (chain: any) => { http: any } }) {
  throw new Error('Function not implemented.')
}

