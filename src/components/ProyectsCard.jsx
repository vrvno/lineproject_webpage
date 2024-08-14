import React from 'react';
import img from '../assets/trabajo.png';

export const ProyectsCard = ({ nombre }) => {
	return (
		<div className='h-60 w-75 my-4 mx-3 rounded-lg md:m-0 overflow-hidden'>
			<div className='h-4/5 bg-black rounded-t-lg overflow-hidden'>
				<img src={img} alt='' className='w-full h-full object-cover' />
			</div>
			<div className='bg-lime-400 h-1/5 p-1 rounded-b-lg'>{nombre}</div>
		</div>
	);
};
