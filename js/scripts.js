function Contact(first, last){
  this.firstName = first;
  this.lastName = last;
}

$(document).ready(function(ready){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputedFirstName = $("input#new-first-name").val();
    var inputedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputedFirstName, inputedLastName);

    $("#show-contact").show();
    $("#show-contact h2").text("Contact List");
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
});
});
