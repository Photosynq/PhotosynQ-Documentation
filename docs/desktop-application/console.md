# Console

The Console allows you to open a direct channel to your instrument to send commands and get additional information not available through the user interface. When opened while taking a measurement, you can use it to monitor the output.

![Console after running the command `hello` to test the Instrument connection](./images/console-window.png)

## Open the Console

You can bring up the Console window, by selecting **View → Console** from the top menu bar or use the shortcut <kbd>Ctrl/⌘</kbd>+<kbd>7</kbd>.

## Sending a Command

In order to use the Console, you have to connect a PhotosynQ enabled Instrument like the MultispeQ. If no Instrument is connected, the input field is disabled.

When you have an Instrument connected properly, the input field is enabled and you can start sending commands. If you want to check if the Instrument is properly communicating, you can use the command `hello`. Use the **Send** button or the **enter key** to send the command. If communication is working, the response will be `Instrument Ready` in the Instrument output field underneath.

## Instrument Output

Underneath the input field is the Instrument output field. Everything the instrument returns, will be outputted here. You can copy and paste the content, but you cannot modify it in this field. With every new command or protocol sent, the output field is emptied.

If you want to manually empty the output field, use the command `clear console`.

## Input History

When you use several commands repeatedly, you can use the <kbd>⬆</kbd> and <kbd>⬇</kbd> arrow keys to go through the list of previously used commands. Otherwise, you will find the list of all used commands if you click on the dropdown menu button next to the **Send** button.

When disconnecting an Instrument, the list of commands will be emptied. If you want to empty the list when an Instrument is connected use the command `clear history`.

## Available Commands

You can find a list of console commands [here](../instruments/console-commands.md) or you can use the command `--help` or `-h` inside the console. The command will return a list of available commands and a brief description. Use `[command] --help `or `[command]  -h` to get more information about an individual command.

::: warning Note
All commands are **case sensitive**.
:::
