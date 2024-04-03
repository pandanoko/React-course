import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ input }) {
	const investmentData = calculateInvestmentResults(input);
	const initialInvestment =
		investmentData[0].valueEndOfYear -
		investmentData[0].interest -
		investmentData[0].annualInvestment;

	console.log(investmentData);
	return (
		<table id="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{investmentData.map((yearData) => {
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year - initialInvestment;

                        const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

					return (
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
