// import {BsEye} from "react-icons/bs";
// import {FiPlusCircle} from "react-icons/fi";
// import {useSelector} from "react-redux";
// import {NavLink} from "react-router-dom";
// import {Worker, Viewer} from "@react-pdf-viewer/core";

// // import { Worker, Viewer } from '@react-pdf-viewer/core';

// const ProofOfPaymentViewer = ({url, fileType}) => {
//     if (fileType === "pdf") {
//         return (
//             <div style={{width: "100%", height: "500px"}}>
//                 <Worker
//                     workerUrl={`https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.min.js`}
//                 >
//                     <Viewer fileUrl={url} />
//                 </Worker>
//             </div>
//         );
//     } else if (fileType === "image") {
//         return <img src={url} alt="Proof of Payment" />;
//     } else {
//         // Handle other file types as needed
//         return <p>Unsupported file type</p>;
//     }
// };

// const Transactions = () => {
//     const transaction = useSelector(
//         (state: any) => state.expressTrade.expressTrade.transactions
//     );
//     console.log(transaction);

//     const openProofOfPayment = (url) => {
//         // Infer file type based on the file extension
//         const fileType = url.endsWith(".pdf") ? "pdf" : "image";

//         // Open different types of content based on the file type
//         switch (fileType) {
//             case "pdf":
//                 // Open PDF in a new tab
//                 window.open(url, "_blank");
//                 break;
//             case "image":
//                 // Open image in a new tab
//                 window.open(url, "_blank");
//                 break;
//             // Add more cases for other file types if needed
//             default:
//                 break;
//         }
//     };

//     return (
//         <>
//             <div className="w-full h-max">
//                 <div className="w-full h-max flex flex-col px-10 phone:px-4 py-8 gap-3">
//                     <p className="text-[rgb(54,74,99)] font-semibold text-2xl">
//                         Transactions
//                     </p>
//                     {transaction?.length > 0 ? (
//                         <>
//                             <div className="w-full h-max border border-gray-200 bg-white rounded overflow-x-auto">
//                                 <div className="w-max h-10 border-t border-t-gray-300 pl-6 flex gap-4">
//                                     <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                         Reference
//                                     </div>
//                                     <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                         Mode
//                                     </div>
//                                     <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                         Amount
//                                     </div>
//                                     <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                         Status
//                                     </div>
//                                     <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                         Date
//                                     </div>
//                                     <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                         Reciept
//                                     </div>
//                                 </div>
//                                 <div className="w-full h-max flex flex-col">
//                                     {transaction.map(
//                                         (item: any, index: any) => (
//                                             <div
//                                                 className="w-max h-10 phone:h-20 border-t border-t-gray-300 pl-6 flex gap-4"
//                                                 key={index}
//                                             >
//                                                 <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                                     #
//                                                     {item?._id
//                                                         ?.slice(-10)
//                                                         .toUpperCase()}
//                                                 </div>
//                                                 <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                                     {item?.mode}
//                                                 </div>
//                                                 <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                                     ${item?.amount}
//                                                 </div>

//                                                 <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] ">
//                                                     <p className="w-max h-max px-3 py-1 phone:py-1 text-white bg-yellow-400 rounded-full flex items-center justify-center">
//                                                         {item?.status}
//                                                     </p>
//                                                 </div>
//                                                 <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                                     {item?.date}
//                                                 </div>
//                                                 <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
//                                                     <BsEye
//                                                         className="w-5 h-5 cursor-pointer"
//                                                         onClick={() =>
//                                                             openProofOfPayment(
//                                                                 item?.proofOfPayment
//                                                             )
//                                                         }
//                                                     />
//                                                     <ProofOfPaymentViewer
//                                                         url={
//                                                             item?.proofOfPayment
//                                                         }
//                                                         fileType={
//                                                             item?.proofOfPayment.endsWith(
//                                                                 ".pdf"
//                                                             )
//                                                                 ? "pdf"
//                                                                 : "image"
//                                                         }
//                                                     />
//                                                 </div>
//                                             </div>
//                                         )
//                                     )}
//                                 </div>
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <div className="w-full h-max border border-[#cd9f0c] bg-[#fef7e2] rounded">
//                                 <div className="w-full h-24 flex flex-col items-center justify-center gap-2">
//                                     <p className="text-[#cd9f0c]">
//                                         You have not made any transactions
//                                     </p>
//                                     <NavLink to={"/user/invest"}>
//                                         <button className="w-max h-max flex items-center gap-2 bg-[#e14954] rounded text-white px-6 py-2 text-sm font-semibold">
//                                             <FiPlusCircle />
//                                             Deposit Now
//                                         </button>
//                                     </NavLink>
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Transactions;

