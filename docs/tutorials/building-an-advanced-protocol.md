# Building an Advanced Protocol

In the previous tutorial we showed you how to write a Protocol for a simple Phi2 measurement. Make sure you are familiar with this first example, before you tackle this next tutorial. Here we want to explain to you how to build a complex Protocol, which combines simple Protocols like the Phi2 from the previous example into one set of Protocols, a **Protocol Set**.

::: tip Tip
The advantage of using a Protocol with a _Protocol set_, rather selecting multiple Protocols to be executed one after another is, that your Macro has access to all protocols inside that set.
:::

## Protocol Sets

The key to chain multiple Protocols together into one is the `_protocol_set_` command. In the example below, you see how the command is used inside a Protocol. All Protocols you would like to execute as one you can put into the `_protocol_set_` array. For example you can copy and paste existing protocols into the `_protocol_set_: [...]`. Make sure you remove the square brackets <code><s>[</s>{Protocol}<s>]</s></code> before you add the Protocol into the **Protocol Set**.

```javascript
[
    {
        "_protocol_set_": [
            // All your protocols go in here
        ]
    }
]
```

## Macro required!

In contrast to regular Protocols, when using Protocol Sets you have to use a Macro in order to output Parameters. That way, you have full control over the output of complex measurement Protocols (see [Building Advanced Macros](./building-advanced-macros.md)).

## Special Commands

There are a couple of commands to allow Protocols inside a **Protocol Set** to communicate with each other, meaning information like light intensity can be transferred from one Protocol to the next. This is *not possible* if regular Protocols are chained together (select multiple Protocols during Project creation).

### Labels

The command `label` allows to give every Protocol within a **Protocol Set** a name, so it is easier to identify when creating a Macro.

### Previous Light Intensity

The command `previous_light_intensity` allows to measure the light intensity in the first Protocol and re-use it in all the subsequent Protocols instead of measuring it each time. The light intensity used and displayed in the subsequent Protocols will be the same as in the first one.

## Building a Protocol Set

```javascript
[
    {
        "_protocol_set_": [
            {
                "label": "Phi2",
                "pulses": [
                    4000, 20, 50, 20
                ],
                "pulse_distance": [
                    1000, 10000, 10000, 10000
                ],
                "pulse_length": [
                    [ 30 ], [ 30 ], [ 30 ], [ 30 ]
                ],
                "pulsed_lights": [
                    [ 0 ], [ 3 ], [ 3 ], [ 3 ]
                ],
                "pulsed_lights_brightness": [
                    [ 0 ], [ 2000 ], [ 2000 ], [ 2000 ]
                ],
                "nonpulsed_lights": [
                    [ 2 ], [ 2 ], [ 2 ], [ 2 ]
                ],
                "nonpulsed_lights_brightness": [
                    [ "light_intensity" ], [ "light_intensity" ], [ 4500 ], [ "light_intensity" ]
                ],
                "detectors": [
                    [ 0 ], [ 1 ], [ 1 ], [ 1 ]
                ],
                "environmental": [
                    [ "light_intensity" ]
                ],
                "open_close_start": 1
            },
            ...
        ]
    }
]
```
