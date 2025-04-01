import { VideoCardItem } from 'types'

export const VideoCard: React.FC<VideoCardItem> = ({
	title,
	text,
	videoId,
}) => {
	return (
		<div className="flex flex-col gap-2">
			<h3>{title}</h3>
			<p>{text}</p>
			<div className="relative w-full aspect-video">
				<iframe
					className="absolute top-0 left-0 w-full h-full"
					src={`https://www.youtube.com/embed/${videoId}`}
					title={title}
					allowFullScreen
				></iframe>
			</div>
		</div>
	)
}
