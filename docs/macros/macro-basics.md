# Macro Basics

::: warning Workflow Change
With the latest version of the Desktop Application (v1.9.x), Protocols and Macros are saved and edited together as one unit. In contrast to previous versions, Macros are no longer accessed separately but as a part of a Protocol. However, their functionality has not changed. Previous Macros and Protocols are fully compatible with the new View and Editor and workflow.
:::

Macros are small snippets of code, which run calculations based on your measurements. They are written in the popular script language [JavaScript]. After a measurement has been taken, the data is send from the Instrument to your device and the Macro is processing the data before showing all the calculated parameters. Not every measurement requires post processing (e.g. a simple temperature measurement), but if you want to calculate a parameter from the measurement **Trace** or want to compare parameters (e.g. ambient temperature vs. leaf temperature), a Macro will calculate the parameters of interest and display the results instantly on your mobile device (e.g. a phone).

::: tip Tip
PhotosynQ is providing a number of pre-build functions to make it easier to build Macros and to avoid writing the same code for standard problems like calculating an average over and over again.
:::

## Browser

1. Go to your user profile by clicking on your user name in the top menu bar. Make sure you are signed in first.
2. Select the **Protocols** tab to get a list all of your Protocols.
3. Click on the Protocol to get to the Protocol/Macro page with the Macro description, the Macro Code, the Measurement data and the Comments.

## Desktop

1. Open your Protocols by selecting Protocols from the left menu bar or use the shortcut <kbd>Ctrl/⌘</kbd>+<kbd>3</kbd>.
2. Click on the **My Protocols** to list all your protocols, if it is not already selected.
3. Click on a Protocol in the list to show detailed information in the side bar.
4. Select Edit to open the Protocol and Macro code.

![The list of available Protocols with Macros](./images/macro-list.png)

::: tip Tip
In case you want to see the work of others, select **Explore** from the top menu.
:::

## Mobile Application

::: warning Note
Macros cannot be viewed or edited in the mobile application.
:::

[JavaScript]: https://www.w3schools.com/js/js_json_intro.asp
