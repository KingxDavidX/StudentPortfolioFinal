fetch("https://dummyjson.com/quotes/random")
	.then((res) => res.json())
	.then((data) => {
		document.getElementById("quote").innerHTML = `
      <blockquote>"${data.quote}"</blockquote>
      <p>— ${data.author}</p>
    `;
	})
	.catch((err) => {
		console.error("Quote load failed:", err);
		document.getElementById("quote").innerText = "Could not load quote.";
	});