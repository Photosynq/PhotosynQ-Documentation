# Console Commands

Using the Console in the Desktop application, you can use these commands to directly communicate with the Instrument. It allows to change settings and display informations, which are mostly only for advanced users or developers. When working with the console and these commands, be careful!

::: warning
**Note:** Some of the commands will introduce changes without warning, which could cause the Instrument to malfunction.
:::

## Command Switches

**Silent:** `s+`  Sets command console in silent mode. Commands will not send back queries for user input.  s+ will remain in effect until reset or user enters `v+`

**Verbose:** `v+` Sets command console in verbose mode. When available, commands will send back queries for user input.  v+ will remain in effect until reset or user enters `s+`

## Available Commands

### 1053

Continuous feed of roll, pitch, compass, direction, tilt and tilt direction. Cancel the command with `-1+`

**Example:**

```bash
1053
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### any\_light

**Example:**

```bash
any_light
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### battery

Test the instruments battery with load returning the charge state in percent (%)

**Example:**

```bash
battery
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### compiled

Returns date and time for when the Firmware was compiled.

**Example:**

```bash
compiled
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### configure\_bluetooth

Set the bluetooth name and baud rate

**Example:**

```bash
configure_bluetooth
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### device\_info

Receive information from the Instrument, including name, version, id, battery level, firmware and configuration.

**Alias:** `1007`

**Example:**

```bash
device_info
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### digital\_write

Asks for address location and output value (0 or 1) and sets the digital address to this value. This is a dangerous if you do not know what you are doing.

**Input:** [number]

**Values:**

+ 0 + 1

**Example:**

```bash
digital_write
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### expr

**Example:**

```bash
expr
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### flow\_calibration\_set\_point

**Alias:** `fcsp`

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### flow\_calibration\_setting

**Alias:** `fcv`

**Example:**

```bash
flow_calibration_setting
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### flow\_calibration\_value

**Alias:** `fcv`

**Example:**

```bash
flow_calibration_value
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### flow\_off

Set air flow to zero

**Example:**

```bash
flow_off
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### flow\_v

**Example:**

```bash
flow_v
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### get\_flow

**Example:**

```bash
get_flow
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### hall

Continues output of the hall sensor readings. Stop output using the command `-1+`

**Example:**

```bash
hall
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### hello

Check if your instrument is connected. On success the response is `Instrument Ready`.

**Alias:** `1000`

**Example:**

```bash
hello
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### indicate

Sets the indicator LED (RGB LED). Values in the range from 0-255 need to be set for the Red, Green and Blue channel.

**Input:** [number]

**Example:**

```bash
indicate+<Red>+<Green>+<Blue>
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### indicate\_off

Turn off indicator LED

**Example:**

```bash
indicate_off
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### memory

Returns the memory usage of the instrument.

**Example:**

```bash
memory
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### p2p

Read multiple pulses with increasing intensity or pulse width for linearity test. With constant DAC value and pulse width, it is good for a pulse-to-pulse stdev test

**Example:**

```bash
p2p
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### par\_led

**Input:** par_led

**Example:**

```bash
par_led
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### print\_date

Print date based on instruments RTC (if available).
e.g.`2004-02-12T15:19:21.000Z`

**Example:**

```bash
print_date
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### print\_magnetometer

**Example:**

```bash
print_magnetometer
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### print\_magnetometer\_bias

**Example:**

```bash
print_magnetometer_bias
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### print\_memory

Print all calibration values as they are saved to the instruments storage (EEPROM). Output is formated as a JSON with a checksum.

**Alias:** `print_calibrations`

**Example:**

```bash
print_memory
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### readonce

Access write once flash

**Example:**

```bash
readonce
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### reboot

**Example:**

```bash
reboot
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### reset

Reboot the instrument.

**Alias:** `1027`

**Example:**

```bash
reset
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### reset\_flow\_calibration

Set air flow calibration to factory settings

**Example:**

```bash
reset_flow_calibration
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### reset\_flow\_zero\_point

**Example:**

```bash
reset_flow_zero_point
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### scan\_i2c

Scan for available i2c devices.

**Example:**

```bash
scan_i2c
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_accelerometer

**Example:**

```bash
set_accelerometer
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_accelerometer\_bias

**Example:**

```bash
set_accelerometer_bias
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_colorcal1

**Example:**

```bash
set_colorcal1
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_colorcal2

**Example:**

```bash
set_colorcal2
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_colorcal3

**Example:**

```bash
set_colorcal3
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_colorcal\_blanks

**Example:**

```bash
set_colorcal_blanks
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_cp

Set the **close** position of the leave clamp.

**Example:**

```bash
set_cp+
```

**Instruments:**

+ MultispeQ 1: `2.0038`
+ MultispeQ 2: `2.0038`

*Last Updated: July 1, 2019*

***

### set\_dac

Set DAC addresses to 1,2,3 assuming addresses are unset and all are factory (0,0,0).

**Example:**

```bash
set_dac
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_date

Set the date of the RTC of the instrument (if available)

**Example:**

```bash
set_date+
hours+min+sec+day+month+year
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_default\_flow\_rate

**Input:** [number]

**Example:**

```bash
set_default_flow_rate+<number>
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_detector1\_offset

**Example:**

```bash
set_detector1_offset
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_detector2\_offset

**Example:**

