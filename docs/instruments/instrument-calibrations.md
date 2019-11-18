# Instrument Calibrations

PhotosynQ Instruments come pre-calibrated from the factory. Over time you can repeat the calibrations to ensure high quality measurements. Depending on the Instrument the available calibrations can vary. Currently you need to use the Desktop Application to adjust your Instrument settings.

::: warning Note
The Mobile Application does not support Instrument Settings.
:::

## Desktop App

When using the Desktop App in order to repeat the Instrument Calibrations, follow these steps to get started.

1. Connect your Instrument, using USB or Bluetooth.
2. Select **Instrument** from the **Settings** dialog.
3. Depending on the connected Instrument, you will see your available calibrations.

![Calibrations Dialog to show available Instrument calibrations.](./images/instrument-calibrations-desktop-app.png)

::: danger Trouble Shooting
+ When performing a calibration that has multiple steps, **always** start with **Step 1**.
+ Make sure the leaf clamp is completely closed when clamping cards before confirming the next step.
+ When calibrating any of the lights or the PAR sensor, make sure the battery level is **at least 20%**.
:::

### Saving Calibrations

After each calibration protocol, you have to save the calibration back to the Instrument. Use the **Save to Instrument** button from the top menu to bring up the confirmation dialog. Click on **OK** to confirm the data that is sent to the Instrument.

## Calibrations - MultispeQ

### Calibrate PAR Sensor

| Calibrate PAR Sensor | Description | Details |
| -------------------- | ----------- | ------- |
| **Step 1:** Initialize Calibration | Run the protocol to set up the calibration **(Overwrites PAR sensor and LEDs!)**. | [View][1883] |
| **Step 2:** Calibrate Sensor | Follow the instructions prompted by the protocol. | [View][1884] |

When using the CaliQ for calibrating the PAR sensor, make sure it is connected and communicating before starting the calibration procedure. To check if it is properly connected, go to [Instrument Settings](./instrument-settings.md) and test connection (under Miscellaneous).

::: warning
These calibration steps require the CaliQ instrument.
:::

### Calibrate LEDs

| Calibrate LEDs | Description | Details |
| -------------- | ----------- | ------- |
| **Step 1:** Main Body LEDs (PAR) | Follow the instructions prompted by the protocol. Make sure the CaliQ sensor has a snug fit. | [View][1885] |
| **Step 2:** Leaf Clamp LEDs (PAR) | Follow the instructions prompted by the protocol. Make sure the CaliQ sensor has a snug fit. | [View][1886] |
| **Step 3:** LEDs (non PAR) | Follow the instructions prompted by the protocol. | [View][1887] |

::: warning
These calibration steps require the **CaliQ instrument** (not included) and cards for **Relative Chlorophyll (SPAD)**.
:::

### Calibrate Electronic Offsets

| Electronic Offsets | Description | Details |
| ------------------ | ----------- | ------- |
| **Step 1:** Electronic offsets | Follow the instructions prompted by the protocol. Make sure parameters `R21` and `R23` are both around `0.99`. | [View][1894] |
| **Step 2:** Electronic offsets | Follow the instructions prompted by the protocol. The protocol will return several issues. Save results to the Instrument and run the calibration again. This time it should return no issues. | [View][1893] |

::: warning
These calibration steps require calibration cards for **Relative Chlorophyll (SPAD)** and the **Pink** card. When your instrument didn't come with a pink card, you can use a pink Post-It as well.
:::

### Calibrate Leaf Thickness

| Calibrate Leaf Thickness | Description | Details |
| ------------------------ | ----------- | ------- |
| **Step 1:** Different Thicknesses | Follow the instructions prompted by the protocol. Make sure the r² value is 0.98 or higher. If it is not the case, repeat the calibration. | [View][1889] |

::: warning
These calibration steps require calibration cards for **Leaf Thickness** (not included).
:::

### Calibrate Relative Chlorophyll

| Calibrate Relative Chlorophyll | Description | Details |
| ------------------------------ | ----------- | ------- |
| **Step 1:** Relative Chlorophyll | Follow the instruction prompted by the protocol. Make sure to panels of the calibration cards are properly clamped. | [View][1890] |
| **Step 2:** Absorbance Blanks (old method) | Follow the instruction prompted by the protocol. Make sure to panels of the calibration cards are properly clamped. | [View][1891] |
| **Step 3:** Relative Chlorophyll (old method) | Follow the instruction prompted by the protocol. Make sure to panels of the calibration cards are properly clamped. Values for `spad 1 r2`, `spad2 r2` and `spad3 r2` are larger than `0.99` | [View][1892] |

Some of the protocols are using a different method to calibrate for relative Chlorophyl (labeled as *old method*). Even if you are not using those protocols, perform all three Calibration steps to make sure your Instrument is calibrated backwards compatible and is not giving you false readings.

::: warning
These calibration steps require calibration cards for **Relative Chlorophyll (SPAD)**.
:::

[1]: https://photosynq.org/protocols/chlorophyll-fluorescence-really-old
[1883]: https://photosynq.org/protocols/1883
[1884]: https://photosynq.org/protocols/1884
[1885]: https://photosynq.org/protocols/1885
[1886]: https://photosynq.org/protocols/1886
[1887]: https://photosynq.org/protocols/1887

[1889]: https://photosynq.org/protocols/1889

[1890]: https://photosynq.org/protocols/1890
[1891]: https://photosynq.org/protocols/1891
[1892]: https://photosynq.org/protocols/1892

[1894]: https://photosynq.org/protocols/1894
[1893]: https://photosynq.org/protocols/1893
