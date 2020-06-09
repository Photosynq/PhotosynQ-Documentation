# MultispeQ v2.0 Calibration

Before getting started with the calibration, make sure you followed all the steps listed in the [Overview](./overview.md).

## Calibration Assistants

{{{ assistants }}}

## Manual Calibrations

::: tip Note
Make sure to follow the steps in the correct order when a calibration contains multiple steps. The same is the case for steps within a calibration routine.
:::

{{{ calibrations }}}


<!-- 

## Reset Calibrations

This first step resets all parameters in the Instrument's memory to 0. This includes the PAR and LED calibrations, as well as Relative Chlorophyll (SPAD). The default shutdown time is set back to 30 minutes, and the Instrument to stay on when plugged into a computer or power supply.

::: danger Please Note!
The protocol prepares the device to be fully calibrated, and will overwrite memory in the device. The user should proceed through the entire calibration process to regain full usage of the MultispeQ, a CaliQ is needed.
:::

Protocol: `CAL#1: init_settings`

## PAR Sensor

### Step 1

Universal PAR values are saved to the Instrument, to be compared against the calibrations in step #3. The MultispeQ uses these Universal Parameters to estimate PAR from its RGBC (red-green-blue-clear) light sensor. The values were obtained by comparing MultispeQ RGBC output with a LI-COR® LI-190R PAR Sensor under  a range of light quantity (light sources) and intensities.

Protocol: `CAL#2 MultispeQ set universal PAR color calibration`

### Step 2

Using the information from CAL#2 and a CaliQ, this protocol will set the calibration values to obtain PAR from the sensor. The protocol guides the user through two calibration steps.

The protocol will ask the user to attach the CaliQ LED head to the CaliQ PAR sensor head. It will then send out  a “standard” light intensity from the CaliQ LED head. Connecting the CaliQ LED head to the CaliQ PAR sensor head allows the device to determine the intensity of the standard LED output. This step is necessary because the light sensor in the CaliQ PAR head is much quite stable LED, whereas the LED output can vary somewhat over time and with changing temperatures.

The protocol will then direct the user through a dialog box to move the CaliQ LED head (which is still illuminating) to the MultispeQ PAr sensor. Make sure the connector is firmly placed and click OK on the dialog box. The protocol will then take measurements from the MultispeQ PAR meter under the (known) CaliQ LED output. Comparing the MultispeQ PAR values with the known CaliQ LED output outputs allows the macro to set the calibration values, which are stored in EEPROM on the MultispeQ. (The user can check these values by entering the print_memory command in the console. The slope and y-intercept corrections are stored in the par_tweak and light_yint variables.)

Protocol: `CAL#3 CaliQ MultispeQ PAR using Universal Color setting 1`

## LEDs

![Clamp CaliQ](./images/multispeq-caliq-clamp-sensor.png)

### Step 1

The MultispeQ’s LEDs are measured with the CaliQ PAR Sensor at increasing intensities, and then checked against a predetermined curve for accurate Light Intensity and Slope.

Protocol: `CAL#4 Calibrate UPPER LEDS using CaliQ PAR sensor method 3 (B)`

### Step 2

The MultispeQ’s LEDs are measured with the CaliQ PAR Sensor at increasing intensities, and then checked against a predetermined curve for accurate Light Intensity and Slope.

Protocol: `CAL#5 Calibrate LOWER LEDS using CaliQ PAR sensor method 3 (B)`

### Step 3

