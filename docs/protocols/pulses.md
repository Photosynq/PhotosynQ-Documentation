# Pulses

Pulses define the framework for a measurement protocol. The timing, lights and detectors are controlled by the pulses. The `pulses` element is an array in which each element, called a **pulse set**, with a number defines how many pulses are given. These pulses, also measurement pulses have a set distance, defined by the `pulse_distance` and a specific duration defined by `pulse_length`. In contrast to the other two, `pulse_length` is an array, in which each element is an array, allowing to define different durations, for example if different lights or detectors are used within one set.

## Pulse Sets

When defining a measurement protocol, it can be helpful, to group the measurement into different phases, each defined by a pulse set. The tutorial [Building a Protocol](../tutorials/building-a-protocol.md) provides a simple example on how to set up pulse sets for a photosynthetic yield measurement.

```javascript
...
    {
        "pulses": [
            20, 50, 20
        ],
        "pulse_distance": [
            10000, 10000, 10000
        ],
        "pulse_length": [
            [ 30 ], [ 30 ], [ 30 ]
        ],
        ...
    }
...
```
