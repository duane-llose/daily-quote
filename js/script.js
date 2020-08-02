// fetch('https://quotes.rest/qod/categories').then((res) => res.json()).then((res) => console.log(res.contents));
// fetch('https://quotes.rest/quote​/random').then((res) => res.json()).then((res) => console.log(res.contents));

// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

window.onload = function() {

	const quoteText = document.querySelector("#quote-of-the-day");
	const authorText = document.querySelector("#author");

	async function getQuote() {
		const proxy = "https://cors-anywhere.herokuapp.com/";
		const url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
		try {
			const response = await fetch(proxy + url);
			const data = await response.json();
			
			if (data.quoteAuthor == "") {
				authorText.innerText = "Anonymous";
			} else {
				authorText.innerText = data.quoteText;
			}


			authorText.innerText =  data.quoteAuthor;
			quoteText.innerText  =  data.quoteText;

		} catch(e) {
			getQuote(); // do a recursive call
		}

	}



	getQuote();

	document.querySelector("#generate-new-quote-btn").onclick = function(e) {
		getQuote();
	};

}