import { Button } from '@/components/ui/button'
import IconWithText from '@/components/ui/icon-with-text'
import { CustomFacebookIcon } from 'data/icons'

export default function LocalInstitutionsPage() {
	return (
		<div className="my-8">
			<h1>Intézmények, szervezetek</h1>
			<h2>Szentbékkállai Polgárőr és Falufejlesztő egyesület</h2>
			<p>
				A Szentbékkállai polgárőrség 1997 szeptemberében alakult a helyi lakosok
				kezdeményezésére. A polgárőrség 38 fővel alakult, és kezdte meg a
				tevékenységét. A polgárőrség legfontosabb feladata a faluban és a
				környezetében lévő ingatlanok figyelése, őrzése. Emellett egyesületünk
				igen nagy segítséget nyújt különféle rendezvények lebonyolításában.
				Egyesületünk felszereltsége jónak mondható, a sikeres munkához minden
				feltétel adott. A polgárőrség 2006-ban névváltozáson ment át, így lett
				Szentbékkállai Polgárőr és Falufejlesztő egyesület. Támogatóinknak és a
				falu lakosságának köszönjük eddigi támogatását! Reméljük hogy a jövőben
				is sikeresen tudunk együttműködni. Támogatására továbbra is számítunk,
				amit a jövedelemadója 1%-ával, illetve egyéni befizetéssel tud
				egyesületünk számlájára befizetni. Köszönjük. Szentbékkállai Polgárőr és
				Falufejlesztő Egyesület 8281 Szentbékkálla, Kossuth L. u. 23.
				adószámunk: 18926576-1-19 számlaszámunk: 11600006-00000000-46451738
			</p>
			<h2>Az Ifiasszony Baráti Kör</h2>
			<p>
				Az Ifiasszony Baráti Kör egy összetartó közösség, amely 2005 óta aktívan
				hozzájárul falunk életéhez és fejlődéséhez. Célunk, hogy jól érezzük
				magunkat együtt, miközben közösségi és kulturális programokat
				szervezünk, részt veszünk helyi rendezvényeken, támogatjuk a
				faluközösséget, és környezetünk szebbé tételéért is teszünk.
				Tevékenységeink közé tartozik szemétszedési akciók szervezése, ünnepi
				műsorok előadása, gasztronómiai programok, kirándulások és baráti
				összejövetelek. Hiszünk abban, hogy a közös élmények és az önkéntes
				munka erősítik a közösségi összetartozást, ezért szeretnénk inspirálni
				másokat is arra, hogy aktívan részt vegyenek lakóhelyük életében.
			</p>
			<h2>Templomdomb Egyesület</h2>
			<p>
				A Templomdomb Egyesület 2024 decemberében alakult azzal a céllal, hogy
				megóvja és felújítsa Szentbékkálla község római katolikus templomát, a
				Gyümölcsoltó Boldogasszony-templomot, amely a Káli-medence legnagyobb
				egykori plébániatemploma. Emellett fontos feladatunk az egykori
				Töttöskállához tartozó templomrom állagmegőrzése és részleges
				helyreállítása. Az épített örökség védelme érdekében adományokat
				gyűjtünk, és az elérhető források függvényében olyan fejlesztéseket is
				megvalósítunk, mint a templom hangosítása, a fűthető padsorok
				kialakítása vagy az orgona felújítása. Munkánkról, pályázatainkról és
				jótékonysági eseményeinkről ezen az oldalon számolunk be, és hálásan
				fogadunk minden támogatást.
			</p>
			<p>Templomdomb Egyesület OTP számlaszám: 11711106-20014988</p>
			<Button>
				<IconWithText
					href="https://www.facebook.com/profile.php?id=61573580111407"
					icon={CustomFacebookIcon}
					text="Templomdomb Egyesület"
					ariaLabel="Open Templomdomb Egyesület Facebook page"
				/>
			</Button>
		</div>
	)
}
