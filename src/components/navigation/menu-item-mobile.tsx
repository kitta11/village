import { MenuItem as MenuItemType, MenuItemProps } from 'types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../ui/accordion'

const MenuLink = (item: MenuItemType) => {
	const pathname = usePathname()
	const isActive = pathname === item.href
	if (item.href === null) {
		return <span>{item.name}</span>
	}

	return (
		<Link
			href={item.href}
			className={isActive ? 'text-blue-600 text-lg font-semibold' : ''}
		>
			{item.name}
		</Link>
	)
}

export default function MenuItemMobile({ item }: MenuItemProps) {
	const pathname = usePathname()
	const isActive = pathname === item.href
	if (item.children) {
		return (
			<AccordionItem value={item.id} data-state={isActive}>
				<AccordionTrigger>{item.name}</AccordionTrigger>

				{item.children.map((subitem) => (
					<AccordionContent key={subitem.id} className="ml-2">
						<MenuLink {...subitem} />
					</AccordionContent>
				))}
			</AccordionItem>
		)
	}
	return (
		<AccordionItem value={item.id}>
			<div
				className={
					'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-8 rounded-md py-6 text-left transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180'
				}
			>
				<MenuLink {...item} />
			</div>
		</AccordionItem>
	)
}
