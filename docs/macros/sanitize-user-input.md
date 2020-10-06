# Sanitize User Input

When using the `prompt` command in your Protocol you want to make sure that the user input is handled properly in your Macro. To avoid the Macro to fail, add clear instructions on what input you expect into the message as well as sanitize the received user input before processing it further.

The returned message for `prompt` and also `alert` is an `Array` with 3 items.

```javascript
// The message Array returned by the Protocol commands prompt or alert
[
    "prompt",           // Type of dialog "prompt" or "alert"
    "Prompt Message",   // The message displayed in the popup dialog
    "User Input"        // The returned user input
]
```

## Strings

When a `string` is expected, make sure to trim white spaces since some users might accidentally add one in front or behind their input. Also some users might use a different case than expected. You can use the JavaScript [trim](https://www.w3schools.com/jsref/jsref_trim_string.asp) method to remove unwanted white spaces and the [toLowerCase](https://www.w3schools.com/jsref/jsref_tolowercase.asp) method, to avoid case related issues.

```javascript
// The json.message content is an array linke:
// ["prompt", "Prompt message to the user", "Hello World"]

var message = json.message[2];

// Sanitize the string
message = message.trim().toLowerCase();

if( message == "hello world"){
    ...
}
else{
    ...
}

```

## Numbers

When the user is inputting a `number` it will still be returned as a string by the instrument. So you want to test if it is a `number` that is returned before moving on. You can use the JavaScript [isNaN](https://www.w3schools.com/jsref/jsref_isnan_number.asp) to test if the string is a number and use the method [Number](https://www.w3schools.com/jsref/jsref_obj_number.asp) to parse the string as a `number` for further use.

```javascript
// The json.message content is an array linke:
// ["prompt", "Prompt message to the user", "1"]

var message = json.message[2];

// Test if Input is not an empty string and if the string is a number
if( message !== "" && !isNaN( message ) ){
    // Parse message as Number
    message = Number(message)
}
else{
    ...
}
```

::: warning Note
It is important to parse the user input as a number when a number is expected, because `1+"1"` would return `11` and not `2`!
:::

## No Input or Cancel

It is important to test for these these two cases as well. If the user is selecting **cancel**, the returned string will be cancel, so a simple if statement should suffice. The same is true for the user selecting **ok**, but not providing any more information

```javascript
var message = json.message[2];

// Test if Input is an empty string and if the string is "cancel"
if( message == "" || message == "cancel" ){
    // Do something here
}
else if (...){
    // Continue if the input can be used further
}

```
