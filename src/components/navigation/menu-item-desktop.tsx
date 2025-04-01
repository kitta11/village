import { MenuItem as MenuItemType, MenuItemProps } from 'types'
import {
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarTrigger,
} from './menubar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuLink = (item: MenuItemType) => {
	const pathname = usePathname()
	const isActive = pathname === item.href
	if (item.href === '') {
		return <span>{item.name}</span>
	}

	return (
		<Link
			href={item.href}
			className={isActive ? 'text-blue-600 font-semibold' : ''}
		>
			{item.name}
		</Link>
	)
}

export default function MenuItem({ item }: MenuItemProps) {
	function renderSubMenuItems() {
		return item.children?.map((subItem) => {
			return (
				<MenubarItem key={subItem.name}>
					<MenuLink {...subItem} />
				</MenubarItem>
			)
		})
	}

	// note: because of the hover issue I may drop this whole shadCN/radix based menu solution
	return (
		<MenubarMenu>
			<div className="group relative">
				<MenubarTrigger className="cursor-pointer">
					<MenuLink {...item} />
				</MenubarTrigger>
				{item.children && (
					<MenubarContent>{renderSubMenuItems()}</MenubarContent>
				)}
			</div>
		</MenubarMenu>
	)
}
