// importing alert & sound & modal function
import { alertFunction, danger, succses } from "./alertFunction";
import { soundEffect } from "./soundEffect";
import { modalActivator, backdropActivator, backdrop } from "./modalController";

export const infoModal = document.querySelector(".info-modal");
const shortenButton = document.getElementById("shortener-btn");
const shortenerArrow = shortenButton.firstElementChild;
const shortenerDots = shortenButton.lastElementChild;
const input = document.getElementById("url");
const resultContainer = document.querySelector(".result-container");
const sideNavContainer = document.querySelector(".side-nav-container");
const openMenuButton = document.getElementById("open-menu");
const sideNav = document.getElementById("side-nav");
const clearStorageButton = document.getElementById("clear-localStorage");
// url Pattern
const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

// alert function with catching sound effect & message
function showAlert(message, type) {
	alertFunction(message, type);
	soundEffect(type === danger ? "dangerAudio" : "succsesAudio");
}

// localStorage
function saveLinkToStorage(originalLink, shortenedLink, id) {
	const storedLinks = JSON.parse(localStorage.getItem("shortenedLinks")) || [];

	if (storedLinks.length >= 5) {
		storedLinks.shift();
	}

	storedLinks.push({ originalLink, shortenedLink, id });
	localStorage.setItem("shortenedLinks", JSON.stringify(storedLinks));
}
function deleteLinkFromStorage(id) {
	const storedLinks = JSON.parse(localStorage.getItem("shortenedLinks")) || [];
	const updatedLinks = storedLinks.filter((link) => link.id !== id);
	localStorage.setItem("shortenedLinks", JSON.stringify(updatedLinks));
}
function loadLinksFromStorage() {
	resultContainer.innerHTML = "";

	const storedLinks = JSON.parse(localStorage.getItem("shortenedLinks")) || [];

	storedLinks.forEach((link) => {
		createResult(link.originalLink, link.shortenedLink, link.id);
	});
}
// localStorage end

// get Time
const getDate = {
	year: new Date().toLocaleDateString("fa-IR", { year: "numeric" }),
	month: new Date().toLocaleDateString("fa-IR", { month: "long" }),
	day: new Date().toLocaleDateString("fa-IR", { day: "numeric" }),
};

// create result - table row
const createResult = (originalLink, shortenedLink, id) => {
	const tr = document.createElement("tr");
	tr.classList.add("fade-in", "bg-[rgb(24,30,41)]", "bg-opacity-50", "w-full");
	tr.innerHTML =
		/* html */
		`<td class="p-8 max-[1120px]:p-4">
								<div class="copy-container flex justify-between items-center"></div>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<a
									href="${originalLink}"
									target="_blank"
									title="بازدید لینک"
									class="max-w-32 block overflow-hidden text-nowrap text-ellipsis duration-200 hover:text-[var(--brand-primary-pink)]">
									${originalLink}
								</a>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<div class="qr-container"></div>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<p
									title="تعداد کلیک ها">
									${0}
								</p>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<p
									class="flex flex-row-reverse justify-end items-end gap-2 text-white text-opacity-60"
									title="تاریخ ایجاد">
									<span>${getDate.year}</span>
									<span>${getDate.month}</span>
									<span>${getDate.day}</span>
								</p>
							</td>
							<!--  -->
							<td class="p-8 max-[1120px]:p-4 max-[1120px]:hidden">
								<div class="delete-container"></div>
					</td>				
	`;

	// call button generators generators
	const copyButton = copyButtonGenerator(shortenedLink);
	const qrCodeButton = qrButtonGenerator(shortenedLink);
	const deleteButton = deleteButtonGenerator(tr, id);
	const eyeButton = eyeButtonGenerator(
		copyButton,
		originalLink,
		qrCodeButton,
		getDate.year,
		getDate.month,
		getDate.day,
		deleteButton
	);
	tr.querySelector(".copy-container").appendChild(eyeButton);
	tr.querySelector(".copy-container").prepend(copyButton);
	tr.querySelector(".qr-container").appendChild(qrCodeButton);
	tr.querySelector(".delete-container").appendChild(deleteButton);
	tr.setAttribute("table-id", id);
	resultContainer.prepend(tr);
};

