import React from 'react';
import { ProyectsCard } from './ProyectsCard';

export const ProyectContainer = () => {
	return (
		<div className='text-center flex flex-wrap items-center justify-center md:flex-row md:w-4/5 md:m-auto md:gap-10 rounded-lg my-5 md:my-10'>
			<h1 className='w-full text-xl md:text-2xl'>Proyectos</h1>
			<ProyectsCard nombre='proyecto 1' />
			<ProyectsCard nombre='proyecto 2' />
			<ProyectsCard nombre='proyecto 3' />
			<ProyectsCard nombre='proyecto 4' />
			<ProyectsCard nombre='proyecto 5' />
			<ProyectsCard nombre='proyecto 6' />
		</div>
	);
};
