# Protocol Commands

The listed commands can be used to build measurement protocols. Some commands require a specific firmware version or Instrument. Make sure to check, if the commands that being used, are compatible.

## Available Commands

### \_protocol\_set\_

Treating protocols as integrated sets.

Protocols are separate units which produce separate data sets. Using `_protocol_set_`, multiple protocols can be chained together into one protocol.

**Note:** This is different from chaining protocols together in a project. There, the protocols are still separate units within a measurement.

**Input:** [array]

**Example:**

```javascript
"_protocol_set_": [
   { Protocol 1 },
   ...
],
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### autogain

The `autogain` function is added to the main section of the protocol. Multiple `autogain` functions can be run in a single protocol, and the indexed values should be useable throughout the experiment.

`<index>` which index to store gain settings (0-9)
`<pulsed_LED>` which pulsed LED to test (0-9)
`<detector>` which detector to use (0-3)
`<pulse_duration>` what duration to use (in microseconds) (1-200)
`<target_value>` what target value to use (0-65535, recommended: 40000-50000)

**Input:** nested array

**Example:**

```javascript
"autogain": [
  [<index>, <pulsed_LED>, <detector>, <pulse_duration>, <target_value>],
  ...
],
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### averages

`averages` sets the number of times to average the protocol. The protocol will be repeated equal to the number of averages, and the resulting data will be averaged and outputted as a single data point. Averaging is often used to reduce noise and improve the quality of measurements.

**Input:** [number]

**Values:**

+ 0 - 10000

**Example:**

```javascript
"averages": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### averages\_delay

`averages_delay` defines the delay between protocol averages in in milliseconds (ms).

**Input:** auto

**Values:**

+ 0 - 9999999999

**Example:**

```javascript
"averages_delay": <number>,
```

**Dependencies:**

+ averages

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### dac\_lights

When `dac_lights` is set to 1, `pulsed_lights_brightness` and `nonpulsed_lights_brightness` settings will be interpreted by the device as 12-bit values (0 - 4095) directly controlling the LED voltage (via the DAC), instead of microEinsteins (µE * s⁻¹ * m⁻²).  This is used during factory calibration.

**Note:** Setting brightness to high using raw DAC values could permanently disable LEDs, so be careful!

**Input:** [number]

**Values:**

+ 0, 1

**Example:**

```javascript
"dac_lights": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### detectors

`detectors` defines which detectors are being measured, and in what order.  The chosen `meas_light` supplies the light source to be measured. The detector measurement is recorded in "data_raw" in the data received from the MultispeQ, which is then graphed for the user.  When `detectors` is set to 0, no detector is read and responses will be recorded as zero.

**Input:** nested array

**Values:**

+ 0 - 4

**Example:**

```javascript
"detectors": [
  [ <detector> ],
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_length
+ pulse_distance
+ pulsed_lights
+ pulsed_lights_brightness

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### energy\_save\_timeout

Adjusting Energy Save Timeout Time. The value of time is in milliseconds, and must be between zero and 10^6 milliseconds. This setting changes the energy_save_timeout time to prevent interference from the requirement for a 7 second wake up time from power save mode.

**Important:** Note that the change in `energy_save_timeout` will remain in effect until the instrument is reset, when it will return to the default value of 120 s.

**Input:** [number]

**Values:**

+ 0 - 10^6

**Example:**

```javascript
"energy_save_timeout": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### environmental

`environmental` defines which additional sensor(s) to measure. The environmental calls occur at the very beginning of the measurement, prior to any pulses. Some sensors require additional information, like specifying which pin to measure, brightness, etc. In addition to sensor measurements, there are also calls to flip digital pins on/off or set a pwm which could be used to control external lights or even motors. Below is the full list of parameters available in `environmental`.

