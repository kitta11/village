import { PersonCard } from '@/components/ui/person-card'
import { officePeople } from 'data/government.content'

export default function GovernmentOfficePage() {
	return (
		<div>
			<h1>Kővágóörsi Közös Önkormányzati Hivatal</h1>
			<h2>Hivatal elérhetősége és a fogadóórák idöpontjai </h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
				<div className="bg-neutral-100 p-4 rounded">
					<h3>Székhelye:</h3>
					<p>8254 Kővágóörs, Petőfi u. 2.</p>
					<p>
						Telefon:{' '}
						<a href="tel:+3687464017" aria-label="Call +3687464017">
							+3687464017
						</a>
					</p>
					<p>Fax: +3687563013</p>
					<p>e-mail: jegyzo@kovagoors.hu</p>
					<p>Honlap: www.kovagoors.hu</p>
				</div>

				<div className="bg-neutral-100 p-4 rounded-lg">
					<h3>Fogadóórák a hivatal székhelyén Kővágóörsön </h3>
					<p>Hétfő 8: 00 - 12: 00 és 13: 00 - 15: 30</p>
					<p>Szerda 8: 00 - 12: 00 és 13: 00- 15: 30</p>
					<p>Péntek 8: 00 - 12: 00</p>
				</div>
				<div className="bg-neutral-100 p-4 rounded-lg">
					<h3>Fogadóóra Szentbékkállán (8281 Szentbékkálla, Kossuth u. 11.)</h3>
					<p>
						Csütörtök 8:00 - 9:00 (polgármesteri és közös hivatali fogadóóra)
					</p>
				</div>
			</div>
			<h2>A Hivatal ügyintézőinek elérhetősége ügykörönként </h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
				{officePeople.map((person) => (
					<PersonCard key={person.email} {...person} />
				))}
			</div>
		</div>
	)
}
