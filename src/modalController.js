<<<<<<< HEAD
import { infoModal } from "../src/main";

export const qrCodeModal = document.querySelector(".qr-code-modal");
export const backdrop = document.querySelector(".backdrop");
export const closeModal = document.querySelector(".close-button");
export const downloadButton = document.getElementById("download");

// modal displayer
export function modalActivator() {
	qrCodeModal.classList.replace("hidden", "flex");
	qrCodeModal.classList.add("fade-in");
}

export function modalDisabler() {
	qrCodeModal.classList.replace("flex", "hidden");
	qrCodeModal.classList.add("hidden");
}

export function backdropActivator() {
	backdrop.classList.replace("hidden", "block");
	document.body.classList.add("overflow-hidden");
}

export function backdropDisabler() {
	backdrop.classList.replace("block", "hidden");
	document.body.classList.remove("overflow-hidden");
}

// backdrop (black mask)
backdrop.addEventListener("click", () => {
	infoModal.classList.add("hidden");
	backdrop.classList.add("hidden");
	infoModal.textContent = "";
	modalDisabler();
	backdropDisabler();
});

// modal close button
closeModal.addEventListener("click", () => {
	modalDisabler();
	backdropDisabler();
});

// download qr image button
downloadButton.addEventListener("click", () => {
	let qrScanImage = downloadButton.previousElementSibling.lastChild.src;
	downloadButton.setAttribute("href", qrScanImage);
	downloadButton.setAttribute("download", "qr-scan-image");
});
=======
import { infoModal } from "../src/main";

export const qrCodeModal = document.querySelector(".qr-code-modal");
export const backdrop = document.querySelector(".backdrop");
export const closeModal = document.querySelector(".close-button");
export const downloadButton = document.getElementById("download");

// modal displayer
export function modalActivator() {
	qrCodeModal.classList.replace("hidden", "flex");
	qrCodeModal.classList.add("fade-in");
}

export function modalDisabler() {
	qrCodeModal.classList.replace("flex", "hidden");
	qrCodeModal.classList.add("hidden");
}

export function backdropActivator() {
	backdrop.classList.replace("hidden", "block");
	document.body.classList.add("overflow-hidden");
}

export function backdropDisabler() {
	backdrop.classList.replace("block", "hidden");
	document.body.classList.remove("overflow-hidden");
}

// backdrop (black mask)
backdrop.addEventListener("click", () => {
	infoModal.classList.add("hidden");
	backdrop.classList.add("hidden");
	infoModal.textContent = "";
	modalDisabler();
	backdropDisabler();
});

// modal close button
closeModal.addEventListener("click", () => {
	modalDisabler();
	backdropDisabler();
});

// download qr image button
downloadButton.addEventListener("click", () => {
	let qrScanImage = downloadButton.previousElementSibling.lastChild.src;
	downloadButton.setAttribute("href", qrScanImage);
	downloadButton.setAttribute("download", "qr-scan-image");
});
>>>>>>> 1cd15e4ebece3de9e627f578e8a0f2c6975c4c0e
