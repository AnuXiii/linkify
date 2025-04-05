<<<<<<< HEAD
export function soundEffect(type) {
	const effect = {
		succsesAudio: new Audio("./assests/sound/discord-nofications.mp3"),
		dangerAudio: new Audio("./assests/sound/discord-leave.mp3"),
		scanAudio: new Audio("./assests/sound/qr-code-scan.mp3"),
	};

	effect[type].play();
}
=======
export function soundEffect(type) {
	const effect = {
		succsesAudio: new Audio("./assests/sound/discord-nofications.mp3"),
		dangerAudio: new Audio("./assests/sound/discord-leave.mp3"),
		scanAudio: new Audio("./assests/sound/qr-code-scan.mp3"),
	};

	effect[type].play();
}
>>>>>>> 1cd15e4ebece3de9e627f578e8a0f2c6975c4c0e
