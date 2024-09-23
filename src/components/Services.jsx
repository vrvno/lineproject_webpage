import React from 'react';
import { Serv } from './Serv';
import fotovoltaico from './../assets/servicios/fotovoltaico.png';
import obras from './../assets/servicios/obras.png';
import renovable from './../assets/servicios/renovable.png';
import pruebas from './../assets/servicios/pruebas.png';

export const Services = () => {
	return (
		<div className='flex flex-row flex-nowrap md:flex-wrap md:justify-center md:w-full overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-8 md:gap-3 mx-7 gap-2'>
			<Serv
				servicio={'Parques Fotovoltaicos'}
				descripcion={'Operación, mantención de plantas foltovoltaicas'}
				imagen={fotovoltaico}
			/>
			<Serv
				servicio={'Energías Renovables'}
				descripcion={
					'Asesorías y ejecución de proyectos de energías renovables (ERNC)'
				}
				imagen={renovable}
			/>
			<Serv
				servicio={'Pruebas Eléctricas'}
				descripcion={
					'Ensayos eléctricos, VLF, mediciones de resistecia, tensión, inspeccción de funcionamiento, entre otros'
				}
				imagen={pruebas}
			/>
			<Serv
				servicio={'Obras Civiles'}
				descripcion={'Desbroces, limpieza de módulos, etc'}
				imagen={obras}
			/>
		</div>
	);
};
