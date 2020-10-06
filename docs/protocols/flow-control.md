# Protocol Flow Control

If Protocols are started, they start running immediately. The commands described below can be used to start/pause the Protocol execution and using the opening and/or closing of the leaf clamp to control the flow. The commands work with simple and advanced Protocols can be used to hold the execution of a Protocol in the beginning, as well as in the middle of a Protocol set (`_protocol_set_`).

## Protocol Start

| Command | Value | Function |
| ------- | -- | -- |
| `start_on_open` | `0,1` | If set to 1 or higher, it will wait until the clamp is opened, then proceed with the rest of the experiment. If the value is set to zero, the command will be ignored. |
| `start_on_close` | `0,1` | If set to 1, will wait until the clamp is closed, then proceed with the rest of the experiment. If set to 0, will be ignored. |
| `start_on_open_close` | `0,1` | If set to 1, will wait until the clamp is opened then closed, then proceed with the rest of the experiment. If set to 0, will be ignored. |

## Protocol Start with PAR Replication

The commands are similar to the versions above, except that, at **~100 ms** intervals during the hold time, the ambient light intensity is resampled and the LED output is adjusted to match. When the hold event occurs (e.g. the clamp is closed), the final ambient intensity and LED setting are held and used in the protocol. The  `non_pulsed_light_number` parameter is the LED to use for matching the ambient light intensity.

| Command | PAR&nbsp;LED | Function |
| ------- | -- | -- |
| `par_led_start_on_open` | `0-10` | If set to 1 or higher, it will wait until the clamp is opened, then proceed with the rest of the experiment. If set to 0, light intensity is set to 0. |
| `par_led_start_on_close` | `0-10` | If set to 1, will wait until the clamp is closed, then proceed with the rest of the experiment. If set to 0, light intensity is set to 0. |
| `par_led_start_on_open_close` | `0-10` | If set to 1, will wait until the clamp is opened then closed, then proceed with the rest of the experiment. If set to 0, light intensity is set to 0. |

::: warning Note
The Protocol commands above will update the value for previous `previous_light_intensity`.
:::

## Timeout

The command `max_hold_time` allows to set the time (in ms) at which the hold commands timeout and the Protocol continues regardless of the used hold command. By default the value is set to `15000` ms or `15` seconds.

```javascript
"max_hold_time": 15000 // (requires one integer, 0-1000000)
```

*Hold commands:* `start_on_open`, `start_on_close`, `start_on_open_close`
