# Coding and Functions

## Basic Guidelines

+ Document your steps inside the code so others can easily understand your workflow as well.
+ Make sure that the code is fast and efficient.
  + **Time:** The runtime of your calculations (script) in milliseconds (maximum is 2000 ms).
  + **Size:** The size is shown in kilobytes (kb). Even though currently there is no limit, try to keep it small, in the interest of future analysis of large data sets.
  + **Elements:** The number of parameters returned. Keep this to the necessary ones, otherwise it can become quite overwhelming when viewing the data.
+ Make use of provided functions for a faster development.
+ Test your code with more than one measurement and make sure issues are captured to prevent the script from failing before it finishes.

::: warning Note
Try to make your code efficient, since it can be used to evaluate several thousand measurements in a row.
:::

## Code Structure

```javascript
/**
 * Macro for data evaluation on PhotosynQ.org
 * by: John Doe
 * created: June 25, 2018 1:37 PM
 */

// Define the output object here
var output = {};

/* Your Code goes here */

// Return data
return output;
```

**Basic Requirements:**

+ The variable `output` is needed, as well as the `return output` statement at the end.
+ Add a new parameter to your Macro output using: `output['New Parameter'] = "Hello World"`
+ To access parameters from your Measurement use the **Variables** Menu. Variables selected will look like this: `json.variable` in the code.
+ Use the `Raw Trace` in the upper right corner to select a subsection of your trace if available.

## Helper Functions

Some functions are needed over and over again, like calculating the average, finding the maximum, etc. Just pick the function you need from the functions menu and it will get inserted at the position of your cursor into your code.

```javascript
// Calculate the mean from an array
var values = [1,2,3,4,5,6];
output['Mean'] = MathMEAN(values);
```

### Order Parameters

Sometimes you have multiple parameters calculated. To show the most important parameters first, select **Order Parameters** from the functions Menu. It will insert a piece of code like this:

```javascript
// Parameter order
output["order"] = ["P1","P3","P2"];
```

Just replace `P1`, `P2`, etc. with the names of the parameters you want to be ordered and appear on top of the list. Not all parameters need to be listed here.

### Show additional Traces

The recorded trace `json.data_raw` will be shown with a measurement. In case you would like to show some extra traces based on your calculations, just add an array to your output parameters. This array need _more than 4 values_ to be shown as a spark-line.

```javascript
// Add a trace to macro output
output["Additional Trace"] = [1,3,4,90,87,50,3,2,1,2,7,…];
```

### Show Colors

Sometimes representing a value as a color is more useful than a plain number. These three options are available:

+ Hexadecimal: `#3498AB`
+ RGB (Red, Green, Blue): `rgb(52, 152, 171)` (values from 0 to 255)
+ RGBA (Red, Green, Blue, alpha): `rgba(52, 152, 171, 0.5)` (values from 0 to 255), (alpha 0 to 1)

```javascript
// Color in Hexadecimal
output['Your Parameter'] = '#3498AB';

// Color in RGB
output['Your Parameter'] = 'rgb(52, 152, 171)';

// Color in RGBA
output['Your Parameter'] = 'rgba(52, 152, 171, 0.5)';
```

### Return Feedback

If people take measurements in the field, they might run into quality issues, they cannot identify right away. Based on calculations you can add messages to alert users, that they might have to repeat the measurement. Three types of messages are available:

+ **Info**: Just give users some feedback on the measurement (color:blue)
+ **Warning**: Give users a warning, that there might be something wrong and they should take a closer look (color: yellow)
+ **Danger**: Use this message, when you think something went terribly wrong. In the future, measurements containing this message will be flagged as bad data points automatically. (color:red)
+ Try to be short and precise.

```javascript
// Info message
info('Your message text',output);

// Warning message
warning('Your message text',output);

// Danger message
danger('Your message text',output);
```

## Restrictions

Some of the functions available in JavaScript are not allowed to be used in macros, like functions that require a user response like `alert`, `confirm` and `prompt`. Also overwriting existing functions, as well as extending the prototype library `$.prototype` is forbidden.

[JavaScript_URL]: https://www.w3schools.com/js/

[Desktop App]: https://photosynq.com/software