```bash
set_detector2_offset
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_detector3\_offset

**Example:**

```bash
set_detector3_offset
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_detector4\_offset

**Example:**

```bash
set_detector4_offset
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_device\_info

Set the device name

**Alias:** `1008`

**Example:**

```bash
set_device_info
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_energy\_save\_time

**Input:** [number]

**Example:**

```bash
set_energy_save_time+<number>
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_flow

**Input:** [number]

**Example:**

```bash
set_flow
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_led\_par

**Example:**

```bash
set_led_par
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_magnetometer

**Example:**

```bash
set_magnetometer
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_magnetometer\_bias

**Example:**

```bash
set_magnetometer_bias
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_op

Set the **open** position of the leave clamp.

**Example:**

```bash
set_op+
```

**Instruments:**

+ MultispeQ 1: `2.0038`
+ MultispeQ 2: `2.0038`

*Last Updated: July 1, 2019*

***

### set\_open\_closed\_positions

**Input:** set_open_closed_positions

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_par

**Example:**

```bash
set_par
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_serial

**Example:**

```bash
set_serial
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_shutdown\_time

Sets the time (in seconds) before the device automatically shuts down to save energy.

**Input:** [number]

**Example:**

```bash
set_shutdown_time+<seconds>
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_thickness

**Example:**

```bash
set_thickness
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_thickness\_quick

**Example:**

```bash
set_thickness_quick
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### set\_user\_defined

Save an user defined value to the EEPROM. You can abort the input using `-1+`.

**Example:**

```bash
set_user_defined+<EEPROM Location>+<value>
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### single\_pulse

Read and analyze noise on ADC from a single LED pulse (only in testmode).

**Example:**

```bash
single_pulse
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### sleep

Puts instrument into sleep mode. Hold the button for at least 5s to wake it up.

**Example:**

```bash
sleep
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### start\_watchdog

**Example:**

```bash
start_watchdog
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### stop\_watchdog

**Example:**

```bash
stop_watchdog
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### tcs\_length

**Example:**

```bash
tcs_length
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### temp

Return the readings for both BME280 sensors including temperature and relative humidity.

**Example:**

```bash
temp
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### testmode

**Example:**

```bash
testmode
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### upgrade

Start over the air firmware update. The instrument is waiting for the new firmware to be transfered to the instrument.

**Alias:** `1078`

**Example:**

```bash
upgrade
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### usb

Check, if the Instrument is connected via USB

**Example:**

```bash
usb
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### 1054 <Badge text="deprecated" type="error"/>

**Example:**

```bash
1054
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### 4048 <Badge text="deprecated" type="error"/>

Read multiple pulses with increasing intensity or pulse width for linearity test. With constant DAC value and pulse width, it is good for a pulse-to-pulse stdev test.

**Example:**

```bash
4048
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### adc1 <Badge text="deprecated" type="error"/>

**Example:**

```bash
adc1
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### adc\_check <Badge text="deprecated" type="error"/>

Output all ADC values

**Example:**

```bash
adc_check
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### all\_sensors <Badge text="deprecated" type="error"/>

Continuously all sensor output including par, temp, rH and pressure, until user enter `-1+`

**Example:**

```bash
all_sensors
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### calibrate\_compass <Badge text="deprecated" type="error"/>

**Example:**

```bash
calibrate_compass
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### calibrate\_leds <Badge text="deprecated" type="error"/>

**Example:**

```bash
calibrate_leds
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### calibrate\_leds\_manual <Badge text="deprecated" type="error"/>

**Example:**

```bash
calibrate_leds_manual
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### constant\_light <Badge text="deprecated" type="error"/>

Starting constant light source. Stop output using the command `-1+`.

**Example:**

```bash
constant_light
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### cut\_through <Badge text="deprecated" type="error"/>

**Example:**

```bash
cut_through
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### cycle5v <Badge text="deprecated" type="error"/>

**Example:**

```bash
cycle5v
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### dac50 <Badge text="deprecated" type="error"/>

Set all DAC outputs to 50%

**Example:**

```bash
dac50
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### feed\_watchdog <Badge text="deprecated" type="error"/>

**Example:**

```bash
feed_watchdog
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### get\_co2 <Badge text="deprecated" type="error"/>

Sensair S8 CO2 requests.  Only works if you have connected the sensair on Serial Port 3

**Example:**

```bash
get_co2
```

**Instruments:**

+ MultispeQ 1: `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `not available`

*Last Updated: July 1, 2019*

***

### light <Badge text="deprecated" type="error"/>

Turn on 5V to turn on a light. Replace the &lt;light number&gt; with the number of a light, e.g. `light1`

**Example:**

```bash
light<light number>
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### on\_5v <Badge text="deprecated" type="error"/>

Turn on 5V for 30 seconds

**Example:**

```bash
on_5v
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### print\_all <Badge text="deprecated" type="error"/>

print everything in the eeprom (all values defined in eeprom.h)

**Example:**

```bash
print_all
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*

***

### pulse <Badge text="deprecated" type="error"/>

**Example:**

```bash
pulse
```

**Instruments:**

+ MultispeQ 1: `2.0038` `2.0036` `2.0035` `1.17` `1.16` `1.14` `1.11` `1.10` `1.08` `1.07` `1.06`
+ MultispeQ 2: `2.0038` `2.0036` `2.0035`

*Last Updated: July 1, 2019*
