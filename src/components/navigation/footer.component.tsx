import { House, Mail, Monitor, Phone } from 'lucide-react'
import IconWithText from '../ui/icon-with-text'
import { CustomFacebookIcon, CustomInstagramIcon } from 'data/icons'

interface FooterHeaderProps {
	text: string
}

const FooterHeader = (props: FooterHeaderProps) => {
	return (
		<h6 className="my-2 flex justify-center font-bold uppercase min-h-[48px] md:justify-start md:my-3 ">
			{props.text}
		</h6>
	)
}

export default function Footer() {
	return (
		<footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left px-8 py-4">
			<div className="text-center md:text-left">
				<div className="grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col">
						<FooterHeader text="Szentbékkálla Polgármesteri Hivatal" />
						<IconWithText
							icon={House}
							text="8281 Szentbékkálla, Kossuth Lajos u. 11."
						/>
						<IconWithText
							icon={Mail}
							text="onkormanyzat@szentbekkalla.hu"
							href="mailto:onkormanyzat@szentbekkalla.hu"
						/>
						<IconWithText
							icon={Phone}
							text="+36 30 635 6877"
							href="tel:+36306356877"
							aria-label="Call +36 30 635 6877"
						/>
					</div>
					<div className="flex flex-col">
						<FooterHeader text="Fogadóórák" />
						<p className="text-sm my-2">
							Szerda: 16:00 - 17:00 (polgármesteri fogadóóra)
						</p>
						<p className="text-sm my-2">
							Csütörtök 8:00 - 9:00 (polgármesteri és közös hivatali fogadóóra)
						</p>
						<p className="text-sm my-2">
							Péntek: 16:00 - 17:00 (polgármesteri fogadóóra)
						</p>
					</div>
					<div className="flex flex-col">
						<FooterHeader text="Szentbékkálla a közösségi médiában" />
						<IconWithText
							href="https://www.facebook.com/iloveszentbekkalla"
							icon={CustomFacebookIcon}
							text="I love Szentbékkálla"
							ariaLabel="Open I love Szentbékkálla Facebook page"
						/>
						<IconWithText
							href="https://www.instagram.com/szentbekkalla_sbc/?igsh=Z3U3cG44cmlzaXRi#"
							icon={CustomInstagramIcon}
							text="Szentbékkálla Instagrama"
							ariaLabel="Open Szentbékkálla Instagram page"
						/>
						<IconWithText
							href="https://www.facebook.com/profile.php?id=61573580111407"
							icon={CustomFacebookIcon}
							text="Templomdomb Egyesület"
							ariaLabel="Open Templomdomb Egyesület Facebook page"
						/>
					</div>
					<div className="flex flex-col">
						<FooterHeader text="Kővágóörsi Közös Önkormányzati Hivatal" />
						<IconWithText icon={House} text="8254 Kővágóörs, Petőfi u. 2." />
						<IconWithText
							icon={Mail}
							text="jegyzo@kovagoors.hu"
							href="mailto:jegyzo@kovagoors.hu"
						/>
						<IconWithText
							icon={Phone}
							text="+36 87 464 017"
							href="tel:+3687464017"
							aria-label="Call +36 87 464 017"
						/>
						<IconWithText
							icon={Monitor}
							text="www.kovagoors.hu"
							href="https://www.kovagoors.hu"
							aria-label="Open website kovagoors.hu"
						/>
					</div>
				</div>
			</div>

			{/* <!--Copyright section--> */}
			<div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
				<span>© 2025 Copyright: </span>
				<a
					className="font-semibold text-neutral-600 dark:text-neutral-400"
					href="https://www.linkedin.com/in/krisztina-parrag/"
				>
					Parrag Kriszta
				</a>
			</div>
		</footer>
	)
}
