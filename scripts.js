$(document).ready(function() {
    $('.submit').click(function(event) {
        
    
        var Email = $('.Email').val()
        var firstName = $('.firstName').val()
        var lastName = $('.lastName').val()
        var Phone = $('.Phone').val()
        var shortSale = $('.shortSale').val()
        var shortSale = $('.shortSale').val()
        var shortSale = $('.shortSale').val()
        var statusElm = $('.status')
        var textArea = $('.textArea').val()
        statusElm.empty()
    
        if (Email.length < 5 || !Email.includes('@') || !Email.includes('.')) {
            event.preventDefault()
            statusElm.append("<div>Email is not valid</div>")
        } 
            
        
    
        if (firstName.length < 2) {
            event.preventDefault()
            statusElm.append("<div>First Name is not valid</div>")
        } 
           
        
    
        if (lastName.length < 2) {
            event.preventDefault()
            statusElm.append("<div>Last Name is not valid</div>")
        } 
           
        
    
        if (Phone.length != 10) {
            event.preventDefault()
            statusElm.append("<div>Phone number is not valid</div>")
        } 

        if(textArea.length <= 0) {
            event.preventDefault()
            statusElm.append("<div>Message box must not be blank</div>")
        }
    
        }) 
    })
    
    