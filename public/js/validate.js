function Validator() {
    this.buttonElement = $('#sub');
    this.fields = $('.info');
   

    this.setUp = function () {
        this.buttonElement.on('click', this.buttonClicked.bind(this));
    };

    this.objectCreator = function() {
        var fieldObj = {};
        _.each(this.fields, function(field) {
            if (field && field.id && field.value) {
                fieldObj[field.id] = field.id === 'experience' ?
                    this.experienceMap[field.value] : field.value;
            }
        }, this);

        return fieldObj;
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

    this.validateFields = function () {
        for(var i = 0; i < this.fields.length; i++) {
            var field = this.fields[i];
            if(field && field.value && field.value === '') {
                return false;
            }
        }

        return true;
    };

    this.buttonClicked = function (event) {
        event.preventDefault();
        if (this.validateFields()) {
            var validatedObject = this.objectCreator();
            this.objectSender(validatedObject);
        } else {
            alert('Enter all information');
        }
    };

    this.handleSuccessfulResponse = function(response) {
        console.log('Ajax request succeeded with message:', response);
    };

    this.handleFailedResponse = function(error) {
        console.log('Ajax request failed with error:', error);
    }
}

var validator = new Validator();
validator.setUp();

