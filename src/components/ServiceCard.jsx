import React from 'react';

export const ServiceCard = ({ nombre, icono, className }) => {
	return (
		<div
			className={`w-full h-1/5 flex justify-center items-center md:h-full md:w-52 md:shadow-xl ${className}`}>
			<div className='bg-gray-200 h-3/4 w-11/12 flex items-center rounded-xl md:flex-col md:h-full'>
				<div className='w-1/4 h-full py-3 px-4 md:w-full md:h-2/3'>
					{icono && (
						<img
							src={icono}
							alt='icono'
							className='w-full h-full rounded-full md:py-10 md:px-7'
						/>
					)}
				</div>
				<div className='text-center w-3/4 md:w-full md:h-1/3 flex items-center justify-center md:text-lg md:pb-5'>
					{nombre}
				</div>
			</div>
		</div>
	);
};
