'use client'
import { useState } from 'react'
import { Menu } from 'lucide-react' // Hamburger icon
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import MenuItem from './menu-item-desktop'
import { getDefaultOpenMobileMenuName, menuItems } from 'data/menu.content'
import { Menubar } from './menubar'
import MenuItemMobile from './menu-item-mobile'
import { useMediaQuery } from 'hooks/use-media-query'
import { Accordion } from '@/components/ui/accordion'
import { usePathname } from 'next/navigation'

export default function ResponsiveMenu() {
	const isDesktop = useMediaQuery('(min-width: 768px)')
	const pathname = usePathname()

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<nav>
			{/* Desktop Menu (md+) */}
			<Menubar className="hidden md:flex items-center">
				{menuItems.map((item) => (
					<MenuItem key={item.name} item={item} />
				))}
			</Menubar>

			{/* Mobile Menu (md-) */}

			{!isDesktop && (
				<div className="md:hidden">
					<Drawer
						direction="right"
						open={mobileMenuOpen}
						onClose={() => setMobileMenuOpen(false)}
						onOpenChange={(open) => setMobileMenuOpen(open)}
					>
						<DrawerTrigger className="flex">
							<span className="mr-2 text-lg">MENÜ</span>
							<Menu className="w-6 h-6" />
						</DrawerTrigger>
						<DrawerContent className="text-lg ">
							<Accordion
								type="single"
								collapsible
								defaultValue={getDefaultOpenMobileMenuName(pathname)}
							>
								{menuItems.map((item) => (
									<MenuItemMobile key={item.id} item={item} />
								))}
							</Accordion>
						</DrawerContent>
					</Drawer>
				</div>
			)}
		</nav>
	)
}
