# Console Commands <Badge text="Archive" type="warn"/>

::: warning Archived
This is for documentation only. The documentation for the latest version is available [here](../console-commands.md).
:::

## Available Commands <Badge text="v1.17" type="tip" vertical="middle"/>

[[TOC]]

### 1053

Continuous feed of roll, pitch, compass, direction, tilt and tilt direction. Cancel the command with `-1+`

**Example:**

```bash
1053
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### 1054

**Example:**

```bash
1054
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### 4048

Read multiple pulses with increasing intensity or pulse width for linearity test. With constant DAC value and pulse width, it is good for a pulse-to-pulse stdev test.

**Example:**

```bash
4048
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### adc1

**Example:**

```bash
adc1
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### adc\_check

Output all ADC values

**Example:**

```bash
adc_check
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### all\_sensors

Continuously all sensor output including par, temp, rH and pressure, until user enter `-1+`

**Example:**

```bash
all_sensors
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### any\_light

**Example:**

```bash
any_light
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### battery

Test the instruments battery with load returning the charge state in percent (%)

**Example:**

```bash
battery
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### calibrate\_compass

**Example:**

```bash
calibrate_compass
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### calibrate\_leds

**Example:**

```bash
calibrate_leds
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### calibrate\_leds\_manual

**Example:**

```bash
calibrate_leds_manual
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### compiled

Returns date and time for when the Firmware was compiled.

**Example:**

```bash
compiled
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### configure\_bluetooth

Set the bluetooth name and baud rate

**Example:**

```bash
configure_bluetooth
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### constant\_light

Starting constant light source. Stop output using the command `-1+`.

**Example:**

```bash
constant_light
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### cut\_through

**Example:**

```bash
cut_through
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### cycle5v

**Example:**

```bash
cycle5v
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### dac50

Set all DAC outputs to 50%

**Example:**

```bash
dac50
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### device\_info

Receive information from the Instrument, including name, version, id, battery level, firmware and configuration.

**Alias:** `1007`

**Example:**

```bash
device_info
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### expr

**Example:**

```bash
expr
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### feed\_watchdog

**Example:**

```bash
feed_watchdog
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### get\_co2

Sensair S8 CO2 requests.  Only works if you have connected the sensair on Serial Port 3

**Example:**

```bash
get_co2
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### hall

Continues output of the hall sensor readings. Stop output using the command `-1+`

**Example:**

```bash
hall
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### hello

Check if your instrument is connected. On success the response is `Instrument Ready`.

**Alias:** `1000`

**Example:**

```bash
hello
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### light

Turn on 5V to turn on a light. Replace the &lt;light number&gt; with the number of a light, e.g. `light1`

**Example:**

```bash
light<light number>
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### memory

Returns the memory usage of the instrument.

**Example:**

```bash
memory
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### on\_5v

Turn on 5V for 30 seconds

**Example:**

```bash
on_5v
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### p2p

Read multiple pulses with increasing intensity or pulse width for linearity test. With constant DAC value and pulse width, it is good for a pulse-to-pulse stdev test

**Example:**

```bash
p2p
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### par\_led

**Input:** par_led

**Example:**

```bash
par_led
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### print\_all

print everything in the eeprom (all values defined in eeprom.h)

**Example:**

```bash
print_all
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### print\_date

Print date based on instruments RTC (if available).
e.g.`2004-02-12T15:19:21.000Z`

**Example:**

```bash
print_date
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### print\_magnetometer

**Example:**

```bash
print_magnetometer
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### print\_magnetometer\_bias

**Example:**

```bash
print_magnetometer_bias
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### print\_memory

Print all calibration values as they are saved to the instruments storage (EEPROM). Output is formated as a JSON with a checksum.

**Alias:** `print_calibrations`

**Example:**

```bash
print_memory
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### pulse

**Example:**

```bash
pulse
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### readonce

Access write once flash

**Example:**

```bash
readonce
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### reboot

**Example:**

```bash
reboot
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### reset

Reboot the instrument.

**Alias:** `1027`

**Example:**

```bash
reset
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### scan\_i2c

Scan for available i2c devices.

**Example:**

```bash
scan_i2c
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_accelerometer

**Example:**

```bash
set_accelerometer
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_accelerometer\_bias

**Example:**

```bash
set_accelerometer_bias
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_colorcal1

**Example:**

```bash
set_colorcal1
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_colorcal2

**Example:**

```bash
set_colorcal2
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_colorcal3

**Example:**

```bash
set_colorcal3
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_colorcal\_blanks

**Example:**

```bash
set_colorcal_blanks
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_dac

Set DAC addresses to 1,2,3 assuming addresses are unset and all are factory (0,0,0).

**Example:**

```bash
set_dac
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_date

Set the date of the RTC of the instrument (if available)

**Example:**

```bash
set_date+
hours+min+sec+day+month+year
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_detector1\_offset

**Example:**

```bash
set_detector1_offset
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_detector2\_offset

**Example:**

```bash
set_detector2_offset
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_detector3\_offset

**Example:**

```bash
set_detector3_offset
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_detector4\_offset

**Example:**

```bash
set_detector4_offset
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_device\_info

Set the device name

**Alias:** `1008`

**Example:**

```bash
set_device_info
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_led\_par

**Example:**

```bash
set_led_par
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_magnetometer

**Example:**

```bash
set_magnetometer
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_magnetometer\_bias

**Example:**

```bash
set_magnetometer_bias
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_par

**Example:**

```bash
set_par
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_serial

**Example:**

```bash
set_serial
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_thickness

**Example:**

```bash
set_thickness
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_thickness\_quick

**Example:**

```bash
set_thickness_quick
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### set\_user\_defined

Save a user defined value to the EEPROM. You can abort the input using `-1+`.

**Example:**

```bash
set_user_defined+<EEPROM Location>+<value>
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### single\_pulse

Read and analyze noise on ADC from a single LED pulse (only in testmode).

**Example:**

```bash
single_pulse
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### sleep

Puts instrument into sleep mode. Hold the button for at least 5s to wake it up.

**Example:**

```bash
sleep
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### start\_watchdog

**Example:**

```bash
start_watchdog
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### stop\_watchdog

**Example:**

```bash
stop_watchdog
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### tcs\_length

**Example:**

```bash
tcs_length
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### temp

Return the readings for both BME280 sensors including temperature and relative humidity.

**Example:**

```bash
temp
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### testmode

**Example:**

```bash
testmode
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*

***

### upgrade

Start over the air firmware update. The instrument is waiting for the new firmware to be transfered to the instrument.

**Alias:** `1078`

**Example:**

```bash
upgrade
```

**Instruments:**

`MultispeQ 1`

*Last Updated: December 17, 2019*
