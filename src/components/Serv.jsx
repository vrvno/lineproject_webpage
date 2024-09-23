import React from 'react';
import antena2 from '../assets/antena2.png';

export const Serv = ({ servicio, descripcion, imagen }) => {
	return (
		<div className='w-56 md:w-1/6 flex-shrink-0 mb-5 overflow-hidden'>
			<img
				src={imagen}
				alt='Servicio'
				className='w-full h-64 md:h-80  transition-transform duration-300 ease-in-out hover:scale-105'
			/>
			<h2 className='text-xl font-semibold text-lime-400 my-5  ml-1 mr-3'>
				{servicio}
			</h2>
			<p className=' ml-1 mr-3'>{descripcion}</p>
		</div>
	);
};
