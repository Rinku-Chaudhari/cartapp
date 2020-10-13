import React from "react";
import "./MsgView.css";

import ClearIcon from "@material-ui/icons/Clear";

const MsgView = ({ msg, setMsg }) => {
	return (
		<div
			className="msg_view"
			style={msg === "" ? { display: "none" } : null}
		>
			<p>{msg}</p>
			<button onClick={() => setMsg("")}>
				<ClearIcon />
			</button>
		</div>
	);
};

export default MsgView;
