# PhotosynQ Documentation

Documentation on how to use the PhotosynQ Platform, including Help, Tutorials and FAQs.

## Build

The latest release is available at <https://help.photosynq.com>.

### Folders & Files

Files are named using the help or tutorial title, e.g. `this-is-the-chapter-1.md`.

```shell
├── docs
│   ├── Readme.md                           // Landing Page
│   ├── .vuepress
│   │   └── config.js                       // Change Page content and layout here
│   ├── account                             // Account Chapters folder
│   │   └── images
│   ├── desktop-application                 // Desktop Application Chapters folder
│   │   └── images
│   ├── instruments                         // Instrument Chapters folder
│   │   └── images
│   ├── macros                              // Macro Chapters folder
│   │   └── images
│   ├── mobile-application                  // Mobile Application Chapters folder
│   │   └── images
│   ├── projects                            // Project Chapters folder
│   │   └── images
│   ├── protocols                           // Protocol Chapters folder
│   │   └── images
│   ├── tutorials                           // Tutorials folder
│   │   └── images
│   └── view-and-analyze-data               // Data viewing and analysis Chapters folder
│       └── images
└── firmware
    ├── <version>                           // Firmware version commands folder
    ├── ...
    ├── docs                                // Document Page Headers
    │   ├── console-commands.md             // Console commands page header
    │   ├── console-commands-archive.md     // Console commands archive page header
    │   ├── protocol-commands.md            // Protocol commands page header
    │   └── protocol-commands-archive.md    // Protocol commands archive page header
    └── versions.json                       // File describing the firware versions
```

### Images

All images are placed in the `images` folder in the corresponding chapter folders. For now we don't have any special naming conventions.

Include images as `![A figure description](./images/file.*)`

Make sure to use png, jpeg or gifs if animations are necessary.

### Special functions

```
::: tip Title
This is a Tip for you.
:::
```

Will create a blue info box on the website. Don't use line breaks.

```
::: warning  Title
This is a Note for you.
:::
```

Will create a yellow note box on the website. Don't use line breaks.

`<i class="fa fa-..."></i>` Will include the corresponding <https://fontawesome.com/v4.7.0/icons> icon (v4.7.0) on the website.

### Installation

Make sure to use `yarn` and not `npm` to allow for correct functionality with `vuepress`.

```shell
yarn install
```

### Firmware

The firmware folder contains individual files for each command, using the command as a filename `command.json`.

#### New Firmware command

Use the following command generate a template file for a new command.

```shell
gulp firmwareNewCommand --cmd=YourCommand --version=FirmwareVersion
```

The standard structure for documenting a command is the following:

```javascript
{
    "name": "<string>",             // Command Name
    "abstract": "<string>",         // A brief one line description about the Command's function
    "description": "<string>",      // Description of the Command's function
    "alias": ["<string"],           // If the Command has an alias add it here, no separate file needed
    "input": "string|array|number", // If the Command expects a string, number or array
    "values": [],
    "example": "<string>",          // Add an example on how to use the command
    "type": "console|protocol",     // Where the Command can be used
    "compatibility": [],            // "Instrument Name": ["firmware version",...]
    "deprecated": false,            // If a Command is deprecated set to true
    "dependencies":[],              // Add Commands that are required with this command in protocols
    "parent": "<string>",           // When the command nested within a command
    "access": "public|private"      // If the command is in the outside documentation
}
```

#### New Firmware Version

For each new firmware version a new folder is generated. When creating the new version, all commands from the previous version are copied into the new folder.

```shell
gulp firmwareNewVersion --version=FirmwareVersion
```

### Test Help Documentation

Requires *yarn* to be used. Open the url in a browser when the server is started.

```shell
yarn docs:dev
```

Run a test build of the static pages.

```shell
yarn docs:build
```

### Compile Master documents

To generate one big help document and one tutorials document, use the following command.

```shell
gulp build
```

### Create a release

This will build the static documentation page from the latest version, as well as all other documentation files.
Before running this script, make sure to create a new tag/release on git.

```shell
yarn release
```
