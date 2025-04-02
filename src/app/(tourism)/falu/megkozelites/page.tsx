import ImageTextSection from '@/components/ui/text-image-section.component'
import image1 from '@/assets/landscape-grapeyard.jpg'

export default function VillageLocationPage() {
	return (
		<>
			<h1>Megközelítés</h1>
			<ImageTextSection
				imageSrc={image1}
				imageAlt="Szőlő a falu határában háttérben a Káli medencével"
				text="A Balaton-felvidék szívében fekvő
				település a 71-es főút felől Tapolca vagy Zánka irányából
				közelíthető meg. Budapest felől az M7-es autópályán haladva vagy a Balaton
				irányába, majd a 71-es főút felé vagy Veszprém (8-as út), Nagyvázsony felé érdemes haladni."
				title="Autóval"
			/>
			<ImageTextSection
				imageSrc={image1}
				imageAlt="Szőlő a falu határában háttérben a Káli medencével"
				text="Vonattal: A legközelebbi
				vasútállomások Tapolcán, Révfülöpön és Zánkán találhatók, ahonnan helyi
				buszokkal lehet tovább utazni Szentbékállára."
				title="Tömegközlekedéssel"
			/>
		</>
	)
}
