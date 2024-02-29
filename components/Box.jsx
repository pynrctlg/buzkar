
import { TiWeatherShower } from "react-icons/ti";
import { FaRegSun } from "react-icons/fa";
import { FaSignal } from "react-icons/fa6";
import { HiMiniSignal } from "react-icons/hi2";
import { ImSortNumbericDesc } from "react-icons/im";
import { IoWater, IoVideocamOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaThermometerHalf } from "react-icons/fa";
import { getData } from "@/app/api/items/data";
export default async function Box() {

    const data = await getData();
    return (
        <div className="max-w-[800px] lg:w-full grid grid-cols-1 lg:grid-cols-3 gap-4 m-auto mt-8 w-[90%]">
            <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                <TiWeatherShower className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                <div className="flex flex-col gap-1 z-10">
                    <p className="text-xl">Hava Durumu</p>
                    <p className="flex gap-1 items-center justify-center text-xl"><FaRegSun className="text-yellow-500" />{data.counter} °C</p>
                </div>
            </div>
            <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                <FaSignal className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                <div className="flex flex-col gap-1 z-10">
                    <p className="text-xl">Anlık Sinyal Seviyesi</p>
                    <p className="flex gap-1 items-center justify-center text-xl">{data.limit} V</p>
                </div>
            </div>
            <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                <HiMiniSignal className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                <div className="flex flex-col gap-1 z-10">
                    <p className="text-xl">Sinyal Referans Değeri</p>
                    <div className="flex mt-2 gap-2 justify-center">
                        <input type="text" id="limit" className="w-20 border h-[40px] border-solid border-black rounded-md" />
                        <button id="btnKaydet" className="h-[40px] rounded-md bg-blue-400 px-4 text-white">Kaydet</button>
                    </div>
                    <p className="flex gap-1 items-center justify-center text-xl"></p>
                </div>
            </div>
            <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                <ImSortNumbericDesc className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                <div className="flex flex-col gap-1 z-10">
                    <p className="text-xl">Sistem Çalışma Sayısı</p>
                    <p className="flex gap-1 items-center justify-center text-xl">{data.valf_state}</p>
                </div>
            </div>
            <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                <IoWater className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                <div className="flex flex-col gap-1 z-10">
                    <p className="text-xl">Hava Kontol Sistem</p>
                    <p className="flex gap-1 items-center justify-center text-xl">{data.current_signal}</p>
                </div>
            </div>
            <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                <GrStatusGood className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                <div className="flex flex-col gap-1 z-10">
                    <p className="text-xl">Bar Durumu</p>
                    <p className="flex gap-1 items-center justify-center text-xl">
                        {
                            data.temp_state === 0 ? 'Dolu' : 'Bos'
                        }
                    </p>
                </div>
            </div>
            <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                <IoVideocamOutline className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                <div className="flex flex-col gap-1 z-10">
                    <p className="text-xl">Dış Kamera</p>
                    <button id="kameraAc" className="h-[40px] rounded-md bg-blue-400 px-4 text-white">Kamera Aç</button>
                </div>
            </div>
            <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                <BsFillLightbulbFill className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                <div className="flex flex-col gap-1 z-10">
                    <p className="text-xl"><BsFillLightbulbFill className="text-4xl m-auto mb-3 text-red-500" /></p>
                    <button id="kameraAc" className="h-[40px] rounded-md bg-blue-400 px-4 text-white">Kamera Aç</button>
                </div>
            </div>
            <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                <FaThermometerHalf className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                <div className="flex flex-col gap-1 z-10">
                    <p className="text-xl"><BsFillLightbulbFill className={`text-4xl m-auto mb-3 ${data.res_state === 0 ? 'text-green-500' : 'text-red-500'}`} /></p>
                    <p className="text-xl">Resizdans</p>
                </div>
            </div>
        </div>
    )
}