# Light Intensity (PAR)

The PAR Sensor (**P**hotosynthetically **A**ctive **R**adiation) is detecting and recording the ambient radiation between 400nm and 700nm in µmol photons × s⁻¹ × m⁻² using the `light_intensity` command (see [previous chapter](./sensors.md)). But in contrast to the other sensors, the PAR sensor can also be used to control the light intensity output of all LEDs that have an emission peak within the PAR range. Three commands, `light_intensity`, `previous_light_intensity` and `set_light_intensity` are available to allow flexible control of the LED light intensity when using the PAR sensor.

## Ambient Light Intensity

To replicate the ambient light intensity using the MultispeQ's LEDs, the ambient light intensity needs to be read from the PAR sensor and used as a setting for the intensity of the non pulsed lights.

To measure the ambient light intensity just add the `light_intensity` command to the protocols `environmental` array.

```javascript
"environmental": [
    [ "light_intensity" ],
    ...
],
```

Then the light intensity can be set for the non pulsed lights in the `nonpulsed_lights_brightness` array, using the `light_intensity` command.

```javascript
"nonpulsed_lights": [
    [ 2 ],
],
"nonpulsed_lights_brightness": [
    [ "light_intensity" ], ...
],
```

This works for simple Protocols, as well as advanced Protocols using the `_protocol_set_` command.

## Previous Light Intensity

When using the `light_intensity` command to set the light intensity for a non pulsed light, with multiple protocols in a `_protocol_set_`, in each protocol the intensity also needs to measured, using the `light_intensity` command with the `environmental` array. In a longer running protocol, this would result in a fluctuating light intensity, especially when taking measurements outside. If the initially measured light intensity, is supposed to be used throughout the `_protocol_set_`, instead of `light_intensity`, `previous_light_intensity` can be used to set the non pulsed light intensity.

```javascript

"_protocol_set_": [
    {
        // First Protocol in the set, measuring the light intensity
        "environmental": [
            [ "light_intensity" ],
            ...
        ],
        "nonpulsed_lights": [
            [ 2 ],
        ],
        "nonpulsed_lights_brightness": [
            [ "light_intensity" ], ...
        ],
    },
    {
        // Second Protocol in the set, using the previous light intensity
        "nonpulsed_lights": [
            [ 2 ],
        ],
        "nonpulsed_lights_brightness": [
            [ "previous_light_intensity" ], ...
        ],
    }
]
```

### Light Intensity Update

The value for `previous_light_intensity` is updated whenever the following commands are used:

+ `light_intensity` within the `environmental` array
+ `par_led_start_on_open`, `par_led_start_on_close` and `par_led_start_on_open_close` with the Protocol flow control

::: warning Note
If the light intensity was never measured using the `light_intensity` command in the `environment` array, `previous_light_intensity` will return zero.
:::

## Set Light Intensity

Instead of using the light intensity reading from the PAR sensor, you can also manually set the light intensity using the command `set_light_intensity`. This becomes useful when a certain light intensity should be used rather then using the measured ambient. In this case, the commands for `light_intensity` and `previous_light_intensity` together with non pulsed lights will use the value defined in `ser_light_intensity` instead of the sensor reading.

In the following example, the light intensity is set to PAR value of 500 µE × s⁻¹ × m⁻².

```javascript
"set_light_intensity": 500,   //(requires one integer, not a float)
"nonpulsed_lights": [
    [ 2 ],
],
"nonpulsed_lights_brightness": [
    [ "light_intensity" ], ...
],
```
