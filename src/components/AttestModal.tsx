import { Dispatch, SetStateAction } from "react";
import { toast } from 'react-toastify';

export const AttestModal = ({ setModal, setDisabled, setAttested, setMint }: {
    setModal: Dispatch<SetStateAction<boolean>>
    setDisabled: Dispatch<SetStateAction<boolean>>
    setAttested: Dispatch<SetStateAction<boolean>>
    setMint: Dispatch<SetStateAction<boolean>>
}) => {
    const notify = () => toast("🦄 Attestation claimed!");

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
                            You need to install Polygon ID on your mobile phone to claim your attestation
                        </h2>
                        <p className="text-sm text-gray-500 px-8"></p>
                    </div>
                    <p className="text-center">Click on the link below to open a new tab with a QR code to claim your attestation</p>
                    <p
                        className=" my-6 cursor-pointer underline text-center"
                        onClick={(e) => {
                            window.open("https://issuer-ui.polygonid.me/credentials/scan-link/c3ae1123-ce12-48e5-8da4-2c1730ec99bc", '_blank', 'noreferrer');
                            e.preventDefault()
                            setModal(false)
                            setDisabled(false)
                            setAttested(false)
                            setMint(true)
                            notify()

                        }}
                    >CLAIM YOUR ATTESTATION</p>
                    When your attestation is claimed you can come back to this site
                    <div className="p-3 mt-2 text-center flex justify-center">
                        <button className="button button-modal"
                            onClick={() => {
                                setDisabled(false)
                                setModal(false)
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};
