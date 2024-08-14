import React from 'react';
import imagenEmpresaSM from '../assets/trabajo.png';
import imagenEmpresaLG from '../assets/panel.png';
import '../styles.css';
import { MisionText } from './MisionText';
import { Divisor } from './Divisor';

export const Mision = () => {
	return (
		<div className='bg-gray-100 h-mision w-full m-auto h-96 text-center flex-col justify-center items-center md:flex md:w-4/5 md:flex-row my-5 md:my-20'>
			<img
				src={imagenEmpresaSM}
				srcSet={`${imagenEmpresaSM} 600w, ${imagenEmpresaLG} 1200w`}
				alt='imagen empresa'
				className='mx-auto w-11/12 md:w-1/2 md:h-full md:object-cover'
			/>

			<div className='md:w-1/2 md:flex flex-col justify-between h-full'>
				<div className='flex items-center justify-center md:h-1/5'>
					<h1 className='text-xl text-lime-500 md:text-2xl md:mt-5 my-4'>
						Quienes Somos
					</h1>
				</div>
				<div className='md:h-4/5'>
					<MisionText />
					<Divisor />
					<MisionText />
					<Divisor />
					<MisionText />
				</div>
			</div>
		</div>
	);
};
