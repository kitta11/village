import { StaticImageData } from 'next/image'

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

export interface VideoCardItem {
	title: string
	text: string
	videoId: string // YouTube video ID
	category: 'egov' | 'tourism'
}

export interface PersonCardProps {
	name: string
	position: string
	email: string
	phone?: string
	description?: string
	imageSrc?: string | StaticImageData
}