The returned sensor values from most `environmental` calls are accessible inside a protocol using Expressions ([details](https://github.com/Photosynq/PhotosynQ-Firmware/wiki/How-to-use-Expressions)). Adjusting protocols in real time based on these values can be very handy for certain types of protocols.

**Input:** nested array

**Example:**

```javascript
"environmental": [
  [ <sensor> ],
  ...
],
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### environmental\_array

`environmental_array` defines additional sensors or functionality, just like `environmental`.  However, `environmental_array` returns sensor data once per pulse, as defined in `pulses`.  This allows a string of sensor measurements to be used in a single macro.  The advantage is you can calculate and return in real time things like rates of change, minima and maxima, etc.  See examples for details.  **Note:**  `pulsed_lights_brightness` must NOT be set to zero for any given pulse set for the sensors set in `environmental_array` to measure.

**Input:** nested array

**Example:**

```javascript
"environmental_array": [
  [ <number> ],
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_length
+ pulse_distance
+ pulsed_lights
+ pulsed_lights_brightness

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### ir\_baseline

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### label

Each protocol or sub-protocol can now output a `label` that can be used to indicate something about the protocol, conditions etc.

**Input:** [string]

**Example:**

```javascript
"label": <string>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### max\_hold\_time

This parameter sets the time (in ms) at which the hold commands timeout. The default value is 15000, or 15 seconds. This value applies to the following control points: `start_on_open`, `start_on_close`, `start_on_open_close`.

**Input:** [number]

**Example:**

```javascript
"max_hold_time": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### measurements

number of times to repeat a measurement, which is a set of protocols

**Example:**

```javascript
"measurements": <number>
```

*Last Updated: July 1, 2019*

***

### measurements\_delay

delay between measurements in milliseconds

**Example:**

```javascript
"measurements_delay": <number>
```

*Last Updated: July 1, 2019*

***

### message

`message` sends text to the user between pulse sets, and waits for a response before proceeding. Set &lt;message type&gt; to "0" to not send a message. `message` should have the same length as `pulses`.

**Input:** nested array

**Values:**

+ `alert` - message with an OK button + `prompt` - message with an OK and Cancel button + `confirm` - message with an OK and Cancel button and text input box

**Example:**

```javascript
"message": [
  [ <message type>, <message> ],
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_length
+ pulse_distance

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### nonpulsed\_lights

`nonpulsed_lights` defines which lights are not pulsed (always on) during a pulse set, and in what order.

**Input:** nested array

**Values:**

+ 0 - 10

**Example:**

```javascript
"nonpulsed_lights": [
  [ <number> ],
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_distance
+ pulse_length
+ nonpulsed_lights_brightness

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### nonpulsed\_lights\_brightness

`nonpulsed_lights_brightness` sets the brightness in microEinsteins (µE * s⁻¹ * m⁻²) of the nonpulsed lights.

**Input:** nested array

**Values:**

+ 0 - 15000

**Example:**

```javascript
"nonpulsed_lights_brightness": [
  [ <number> ],
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_distance
+ pulse_length
+ nonpulsed_lights

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### number\_samples

`number_samples` sets the number of samples taken by the ADC (analog to digital converter) on the sample and hold circuit. The median value of these samples is then saved as a single detector value in "data_raw".  The ADC is used to measure the detectors (1 - 4).  This value is already set to the optimum value, and most signal noise comes from other source, but in certain cases increasing the value may yield improved signal.

**Input:** [number]

**Values:**

+ 1 - 500

**Example:**

```javascript
"number_samples": <number>,
```

**Dependencies:**

+ pulses
+ pulse_length
+ pulse_distance
+ detectors

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### open\_close\_start

When `open_close_start` is set to 1, the protocol waits until the user fully opens the clamp and closes the clamp before proceeding.  Also works if the clamp starts fully open and then closes.  Open and close is detected using the Hall effect sensor on the main body and magnet on the clamp (same sensor used to determine sample thickness).  If the device is not calibrated, or calibration is off, or the clamping mechanism does not fully open or close, this function will not work.  Calibration details can be found by typing print_memory into the console - see thickness_a, thickness_b, thickness_c, thickness_min, and thickness_max for relevant calibration values.

**Input:** [number]

**Values:**

+ 0, 1

**Example:**

```javascript
"open_close_start": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### par\_led\_start\_on\_close

The Ambient light is recreated inside the instrument on closing the clamp. During the hold time, the ambient light is resampled in ~100 ms intervals and the LED output is adjusted to match. When the hold event occurs (e.g. the clamp is closed), the final ambient intensity and LED setting are held and used in the protocol. The number for the LED is defining the LED used for matching the ambient light intensity.

**Input:** [number]

**Example:**

```javascript
"par_led_start_on_close": <number for LED>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### par\_led\_start\_on\_open

The Ambient light is recreated inside the instrument on opening the clamp. During the hold time, the ambient light is resampled in ~100 ms intervals and the LED output is adjusted to match. When the hold event occurs (e.g. the clamp is closed), the final ambient intensity and LED setting are held and used in the protocol. The number for the LED is defining the LED used for matching the ambient light intensity.

**Input:** [number]

**Example:**

```javascript
"par_led_start_on_open": <number for LED>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### par\_led\_start\_on\_open\_close

The Ambient light is recreated inside the instrument on opening the clamp. During the hold time, the ambient light is resampled in ~100 ms intervals and the LED output is adjusted to match. When the hold event occurs (e.g. the clamp is closed), the final ambient intensity and LED setting are held and used in the protocol. The number for the LED is defining the LED used for matching the ambient light intensity.

**Input:** [number]

**Example:**

```javascript
"par_led_start_on_open_close": <number for LED>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### protocols

`protocols` sets the number of times to repeat the protocol. Unlike `averages`, this outputs data every time the protocol is repeated (instead of averaging the repeats and outputting data only once).

**Input:** [number]

**Values:**

+ 0 - 999999999

**Example:**

```javascript
"protocols": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### protocols\_delay

`protocols_delay` defines the delay between protocol repeats in in milliseconds (ms).

**Input:** auto

**Values:**

+ 0 - 9999999999

**Example:**

```javascript
"protocols_delay": <number>,
```

**Dependencies:**

+ protocols

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### pulse\_distance

`pulse_distance` defines the distance, in microseconds (µs) between pulses.

**Input:** [array]

**Values:**

+ 750 - 999999999999

**Example:**

```javascript
"pulse_distance": [
  <number>,
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_length
+ pulsed_lights
+ pulsed_lights_brightness

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### pulse\_length

`pulse_length` defines the length, in microseconds (µs), of a pulse.

**Input:** nested array

**Values:**

+ 1 - 150

**Example:**

```javascript
"pulse_length": [
  [ <number> ],
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_distance
+ pulsed_lights
+ pulsed_lights_brightness

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### pulsed\_lights

`pulsed_lights` defines which lights are pulsed, and in what order. When set to 0, no lights are pulsed and no readings are recorded (see Example section here for details).

**Input:** nested array

**Values:**

+ 0 - 10

**Example:**

```javascript
"pulsed_lights": [
  [ <number> ],
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_distance
+ pulse_length
+ pulsed_lights_brightness

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### pulsed\_lights\_brightness

`pulsed_lights_brightness` sets the brightness in microEinsteins (µE * s⁻¹ * m⁻²) of the pulsed lights.

**Input:** nested array

**Values:**

+ 0 - 15000

**Example:**

```javascript
"pulsed_lights_brightness": [
  [ <number> ],
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_distance
+ pulse_length
+ pulsed_lights

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### pulses

`pulses` defines the number of pulse sets, and quantity of pulses per set.

**Input:** [array]

**Values:**

+ 1 - 8000

**Example:**

```javascript
"pulses": [
  <number>,
  ...
],
```

**Dependencies:**

+ pulse_distance
+ pulse_length
+ pulsed_lights
+ pulsed_lights_brightness

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### recall

This command returns values from the device memory (EEPROM). This includes values saved by the user (see Examples below for details) as well as values saved during factory calibration.  For a full list of saved values which can be recalled, see expr.cpp .  Expressions may be applied to "recall" requests ([more](https://github.com/Photosynq/PhotosynQ-Firmware/wiki/How-to-use-Expressions)).

**Input:** [array]

**Example:**

```javascript
"recall": [
  "userdef[<location>]",
  ...
],
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### reference

The MultispeQ is designed to be able to nearly simultaneously measure two detectors (within ~4µs), normalize and subtract the two signals from each other. This can be useful if there is a optical, electronic (interference), or LED (heating) artifact that needs to be removed.  `reference` specifies another detector to be measured and subtracted from `detectors`.

 **Note:** It is possible to add two additional detector circuits to the device, on the main body and clamp circuit boards. The devices come unpopulated by default. If added, these two additional detectors are available by settings `detectors` or `reference` to 2 (main body) or 4 (clamp). These can then also be used as reference or main detectors.

**Input:** nested array

**Values:**

+ 1 - 4

**Example:**

```javascript
"reference": [
  [ <detector> ],
  ...
],
```

**Dependencies:**

+ pulses
+ pulse_length
+ pulse_distance

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### save

This command saves a value to a location in the device memory (EEPROM). Expressions can be used on the saved values ([more](https://github.com/Photosynq/PhotosynQ-Firmware/wiki/How-to-use-Expressions)).

**Input:** nested array

**Example:**

```javascript
"save": [
  [ <location, <value> ],
  ...
],
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### save\_trace\_time\_scale

Saving Time Scale Values. Setting the value to 0 will inactivate the function (preset), setting it to 1 will activate the function. If activated `data_raw_time` will be added to the measurement, containing the timing information.

**Input:** [number]

**Values:**

+ 0 + 1

**Example:**

```javascript
"save_trace_time_scale": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_led\_delay

Pre-illuminating a sample. It is often useful to pre-illuminate a sample at a given light intensity, for a given amount of time.

**Input:** nested array

**Example:**

```javascript
"set_led_delay": [
  [ <number LED>, <number duration in ms>, <number PAR> ],
  ...
],

// The following example gives two,
// 20 second pre-illuminations with the red LED (#2),
// the first at 0 µE * s⁻¹ * m⁻² and the second at 100 µE * s⁻¹ * m⁻²:

"set_led_delay": [
  [2, 20000,0],
  [2, 20000,100]
],

```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_light\_intensity

Instead of measuring the ambient light intensity, use `set_light_intensity` to set a fixed light intensity. Use the parameters `light_intensity` or `previous_light_intensity` to use the defined light intensity.

**Note:** Instead of defining the light intensity for each pulse set use `set_light_intensity` to only have one place to change the light intensity.

**Input:** [number]

**Example:**

```javascript
"set_light_intensity": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### start\_on\_close

If set to 0, the command will be ignored. If set to 1, will wait until the clamp is closed, then proceed with the rest of the experiment.

**Input:** [number]

**Values:**

+ 0 + 1

**Example:**

```javascript
"start_on_close": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### start\_on\_open

If set to 0, the command will be ignored. If set to 1 or higher, it will wait until the clamp is opened, then proceed with the rest of the experiment.

**Input:** [number]

**Values:**

+ 0 + 1

**Example:**

```javascript
"start_on_open": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### start\_on\_open\_close

If set to 0, the command will be ignored. If set to 1, will wait until the clamp is opened then closed, then proceed with the rest of the experiment.

**Alias:** `open_close_start`

**Example:**

```javascript
"start_on_open_close": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### adc\_show <Badge text="deprecated" type="error"/>

When "adc_show" is 1, the readings taken by the ADC (analog to digital converter) on the sample and hold circuit are outputted in "data_raw" instead of the normal output.  No other output is recorded, and only the last set of adc readings is shown (all other readings are not outputted).  By default there are 19 samples, but this can be changed using "number_samples".

**Input:** [number]

**Values:**

+ 0, 1

**Example:**

```javascript
"adc_show": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### energy\_min\_wake\_time <Badge text="deprecated" type="error"/>

The value of time is in milliseconds, and must be between zero and 10^6 milliseconds. This setting changes the delay between shutting off the 5V (following `energy_save_timeout`) and the wake up time. The `energy_min_wake_time` is needed to prevent brown out following the initiation of energy save.

**Important:** Note that the change in `energy_min_wake_time` will remain in effect until the instrument is reset, when it will return to the default value of 10 s.

**Input:** [number]

**Values:**

+ 0 - 10^6

**Example:**

```javascript
"energy_min_wake_time": <number>,
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

[array]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
[number]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[object]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[string]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[boolean]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

