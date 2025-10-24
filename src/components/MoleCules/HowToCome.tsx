import React from 'react';
import HallMap from '../Atoms/HallMap';
import MapDesc from '../Atoms/MapDesc';
import { HiLocationMarker } from 'react-icons/hi';

export default function HowToCome() {
    return (
        <div
            data-aos='fade-up'
            data-aos-duration='3000'
            className='my-32 mx-10'
        >
            <div className='flex-col items-center text-center justify-center mb-4'>
                <h3 className='italic text-gray-600 font-naum pb-6 mb-6'>
                    LOCATION
                </h3>
                <h3 className='text-xl text-gray-600 font-seoul border-b-2 pb-6 font-bold'>
                    오시는 길
                </h3>
            </div>
            <div className='flex-col items-start mb-6 font-naum'>
                <h2 className='text-md'>수원파티웨딩유</h2>
                <h3 className='text-sm '>
                    경기 수원시 권선구 세화로 218
                </h3>
                <p className='text-sm'>031-297-1000</p>
            </div>
            <div className='flex items-center py-4'>
                <HiLocationMarker className='text-3xl text-neutral-400' />
                <p className='ml-2 font-suite'>수원파티웨딩유</p>
            </div>
            <HallMap />
            <MapDesc />
        </div>
    );
}
