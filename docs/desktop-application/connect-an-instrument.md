# Connect an Instrument

You can use **Bluetooth** or **USB** to connect your Instrument with your computer. Depending on the Instrument and computer, some connection options may not be available.

::: warning Note
Before connecting your MultispeQ to the Desktop App you need to turn on the MultispeQ by pressing and holding the power button for at least 5 seconds.
:::

![Connect an Instrument](./images/connect-an-instrument.png)

## USB connection

1. Select **<i class="fa fa-sliders"></i> Settings** from the left menu bar.
2. Choose the **Connection** tab from the settings menu.
3. Pick the port the Instrument is connected to from the dropdown menu:
    - Windows: **COM{number}**
    - macOS: **usbmodem{number}**
    - Linux: **ACM{number}**
4. Connect the instrument by clicking on **Connect**.

## Bluetooth connection

1. Make sure you have your Instrument connected to your computer through your OS preferences. The code for pairing is `1234`.
2. Select **<i class="fa fa-sliders"></i> Settings** from the left menu bar.
3. Choose the **Connection** tab from the dialog.
4. Pick the port the Instrument is connected to from the dropdown menu:
    - Windows: **COM{number}**
    - macOS: **Instrument-name_{number}**
    - Linux: **Not available**
5. Connect the device by clicking on **Connect**.

### Troubleshooting

If you are having trouble connecting to your Instrument, please go through this checklist first:

- Make sure your Instrument is fully charged (at least 6h, or over night).
- Make sure you have turned on the Instrument by pressing and holding the power button for at least 5 seconds. **The Instrument will automatically shut off after 3 hours of inactivity by default**.
- If you were using the Instrument with another mobile device, you will need to press and hold the power button for 5 seconds to disconnect it from the current device and make it available to the new one.
- If you are using Windows 8 or lower, make sure you have the [serial driver](https://www.pjrc.com/teensy/td_download.html) installed.
