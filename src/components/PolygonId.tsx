'use client'

import Image from 'next/image'
import { polygonId } from '../public'
import { Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AttestModal } from './AttestModal'

export const PolygonId = ({ attested, setAttested, setMint, score }: {
    attested: boolean
    setAttested: Dispatch<SetStateAction<boolean>>
    setMint: Dispatch<SetStateAction<boolean>>
    score: string
}) => {
    const [disabled, setDisabled] = useState(false)
    const [modal, setModal] = useState(false)

    const attestable = () => {
        if (!attested) return true
        const scoreValue = parseFloat(score)
        if (scoreValue <= 20) return true
        return false
    }

    return (
        <>
            <button
                disabled={!attested}
                className="button flex justify-between"
                onClick={() => {
                    setDisabled(true)
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
                <span>{disabled ? "Processing..." : (score === "" || parseFloat(score) > 20 ? "Attest your score" : "A score higher than 20 is required")}</span>
                <Image
                    className="h-10 w-10 object-contain"
                    src={polygonId}
                    alt="gitcoin"
                />
            </button >
            {modal && <AttestModal setModal={setModal} setDisabled={setDisabled} setAttested={setAttested} setMint={setMint} />}
        </>
    )
}