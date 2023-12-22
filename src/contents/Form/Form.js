import "./Form.css";

function Form({ value, setValue }) {
	return (
		<>
			<div className="form">
				<input
					type="text"
					onChange={(event) => {
						setValue(event.target.value);
					}}
					value={value}
					placeholder="find picture"
				/>
			</div>
		</>
	);
}

export default Form;
