import { useState } from "react";

import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

  const isValid = userInput.duration > 0;

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputIdentifier]: +newValue, //+ converts newValue in a number
			};
		});
	}
	return (
		<>
			<Header />
			<UserInput userInput={userInput} onChangeInput={handleChange} />
			{!isValid && <p className="center">Please enter a duration greater than zero.</p>}
      {isValid && <Result input={userInput} />}
		</>
	);
}

export default App;
