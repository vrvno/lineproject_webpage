import React from 'react';

export const ContactForm = () => {
	return (
		<div>
			<section className='bg-white dark:bg-gray-900' id='contact'>
				<div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
					<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>
						Contáctanos
					</h2>
					<p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
						Llena este formulario y nos pondremos en contacto contigo.
					</p>
					<form
						action='https://formspree.io/f/mdknrgpq'
						method='POST'
						className='space-y-8'>
						<div>
							<label
								htmlFor='email'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
								Tu correo
							</label>
							<input
								type='email'
								id='email'
								name='email'
								className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
								placeholder='Correo'
								required
							/>
						</div>
						<div>
							<label
								htmlFor='subject'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
								Asunto
							</label>
							<input
								type='text'
								id='subject'
								name='subject'
								className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
								placeholder='Déjanos saber que podemos hacer por ti'
								required
							/>
						</div>
						<div className='sm:col-span-2'>
							<label
								htmlFor='message'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
								Mensaje
							</label>
							<textarea
								id='message'
								name='message'
								rows='6'
								className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
								placeholder='Deja un mensaje...'></textarea>
						</div>
						<div className='flex justify-center'>
							<button
								type='submit'
								className='py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-lime-400 sm:w-fit hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-lime-500 dark:hover:bg-lime-700 dark:focus:ring-lime-800'>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};
