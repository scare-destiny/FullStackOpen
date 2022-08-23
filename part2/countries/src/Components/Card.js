import Language from "./Language"

const Card = ({ country, capital, area, languages, flag }) => {
	return (
		<div>
			<h3>
					{country}
			</h3>
			<p>capital: {capital}</p>
			<p>area: {area}</p>
			<h4>languages</h4>
			<ul>
				{languages.map(language => {
					return (
						<Language language={language} />
					)
				})}
			</ul>
			<img src={flag} alt='flag'/>
		</div>
	)
}

export default Card