import { useState } from "react";
import Button  from "./components/Button"

function App() {
	const [color, setColor] = useState("bg-gray-700");
	return(
	<>
	<div className={`w-full h-screen flex justify-center ${color}`}>
		<div className="flex justify-between flex-col p-3">
			<div>
				<h1 className="text-3xl border-1 p-3 rounded">
					Background Changer
				</h1>
			</div>
			<div className="flex flex-row justify-around">
				<Button text="Red" color="bg-red-500 " setColor={setColor}/>
				<Button text="Blue" color="bg-blue-500 " setColor={setColor}/>
				<Button text="Green" color="bg-green-500" setColor={setColor} />
			</div>
		</div>
	</div>
	</>
	)
}

export default App;
