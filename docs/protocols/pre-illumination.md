# Sample Pre-Illumination

It is often useful to pre-illuminate a sample at a given light intensity, for a given amount of time. The `pre_illumination` command allows to select a LED and use it for sample illumination for a set time at a certain light intensity in PAR (µE × s⁻¹ × m⁻²).

::: warning Note
Be aware, that the PAR values only work for LEDs with an emission peak between 400nm and 700nm. All other LEDs are not calibrated to be used with PAR values.
:::

## Single LED

To pre-illumination the sample using a single LED an Array with three items is used, defining the:

+ **LED** - The number of the LED used for the illumination
+ **Duration** - The duration of the illumination in milliseconds [ms]
+ **Intensity** - The light intensity as PAR. Only integers are allowed (i.e. `100` not `100.5`)

```javascript
"pre_illumination": [ <led>, <intensity>, <duration> ]
```

## Multiple LEDs

In some cases, you want to use multiple LEDs, just use an Array of Arrays as shown for a single LED.

```javascript
"pre_illumination": [
  [ <led>, <intensity>, <duration> ],
  [ <led>, <intensity>, <duration> ],
  ...
]
```

## Example

Pre-Illumination with red actinic light (~650nm) for 10 minutes using a MultispeQ v2.0 at 200 µE × s⁻¹ × m⁻².

```javascript
[
  {
    "_protocol_set_": [
      {
        "label": "Pre-Illumination",
        "pre_illumination": [2, 200, 600000]
      }
    ]
  },
  {
    ...
  }
]
```
