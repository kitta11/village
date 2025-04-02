import { PersonCard } from '@/components/ui/person-card'
import { governmentPeople } from 'data/government.content'

export default function GovTeamList() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
			{governmentPeople.map((person) => (
				<PersonCard key={person.email} {...person} />
			))}
		</div>
	)
}