// eye button generator
const eyeButtonGenerator = (copyButton, originalLink, qrcode, year, month, day, deleteButton) => {
	const div = document.createElement("div");
	div.classList.add("hidden", "max-[1120px]:block");
	div.innerHTML =
		/* html */
		`<button
					title="باز کردن"
					class="text-xl flex justify-center items-center w-10 h-10 px-3 py-3 rounded-full bg-[var(--lite-border)] duration-200 hover:bg-[var(--brand-primary-blue)] group">
					<ion-icon
					name="eye-outline"
					class="duration-200 group-hover:text-white"></ion-icon>
					</button>`;
	div.querySelector("button").addEventListener("click", () => {
		const container = document.createElement("div");
		container.classList.add("flex", "flex-col", "gap-8");
		const callDate = document.createElement("div");
		callDate.innerHTML =
			/* html */
			`<div class="flex flex-row-reverse justify-end items-end gap-2 text-white text-opacity-60">
		<span>${year}</span>
		<span>${month}</span>
		<span>${day}</span>
		</div>`;
		const orgLink = document.createElement("div");
<<<<<<< HEAD
		orgLink.innerHTML = /* html */ `<a href="${originalLink}" target="_blank" class="duration-200 block max-w-[calc(300px - 1rem)] hover:text-[var(--brand-primary-pink)] overflow-hidden text-nowrap text-ellipsis">${originalLink}</a>`;
=======
		orgLink.innerHTML = /* html */ `<a href="${originalLink}" target="_blank" class="duration-200 hover:text-[var(--brand-primary-pink)]">${originalLink}</a>`;
>>>>>>> 1cd15e4ebece3de9e627f578e8a0f2c6975c4c0e
		const header = document.createElement("header");
		header.classList.add("flex", "justify-between", "items-center");
		header.appendChild(qrcode);
		header.appendChild(deleteButton);
		container.appendChild(header);
		container.appendChild(copyButton);
		container.appendChild(orgLink);
		container.appendChild(callDate);
		infoModal.appendChild(container);
		infoModal.classList.replace("hidden", "fade-in");
		backdrop.classList.remove("hidden");
		document.body.classList.add("overflow-hidden");
		loadLinksFromStorage();
	});
	//
	return div;
};

// copy buttton generator
const copyButtonGenerator = (shortenedLink) => {
	const div = document.createElement("div");
	div.classList.add("flex", "items-center", "gap-2");
	div.innerHTML =
		/* html */
		`
					<button
					title="کپی در کلیپ بورد"
					class="text-xl flex justify-center items-center w-10 h-10 px-3 py-3 rounded-full bg-[var(--lite-border)] duration-200 hover:bg-[var(--brand-primary-pink)] group">
					<ion-icon
					name="copy-outline"
					class="duration-200 group-hover:text-white"></ion-icon>
					</button>
					<a
					href="${shortenedLink}"
					target="_blank"
					title="بازدید لینک"
<<<<<<< HEAD
					class="hover:text-[var(--brand-primary-pink)] duration-200 max-w-[calc(300px - 1rem)] overflow-hidden text-nowrap text-ellipsis max-[380px]:max-w-[100px]">
=======
					class="hover:text-[var(--brand-primary-pink)] duration-200 max-w-[200px] overflow-hidden text-nowrap text-ellipsis max-[380px]:max-w-[100px]">
>>>>>>> 1cd15e4ebece3de9e627f578e8a0f2c6975c4c0e
					${shortenedLink}
					</a>	
	`;
	div.querySelector("button").addEventListener("click", () => {
		navigator.clipboard.writeText(shortenedLink);
		showAlert("با موفقیت کپی شد", succses);
	});
	return div;
};

// qr button generator
const qrButtonGenerator = (shortenedLink) => {
	const div = document.createElement("div");
	div.innerHTML =
		/* html */
		`
				<button
				title="qrcode"
				class="qr-btn"
				>
				<img
				src="./assests/icons/qrcode.png"
				alt="qrcode"
				class="w-full h-full" />
				</button>	
	`;
	div.querySelector("button").addEventListener("click", () => {
		soundEffect("scanAudio");
		const qrcodeContainer = document.getElementById("qrcode");
		qrcodeContainer.classList.add("scanner");
		setTimeout(() => {
			qrcodeContainer.classList.remove("scanner");
		}, 3000);
		qrcodeContainer.innerHTML = "";
		modalActivator();
		backdropActivator();
		const qrcode = new QRCode(qrcodeContainer, {
			text: shortenedLink,
<<<<<<< HEAD
=======
			width: 420,
			height: 420,
>>>>>>> 1cd15e4ebece3de9e627f578e8a0f2c6975c4c0e
			colorDark: "#fff",
			colorLight: "#000",
			correctLevel: QRCode.CorrectLevel.H,
		});
	});
	return div;
};

