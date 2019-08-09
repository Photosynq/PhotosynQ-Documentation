# Mathematical Expressions

Simple Mathematical Expressions allow you to perform basic math using `+`, `-`, `/`, `*`, `( )` including values from sensors or from the Instruments memory within a Protocol.

## Compatibility

Not all commands that except numerical values or sensors can be used with mathematical expressions. Please carefully test if the equations work and give you the desired results.

### Sensors <Badge text="Beta" type="warning"/>

+ `light_intensity`
+ `previous_light_intensity`
+ `thickness`
+ `thickness_raw`

### Commands <Badge text="Beta" type="warning"/>

+ `pulse_length`
+ `pulse_distance`
+ `pulsed_lights_brightness`
+ `non_pulsed_lights_brightness`

## Examples

### Change the light intensity

If you are interested in changing the measured ambient light intensity you can, for example, double the intensity as it is shown in the example for the command `non_pulsed_lights_brightness`.

```javascript
...
	"non_pulsed_lights_brightness": [
		["light_intensity"]
		["light_intensity*2"],
		...
	],
	"environmental": [
		["light_intensity"]
	]
...
```

### Calculate ℉ from ℃

This example shows, how the contact-less temperature measurement can be converted from Celsius (℃) to Fahrenheit (℉) within the protocol, so the value returned by the Instrument is already in Fahrenheit.

```javascript
...
	"environmental": [
		["(1.8*contactless_temp)+32"]
	]
...
```

::: warning Recommendation
The conversion of units serves just as an example. You can do such a conversion in a Macro for the Protocol, offering you more flexibility!
:::
