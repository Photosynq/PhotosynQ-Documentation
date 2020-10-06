# Signal Intensities

When taking measurements, the signal intensity is an important factor. Automatic gain control (auto-gain) can be used to automatically set `pulse_length` and `intensity` to receive a good signal intensity.

## Defining an Auto-Gain

First step is to setup an auto-gain control in a protocol. The following parameters have to be defined:

| Parameter        | Type  | Description                                                              |
| :--------------- | :---: | :----------------------------------------------------------------------- |
| index            | `int` | Select an index number to access the gain settings in the protocol (0-9) |
| led              | `int` | Select the LED used for auto-gain                                        |
| detector         | `int` | Select the detector used for auto-gain                                   |
| pulse length     | `int` | Define the duration of the pulse (in µs)                                 |
| target intensity | `int` | Define the target intensity (0-65,535)                                   |

```javascript
"autogain": [
    [ <index>, <led>, <detector>, <pulse length>, <target intensity> ]
]
```

::: tip
Find the protocol command documentation [here](./commands.md#autogain).
:::


### Defining Multiple Auto-Gains

Multiple auto-gains can be used inside a protocol, depending on the number of lights and detector combinations used. Up to 10 auto-gain settings can be defined.

```javascript
  {
    "autogain": [
      [ 1, 3, 1, 30, 3000 ],
      [ 2, 4, 1, 30, 5000 ],
      ...
    ]
}
```

::: warning Note
Always make sure, that the index used for each gain is unique. There is no error checking on the Instrument side.
:::

## Applying Auto-Gain Values

When `autogain` is defined in a protocol, for each auto-gain the variables `auto_duration<index>` and `auto_bright<index>` will be return and can be used to set the `pulse_length` and `pulsed_lights_brightness`.

To access the output for the `autogain` with the index `2`, the variables would be `auto_duration2` and `auto_bright2`.

```javascript
"pulse_length": [
    [ "auto_duration<index>" ], ...
]

"pulsed_lights_brightness": [
    [ "auto_bright<index>" ], ...
]
```

## Code Example

```javascript
  {
    "autogain": [
      [ 1, 3, 1, 30, 3000 ]
    ],
    "pulse_length": [
      [ "auto_duration1" ]
    ],
    "pulsed_lights": [
      [ 3 ]
    ],
    "pulsed_lights_brightness": [
      [ "auto_bright1" ]
    ],
    "detectors": [
      [ 1 ]
    ]
}
```
