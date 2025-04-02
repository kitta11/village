import { PersonCardProps } from 'types'
import istvanditamas from '@/assets/istvandytamas.jpeg'

export const governmentPeople: PersonCardProps[] = [
	{
		name: 'Istvándi Tamás',
		position: 'Polgármester',
		email: 'polgarmester@szentbekkalla.hu',
		phone: '+36306356877',
		imageSrc: istvanditamas,
	},
	{
		name: 'Sárvári Nikolett',
		description: 'turisztikai ügyek',
		position: 'Alpolgármester',
		phone: '+36303095225',
		email: 'alpolgarmester@szentbekkalla.hu',
	},
	{
		name: 'Birkás Dániel',
		description: 'közösségi ügyek',
		position: 'képviselő',
		email: 'birkasdaniel@szentbekkalla.hu',
	},
	{
		name: 'Gerencsér László',
		description: 'műszaki ügyek',
		position: 'képviselő',
		email: 'gerencserlaszlo@szentbekkalla.hu',
	},
	{
		name: 'Mihályi Csongor',
		description: 'gazdasági ügyek',
		position: 'képviselő',
		email: 'mihalyicsongor@szentbekkalla.hu',
	},
]

export const officePeople: PersonCardProps[] = [
	{
		name: 'Dr. Szabó Tímea',
		position: 'Jegyző',
		phone: '+3687464017',
		email: 'jegyzo@kovagoors.hu',
		description: 'A jegyző ügyfélfogadási ideje: hétfő 09: 00 - 11: 00',
	},
	{
		name: 'dr. Takács Katalin',
		position: 'Aljegyző és hagyatéki ügyintéző',
		phone: '+3687464017',
		email: 'igazgatas@kovagoors.hu',
		description:
			'Melléke: 16, Az aljegyző ügyfélfogadási ideje:  szerda 9:00 -11:00',
	},
	{
		name: 'Nagy Éva',
		position:
			'Szociális, gyermekvédelmi, kereskedelmi, birtokvédelmi ügyintéző',
		phone: '+3687464017',
		email: 'ugyintezo@kovagoors.hu',
		description: 'Melléke: 26',
	},
	{
		name: 'Kiss Tibor',
		position:
			'Műszaki ügyintéző Kővágóörs, Salföld, Szentbékkálla települések vonatkozásában',
		phone: '+3687464017',
		email: 'muszak@kovagoors.hu',
		description: 'Melléke: 20',
	},
	{
		name: 'Pozsgai Virág',
		position:
			'Adóügyi ügyintéző Köveskál, Szentbékkálla, Salföld és Kékkút települések vonatkozásában',
		phone: '+3687464017',
		email: 'ado.koveskal@kovagoors.hu',
		description: 'Melléke: 23',
	},
	{
		name: 'Molnárné Szalai Valéria',
		position:
			'Pénzügyi ügyintéző Köveskál, Szentbékkálla települések vonatkozásában',
		phone: '+3687464017',
		email: 'penzugy.vali@kovagoors.hu',
		description: 'Melléke: 12',
	},
	{
		name: 'Kőfalvi-Bindics Klaudia',
		position: 'Népesség, lakcímnyilvántartás ügyintéző',
		phone: '+3687464017',
		email: 'penzugy.kekkut@kovagoors.hu',
		description: 'Melléke: 19',
	},
	{
		name: 'Csik Tímea',
		position: 'Termőfölddel kapcsolatos hirdetmények ügyintéző',
		phone: '+3687464017',
		email: 'ugykezelo.timea@kovagoors.hu',
		description: 'Melléke: 21',
	},
	{
		name: 'Horváth Tamásné',
		position: 'Hirdetmények',
		phone: '+3687464017',
		email: 'hivatal@kovagoors.hu',
		description: 'Melléke: 18',
	},
]
