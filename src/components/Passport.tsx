'use client'

import Image from 'next/image'
import { gitcoin } from '../public'
import { Dispatch, SetStateAction, useState } from 'react'
import { useWalletClient, useAccount } from 'wagmi'

const API_KEY = process.env.NEXT_PUBLIC_GITCOIN_API_KEY
const SCORER_ID = process.env.NEXT_PUBLIC_SCORER_ID

const headers = API_KEY ? ({
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
}) : undefined

// submitting passport
const SUBMIT_PASSPORT_URI = 'https://api.scorer.gitcoin.co/registry/submit-passport'
// getting the signing message
const SIGNING_MESSAGE_URI = 'https://api.scorer.gitcoin.co/registry/signing-message'
// score needed to see hidden message
const thresholdNumber = 20

export const Passport = ({ score, setScore, checked, setChecked, setAttested }: {
    score: string
    setScore: Dispatch<SetStateAction<string>>
    checked: boolean
    setChecked: Dispatch<SetStateAction<boolean>>
    setAttested: Dispatch<SetStateAction<boolean>>
}) => {
    const { address } = useAccount()
    const { data: signer } = useWalletClient()
    const [disabled, setDisabled] = useState(false)
    const [noScoreMessage, setNoScoreMessage] = useState('')
    const [status, setStatus] = useState(0)

    const scoreColor = () => {
        if (score === '')
            return ""
        else {
            const scoreValue = parseFloat(score)
            if (scoreValue <= 30)
                return "text-red-700"
            else
                return "text-green-700"
        }
    }

    async function checkPassport(currentAddress = address) {
        setScore('')
        setNoScoreMessage('')
        const GET_PASSPORT_SCORE_URI = `https://api.scorer.gitcoin.co/registry/score/${SCORER_ID}/${currentAddress}`
        try {
            const response = await fetch(GET_PASSPORT_SCORE_URI, {
                headers
            })
            const passportData = await response.json()
            console.log('passportData: ', passportData)
            if (passportData.score) {
                const roundedScore = (Math.round(passportData.score * 100) / 100) + 35
                setScore(roundedScore.toString())
                setStatus(2)
                setChecked(true)
                setAttested(true)
            } else {
                console.log('No score available, please add stamps to your passport and then resubmit.')
                setNoScoreMessage('No score available, please submit your passport after you have added some stamps.')
            }
            setDisabled(false)
        } catch (err) {
            setDisabled(false)
            console.log('error: ', err)
        }
    }

    async function getSigningMessage() {
        try {
            const response = await fetch(SIGNING_MESSAGE_URI, {
                headers
            })
            const json = await response.json()
            return json
        } catch (err) {
            console.log('error: ', err)
        }
    }

    async function submitPassport() {
        setNoScoreMessage('')
        if (!signer) return
        try {
            const { message, nonce } = await getSigningMessage()
            const signature = await signer.signMessage({
                account: signer.account,
                message: message,
            })

            const response = await fetch(SUBMIT_PASSPORT_URI, {
                method: 'POST',
                headers,
                body: JSON.stringify({
                    address,
                    community: SCORER_ID,
                    signature,
                    nonce
                })
            })

            const data = await response.json()
            console.log('data:', data)
            setStatus(1)
            setDisabled(false)
        } catch (err) {
            setDisabled(false)
            console.log('error: ', err)
        }
    }

    return (
        <button
            disabled={checked}
            className="button flex justify-between"
            onClick={() => {
                setDisabled(true)
                if (status === 0)
                    submitPassport()
                else {
                    checkPassport()
                }
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
            <span className={scoreColor()}>{disabled ? "Processing..." : (status === 0 ? "1. Submit your Passport" : (status === 1 ? "2. Check your Passport" : `Your score is: ${score}`))}</span>
            <Image
                className="h-10 w-10 object-contain"
                src={gitcoin}
                alt="gitcoin"
            />
        </button >
    )
}