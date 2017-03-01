// // alt+ctl (cmd on Mac) + J to open the console window in Chrome

/*
* Click the connect button (draft)
*/
// Decide if it's InMail button
str = $('a.button-primary')[0].toString();
match = str.match(/InMail/gi);
// If it's not InMaill
if (match === null) {
	// Click the connect button
	$('a.button-primary')[0].click()
}else {
	// Else click the connect in the connect menu
	$('.connect-menu dd a')[1].click()
}

/*
* Click the connect button (function)
*/
(function () {
	str = $('a.button-primary')[0].toString();
	match = str.match(/InMail/gi);
	if (match === null) {
	$('a.button-primary')[0].click()
	}else {
		$('.connect-menu dd a')[1].click()
	}
}())


/*
* Fill connection invitation form
*/
// $('input#IF-reason-iweReconnect.radio-btn').click();
// var script = 'We are working with Automation Alley to research how factory information and analytics are changing and informing decisions. We are in contact with Ford, GM, and FCA. I\'d like to get your insights. Can you share a few minutes? In return you will receive the final report. -Scott';
// var name = $('h1 strong').text();
// $('textarea').text(name + ": " + script).update();

// //Invitation button!!!Caution
// $('input#send-invite-button.btn-primary').click()



// //

(function () {
setTimeout(function () {
	$('input#send-invite-button.btn-primary').click();
},5000);


	$('input#IF-reason-iweReconnect.radio-btn').click();
	var script = 'We are working with Automation Alley to research how factory information and analytics are changing and informing decisions. We are reaching out to Tier 1 executives to get insights and perspectives. In return for a few minutes of conversation you will receive the full final report. -Scott';
	var name = $('h1 strong').text();
	$('textarea').text(name + ": " + script).update();

}())

// //find connect
// $('div#secondary-actions-dropdown.katy-button-menu').addClass('active')


/* ----------New Version------------*/
var firstName = $('.pv-top-card-section__name').text().split(' ')[0]
var script = 'We are working with Automation Alley to research how factory information and analytics are changing and informing decisions. We are reaching out to Tier 1 executives to get insights and perspectives. In return for a few minutes of conversation you will receive the full final report. -Scott';
$('button.connect').click()
$('button.button-secondary-large').click()
$('textarea').text('hi!').val(firstName + ": " + script);
$('button.button-primary-large.ml3')[0].click()

// bookmark for MEMS Journal
(function () {
	var firstName = $('.pv-top-card-section__name').text().split(' ')[0];
	var script = 'We are working with Automation Alley to research how factory information and analytics are changing and informing decisions. We are reaching out to Tier 1 executives to get insights and perspectives. In return for a few minutes of conversation you will receive the full final report. \n-Scott';
	$('button.connect').click();
	$('button.button-secondary-large').click();
	$('textarea').text('hi!').val(firstName + ": \n" + script);
	$('button.button-primary-large.ml3')[0].click();
}())

//SiMREPS
(function () {
	var firstName = $('.pv-top-card-section__name').text().split(' ')[0];
	var script = 'A team from the U of Michigan developed a PCR-free method to detect cell-free tumor DNA in a liquid biopsy sample. We are helping them understand the current state of liquid biopsy based diagnostic methods  Would you share your insights on this topic and learn more about this technology?\n-Scott';
	$('button.connect').click();
	$('button.button-secondary-large').click();
	$('textarea').text('hi!').val(firstName + ": \n" + script);
	setTimeout(function () {
		$('button.button-primary-large.ml3')[0].click();
	},3000);
}())

