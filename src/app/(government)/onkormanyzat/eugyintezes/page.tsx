import { Button } from '@/components/ui/button'
import { VideoList } from './videolist'
import Link from 'next/link'
import Image from 'next/image'
import banner from '@/assets/eonkormanyzat-banner.png'

export default function eGovernmentPage() {
	return (
		<div>
			<h1>Elektronikus Önkormányzat</h1>
			<h2>Intézze Ügyeit Kényelmesen, Gyorsan, Online!</h2>
			<p>
				2018. januártól már minden magyarországi településen, így nálunk is
				elérhető az Önkormányzati Hivatali Portál szolgáltatás, amelyen
				keresztül online, akár a saját nappalinkból is kényelmesen és gyorsan
				intézhetők az önkormányzati hivatali ügyek a hét minden napján. Így
				életünk kisebb-nagyobb eseményei és azok adminisztrációs feladatai is
				sokkal könnyebbé válnak.
			</p>
			<p>
				Nézze meg a magyarázó videókat, hogy gyorsan és egyszerűen eligazodjon a
				rendszerben!
			</p>
			<p>Lépjen be a Portálra most, és intézze ügyeit online!</p>
			<Button size="lg">
				<Link href="https://ohp-20.asp.lgov.hu/nyitolap" target="_blank">
					Önkormányzati Hivatali Portál
				</Link>
			</Button>
			<VideoList />

			<Link href="https://ohp-20.asp.lgov.hu/nyitolap" target="_blank">
				<Image
					src={banner}
					alt="Banner az elektronikus önkormányzati hivatali ügyek portálra"
					className="w-full my-8"
				/>
			</Link>
		</div>
	)
}
