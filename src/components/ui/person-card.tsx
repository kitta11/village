import Image from 'next/image'
import { PersonCardProps } from 'types'

export const PersonCard: React.FC<PersonCardProps> = ({
	name,
	position,
	email,
	phone,
	description,
	imageSrc,
}) => {
	return (
		<div className="flex flex-col items-center p-4 border rounded shadow-sm bg-white text-center">
			{imageSrc && (
				<Image
					src={imageSrc}
					alt={`Photo of ${name}`}
					layout="responsive"
					width={100}
					height={200}
					className="object-cover mb-4 max-w-100"
				/>
			)}
			<h3 className="text-lg font-bold">{name}</h3>
			<p className="text-sm text-gray-600">{position}</p>
			<a
				href={`mailto:${email}`}
				className="text-blue-600 hover:underline text-sm"
			>
				{email}
			</a>
			{phone && (
				<a
					href={`tel:${phone}`}
					className="text-blue-600 hover:underline text-sm"
				>
					{phone}
				</a>
			)}
			{description && (
				<p className="text-sm text-gray-700 mt-2">{description}</p>
			)}
		</div>
	)
}
