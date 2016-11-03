var xNum = 0
var oNum = 0


$('#tl, #tm, #tr, #ml, #mm, #mr, #bl, #bm, #br').one('click', function() {

	if (oNum < xNum) {
		$(this).append('<img src="images/o.png">')
		oNum++
	}

	else {
		$(this).append('<img src="images/x.jpg">')
		xNum++
		if (xNum === 5) {
			setTimeout(function() { 
				alert('Start Over?')
				location.reload() 
			}, 500)
		}
	}

})