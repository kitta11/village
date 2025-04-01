export interface MenuItem {
	id: string
	name: string
	href: string
	children?: MenuItem[]
}
export interface MenuItemProps {
	item: MenuItem
	mobile?: boolean
}
