import React from 'react'

interface PageSectionProps extends React.PropsWithChildren<unknown> {
	title?: string
	className?: string
}
export const PageSection: React.FC<PageSectionProps> = ({
	title,
	children,
	className = '',
}) => {
	return (
		<section>
			{title && <h1 className="text-3xl font-bold my-8">{title}</h1>}
			<div
				className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}
			>
				{children}
			</div>
		</section>
	)
}
