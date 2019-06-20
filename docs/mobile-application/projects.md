# Projects

The Application allows you to take your Instrument together with your mobile device anywhere you want to take measurements. It's build in a way, that is intended to make large scale data collection in the field as easy as possible. To work with Projects you can select **My Projects** from the Menu.

![My Projects Menu Bar](./images/android-projects-menu.png)

## My Projects

My Projects is listing all projects you have created or joined, providing name, part of the about section and a Project image. You can update the list of Projects as well as the Projects themselves, by swiping down until the loading icon appears. Once it has disappeared, the list and Projects are updated.

![Projects](./images/android-projects.png)

## Select a Project

To work with a Project, select one from the list by tapping on it. You can return to the list by using the back ← arrow in the top header next to Projects. The Project screen provides the following options:

## Overview

A description of the Project. Use the **Read More** to expand the text and see the full description.

## Leave Project

If you are not the Project Lead, you can leave the Project by selecting **Leave Project** from below the Overview. You can re-join the Project at any time.

## Contributing to a Project

To contribute to a Project, you can start taking Measurements by selecting **Take Measurement** at the bottom of the screen. When you have an Instrument connected, you will be shown the next screen to answer all the Project related questions. Otherwise you will be prompted to connect an Instrument before you continue (See [Connect an Instrument](./connect-an-instrument.md)).

In case you have an Instrument connected a list of all available Project questions will displayed and depending on the type of question you will have the following input options:

+ A dropdown list with available answers
+ An input field, if you have to enter an individual answer. A list of already given answers will be shown as you type.
+ If the Project has images attached to the list of answers, select an image to answer the question.

### Answering Questions

You have to answer all Project Questions in order to contribute a measurement. You can select Keep Answers below the Take Measurement button, if you take multiple measurement with the same set of answers.

![Question options for Projects, Multiple Choice, User Answer & Scan Barcode, Attach Photo](./images/android-project-questions.png)

### Scan Codes

Answers can also be given, by scanning Bar or QR codes (requires webcam). Select the scan icon next to the input field to use your webcam to scan a code. A dialog will be open up and you can select the input source if you have multiple cameras, otherwise the standard camera will be selected. Hold the code in front of the camera to scan it. When the code was read successfully, the dialog will be closed and the code content added into the input field. You can close the dialog at any time using the Esc key.

### Taking a Measurement

Once you have answered all the Project Questions you can select the Take Measurement button in the right side bar. The measurement will use the protocols listed underneath the button, as well as your Current Location as indicated on the small map. If no location information is available, you will see the warning Unknown Location. In this case you can still contribute a measurement, just laking the geo tag.

::: warning
**Note:** When you push the Take Measurement* button, the measurement, depending on the Protocol, might start right away.
:::

## Save Contribution

![Results for a Protocol for a Project](./images/android-projects-results.png)

After the measurement has been taken, you can save the results to the Project using the Save button above the measurement results or you can Discard the measurement and repeat it. When you want to save your measurement, you can add notes and an image, either using a local file or your webcam and then save it to the Project using the Save button at the bottom of the dialog. When you don't have an internet connection your measurement will be cached and submitted to the Project, the next time you have a connection and the app is able to synchronize.

## Search

If you have long list of Projects, you can search for your Project by tapping on the <i class="fa fa-search" aria-hidden="true"></i> search icon next to the word Projects in the top bar. Use the back ← arrow in the top bar to return to the full list.

::: tip
**Tip:** If you are looking for new Projects to participate in, use [Discover](./discover.md) from the Menu.
:::
