'use client'

import { Passport } from "./Passport"
import { PolygonId } from "./PolygonId"
import { Mint } from './Mint'
import { useState } from "react"

export const Card = () => {
    const [score, setScore] = useState('')
    const [checked, setChecked] = useState(false)
    const [attested, setAttested] = useState(false)
    const [mint, setMint] = useState(false)

    return (
        <div className="card flex flex-col gap-5">
            <p className="p-4 text-lg text-indigo-500 font-semibold text-center">Create a proof of your humanity</p>
            <Passport score={score} setScore={setScore} checked={checked} setChecked={setChecked} setAttested={setAttested} />
            <PolygonId attested={attested} setAttested={setAttested} setMint={setMint} score={score} />
            <Mint mint={mint} score={score} setMint={setMint} />
        </div>
    )
}