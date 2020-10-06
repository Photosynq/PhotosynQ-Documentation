# User Interaction

Protocols allow different types of user interactions. In the previous chapter the open and close state of the MultispeQ's leaf clamp was used to control the [Protocol Flow](./flow-control.md) including the protocol start and/or resume after a break during a running Protocol. The commands `alert` and `prompt` allow to control the flow as well, using the Application instead of the MultispeQ's leaf clamp. The resulting popup dialogs can provide additional information and even allow for user input that is available to the Protocol's Macro after the measurement is done.

::: warning Note
Currently `alert` and `prompt` are only supported by the Desktop Application!
:::

## Alert

Alerts are interrupting a running Protocol and displaying a popup dialog with a message to the user. The user can confirm the dialog by selecting the **OK** button and the Protocol resumes.

### Code for Alert

```javascript
"alert": "Alert message to the user",
```

::: tip Handling Double Quotes
When your message is containing a double quotes, they must be escaped using a backslash before the double quote `\"`, e.g. `"alert": "A \"Word\" in quotes"`. When displayed, the text will be shown with regular quotes (`A "Word" in quotes`).
:::

### Protocol Output - Alert

Alerts will return a key `message` with an array containing **three** elements. The fist one is the type of message, in this case `alert` and the second one the message displayed to the user and the third one with the string `ok`.

```javascript
json.message["alert", "Alert message to the user", "ok"],
```

## Prompt

Like alerts, prompts are also interrupting a running Protocol and displaying  a popup dialog with a message. But in addition to the message, the dialog also contains an input field, that allows for any user input. When **OK** is selected, the Protocol resumes and the returned value is the user input, when **Cancel** is selected, the Protocol resumes and the returned value for the prompt is `cancel`.

### Code for Prompt

```javascript
"prompt": "Prompt message to the user",
```

### Protocol Output - Prompt

Alerts will return a key `message` with an array containing **three** elements. The fist one is the type of message, in this case `prompt` and the second one the message displayed to the user and the third one with the user input.

```javascript
// The user input is: Hello World
json.message["prompt", "Prompt message to the user", "Hello World"],

// The user input is: 1
json.message["prompt", "Prompt message to the user", "1"],

// The user clicking ok without an input
json.message["prompt", "Prompt message to the user", ""],

// The user clicking on cancel
json.message["prompt", "Prompt message to the user", "cancel"],
```

::: tip User Input Handling
Find more on how to handle the user input in a Macro in the Chapter [Sanitize User Input](../macros/sanitize-user-input.md).
:::
