import Image, { StaticImageData } from 'next/image'

interface ImageTextSectionProps {
	imageSrc: string | StaticImageData
	imageAlt: string
	title: string
	text: string
	reverse?: boolean
	backgroundColor?: string
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
	imageSrc,
	imageAlt,
	title,
	text,
	reverse = false,
	backgroundColor = 'bg-white',
}) => {
	return (
		<section className={`my-12 px-4 ${backgroundColor}`}>
			<div
				className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
					reverse ? 'md:grid-cols-2-reverse' : ''
				}`}
			>
				<div
					className={`flex justify-center ${reverse ? 'md:order-last' : ''}`}
				>
					<Image
						src={imageSrc}
						alt={imageAlt}
						layout="responsive" // Automatically adjusts based on container
						width={600} // Base width (in ratio to height)
						height={400} // Base height (aspect ratio is maintained)
						className="rounded-lg shadow-lg"
					/>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-semibold">{title}</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300">{text}</p>
				</div>
			</div>
		</section>
	)
}

export default ImageTextSection
