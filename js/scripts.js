$(document).ready(function() {
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
    $(this).toggleClass('open');
  });
  $('.my-background-video').bgVideo({
    fullScreen: false,
    fadeIn: 500,
    pauseAfter: 120,
    fadeOnPause: false,
    fadeOnEnd: true,
    showPausePlay: true,
    pausePlayXPos: 'right',
    pausePlayYPos: 'top',
    pausePlayXOffset: '15px',
    pausePlayYOffset: '15px'
  });
  $('#footModal').on('click', function(event){
    event.preventDefault();
    $('#bookFormModal').modal('show');
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

$("#bookForm").validate({
  errorClass: "error",
  validClass: "success",
  rules: {
    firstname: "required",
    lastname: "required",
    number: "required",
    email: {
      required: true,
      email: true
    }
  },
  submitHandler: function() {
    var contactFirstName = $("#firstName").val();
    var contactLastName = $("#lastName").val();
    var contactEmail = $("#emailAddress").val();
    var contactStartDate = $("#startDate").val();
    var contactComments = $("#comments").val();
    var contactNumber = $("#contactNumber").val();
    var marketConsent = $("#marketCheck").prop('checked');
    event.preventDefault();
    var contactForm = {
      "fields": [{
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
        beforeSend: function() {
          $("#bookForm").hide();
          $(".alert").remove();
          $("#busy").show();
        },
        success: function() {
          $("#busy").replaceWith('<div class="row"><div class="col"><div class="completeMessage"><h2>Message received! 👍</h2><p>One of the team will be in touch soon.</p></div></div></div>');
        },
        data: JSON.stringify(contactForm),
        error: function(xhr,status,errors) {
            console.log(status);
            var errMessage = xhr.responseJSON.errors[0].errorType;
            $("#busy").hide();
            $("#bookForm").show().parent().prepend('<div class="alert alert-danger alert-dismissible fade show" role="alert" role="alert">There was an error submitting your form: ' + errMessage + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
        }
      })
      .done(function() {
        console.log("Done");
      });
  }
});

  $("#instructorForm").validate({
  errorClass: "error",
  validClass: "success",
  rules: {
   name: "required",
   number: "required",
   email: {
     required: true,
     email: true
   }
 },
 submitHandler: function() {
   var instructName = $("#instructName").val();
   var instructPhone = $("#instructPhone").val();
   var instructEmail = $("#instructEmail").val();
   var instructComments = $("#instructComments").val();
   var instructForm = {
     "fields": [
       {
         "name": "shortname",
         "value": instructName
       },
       {
         "name": "phone",
         "value": instructPhone
       },
       {
         "name": "email",
         "value": instructEmail
       },
       {
         "name": "comments",
         "value": instructComments
       }
     ]
   }
     $.ajax({
       url: 'https://api.hsforms.com/submissions/v3/integration/submit/5357756/ce0fde8d-53d8-4053-a64c-49fe1c36d070',
       type: 'POST',
       dataType: 'json',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
 			beforeSend:function(){
     	},
 			success: function() {
 					$("#instructDone").replaceWith('<div class="row"><div class="col"><div class="completeMessage"><h2>Message received! 👍</h2><p>One of the team will be in touch soon.</p></div></div></div>');
 			},
       data: JSON.stringify(instructForm)
   })
   .done(function() {
 		console.log("Done");
 	});
 }
});
$(document).ready(function() {
  var cookie = Cookies.get('bannerDismiss');
  if (cookie == "TRUE") {
    $('.banner-covid').css('display', 'none');
  } else {
    $('#banner-dismiss').click(function() {
      $('.banner-covid').css('display', 'none');
      Cookies.set('bannerDismiss', 'TRUE', {
        expires: 7
      });
    });
  }
});