// delete button generator
const deleteButtonGenerator = (section, id) => {
	const div = document.createElement("div");
	div.innerHTML =
		/* html */
		`
					<button
					title="پاک کردن"
					class="flex justify-center items-center text-2xl w-12 h-12 rounded-full border-2 border-rose-500 text-rose-500 duration-200 hover:opacity-70">
					<ion-icon name="trash-outline"></ion-icon>
					</button>
	`;
	div.querySelector("button").addEventListener("click", () => {
		infoModal.innerHTML = "";
		infoModal.classList.add("hidden");
		backdrop.classList.add("hidden");
		document.body.classList.remove("overflow-hidden");
		deleteLinkFromStorage(id);
		section.remove();
		resultContainer.innerHTML = "";
		loadLinksFromStorage();
		showAlert("بخش مورد نظر حذف شد", danger);
	});
	return div;
};

// check table row counts
function maxResultCounter() {
	if (resultContainer.childElementCount > 5) {
		resultContainer.lastElementChild.remove();
	}
}

// start progress and fetching data
shortenButton.addEventListener("click", async () => {
	let inputVal = input.value;

	// input feild & validate
	if (inputVal === "" || inputVal === null) {
		input.classList.add("border-rose-500");
		showAlert("مقدار فرم خالی میباشد", danger);
		return;
	}
	if (!urlPattern.test(inputVal)) {
		input.value = "";
		input.classList.add("border-rose-500");
		showAlert("مقدار وارد شده معتبر نمیباشد", danger);
		return;
	}
	// check user web browser if online & offline
	if (!window.navigator.onLine) {
		input.value = "";
		input.classList.add("border-rose-500");
		showAlert("لطفا اینترنت خود را بررسی کنید", danger);
		return;
	}

	// disabled button & adding loading animation on the button and remove red border from input
	input.classList.remove("border-rose-500");
	shortenButton.setAttribute("loading", true);
	shortenButton.setAttribute("lite", true);
	shortenButton.setAttribute("disabled", true);
	shortenerArrow.classList.add("hidden");
	shortenerDots.classList.remove("hidden");
	window.location.href = "#table";

	// fetching
	setTimeout(async () => {
		try {
			const response = await fetch("https://url-shortener-service.p.rapidapi.com/shorten", {
				method: "POST",
				headers: {
					"x-rapidapi-key": "8ae2231c9fmsh16c33a7ca564496p144334jsna9c67947ba81",
					"x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `url=${inputVal}`,
			});

			if (response.status === 429) {
				showAlert("تعداد درخواست ها بیش از حد مجاز میباشد, لطفا بعدا امتحان کنید", danger);
				return;
			}

			const result = await response.text();
			const message = result ? result.slice(15, -2) : "متاسفانه جوابی دریافت نشد.";
			const id = `tr-${Date.now()}`;
			// call function for create table row & save table row to storage & check max count on the table container & call showAlert function
			createResult(inputVal, message, id);
			saveLinkToStorage(inputVal, message, id);
			maxResultCounter();
			showAlert("لینک کوتاه با موفقیت اضافه شد", succses);
		} catch (error) {
			setTimeout(() => {
				showAlert("لطفا فیلترشکن خود را بررسی کنید", danger);
				console.clear();
			}, 1000);
		} finally {
			// enabled shortener button & remove current value from input
			input.value = "";
			shortenButton.removeAttribute("loading");
			shortenButton.removeAttribute("lite");
			shortenButton.removeAttribute("disabled");
			shortenerArrow.classList.remove("hidden");
			shortenerDots.classList.add("hidden");
		}
	}, 1000);
});
// side nav menu
if (sideNavContainer) {
	openMenuButton.addEventListener("click", () => {
		sideNav.classList.toggle("hidden");
		sideNav.classList.toggle("fade-in");
	});

	window.addEventListener("click", (e) => {
		if (!e.target.closest(".side-nav-container")) {
			sideNav.classList.add("hidden");
			sideNav.classList.remove("fade-in");
		}
	});
}
// clear storage button
clearStorageButton.addEventListener("click", () => {
	if (localStorage.getItem("shortenedLinks") == null || localStorage.getItem("shortenedLinks") == "[]") {
		showAlert("داده ای موجود نیست", danger);
	} else {
		localStorage.removeItem("shortenedLinks");
		resultContainer.innerHTML = "";
		showAlert("داده ها حذف شدند", succses);
	}
});
// loading data from storage when DOM loaded
document.addEventListener("DOMContentLoaded", loadLinksFromStorage);
