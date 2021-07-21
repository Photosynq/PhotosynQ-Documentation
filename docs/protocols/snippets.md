# Code Snippets

When writing Protocols to take measurements it is often not necessary to start from scratch every time. This is a growing collection of protocol code snippets to help getting your protocols started.

## Available Snippets

[[TOC]]

## Protocol Structure

More details on the protocol structure are in the following chapter - [Protocol Structure](./structure.md).

### Basic Protocol Structure

```JavaScript
[
    {
    }
]
```

### Advanced Protocol Structure

```JavaScript
[
    {
        "v_arrays": [],
        "_protocol_set_": [
            {
                "label": "First Set"
            }
        ]
    }
]
```

## Lights, Detectors and Sensors

### Sample Pre-Illumination

Pre-Illumination of the sample, selecting a LED (color), the intensity and the duration in milliseconds (ms). More details on pre-illumination are in the following chapter - [Sample Pre-Illumination](./pre-illumination.md).

```JavaScript
{
    "pre_illumination": [ "<led>", "<intensity>", "<duration>" ]
}
```

### Environmental Parameters

Recording environmental parameters using the MultispeQ during a measurement. More details on sensors are in the following chapter - [Sensors](./sensors.md).

```JavaScript
{
    "environmental": [
        ["thp"],
        ["thp2"],
        ["compass_and_angle"],
        ["contactless_temp"],
        ["light_intensity"]
    ]
}
```

## User Interaction

More details on the user interaction are in the following chapter - [User Interaction](./user-interaction.md).

### Show an Alert Dialog

Show an Alert Dialog to inform the user (e.g. switch sample). The measurement will pause until the Dialog is closed.

```JavaScript
{
    "label": "AlertDialog",
    "alert": "Please do this or that to continue."
}
```

### Show a Prompt Dialog

Show a Prompt Dialog to give the user the option to enter a value (e.g. external sensor reading). The measurement will pause until the Dialog is confirmed or canceled. The input field can be left blank by the user to continue.

```JavaScript
{
    "label": "PromptDialog",
    "alert": "Please enter a value and continue."
}
```