Adjusts the output of the LEDs that are not calibrated by PAR. Several of the MultispeQ LEDs (LEDs 5, 6, 8, 9, 10) output infrared light, beyond the PAR spectrum. These cannot be calibrated using the CaliQ PAR meter. For these LEDs, we do not attempt to quantify their intensities, but rather standardize them so that different instruments will output very similar intensities. This protocol guides the user to insert a calibration card. The instrument then sends out light pulses from each IR LED and uses the IR sensor (detector #1) to measure its relative intensity.

Protocol: `CAL#6 non PAR LED`

## Electronic Offsets

### Step 1

Measures detector offsets using a series of light pulses of increasing intensity. The user is guided to insert one or more white calibration cards. The device generates a series of LED pulses and measures the output levels. Electronic offsets are estimated by extrapolating to zero intensity, If the signal is too large, the user will be asked to insert a thicker card, or multiple cards.

Protocol: `CAL#7a - electronic offsets #1`

### Step 2

This Calibration corrects for artifacts caused by local heating of pulsed LEDs. LED output can be affected by local temperatures, which can occur when LEDs are driven by large currents. This issue can affect fluorescence or absorbance measurements of weak samples, especially when large changes in actinic light intensity are used. The protocol measured these effects using various combinations of measuring (pulsed) and actinic (non-pulsed) LEDs as detected by both detector 1 and 3.

Protocol: `CAL#7b - Electronic offsets #2`

## Leaf Thickness

The MultispeQ measures leaf thickness by using a Hall Effect sensor located on the main body of the MultispeQ and a magnet located on the clamp body.  The Hall Effect sensor measures the density of magnetic field lines, and as the clamp opens and the magnet moves farther away, the field lines go farther apart.  This extremely precise sensor is able to detect differences of 10s of microns given a consistent setup.

![Leaf Thickness calibration Card clamped](./images/multispeq-clamp-thickness-card.png)

Protocol: `CAL#8 - Leaf Thickness`

## Relative Chlorophyll (new)

PQ-SPAD is based on the SPAD technique developed by Minolta and others (see Kuhlgert et al., Royal Society Open Science 3 (2016) 160592). It gives an estimate of the chlorophyll content of a leaf sample based on the differential absorbance of red (~627 nm) and infrared (~940 nm) light. Chlorophyll absorbs in the red, but not the IR.

This calibration is for the SPAD method, which is improved from the previous.
(This is especially important when using leaf masks, see announcement for the use of small leaves).  In the previous versions of the firmware, getting SPAD or other absorbance changes was quite complex. In the new version it is much easier, takes less time and if much more flexible!

The protocol guides the user to insert a series of SPAD calibration cards. The user is prompted to enter the SPAD value for each card. With each card, the transmission of light at specific wavelengths is measured and a best-fit line is calculated. The correlation coefficient and y-intercepts are stored in the EEPROM on the MultispeQ.

![Chlorophyll calibration Card clamped](./images/multispeq-clamp-chloropyll-card.png)

SPAD should be recalibrated frequently. The user does NOT have to perform the previous calibrations before recalibrating the NEW SPAD method. However, recalibrating the OLD method requires (essentially) complete recalibration.

Protocol: `CAL#9 Spad Calibration (V3)`

## Relative Chlorophyll (old)

### Step 1

In order to measure absorbance (SPAD) using the old method, you must first run a blank. A traditional blank cannot measure very thick samples due to either saturating the detector during the blank, or too low signal during the sample. This calibration solves this problem by performing 3 blanks: a standard blank (empty) at a low light intensity, a single white piece of paper at a medium light intensity, and the equivalent of 3 white pieces of paper stacked at a high light intensity.  While the medium and high intensity blanks cannot measure transmission, they can in fact estimate true absorbance.

Protocol: `CAL#10 Spad absorbance blanks`

### Step 2

Relative Chlorophyll, also called SPAD, is measured by comparing absorbance in the red (650nm) and in the NIR (940nm).  The red absorbance is used to identify 'greenness' of the leaf, because something which appears green is reflecting green light but absorbing red light.  The NIR absorbance is used to estimate the thickness of the leaf.  Combined, it's possible to estimate the density of chlorophyll in the sample.

While the MultispeQ produces its own SPAD values (ranging from 0 - ~120), we also calibrate the device to the commercial standard Minolta SPAD 502+ in order to provide users with more directly comparable values for Relative Chlorophyll (ranging from 0 - ~70).  This protocol calibrates the MultispeQ SPAD values against an actual Minolta SPAD device and saves those values to the device.  

Protocol: `CAL#11 Relative chlorophyll (SPAD) using the OLD method`

## Open/Close Position

The open and close position for the MultispeQ needs to be recalibrated in regular intervals. Otherwise it might happen, that the closing of the clamp is not properly detected and a protocol is not starting causing a measurement to take a lot longer than expected.

1. Set the **opened** position by holding the clamp open at **~4mm** and clicking on the **Set** button.
2. Set the **closed** position by holding the clamp open at **~2mm** and clicking on the **Set** button. -->

<!-- When using the Desktop App in order to repeat the Instrument Calibrations, follow these steps to get started.
Connect your Instrument [link], using USB or Bluetooth. 
Go to the [icon] Settings tab, then the [icon] Connection tab in the Desktop Application. Plug the MultispeQ into the computer using the micro-USB provided with the Instrument, then find the correct port from the dropdown menu.
*[Note in Yellow, “Title”]  If the device is not connecting, or you are having trouble finding the port in the dropdown menu, you may need to hit the refresh button several times.*
Ensure the MultispeQ Instrument is above 20% battery charge.
Go to the [icon] Protocols tab then select the [icon] Explore button from the top of the window. Using the pull down menu on the search bar, search for the category “Calibrations”.
Calibration:
Step 2: Find the protocol “CAL#1: init_settings”. Click “Run”. This protocol:
Sets all previous settings to 0
Prepares the instrument for calibration.
Sets the shutdown time, as well as the power settings to their default values.
When the protocol finishes, click “Save to Instrument”.

Step 3: Find the protocol “CAL#2 MultispeQ set universal PAR color calibration”. Click “Run”. 


Step 4: CAL#3 CaliQ MultispeQ PAR using Universal Color setting 1
Plug in the CaliQ to the USB port in the back of the device. Must be correct orientation (V2 is red up - V1 is red down)
Click Run and the protocol will prompt you for the next step.
NOTE: PAR sensor - white circle (looks like the PAR sensor on top of the device); Other black piece is the LED
After protocol runs look at the first curve make sure the values are pretty close - should be within a value of 1
Look at “to device” tweak = 2 or more then it might not be as accurate. Accept between .25 and 2 -  if that happens then recalibrate CaliQ
After it is complete click save to instrument
Step 5: CAL#4 Calibrate UPPER LEDS using CaliQ PAR sensor method 3 (B)
Remove rubber rings and keep instrument connected to CaliQ then click run - then follow prompt 
Clamp PAR sensor
Look at fit r2 for it to be as close to 1 as possible - watch to see it go down then jump up then down actually a curve so it is hard to fit a straight line
Shouldn’t be more than 65,535 or nam (means getting a negative value) for setPAR 
After it is complete click save to instrument
Step 6: CAL#5 CAlibrate LOWER LEDS using CaliQ PAR sensor method 3 (B)
Same thing but bottom ones - flip over sensor and clamp
Select the protocol and click run on the right hand side
After it is complete click save to instrument
Sometimes easier to get in the right position if

Look at fit r2 for it to be as close to 1 as possible - watch to see it go down then jump up then down actually a curve so it is hard to fit a straight line
Shouldn’t be more than 65,535 or nam (means getting a negative value) for setPAR 
After it is complete click save to instrument

Step 7: CAL#6 non PAR LED
Wrong protocol so you have to edit; Click edit 
To the drop down in the upper right corner type “Testing non PAR LED calibration method 3 DMK”
Then hit run at the top left
Will prompt you to start with #1 square
Look for nothing that says 65,535 or NAM; if you use wrong macro you will get those
Only use white for #6
After it is complete click save to instrument

Step 8: CAL#7a - electronic offsets #1
Click on the protocol and select run; will be prompted
Want these value R21 (r2 value for detector one on main board and R23 (r2 value for detector three on add-on)
If didn’t work go back to non PAR the one before
r2 values close to one
To device will show NAM value if error
After it is complete click save to instrument
Step 9: CAL#7b - Electronic offsets #2
RUN TWICE
Use pink sticky note for “fluorescence calibration card”
Click on the protocol and select run; will be prompted to clamp sticky note
Graphs do not work so they will look weird the first time with a warning thing 
That is okay! Save to instrument then hit repeat - do not need to reclamp
Run again and make sure no errors pop up
If warnings still come up go back to Non PAR calibrations
If it still does work then go back to LEDs
If not errors click save to instruments
Step 10: CAL#8 - Leaf Thickness
Select protocol and click run
Start with the thinnest; will prompt by color
Helps to place card and allow the device to shut as hard a possible on its own
NOTE: will not know if it worked until the end
Want r2 to be close enough to 1, if not it will throw up an error if it isn’t 
Save to instrument
Step 11: CAL#9 Spad Calibration (V3)
Select protocol and click run
Follow prompts
Can look at r^2 but don’t worry too much
Best offset typically want around -200  if you are getting around 20, 40, 80 then an LED is probably dying
Step 12: CAL#10 Spad absorbance blanks
as long as it’s not touching zero you’re good
Step 13 CAL#11 Relative chlorophyll
as long as it’s not touching zero you’re good -->
