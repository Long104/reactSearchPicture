import "./Post.css";

function Post({ picture, close }) {
	return (
		<>
			<div className="post">
				<div className="imager">
					<img src={picture.url} onClick={close}></img>
				</div>
				<div className="title">{picture.title}</div>
			</div>
		</>
	);
}

export default Post;
