# Instrument API

When you build your own instrument to use with PhotosynQ, the API for handshake, protocols and commands need to be implemented to work with the provided Mobile and Desktop Applications and allow for data uploads to the cloud.

## Serial Connection

The [baud rate] for the instrument needs to be set to 115,200 bit/s.

## Handshake

In order to connect an Instrument with the PhotosynQ Software, after the serial port is opened, the command `1007` is send to the Instrument and it has to send a response that needs to be formatted as a string encoded [JSON] followed by a [CRC32] checksum (length 8 characters) and two line breaks `\n\n`.

```javascript
{
  "device_name": "MultispeQ",
  "device_version": "2",
  "device_id": "ff:ff:ff:ff",
  "device_battery": 0,
  "device_firmware": "2.21"
}0075AB50
```

| Key             | Type               | Description                                                      |
| :-------------- | :----------------- | :--------------------------------------------------------------- |
| device_name     | `string`           | Name of the Instrument                                           |
| device_version  | `string`, `number` | Indicator for the Instrument version                             |
| device_id       | `string`           | Hexadecimal number formatted as `ff:ff:ff:ff`                    |
| device_battery  | `string`, `number` | Instruments battery status. When there is no battery set to `-1` |
| device_firmware | `string`, `number` | Version of the custom firmware                                   |
| device_firmware | `string`, `number` | Version of the custom firmware                                   |
| settings        | `object`           | Not available                                                    |

:::tip
Since settings are currently not supported custom Instruments, passing this parameter on has no effect.
:::

### Connection Test

When sending `hello` or `1000` to your Instrument when it is connected, it has to respond the following string: `<Instrument Name> ready` where `Instrument Name` can be any name.

## Submitting a Protocols

Measurement Protocols can, in theory, be anything, but in order to work with the provided software and the could they have to be a valid [JSON]. That way, they can be easily parsed and checked. When sent to the Instrument, the [JSON] has to be converted into a string, using a function like `JSON.stringify( obj )` in JavaScript.

### End of Submission

Protocols will be sent by the PhotosynQ Applications with a trailing line-break (`\n`). When no line-break is sent, the measurement can also be started 300ms after the last character was received by the Instrument.

### Simplest Protocol

```JavaScript
[
    {
    }
]
```

The code above represents the simplest Protocol possible. You can insert any instructions in between, as long it is a valid [JSON]. Note, that some functionality inside the Protocol editor might not be available with unknown commands or a different structure.

## Returning Data

Measurements returned by PhotosynQ Instruments have a certain structure which is required to allow processing with a Macro as well as saving the data to the cloud. The example below reflects a minimum example.

```JavaScript
{
    "device_name":"My Instrument",
    "device_version":"1",
    "device_id":"ff:ff:ff:ff",
    "device_battery":15,
    "device_firmware":2.21,
    "sample":[
        {
            "protocol_id":"123",
            "light_intensity":100,
            "data_raw":[]
        }
    ]
}DD8CE370
```

| Key             | Type               | Description                                                      |
| :-------------- | :----------------- | :--------------------------------------------------------------- |
| device_name     | `string`           | Name of the Instrument                                           |
| device_version  | `string`, `number` | Indicator for the Instrument version                             |
| device_id       | `string`           | Hexadecimal number formatted as `ff:ff:ff:ff`                    |
| device_battery  | `string`, `number` | Instruments battery status. When there is no battery set to `-1` |
| device_firmware | `string`, `number` | Version of the custom firmware                                   |
| sample          | `object`           | Location for the Measurement data                                |

### The Sample Object

The `sample` key holds the Measurement `Object`. This object is an `Array` of `Objects`. Each object can hold a number of different key value pairs.

| Key             | Type               | Description                                                       |
| :-------------- | :----------------- | :---------------------------------------------------------------- |
| protocol_id     | `string`, `number` | The Protocol ID is inserted by the Apps and needs to be passed on |
| data_raw        | `array`            | If a trace is recorded it needs to go into this array             |

### Checksum

A Measurement needs a [CRC32] checksum (length 8 characters) at the end for the preceding string. The PhotosynQ Applications will truncate the checksum and check it against the received string to ensure, the received data is not corrupted. Also a measurement must always be a valid [JSON] (will be parsed in the PhotosynQ Applications after it's received).

### End of Measurement

In order to indicate the end of a Measurement, it needs to be ended with two line-breaks `\n\n`. Otherwise the PhotosynQ Applications are continuing to wait for the end of the Measurement. At this point there is no timeout.

:::warning
Do not use line-breaks within the measurement, as it would end the Measurement prematurely.
:::

## Command-line

### Submitting a Command

In contrast to Protocols, Commands are entered through the Console in the Desktop Application. They are usually very short stings and are not written as a [JSON]. A command is closed by a line-break. When using optional parameters, they need to be entered either individually or chained together, but in any case separated by a `+`. Also the last character should be a `+` when using parameters.

+ Command without parameters: `test`
+ Command with parameters: `test+p1+`
+ Command with multiple parameters: `test+p1+p2+`

### Returning Command Data

Commands can return data unformatted or as a [JSON]. Data from commands is not evaluated by a macro.

## Instrument Settings and Calibrations

As of this point settings and calibration options cannot be set through the Desktop Application. We are planning on making those available in the future.

[JSON]: https://en.wikipedia.org/wiki/JSON
[CRC32]: https://en.wikipedia.org/wiki/Cyclic_redundancy_check#CRC-32_algorithm
[baud rate]: https://en.wikipedia.org/wiki/Serial_port#Settings
