### General - Desktop

The PhotosynQ Desktop Application allows to build and test measurement Protocols, Macros, contribute to Projects and save small scale experiments to the Notebook. It requires a PhotosynQ account and an internet connection when signing in and synchronizing content with the PhotosynQ cloud.

#### Keyboard Shortcuts

| Windows      | Mac    | Description                                                       |
| :----------- | :----- | :---------------------------------------------------------------- |
| Ctrl+1       | ⌘1     | Show Project List                                                 |
| Ctrl+2       | ⌘2     | Show Notebook                                                     |
| Ctrl+3       | ⌘3     | Show Protocol List                                                |
| Ctrl+4       | ⌘4     | Show Macro List                                                   |
| Ctrl+5       | ⌘5     | Show Protocol Editor                                              |
| Ctrl+6       | ⌘6     | Show Macro Editor                                                 |
| Ctrl+7       | ⌘7     | Open Instrument Console                                           |
| Ctrl+F       | ⌘F     | Search                                                            |
| Ctrl+S       | ⌘S     | Save - Protocol / Macro / Measurement                             |
| Shift+Ctrl+S | ⇧⌘S    | Save As - Protocol / Macro / Measurement                          |
| Ctrl+Alt+S   | ⌃⌘S    | Synchronize Application with PhotosynQ                            |
| Ctrl+Space   | ⌥Space | Show available Commands and Function in Protocol and Macro Editor |
| Ctrl+Shift+R | ⌥⇧R    | Manually run a Macro calculation in the Editor                    |
| Ctrl+Comma   | ⌘,     | Open Preferences                                                  |
| Ctrl+Q       | ⌘Q     | Close Application                                                 |

#### Energy Saving

When your Computer goes to sleep after a certain time of inactivity to save energy, the app will try to prevent it during a measurement to save the data. This might happen during extremely long measuring Protocols. Should the computer go to sleep during a measurement, please go to your OS settings and deactivate the sleep setting or increase the time after the computer goes to sleep.

#### Serial Connection

The Application uses serial communication to send and receive data from Instruments like the MultispeQ.

When using a micro-USB cable, make sure that the cable allows data transfer. Sometimes cables are only for charging devices. MacOS comes already with the required drives installed, so you can use the Instrument right away. If you are using Windows other than Windows 10 you have to install a serial driver, before you can use the Instrument.

When using Bluetooth make sure to pair the Instrument using the operating system's Bluetooth preferences. The code used for pairing the Instrument is `1234`. After pairing, you will find the Instrument in the list of available Connections. Since the Bluetooth connection is a little bit slower than the cable connection, it might take a second or two longer to establish a connection. Using Bluetooth, you *don't* have to use the serial driver.

Windows Serial Installer: [Download](https://www.pjrc.com/teensy/serial_install.exe)