import {BsEye} from "react-icons/bs";
import {FiPlusCircle} from "react-icons/fi";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const Transactions = () => {
    const transaction = useSelector(
        (state) => state.expressTrade.expressTrade.transactions
    );
    console.log(transaction);

    const openProofOfPayment = (url) => {
        window.open(url, "_blank");
    };

    return (
        <>
            <div className="w-full h-max">
                <div className="w-full h-max flex flex-col px-10 phone:px-4 py-8 gap-3">
                    <p className="text-[rgb(54,74,99)] font-semibold text-2xl">
                        Transactions
                    </p>
                    {transaction?.length > 0 ? (
                        <>
                            <div className="w-full h-max border border-gray-200 bg-white rounded overflow-x-auto">
                                <div className="w-max h-10 border-t border-t-gray-300 pl-6 flex gap-4">
                                    <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                        Reference
                                    </div>
                                    <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                        Mode
                                    </div>
                                    <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                        Amount
                                    </div>
                                    <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                        Status
                                    </div>
                                    <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                        Date
                                    </div>
                                    <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                        Receipt
                                    </div>
                                </div>
                                <div className="w-full h-max flex flex-col">
                                    {transaction.map((item, index) => (
                                        <div
                                            className="w-max h-10 phone:h-20 border-t border-t-gray-300 pl-6 flex gap-4"
                                            key={index}
                                        >
                                            <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                                #
                                                {item?._id
                                                    ?.slice(-10)
                                                    .toUpperCase()}
                                            </div>
                                            <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                                {item?.mode}
                                            </div>
                                            <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                                ${item?.amount}
                                            </div>
                                            <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] ">
                                                <p
                                                    className={`w-max h-max px-3 py-1 phone:py-1 text-white rounded-full flex items-center justify-center ${
                                                        item?.status ===
                                                        "Confirmed"
                                                            ? "bg-green-400"
                                                            : item?.status ===
                                                              "Pending"
                                                            ? "bg-yellow-400"
                                                            : item?.status ===
                                                              "Failed"
                                                            ? "bg-red-400"
                                                            : ""
                                                    }`}
                                                >
                                                    {item?.status}
                                                </p>
                                            </div>
                                            <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                                {item?.date}
                                            </div>
                                            <div className="w-[10.5rem] h-full flex items-center text-xs text-[rgb(128,148,174)] font-medium">
                                                <BsEye
                                                    className="w-5 h-5 cursor-pointer"
                                                    onClick={() =>
                                                        openProofOfPayment(
                                                            item?.proofOfPayment
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="w-full h-max border border-[#cd9f0c] bg-[#fef7e2] rounded">
                                <div className="w-full h-24 flex flex-col items-center justify-center gap-2">
                                    <p className="text-[#cd9f0c]">
                                        You have not made any transactions
                                    </p>
                                    <NavLink to={"/user/invest"}>
                                        <button className="w-max h-max flex items-center gap-2 bg-[#e14954] rounded text-white px-6 py-2 text-sm font-semibold">
                                            <FiPlusCircle />
                                            Deposit Now
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Transactions;
