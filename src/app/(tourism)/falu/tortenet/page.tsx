import ImageTextSection from '@/components/ui/text-image-section.component'
import image1 from '@/assets/landscape-grapeyard.jpg'
import image2 from '@/assets/tottoskali-templom.jpeg'
import image3 from '@/assets/istvandy-haz.png'
import image4 from '@/assets/fekete-hegy-tavak.png'
import image5 from '@/assets/mandula.png'

export default function AboutPage() {
	return (
		<div>
			<ImageTextSection
				imageSrc={image1}
				imageAlt="Szőlő a falu határában háttérben a Káli medencével"
				text="A festői Káli-medence északi peremén, a Boncsos-tető, a Fekete-hegy és a
				Sátorma-hegy ölelésében fekszik Szentbékálla, egy varázslatos kis
				település, amely lenyűgöző panorámával és egyedi természeti
				adottságaival csalogatja a látogatókat. Az itt uralkodó kellemes
				mikroklímának köszönhetően a nap évente mintegy 2000 órán át ragyog, ami
				még vonzóbbá teszi a környéket a természetkedvelők számára."
				title="Szentbékálla - A Káli-medence gyöngyszeme"
			/>
			<ImageTextSection
				imageSrc={image2}
				reverse
				imageAlt="A Töttöskáli romtemplom egy részlete"
				text="A település nevének eredete Szent Benedekhez köthető, akinek szerzetesei
				segítettek a Kál és Vérbulcsú ivadékok megmentésében. Az itteni római
				katolikus templom barokk stílusú, XVIII. század végi átépítése Felner
				Jakab tervei alapján valósult meg. A freskóin a Káli-medencét térítő
				Szent Benedek-rendi szerzetes és Kál-vitéz alakja is megjelenik. A
				környéken érdemes felkeresni a Velétei palotaromot, amely egy XI-XII.
				századi gótikus műemlék, valamint a XIII. századi román stílusú
				Töttöskáli templomromot."
				title="Történelem és középkori emlékek"
			/>
			<ImageTextSection
				imageSrc={image3}
				imageAlt="Istvándi-ház"
				text="A faluban sétálva felfedezhetjük a hagyományos népi építészet nyomait.
				Az 1825-ben épült Istvándi-ház a népi építészet egyik legszebb megmaradt
				példája. Egyedülálló műemlék a Birkás-pince és lakóház is, amelyet
				Felner Jakab tervezett 1763-ban. A település egykor strandfürdővel is
				büszkélkedhetett, amelyet Borbély Gáspár helyi lakos létesített
				1935-ben. A természetes hegyi forrásvízzel töltött fürdő 1960-ig
				működött."
				title="Hagyományos népi építészet és műemlékek"
			/>
			<ImageTextSection
				reverse
				imageSrc={image4}
				imageAlt="Bika tó a Fekete hegy tetején"
				text="Szentbékálla határában nyugatra terül el a lenyűgöző Kőtenger, amely a
				vulkanikus teékelyek és természeti erõk játékának köszönhetően alakult
				ki. A hatalmas, szabálytalan formájú kövek mintha egy mitikus óriás
				játékszerei lennének. A Fekete-hegy is kiváló kirándulóhely, ahol az
				1950-ben bazaltkőből épített, majd 1978-ban felújított Eötvös Károly
				kilátóból elénk tárul a Káli-medence festői szépsége, a Tapolcai-medence
				tanúhegyei, a Balaton és a Tihanyi-félsziget. A hegytető apró tavait, a
				kőtálakat vagy krátertavakat a bazaltláva formálta. Ezek főként a nedves
				évszakokban telnek meg vízzel, és sekély nádasokkal borított mocsarak
				vagy lápok alakulnak ki. A legnevezetesebb tavak: Bika-tó, Bonta-tó,
				Barkás-tó, Monostori-tó, Kálomis-tó, Kettős-tó. A Fekete-hegyről lefelé
				haladva felfedezhetjük a Bocskor-kúti forrást, valamint a közelben
				fakadó bővizű Öreghegyi-forrást is, amely a térség egyik fontos
				természeti kincse."
				title="A természet csodái: Kőtenger és Fekete-hegy"
			/>
			<ImageTextSection
				imageSrc={image5}
				imageAlt="Mandulavirágzás"
				text="Szentbékálla nemcsak a természet szerelmeseinek ideális úticél, hanem
				azoknak is, akik a Balaton-felvidék varázslatos hangulatára és gazdag
				történelmi örökségére kíváncsiak. Legyen szó kirándulásról, műemlékek
				felfedezéséről vagy egy pihentető sétáról a Kőtengerben, ez a település
				mindig tartogat valami különlegeset."
				title="Miért látogass el Szentbékállára?"
			/>
		</div>
	)
}
