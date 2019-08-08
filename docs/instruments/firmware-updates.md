# Firmware Updates

Normally, the PhotosynQ apps automatically notify you when there is a new firmware version available for your Instrument. In this case you can follow the instructions, and the apps will download the correct version and install it on your Instrument.

::: warning Note
We do not recommend that anyone uploads any other versions of the firmware or from unknown sources, unless you know what you are doing!
:::

## Automatic Firmware Update

When you connect to an Instrument using the mobile app or the desktop app, you will be notified, if there is a firmware update available. Firmware updates usually provide fixes as well as new features. Some new measurement protocols might require the latest firmware, so we strongly recommend to install the updates. Below you find instructions on how to install those updates using the Mobile App (Android) or the Desktop App.

***

## Mobile App (Android)

![(1) Connect your Instrument. (2) Check for updates. (3) Select the update to install. (4) Confirm the update. (5) Wait for the update installation. (6) Reconnect and confirm the update has been installed.](./images/firmware-update-android.png)

### Step 1

Make sure Bluetooth is enabled on your phone/tablet and select your Instrument from the list. In case the Instrument is not showing up, use the **"Scan Devices"** button to update the list.

### Step 2

After connecting your Instrument select **"Check for Firmware Update"** to check for updates. Make sure, you have an active internet connection.

### Step 3

If an update is available for your Instrument, select **"Install"** to install the firmware update on your Instrument. The version number of the update as well as the changes are displayed.

### Step 4

Confirm that you want to install the firmware update.

### Step 5

Wait for the firmware to be uploaded to the Instrument. **Don't turn off your Instrument or phone/tablet during the update process.

### Step 6

After the update is finished the Instrument will restart. Check if version number of the firmware has increased.

## Desktop App

![(1) Connect your Instrument, and click on the Update button (2) Confirm the update installation. (3-4) Update Progress and Instrument Restart. (5) Reconnect the Instrument after successful installation.](./images/firmware-update-desktop.png)

### Step 1

Open the Settings dialog from the left menu bar and connect your Instrument. If an update is available, click on the button labeled **"Update"**. You can check at any time, clicking on the **"Check"** button to see if an update is available.

### Step 2

If an update is available, the version and changes are listed. Select the **"Update Now"** button to start the update. Confirm, that you want to install the update.

### Step 3

During the upload process, don't close the app, turn of your computer or Instrument.

### Step 4

If the installation is finished, wait for the Instrument to restart. When the restart is complete, the settings dialog will show up again.

### Step 5

After the update is finished the Instrument will restart. Check if version number of the firmware has increased.

***

## Manual Firmware Update

**"Pre-releases"** of the firmware are not installed automatically on your Instrument. Go to [Github][Firmware-Github] to download the most recent firmware for your Instrument.

::: warning Note
Pre-Releases can only be installed using the Desktop app at your own risk.
:::

![(1) Connect your Instrument, and click on the check button (2) Select Manual Update, select your firmware file and confirm the update. (3-4) Update Progress and Instrument Restart. Make sure that after reconnecting, your Instrument has the firmware installed.](./images/firmware-manual-desktop.png)

### Preparation

Make sure you have a verified .hex file from [PhotosynQ][Firmware-Github]. Select the file matching your Instrument name and version (e.g. `multispeq1.ino.hex` for MultispeQ v1.0). Place this file in an easy-to-find location (like your Desktop).

### Step 1

Connect your Instrument to a USB port. To avoid confusion, make sure it is the only Instrument connected to the USB.
Open the Settings dialog from the left menu bar and connect your Instrument.

### Step 2

Click on the **"Manual"** button and confirm that you want to update the firmware on your Instrument.Next select the previously downloaded file and select open to start the firmware update.

### Step 3

During the upload process, don't close the app, turn of your computer or Instrument.

### Step 4

If the installation is finished, wait for the Instrument to restart. When the restart is complete, the settings dialog will show up again.

Connect your Instrument and check if the firmware you wanted to install was installed properly.

### Known Issues

When the firmware is transferred to the Instrument, it might be necessary to restart it and/or the desktop app.
Sometimes you have to repeat this step because the Instrument may take a bit longer to boot up the first time.

[Firmware-Github]: https://github.com/Photosynq/MultispeQ-firmware/releases
