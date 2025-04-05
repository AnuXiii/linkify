<<<<<<< HEAD
// tostify function
export const danger = "#f43f5e";
export const succses = "#10b981";

export const alertFunction = (msg, type) => {
	Toastify({
		text: msg,
		duration: 2000,
		position: "right",
		gravity: "top",
		style: {
			boxShadow: "none",
			borderRadius: "6px",
			background: type,
		},
	}).showToast();
};
=======
// tostify function
export const danger = "#f43f5e";
export const succses = "#10b981";

export const alertFunction = (msg, type) => {
	Toastify({
		text: msg,
		duration: 2000,
		position: "right",
		gravity: "top",
		style: {
			boxShadow: "none",
			borderRadius: "6px",
			background: type,
		},
	}).showToast();
};
>>>>>>> 1cd15e4ebece3de9e627f578e8a0f2c6975c4c0e
