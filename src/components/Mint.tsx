'use client'

import Image from 'next/image'
import { idcard } from '../public'
import { useState } from 'react'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { wagmiContractConfig } from './contracts'
import { Modal } from './Modal'
import { toast } from 'react-toastify';

export const Mint = ({ mint, score }: { mint: boolean, score: string }) => {
    const [disabled, setDisabled] = useState(false)
    const [modal, setModal] = useState(false)
    const notify = () => toast("🦄 Minting request submitted!");

    const mintable = () => {
        if (!mint) return true
        const scoreValue = parseFloat(score)
        if (scoreValue <= 20) return true
        return false
    }

    const { write, data, error, isLoading, isError } = useContractWrite({
        ...wagmiContractConfig,
        functionName: 'mint',
    })
    const waitForTransaction = useWaitForTransaction({
        hash: data?.hash,
        onSuccess(data) {
            setModal(true)
        },
    })

    return (
        <>
            <button
                disabled={mintable()}
                className="button flex justify-between"
                onClick={() => {
                    setDisabled(true)
                    // write()
                    notify()
                    setModal(true)
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
                <span>{disabled ? "Processing..." : (score === "" || parseFloat(score) > 20 ? "Mint your NFT" : "A score higher than 20 is required to mint")}</span>
                <Image
                    className="h-10 w-10 object-contain"
                    src={idcard}
                    alt="gitcoin"
                />
            </button >
            {modal && <Modal setModal={setModal} tx={"0xcoucou"} />}
        </>
    )
}