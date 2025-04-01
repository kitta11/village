import { PageSection } from '@/components/ui/page-section.component'
import React from 'react'

export default function Home() {
	return (
		<>
			<PageSection title="Aktualitások">
				<div className="bg-neutral-100 p-4 rounded-lg">
					<h2>Column 1</h2>
					<p className="text-neutral-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
						odio. Praesent libero. Sed cursus ante dapibus diam.
					</p>
				</div>

				<div className="bg-neutral-100 p-4 rounded-lg">
					<h2>Column 2</h2>
					<p className="text-neutral-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
						odio. Praesent libero. Sed cursus ante dapibus diam.
					</p>
				</div>

				<div className="bg-neutral-100 p-4 rounded-lg">
					<h2>Column 3</h2>
					<p className="text-neutral-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
						odio. Praesent libero. Sed cursus ante dapibus diam.
					</p>
				</div>

				<div className="bg-neutral-100 p-4 rounded-lg">
					<h2>Column 4</h2>
					<p className="text-neutral-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
						odio. Praesent libero. Sed cursus ante dapibus diam.
					</p>
				</div>
			</PageSection>
			<PageSection title="Csak valami"></PageSection>
		</>
	)
}
