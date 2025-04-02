import { MenuItem } from 'types'

function flattenMenu(items: MenuItem[]): MenuItem[] {
	return items.reduce(
		(acc, { children, ...item }) =>
			acc.concat(item, children ? flattenMenu(children) : []),
		[] as MenuItem[]
	)
}

export function getMenuItemById(id: string): MenuItem | undefined {
	if (id === 'home') {
		return {
			href: '/',
			name: 'Főoldal',
			id: 'home',
		}
	}
	return flattenMenu(menuItems).find((item) => item.id === id)
}

export function getDefaultOpenMobileMenuName(href: string): string | undefined {
	const activeItem = flattenMenu(menuItems).find((item) => item.href === href)
	return menuItems.find((item) =>
		item.children?.some((subitem) => subitem.id === activeItem?.id)
	)?.id
}

export const menuItems: MenuItem[] = [
	{
		name: 'A faluról',
		id: 'falu',
		href: '',
		children: [
			{ id: 'megkozelites', name: 'Megközelítése', href: '/falu/megkozelites' },
			{ id: 'tortenet', name: 'Története', href: '/falu/tortenet' },
			{ id: 'kapcsolat', name: 'Kapcsolat', href: '/falu/kapcsolat' },
		],
	},
	{
		id: 'onkormanyzat',
		name: 'Önkormányzat',
		href: '',
		children: [
			{
				id: 'polgarmesterihivatal',
				name: 'Polgármesteri Hivatal',
				href: '/onkormanyzat/polgarmesterihivatal',
			},
			{
				id: 'kozoshivatal',
				name: 'Kővágóőrsi Közös Hivatal',
				href: '/onkormanyzat/kozoshivatal',
			},
			{
				id: 'eugyintezes',
				name: 'eÜgyintézés',
				href: '/onkormanyzat/eugyintezes',
			},
			{
				id: 'intezmenyek',
				name: 'Intézmények, szervezetek',
				href: '/onkormanyzat/intezmenyek',
			},
		],
	},
	{ id: 'programok', name: 'Programok', href: '/programok' },
	{ id: 'szallasok', name: 'Szállások', href: '/szallasok' },
	{
		id: 'dokumentumok',
		name: 'Dokumentumok',
		href: '',
		children: [
			{
				id: 'hatarozatok',
				name: 'Határozatok',
				href: '/dokumentumok/hatarozatok',
			},
			{
				id: 'szabalyzatok',
				name: 'Helyi szabályzatok',
				href: '/dokumentumok/szabalyzatok',
			},
			{
				id: 'jegyzokonyvek',
				name: 'Jegyzőkonyvek',
				href: '/dokumentumok/jegyzokonyvek',
			},
		],
	},
]
