import { IoCloseCircle } from "react-icons/io5";
export default function Iframe({ iframeDiv, setiframeDiv }) {
    return (
        <div className={`max-w-[800px] lg:w-full m-auto mt-8 w-[90%] relative ${iframeDiv === true ? 'block' : 'hidden'}`}>
            <IoCloseCircle className="absolute top-0 right-0 z-10 text-white text-3xl cursor-pointer" onClick={() => (setiframeDiv(false))} />
            {
                iframeDiv === true && <iframe className="w-[320px] h-[256px] m-auto rounded-xl" src="https://kamera.buzkar.keenetic.pro" ></iframe>
            }
            

        </div>
    )
}