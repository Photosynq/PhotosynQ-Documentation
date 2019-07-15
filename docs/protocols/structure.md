# Protocol Structure

All Protocols for PhotosynQ instruments have a similar structure. They can be divided into two categories. The **standard** structure and **advanced** Protocols using the `_protocol_sets_` command.

::: warning
When an advanced Protocol structure is used, a macro is required to return data.
:::

## Standard Protocol

The standard Protocol allows to quickly develop a simple measurement. An example would be a photosynthetic yield measurement, as described in the [Protocols Tutorial](../tutorials/building-a-protocol.md). Output from sensors and detectors is returned without a macro.

```javascript
[
    {
        /*
         * Instrument instructions
         * are defined here
         */
    }
]
```

## Advanced Protocol

The advanced Protocol allows to develop complex measurements by splitting it into steps or sets. An example would be measuring photosynthetic yield together with an electrochromic shift and relative chlorophyll. Output from sensors and detectors requires a macro to be returned.

```javascript
[
    {
        "v_arrays": [
            /*
             * Arrays with variables
             * e.g. arrays with numbers
             * and strings
             */
        ]
        "_protocol_sets_": [
            {
                /*
                 * Instrument instructions
                 * are defined here.
                 * Label command can be used
                 * to identify a set
                 */
            },
            {
                /*
                 * Next set with measurement
                 * instructions
                 */
            }
        ]
    }
]
```

::: tip
Each protocol within a protocol set could be used alone, with a few exceptions, as a standard protocol.
:::
