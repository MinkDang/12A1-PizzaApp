var array = [
    {OrderType: 1, Base: "Supreme", Size: "Large", Paid: true}
];


function testCreditCard() {
	myCardNo = document.getElementById('CardNumber').value;
	myCardType = document.getElementById('CardType').value;
	if (checkCreditCard(myCardNo, myCardType)) {
		alert('Credit card has a valid format');
		// Push a valid key to the dictionary
	} else {
		alert(ccErrors[ccErrorNo]);
	}
}

function CC_month_year() {
	var today, someday;
	var cc_month = document.getElementById('cc_month').value;
	var cc_year = document.getElementById('cc_year').value;
	today = new Date();
	someday = new Date();
	someday.setFullYear(cc_year, cc_month - 1, someday.getDate());

	if (someday < today) {
		alert("The expiry date is before today's date. Please select a valid expiry date");
        // Push a valid key to dictionary
	} else {
		location.href = "success.html"
	}
}
