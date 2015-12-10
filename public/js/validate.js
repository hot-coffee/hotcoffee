$('#validation').hide();

function Validator() {
    this.email = $('#email');
    this.buttonElement = $('#sub');
    this.fields = $('.info');
   

    this.setUp = function () {
        this.buttonElement.on('click', this.buttonClicked.bind(this));
    };

    this.objectSender = function(fieldObj) {
        var self = this;
        console.log('data to send', fieldObj);
        $.ajax({
            url: 'http://localhost:9042/save-client',
            type: 'post',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(fieldObj),
            success: self.handleSuccessfulResponse,
            error: self.handleFailedResponse
        });
    };



    this.buttonClicked = function (event) {
        event.preventDefault();
        if (this.validateEmail()) {
            var validatedObject = {email: this.email.val()};
            this.objectSender(validatedObject);
            $('#register').hide();
            $('#validation').fadeIn(400);
        } else {
            alert('Please enter a valid email');
        }
    };

    this.handleSuccessfulResponse = function(response) {
        console.log('Ajax request succeeded with message:', response);
    };

    this.handleFailedResponse = function(error) {
        console.log('Ajax request failed with error:', error);
    }

    this.validateEmail = function(){
        return this.email.val().indexOf('@') !== -1 && this.email.val() != "";
    }
}

var validator = new Validator();
validator.setUp();

