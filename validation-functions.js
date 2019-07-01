$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
    })
    
});

$(document).on('success.form.bv', function(e) {
    // Prevent form submission
    e.preventDefault();

    // Get the form instance
    var $form = $(e.target);

 
    // Use Ajax to submit form data
    var url = '';
    var redirectUrl = 'index.html';
    // show the loading 
    $('#postForm');
    var jqxhr = $.post(url, $form.serialize(), function(data) {
        console.log("Success! Data: " + data.statusText);
        $(location).attr('href',redirectUrl);
    })
        .fail(function(data) {
            console.warn("Error! Data: " + data.statusText);
            // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
            if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                $(location).attr('href',redirectUrl);                
            }
        });
})