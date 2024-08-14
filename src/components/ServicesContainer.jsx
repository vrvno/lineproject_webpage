import React from 'react';
import background from '../assets/solarfield-background.png';
import { ServiceCard } from './ServiceCard';
import flashicon from '../assets/flash.png';

export const ServicesContainer = () => {
	return (
		<div className='my-10'>
			<h1 id='service-h1' className='text-center text-white text-2xl py-5 '>
				{' '}
				Servicios
			</h1>
			<div
				className='bg-cover bg-center h-96 md:flex flex-row md:justify-evenly md:py-10'
				style={{ backgroundImage: `url(${background})` }}>
				<ServiceCard nombre='Servicio 1' icono={flashicon} />
				<ServiceCard nombre='Servicio 2' icono={flashicon} />
				<ServiceCard nombre='Servicio 3' icono={flashicon} />
				<ServiceCard nombre='Servicio 4' icono={flashicon} />
				<ServiceCard nombre='Servicio 5' icono={flashicon} />
				<ServiceCard nombre='Servicio 6' className='hidden md:block' />
			</div>
		</div>
	);
};
