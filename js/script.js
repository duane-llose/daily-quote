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

			// if (data.quoteText.length > 120) {
				// quoteText.classList.add('l-quote');
			// } else {
				// quoteText.classList.remove('l-quote');
			// }

			authorText.innerText =  data.quoteAuthor;
			quoteText.innerText  =  data.quoteText;

		} catch(e) {
			getQuote(); // do a recursive call
		}

	}




	// function tweetQuote() {
	// 	const quote = quoteText.innerText;
	// 	const author = authorText.innerText;
	// 	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	// 	window.open(twitterUrl, '_blank');
	// }



	getQuote();




	console.log(document.querySelector("#generate-new-quote-btn"));

	// document.querySelector("#twitter-btn").onclick = tweetQuote();

	document.querySelector("#generate-new-quote-btn").onclick = function(e) {
	// 	console.log('asdsadasdsad');
		getQuote();
	};



// fetch('http://api.forismatic.com/api/1.0')
// .then((res) => {
// 	console.log(res);
// });


}