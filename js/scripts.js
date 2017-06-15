function Contact(first, last, street, city, county){
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.county = county;
}
$(document).ready(function(ready){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputedFirstName = $("input#new-first-name").val();
    var inputedLastName = $("input#new-last-name").val();
    var inputedStreet = $("input#").val();
    var inputedCity = $("input#").val();
    var inputedCounty = $("input#").val();

    var newContact = new Contact(inputedFirstName, inputedLastName, inputedStreet, inputedCity, inputedCounty);

    $("#show-contact").show();
    $("#show-contact h2").text("Contact List");
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".street-nam").text(newContact.street);
    $(".city-name").text(newContact.city);
    $(".county-name").text(newContact.county);
});
});
