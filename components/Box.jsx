'use client'
import { TiWeatherShower } from "react-icons/ti";
import { FaSignal } from "react-icons/fa6";
import { HiMiniSignal } from "react-icons/hi2";
import { ImSortNumbericDesc } from "react-icons/im";
import { IoWater, IoVideocamOutline } from "react-icons/io5";
import { GrStatusGood } from "react-icons/gr";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaThermometerHalf } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import Iframe from "./Iframe";
export default function Box() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const [sinyal, setSinyal] = useState()
    const [iframeDiv, setiframeDiv] = useState(false)
    const [data, setData] = useState({});
    const [hava, setHava] = useState({});

    const sinyalDeg = async () => {
        const response = fetch("http://localhost:3000/api/sinyal",{
            method:POST,
            body: JSON.stringify({sinyal}),
            headers:{
                'Content-type':'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
    }
    const vurusFn = () => {

        fetch("http://localhost:3000/api/vurus")
            .then(res => res.json())
            .then(_data => {
                data.val_state = _data.valf_state;
                setData(data);
            })
            .catch(err => {
                console.log(err);
            });

    };

    const gData = () => {
        fetch("http://localhost:3000/api/data")
            .then(res => res.json())
            .then(_data => {
                setData(_data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const gTemp = () => {
        fetch("https://api.weatherapi.com/v1/current.json?key=4ad1fe8f77124e6b8ea90836242302&q=40.603643,31.328984", { method: 'GET' })
            .then(res => res.json())
            .then(_data => {
                let temp_c = _data.current.feelslike_c;
                let temp_c_img = _data.current.condition.icon;
                setHava({ temp_c: temp_c, temp_c_img: temp_c_img });
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {

        gData();
        gTemp();

        const dataInterval = setInterval(() => {

            gData();

        }, 2000);


        const tempInterval = setInterval(() => {

            gTemp();

        }, 10000);
        return () => {
            clearInterval(dataInterval);
            clearInterval(tempInterval);
        }
    }, [])


    return (
        <div>
            <Iframe setiframeDiv={setiframeDiv} iframeDiv={iframeDiv} />
            <div className="max-w-[800px] lg:w-full grid grid-cols-1 lg:grid-cols-3 gap-4 m-auto mt-8 w-[90%]">
                <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                    <TiWeatherShower className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                    <div className="flex flex-col gap-1 z-10">
                        <p className="text-xl">Hava Durumu</p>
                        <p className="flex gap-1 items-center justify-center text-xl">
                            {/* <FaRegSun className="text-yellow-500" /> */}
                            {/* <img src={hava.temp_c_img} /> */}
                            {hava.temp_c} °C</p>
                    </div>
                </div>
                <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                    <FaSignal className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                    <div className="flex flex-col gap-1 z-10">
                        <p className="text-xl">Anlık Sinyal Seviyesi</p>
                        <p className="flex gap-1 items-center justify-center text-xl">{data.current_signal} V</p>
                    </div>
                </div>
                <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                    <HiMiniSignal className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                    <div className="flex flex-col gap-1 z-10">
                        <p className="text-xl">Sinyal Referans Değeri</p>
                        <div className="flex mt-2 gap-2 justify-center">
                            <input type="text" onChange={(e) => setSinyal(e.target.value)} value={data.limit} className="w-20 border h-[40px] border-solid border-black rounded-md" />
                            <button id="btnKaydet" onClick={sinyalDeg} className="h-[40px] rounded-md bg-blue-400 px-4 text-white">Kaydet</button>
                        </div>
                        <p className="flex gap-1 items-center justify-center text-xl"></p>
                    </div>
                </div>
                <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                    <ImSortNumbericDesc className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                    <div className="flex flex-col gap-1 z-10">
                        <p className="text-xl">Sistem Çalışma Sayısı</p>
                        <p className="flex gap-1 items-center justify-center text-xl">{data.counter}</p>
                    </div>
                </div>
                <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                    <IoWater className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                    <div className="flex flex-col gap-1 z-10">
                        <p className="text-xl">Hava Kontol Sistem</p>
                        <p className="flex gap-1 items-center justify-center text-xl">{data.temp_state == 1 ? "Açık" : "Kapalı"}</p>
                    </div>
                </div>
                <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                    <GrStatusGood className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                    <div className="flex flex-col gap-1 z-10">
                        <p className="text-xl">Bar Durumu</p>
                        <p className="flex gap-1 items-center justify-center text-xl">
                            {
                                data.bar_state === 0 ? 'Dolu' : 'Bos'
                            }
                        </p>
                    </div>
                </div>
                <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                    <IoVideocamOutline className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                    <div className="flex flex-col gap-1 z-10">
                        <p className="text-xl">Dış Kamera</p>
                        <button onClick={() => (setiframeDiv(true), scrollToTop())} className="h-[40px] rounded-md bg-blue-400 px-4 text-white" scroll={true}>Kamera Aç</button>
                    </div>
                </div>
                <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                    <BsFillLightbulbFill className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                    <div className="flex flex-col gap-1 z-10">
                        <p className="text-xl"><BsFillLightbulbFill className={`text-4xl m-auto mb-3 ${data.valf_state === 1 ? 'text-green-500' : 'text-red-500'}`} /></p>
                        <button id="vurusYap" onClick={vurusFn} className="h-[40px] rounded-md bg-blue-400 px-4 text-white">Vuruş Yap</button>
                    </div>
                </div>
                <div className="relative bg-white w-full min-h-[200px] overflow-hidden flex items-center justify-center rounded-3xl shadow-md">
                    <FaThermometerHalf className="absolute top-0 text-[12rem] left-[-50px] text-blue-400 opacity-15 " />
                    <div className="flex flex-col gap-1 z-10">
                        <p className="text-xl"><BsFillLightbulbFill className={`text-4xl m-auto mb-3 ${data.res_state === 1 ? 'text-green-500' : 'text-red-500'}`} /></p>
                        <p className="text-xl">Resizdans</p>
                    </div>
                </div>
            </div>
        </div>
    )
}