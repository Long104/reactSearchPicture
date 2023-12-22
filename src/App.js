import { useState } from "react";
import Nav from "./contents/Nav/Nav";
import Data from "./data/Data";
import Picture from "./contents/Picture/Picture";
import "./App.css";
import Post from "./contents/Post/Post";
import Form from "./contents/Form/Form";
function App() {
	const [data, setData] = useState("");
	const [text, setText] = useState("");

	const allImg = Data.filter((data) => {
		return data.title.includes(text);
	}).map((pic, id) => {
		return (
			<Picture
				key={id}
				picture={pic}
				onThisClick={(da) => {
					setData(da);
				}}
			/>
		);
	});
	// const allPost = Data.map((pic) => {
	// 	return <Post picture={pic} />;
	// });

	// let post = null;
	// if (data) {
	// 	post = <Post picture={data} />;
	// }

	return (
		<>
			<div className="container">
				<Nav />
				<Form value={text} setValue={setText} />
				<div className="center">
					<div className="grid">{allImg}</div>
				</div>
				<div className="poster">
					{data && (
						<Post
							picture={data}
							close={() => {
								setData("");
							}}
						/>
					)}
				</div>
			</div>
		</>
	);
}

export default App;
