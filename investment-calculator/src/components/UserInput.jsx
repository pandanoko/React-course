import { useState } from "react";

export default function UserInput() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: newValue,
			};
		});
	}
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial investment</label>
					<input
						type="number"
						value={userInput.initialInvestment}
						onChange={(event) =>
							handleChange(
								"initialInvestment",
								event.target.value
							)
						}
						required
					/>
				</p>
				<p>
					<label>Annual investment</label>
					<input
						type="number"
						value={userInput.annualInvestment}
						required
						onChange={(event) =>
							handleChange("annualInvestment", event.target.value)
						}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected return</label>
					<input
						type="number"
						value={userInput.expectedReturn}
						required
						onChange={(event) =>
							handleChange("expectedReturn", event.target.value)
						}
					/>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						value={userInput.duration}
						required
						onChange={(event) =>
							handleChange("duration", event.target.value)
						}
					/>
				</p>
			</div>
		</section>
	);
}
