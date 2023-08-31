import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import {polygonMumbai} from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'

const walletConnectProjectId = '98b3764fd9e87383e34ed659ad24d968'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()],
)

export const config = createConfig({
    autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    publicClient,
    webSocketPublicClient,
  })
