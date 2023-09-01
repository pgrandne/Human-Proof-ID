'use client'

import Image from 'next/image'
import { idcard } from '../public'
import { Dispatch, SetStateAction, useState } from 'react'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { MintModal } from './MintModal'
import { toast } from 'react-toastify';
import { wagmiContractConfig } from './contracts'


export const Mint = ({ mint, score, setMint }: {
    mint: boolean
    score: string
    setMint: Dispatch<SetStateAction<boolean>>

}) => {
    const [disabled, setDisabled] = useState(false)
    const [modal, setModal] = useState(false)
    const notify = () => toast("🦄 Minting request submitted!");

    const { write, data } = useContractWrite({
        ...wagmiContractConfig,
        functionName: 'safeMint',
        onSuccess(data) {
            notify()
        },
        onError(data) {
            setDisabled(false)
        }
    })
    const {
        data: receipt,
        isLoading: isPending,
        isSuccess,
    } = useWaitForTransaction({
        hash: data?.hash,
        onSuccess(receipt) {
            setModal(true)
            setMint(false)
        },
        onError(receipt) {
            setDisabled(false)
        }
    })


    // const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    //     message: `Request a Proof of Humanity NFT with score: ${score}`,
    //     onSuccess(data) {
    //         notify()
    //         // setTimeout(() => { setModal(true) }, 8300)
    //         requestMint(address!)
    //     },
    // })

    return (
        <>
            <button
                disabled={!mint}
                className="button flex justify-between"
                onClick={() => {
                    setDisabled(true)
                    write()
                    // signMessage()
                }}>
                {disabled &&
                    <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="black"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>}
                <span>{disabled ? "Processing..." : "Mint your NFT"}</span>
                <Image
                    className="h-10 w-10 object-contain"
                    src={idcard}
                    alt="gitcoin"
                />
            </button >
            {modal && <MintModal setModal={setModal} tx={data?.hash} />}
        </>
    )
}