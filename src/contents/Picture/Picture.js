import "./Picture.css";
function Picture({ picture, onThisClick }) {
	return (
		<>
			<div className="picture">
				<img
					src={picture.url}
					onClick={() => {
						onThisClick(picture);
					}}
				></img>
				<div className="title">{picture.title}</div>
			</div>
		</>
	);
}

export default Picture;
