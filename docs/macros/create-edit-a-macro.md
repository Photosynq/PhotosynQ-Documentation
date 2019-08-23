# Create / Edit a Macro

If you want to analyze a measurement using your own calculation, create a macro to do the calculation for you. When a Protocol has a Macro associated, the Macro will calculate all parameters derived from the measurement immediately after the measurement is done. When the measurement is saved for a Project, the raw measurement is send to the cloud where the macro is doing the calculations again.

![The Macro Editor](./images/macro-editor.png)

## Create New Macro

1. Make sure you have the Desktop Application installed and you are signed in.
2. Select **New Macro...** from the File menu.
3. Select a measurement from the dialog, the macro should analyze. The measurements are selected from the notebook. If you don't have a measurement saved to your notebook, take one with the protocol the macro is for save it to your notebook.
4. Start coding...

If you need more help on how to get started, please look at this [Tutorial](../tutorials/building-a-macro.md)

## Edit a Macro

You can change one of your Macros or extend an already existing one at any time.

1. Select **Macros** from the left menu bar.
2. Double click on the macro in the list or click on **Edit** in the sidebar.
3. Make your changes to the code.
4. Select **Save as...** from the File menu or use the shortcut <kbd>Ctrl/⌘</kbd>+<kbd>Shift/⇧</kbd>+<kbd>S</kbd>.
5. Update the description if needed.
6. Save the changes by **Save As**.

::: tip Tip
In case you altered a macro someone else had made, change the name too. In this case you only have the option **Save as**.
:::

## Save a Macro

Once you are done, save your work and share it with the community.

1. When you have the Macro Editor open, select **Save** from the File menu or use the shortcut <kbd>Ctrl/⌘</kbd>+<kbd>S</kbd>.
2. In the save dialog, add a macro name and description.
3. Save the macro by selecting **Save**.

## Connecting a Macro

Once you have the Macro finished, you can open the Protocol in the Protocol Editor and select the Macro from the dropdown list from the menu. Then save the Protocol again to connect the Macro. Now when run, the Protocol will return the calculations that have been done by the Macro after the measurement is done.

## After Macro Updates

When updating a Macro for a Protocol that is used in a Project, the update will impact the data already collected. When opening the Project on the PhotosynQ website to view the data, you will be asked if the data should be reprocessed. This is only available to the Project Lead.

### Troubleshooting

If you have issues saving the macro, make sure you check these things first:

- When a Macro done, make sure the output box is green, indicating that there was no error.
- Make sure you have a name, description.
- Check that the name is not already existing.
