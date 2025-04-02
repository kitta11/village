import teamimage from '@/assets/kepviselo-testulet.jpg'
import Image from 'next/image'
import GovTeamList from './gov-team-list'
import { PersonCard } from '@/components/ui/person-card'

export default function LocalGovernmentPage() {
	return (
		<div>
			<h1>Szentbékkálla Polgármesteri Hivatal</h1>
			<h2>Hivatal elérhetősége és a fogadóórák idöpontjai </h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="bg-neutral-100 p-4 rounded">
					<h3>Szentbékkálla polgármesteri hivatalának címe:</h3>
					<p>8281 Szentbékkálla, Kossuth Lajos u.</p>
					<p>Email cím: onkormanyzat@szentbekkalla.hu</p>
				</div>

				<div className="bg-neutral-100 p-4 rounded-lg">
					<h3>Fogadóórák: </h3>
					<p>Szerda: 16:00 - 17:00 (polgármesteri fogadóóra)</p>
					<p>
						Csütörtök 8:00 - 9:00 (polgármesteri és közös hivatali fogadóóra)
					</p>
					<p>Péntek: 16:00 - 17:00 (polgármesteri fogadóóra)</p>
				</div>
			</div>

			<h2>Képviselőtestület</h2>
			<Image
				src={teamimage}
				alt="KÉPVISELŐTESTÜLET csoportkép"
				layout="responsive" // Automatically adjusts based on container
				width={600} // Base width (in ratio to height)
				height={400} // Base height (aspect ratio is maintained)
				className=" shadow-md"
			/>
			<GovTeamList />
			<h2>A Hivatal munkatársai</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
				<PersonCard
					key="falugondnok@szentbekkalla.hu"
					name=" Csombó Mónika"
					position="Falugondnok"
					phone="+36301818199"
					email="falugondnok@szentbekkalla.hu"
				/>
				<PersonCard
					key="kultura@szentbekkalla.hu"
					name="Balogh Réka"
					position="Közművelődési munkatárs és Könyvtáros"
					email="kultura@szentbekkalla.hu"
				/>
			</div>
		</div>
	)
}
