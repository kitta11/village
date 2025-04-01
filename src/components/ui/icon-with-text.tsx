import React from 'react'

interface IconTextProps {
	icon: React.ElementType
	text: string
	href?: string
	ariaLabel?: string
}

export default function IconWithText(props: IconTextProps) {
	const { icon: Icon, text, href, ariaLabel } = props
	return (
		<div className="flex justify-center items-center my-4 text-sm md:justify-start">
			<Icon className="w-6 md:w-8 mr-4 flex-shrink-0" />
			{href ? (
				<a
					className="text-left"
					href={href}
					aria-label={ariaLabel}
					target="_blank"
					rel="noopener noreferrer"
				>
					{text}
				</a>
			) : (
				<p className="text-left">{text}</p>
			)}
		</div>
	)
}
