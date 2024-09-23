import React from 'react';
import imagenEmpresaSM from '../assets/trabajo.png';
import imagenEmpresaLG from '../assets/panel.png';
import '../styles.css';
import { MisionText } from './MisionText';
import { Divisor } from './Divisor';

const misionText = [
	{
		mision:
			'Realizar un trabajo de alta calidad, con eficiencia y con respeto por el medioambiente',
	},
	{
		mision:
			'La seguridad de nuestros trabajadores es y será siempre nuestra primera prioridad',
	},
	{
		mision:
			'Buscamos que nuestros clientes obtengan la mayor eficiencia en sus instalaciones a través de la calidad de nuestros servicios',
	},
];

export const Mision = () => {
	return (
		<div className='bg-gray-100 w-full m-auto text-center md:flex-row justify-center items-center md:flex md:w-4/5 my-5 md:my-20 py-5'>
			<img
				src={imagenEmpresaSM}
				srcSet={`${imagenEmpresaSM} 600w, ${imagenEmpresaLG} 1200w`}
				alt='imagen empresa'
				className='mx-auto w-11/12 md:w-1/2 md:h-auto md:object-cover'
			/>

			<div className='md:w-1/2 md:flex flex-col justify-between'>
				<div className='flex items-center justify-center md:h-1/5'>
					<h1 className='text-xl text-lime-500 md:text-4xl mt-5 md:my-10'>
						Quienes Somos
					</h1>
				</div>
				<div className='md:h-4/5'>
					<MisionText texto={misionText[0].mision} />
					<Divisor />
					<MisionText texto={misionText[1].mision} />
					<Divisor />
					<MisionText texto={misionText[2].mision} />
				</div>
			</div>
		</div>
	);
};
