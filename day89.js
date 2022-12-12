a = document.getElementById("txt")
b = document.getElementById("btn1")
c= document.getElementById("inp1")

b.addEventListener("click", () => {
  if (!inp1.checkValidity()) {
    a.innerHTML = inp1.validationMessage;
  } 
  else {
    a.innerHTML = "Input OK";
  } 
})

// validity	Contains => boolean properties related to the validity of an input element.
// validationMessage =>	Contains the message a browser will display when the validity is false.
// willValidate	 => Indicates if an input element will be validated.
// customError => Set to true, if a custom validity message is set.
// patternMismatch => Set to true, if an element's value does not match its pattern attribute.
// rangeOverflow => Set to true, if an element's value is greater than its max attribute.
// rangeUnderflow => Set to true, if an element's value is less than its min attribute.
// stepMismatch	=> Set to true, if an element's value is invalid per its step attribute.
// tooLong => Set to true, if an element's value exceeds its maxLength attribute.
// typeMismatch =>	Set to true, if an element's value is invalid per its type attribute.
// valueMissing	=> Set to true, if an element (with a required attribute) has no value.
// valid => Set to true, if an element's value is valid.