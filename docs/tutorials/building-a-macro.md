# Building a Macro

### Why do PhotosynQ measurements require Protocols and Macros?

On the PhotosynQ platform, we use **Protocols** to provide specific measurement instructions to the Instrument, such as the MultispeQ. Every time a measurement is taken, the Protocol is sent to the Instrument, and the results are sent back.

You can choose to attach a **Macro** to a Protocol. Macros are used to make calculations after a measurement has been taken. Not every measurement requires post processing (e.g. a simple temperature measurement), but if you want to calculate a parameter from the measurement **Trace** or want to compare parameters (e.g. ambient temperature vs. leaf temperature), a Macro will calculate the parameters of interest and display the results instantly on your mobile device (e.g. a phone).

![The steps involved in taking a measurement](./images/protocols-macros-workflow.jpg)

### How do Macros work

Macros are small snippets of code, which run calculations based on your measurements. They are written in the popular script language [JavaScript][JavaScript_URL].

### Before you Get Started

In order to build your first Macro, make sure you have the [Desktop App] installed. You will also need a Protocol with an output that you want to analyze. In this example, we will take the Protocol from the Tutorial as a basis for this Macro.

1. Select **Macros** from the menu and click on `+ New`
2. Select your measurement by searching your `Notebook`
3. Now you are ready to start coding…

### Calculating Photosystem II efficiency

In the previous tutorial we built a protocol to measure photosystem II efficiency. Now we can build a simple macro to automatically calculate it every time you take a measurement.

#### Initial Code

```javascript
/**
 * Macro for data evaluation on PhotosynQ.org
 * by: John Doe
 * created: June 4, 2018 4:00 PM
 */

 // Define the output object here
var output = {};

// Check if the key time exists in json
if (json.time !== undefined){
    // Add key time and value to output
    output.time = json.time;
}

// Return data
return output;
```

#### Accessing the recorded Trace

In order to calculate the parameters **Fs** (steady state fluorescence) and **Fmp** (maximum fluorescence), you have to access the recorded fluorescence trace. The Macro editor allows you to select the regions, by using the graph of the trace. In the example below, check range and select the region of interest. Then click on the <i class="fa fa-arrows-h"></i> icon to add the selected range into your code, `json.data_raw.slice(63,68)` in this case. We use the already pre-defined method `MathMEAN( array )` from the Function Menu to calculate the mean of the values in the selected range.

![Selecting a range of values using the Macro editor](./images/macros-building-a-macro.png)

```javascript
var fs = MathMEAN(json.data_raw.slice(1,5));
var fmp = MathMEAN(json.data_raw.slice(63,68));
```

#### Deriving values and adding them to the output

Now we can calculate Phi2 and LEF. For LEF we also need the light intensity. We can insert the light intensity by selecting `light_intensity` from the variables in the top menu.

##### Equations

(1) $\phi_{II} = \frac{ Fm' - Fs}{Fm'}$

(2) $LEF = \phi_{II} \times PAR \times 0.4$

##### Equations as Code

```javascript
var phi2 = (fmp-fs)/fmp;
var lef = phi2 * json.light_intensity * 0.4;
```

#### Defining the Macro Output

Finally we can return the results by adding the calculated values to the `output` object.

```javascript
output['Fs'] = fs;
output['Fmp'] = fmp;
output['Phi2'] = phi2;
output['LEF'] = lef;
output['PAR'] = json.light_intensity;
```

### The Final Macro

```javascript
/**
 * Macro for data evaluation on PhotosynQ.org
 * by: John Doe
 * created: June 4, 2018 4:00 PM
 */

//Define the output object here
var output = {};

var fs = MathMEAN(json.data_raw.slice(1,5));
var fmp = MathMEAN(json.data_raw.slice(63,68));

var phi2 = (fmp-fs)/fmp;
var lef = phi2 * json.light_intensity * 0.4;

output['Fs'] = fs;
output['Fmp'] = fmp;
output['Phi2'] = phi2;
output['LEF'] = lef;
output['PAR'] = json.light_intensity;

//Return data
return output;
```

**Output**

    Fs = 5817.25
    Fmp = 13056.6
    Phi2 = 0.554
    LEF = 3.770
    PAR = 17

[JavaScript_URL]: https://www.w3schools.com/js/
[Desktop App]: https://chrome.google.com/webstore/detail/photosynq/mdbljehgiahgijmaeehfigldmmaofilg