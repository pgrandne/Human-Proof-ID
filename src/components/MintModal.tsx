import { nft } from "../public";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const MintModal = ({
    setModal,
    tx
}: {
    setModal: Dispatch<SetStateAction<boolean>>
    tx: `0x${string}` | undefined
}) => {
    return (
        <div
            className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
            id="modal-id"
        >
            <div className="absolute bg-black opacity-70 inset-0 z-0"></div>
            <div className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  modal-container modal">
                <div className="">
                    <div className="text-center p-5 flex-auto justify-center">
                        <h2 className="text-xl font-bold py-4 ">
                            Congratulations. You have minted!{" "}
                        </h2>
                        <Image src={nft} className="img-nft rotate" alt="logo" />
                        <p className="text-sm text-gray-500 px-8"></p>
                    </div>
                    <p className="text-center">Congratulations, you are a human!</p>
                    <p className="text-center">Check your transaction on {' '}
                        <a href={`https://mumbai.polygonscan.com/tx/${tx}`} target="_blank" rel="noreferrer" className="underline">polygonscan</a>
                    </p>

                    <div className="p-3 mt-2 text-center flex justify-center">
                        <button className="button button-modal"
                            onClick={() => setModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};