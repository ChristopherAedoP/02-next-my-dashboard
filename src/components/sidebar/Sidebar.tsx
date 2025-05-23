/** @format */

import Image from 'next/image';
import { FiHexagon } from 'react-icons/fi';
import { SidebarMenuItems } from './SidebarMenuItems';
import { IoBrowsersOutline, IoCalculator, IoGameControllerOutline, IoHeartOutline } from 'react-icons/io5';

const menuItems = [
	{
		path: '/dashboard/main',
		icon: <IoBrowsersOutline size={35} />,
		title: 'Dashboard',
		subTitle: 'Visualizacion',
	},
	{
		path: '/dashboard/counter',
		icon: <IoCalculator size={35} />,
		title: 'Counter',
		subTitle: 'Contador Client Side',
	},
	{
		path: '/dashboard/pokemons',
		icon: <IoGameControllerOutline size={35} />,
		title: 'Pokemons',
		subTitle: 'Generacion Estatica',
	},
	{
		path: '/dashboard/favorites',
		icon: <IoHeartOutline size={35} className='text-red-500' />,
		title: 'Favoritos',
		subTitle: 'Global State',
	},
];

export const Sidebar = () => {
	return (
		<div
			style={{ width: '350px' }}
			id="menu"
			className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
			<div id="logo" className="my-4 px-6">
				<h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
					<FiHexagon className="mr-2" />
					<span>Dash</span>
					<span className="text-blue-500">8</span>.
				</h1>
				<p className="text-slate-500 text-sm">Dashboard Next Examples</p>
			</div>
			<div id="profile" className="px-6 py-10">
				<p className="text-slate-500">Welcome back,</p>
				<a href="#" className="inline-flex space-x-2 items-center">
					<span>
						<Image
							className="rounded-full w-8 h-8"
							src={'/foto-perfil.jpg'}
							alt=""
							width={50}
							height={50}
						/>
					</span>
					<span className="text-sm md:text-base font-bold">
						Christopher Aedo
					</span>
				</a>
			</div>
			<div id="nav" className="w-full px-6">
				{menuItems.map((item) => (
					<SidebarMenuItems key={item.path} {...item} />
				))}
			</div>
		</div>
	);
}
