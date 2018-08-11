var rawBooksArray = Array.from(document.querySelectorAll('.reviewStarsPopoverLink'))

var cleanBooksArray = rawBooksArray.map(book =>{
	var rating = book.innerText.slice(0,3);
	var title = book.parentNode.offsetParent.innerText
	var numberOfRatingsString = book.parentNode.nextSibling.nextSibling.nextSibling.innerText.replace(/,/g, '')
	var regExp = /\(([^)]+)\)/;
	var extraction = regExp.exec(numberOfRatingsString);
	var numberOfRatings = Number(extraction[1])
	var url = book.parentNode.offsetParent.firstChild.firstChild.firstChild.firstChild.firstChild.href

	return { rating, title, numberOfRatings, url }
})


var byRatingThenNumber = cleanBooksArray.sort((a,b) =>{
	return (a.rating < b.rating) ? 1 : (a.rating > b.rating) ? -1 : (a.numberOfRatings < b.numberOfRatings) ? 1 : (a.numberOfRatings > b.numberOfRatings) ? -1 : 0
})

console.log(byRatingThenNumber)
