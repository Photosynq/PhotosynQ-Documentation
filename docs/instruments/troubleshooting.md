# Troubleshooting

## Charging

### Charging takes longer than expected

Try to use a power supply that can provide at least 500 mA, better 1A. If you use a computer USB-port or a power supply with a lower power output, charging can take significantly longer.

`MultispeQ v1.0` `MultispeQ v2.0`

### Battery will not charge at all

When the Instrument wasn't used in a long time, the battery might be too empty to be charged, while the instrument is starting up at the same time. In that case connect the instrument to a charger with 500 mA or better 1A and hold the power/reset button pressed for a few minutes. After that the battery will charge normal again when the button is released.

`MultispeQ v1.0` `MultispeQ v2.0`

## Measurements

### Measurements take longer than expected

Many protocols require the detection of the leaf clamp to be opened and closed to run. So after the measurements has been started through an application, the instrument is waiting for the open and close. After about two minutes the wait times out and the rest of the protocol continues. For this reason it seems a protocol is taking much longer than expected. In general the steps for taking a measurements with an open/close wait are:

1. Clicking the measure button in the application
2. Opening the MultispeQ's leaf clamp
3. Clamping the desired leaf and the protocol continues

In case a long wait time is encountered, the open and close positions need to be recalibrated for the instrument to detect if it is open or closed.

To fix the issue open the desktop application, connect the Instrument and either use the **Leaf Clamp Positions** under [Settings](instrument-settings.md#available-settings) or the **Open & Close Positions** Assistant under [Calibrations](../calibrations/multispeq-v2.0.md#calibration-assistants)

`MultispeQ v1.0` `MultispeQ v2.0`

## Connection (Bluetooth or USB)

### Connection with Phone via Bluetooth fails

In case the Instrument cannot connect to the device like a phone or computer, make sure the used PhotosynQ app is updated to the latest version and the Instrument is fully charged. Especially a battery with a low charge can prevent a stable Bluetooth connection.

When attempting to connect a MultispeQ to an android device, it can help to first connect the instrument to the device through bluetooth in the phone settings before trying to connect through the application. Making sure that only one MultispeQ is on and within range can also help in creating a successful connection.

`MultispeQ v1.0` `MultispeQ v2.0`

## Firmware Update

### MultispeQ v1.0 named MultispeQ v2.0 after Update

This issue occasionally occurs when a MultispeQ v1.0 is updated to a firmware version >2.34. This does not pose an issue, but to display the Instruments name correctly, you will have to simply run the following three commands through the console of Desktop Application to reset three specific values.

Using the console found on the PhotosynQ Desktop app, please type in these three commands one at a time:

1. `​set_blink_mode+0+`
2. `set_pilot_blink+0+`
3. `set_status_blink+0+`

With these values reset, your MultispeQ should now preform perfectly alongside the Photosynthesis RIDES 2.0 Protocol.

`MultispeQ v1.0`
