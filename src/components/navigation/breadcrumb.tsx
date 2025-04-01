'use client'
import { getMenuItemById } from 'data/menu.content'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface BreadCrumbItemProps {
	step: string
	isCurrentStep: boolean
}
const BreadCrumbItem = ({ step, isCurrentStep }: BreadCrumbItemProps) => {
	const menuItem = getMenuItemById(step)

	if (!menuItem) return null

	const isClickable = menuItem.href !== '' && !isCurrentStep

	return (
		<li className="flex items-center">
			{isClickable ? (
				<Link
					href={menuItem.href}
					className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
				>
					{menuItem.name}
				</Link>
			) : (
				<span className="text-neutral-500 dark:text-neutral-400">
					{menuItem.name}
				</span>
			)}
			{!isCurrentStep && (
				<span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
			)}
		</li>
	)
}

export default function Breadcrumb() {
	const pathName = usePathname()

	if (pathName === '/') {
		return (
			<nav className="w-full rounded-md">
				<ol className="list-reset flex">
					<BreadCrumbItem key="home" step="" isCurrentStep={true} />
				</ol>
			</nav>
		)
	}

	const pathElements =
		pathName === '/' ? [] : pathName.split('/').filter(Boolean)

	return (
		<nav className="w-full rounded-md p-8">
			<ol className="list-reset flex">
				<BreadCrumbItem
					key="home"
					step="home"
					isCurrentStep={pathElements.length === 0}
				/>
				{pathElements.map((step, index) => (
					<BreadCrumbItem
						key={step}
						step={step}
						isCurrentStep={index === pathElements.length - 1}
					/>
				))}
			</ol>
		</nav>
	)
}
