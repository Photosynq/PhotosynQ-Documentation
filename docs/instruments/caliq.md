# CaliQ

## Getting Started

+ **Charging:** Before using your CaliQ, make sure the MultispeQ is fully charged. The CaliQ has no battery and is powered through the MultispeQ.
+ **Software:** Go to <https://photosynq.org/software> and download the Android app or the Desktop app.
+ **MultispeQ Firmware:** Make sure your MultispeQ is running the firmware version `v2.16` or greater. If not, update your MultispeQ before continuing ([Update Firmware](./firmware-updates.md)).
+ **Connection:**
  + Make sure, the MultispeQ is turned on.
  + Then connect the CaliQ with the MultispeQ as indicated under Setup.
+ **Test:** Check if the instruments communicate.

## Setup

![CaliQ attached to the MultispeQ v2.0](./images/multispeq-caliq-setup.jpg)

::: warning MultispeQ v1.0 Users
Due to a hardware change, the MultispeQ v1.0 requires a small adapter for connecting the CaliQ. Please contact <support@photosynq.org> before purchasing a device.
:::

## Test Connection

Before starting to calibrate the MultispeQ, check if the instruments are communicating properly.

## About

<!-- ![MultispeQ v2.0 side and back view](./images/multispeq-v2.0-views.png) -->

### PAR Sensor & Light Source

The CaliQ consists of two parts, a PAR (Photosynthetically Active Radiation) sensor and a calibrated light source.

::: tip
You may need to clean the plastic window over the LED light source occasionally. Gently clean the light guides with a damp, soft cloth.
:::

::: danger
Do not submerge in water, do not use solvents or detergents and do not use abrasive or rough cloths to clean light sources plastic window.
:::

### USB-C Port

The [USB-C](https://en.wikipedia.org/wiki/USB-C) port is located on the PAR sensor part of the CaliQ. Connect the CaliQ with the supplied cable to the Accessory Port of the MultispeQ.

::: danger
Do not connect the CaliQ to a power supply or computer or mobile device using the USB-C cable as it might damage the CaliQ.
:::

## Configuration

![CaliQ measurements](./images/caliq-measurements.png)

| Body                    | Measurements                                 |
| :---------------------- | :------------------------------------------- |
| Size (stacked together) | 45.7 mm x 30.7 mm x 16.9 mm (l, w, h)        |
| Total Weight            | 24 g                                         |
| PAR Sensor Surface      | ⌀ 7.15 mm (40.15 mm²)                        |
| Light Source Surface    | ⌀ 8 mm (50.3 mm²)                            |
| Updates                 | Updates available through MultispeQ Firmware |

### PAR Sensor

The PAR sensor part is housing the PAR sensor as well as the [USB-C](https://en.wikipedia.org/wiki/USB-C) port to connect the CaliQ to the Accessory Port of the MultispeQ.

### Light

The LED part of the CaliQ is housing the calibrated light source with a single white LED.

|   #   | Color Temperature | Model                            |  Specifications  |
| :---: | :---------------: | -------------------------------- | :--------------: |
|   1   |       4000K       | LED (white), Lumileds, LXZ1-4070 | [view][LXZDS120] |

#### Emission Spectrum

![Emission spectrum for the LED - Emission normalized to maximum emission peak](./images/caliq-led-emission-spectrum.png)

[LXZDS120]: https://www.lumileds.com/uploads/404/DS120-pdf
