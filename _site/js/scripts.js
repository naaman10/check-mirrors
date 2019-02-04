new WOW().init();
$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

var today, datepicker;
    today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    datepicker = $('#startDate').datepicker({
        minDate: today,
				showRightIcon: false,
				uiLibrary: 'bootstrap4',
				width: '160',
				format: 'dd/mm/yyyy'
    });



//booking form submit

$("#bookFormSubmit").on('click', function(event) {

  var contactFirstName = $("#firstName").val();
  var contactLastName = $("#lastName").val();
  var contactEmail = $("#emailAddress").val();
  var contactStartDate = $("#startDate").val();
  var contactComments = $("#comments").val();
  var contactNumber = $("#contactNumber").val();
  var marketConsent = $("#marketCheck").prop('checked');
  var contactConsent = $("#consentCheck").prop('checked');
	if (contactConsent == false) {
		$("#consentInvalid").css('display', 'inline-block');
	} else {
		event.preventDefault();
  var contactForm = {
    "fields": [
      {
        "name": "firstname",
        "value": contactFirstName
      },
      {
        "name": "lastname",
        "value": contactLastName
      },
      {
        "name": "email",
        "value": contactEmail
      },
			{
				"name": "phone",
				"value": contactNumber
			},
      {
        "name": "start_date",
        "value": contactStartDate
      },
			{
				"name": "comments",
				"value": contactComments
			},
      {
        "name": "marketing_consent",
        "value": marketConsent
      },
      {
        "name": "contact_consent",
        "value": contactConsent
      }
    ]
  }
    $.ajax({
      url: 'https://api.hsforms.com/submissions/v3/integration/submit/5357756/aae7163f-7c3d-447b-af1a-7b16229a8c81',
      type: 'POST',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
			beforeSend:function(){
				$("#bookForm").hide();
        $("#busy").show();
    	},
			success: function() {
					$("#busy").replaceWith('<div class="row"><div class="col"><div class="completeMessage"><h2>Message received! 👍</h2><p>One of the team will be in touch soon.</p></div></div></div>');
			},
      data: JSON.stringify(contactForm)
  })
  .done(function() {
		console.log("Done");
	});
}
});
