import { VideoCard } from '@/components/ui/videocard.component'
import { egovVideoContent } from 'data/egovernment-video.content'

export const VideoList: React.FC = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
			{egovVideoContent.map((card) => (
				<VideoCard
					title={card.title}
					text={card.text}
					videoId={card.videoId}
					category={card.category}
					key={card.videoId}
				/>
			))}
		</div>
	)
}
