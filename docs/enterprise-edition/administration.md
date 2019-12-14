# Administration

Admin users of the PhotosynQ **Enterprise Edition** will be able to access the admin page for their cloud. From there they will be able to access data regarding the Users, Projects, Protocols, Macros, Measurements and more. These can all be accessed by the menu at the top of the admin page.

## Admin Users

This page allows you to see the admin users to the personal enterprise cloud as well as to add or delete admins. You are also able to track who is logging in and how often.

Select **View** from the list of Admin Users to view all parameters associated. Select **Edit** from the list or **Edit Admin User** when viewing a single Admin User to change Name, Email or Password. Select **Delete** from the list or **Delete Admin User** when viewing a single Admin User to remove the User.

::: warning Note
These are not the **General Users** who work on Projects or Protocols and collect data. Go to [Users](#users) to manage them.
:::

## Data

This tab allows to track when measurements were taken for different Projects, who took them, as well as the raw and post data connected with the Measurement.

View a single Measurement (Datum) by selecting **View** from the list of Measurements to see all saved parameters. Select **Delete** or **Delete Datum** when viewing a Measurement, to remove it from the database.

::: tip
A Measurement and answers to project questions cannot be edited.
:::

## Discussions

This tab is listing individual posts from any forum, including the Title, Type (Forum, Project, Protocol, Macro), Parent (e.g. Technical Support) and the User who who created the post.

By selecting **Moderate** from the list, you are directed to the forum the post was contributed. This is only available for the Type Forum. Select **Delete** to remove a post. When signed in as an Admin and a General User, posts can be deleted right within the forum, you don't have to open the admin section.

## Forums

On this tab you may view the previously created forums or create new ones where discussions can be made and questions answered. Each new project creates a new forum as well.

Add a forum, by selecting **New Forum** from the list. Only forums with the Type "Forum" can be created from this panel. All other forum types are generated automatically.

When creating a new forum or editing one, you have the following options:
    + Name - Forum name
    + Description - Tagline for the forum
      + Go Live - Check if the forum should be made available to General Users
      + Is open to all - Uncheck if only admins should manage topics
    + Forum type - Types: Forum, Project
    + Order - Forums on the forum page can be ordered, enter the position here
    + Forum - Select a forum, if the new forum is a sub-forum

Select **View** from the list of Forums to view all parameters associated. Select **Edit** from the list or **Edit Forum** when viewing a single Forums. Select **Delete** from the list or **Delete Admin User** to delete the forum and the connected posts.

## Macros

New macros can be created, edited, or added to the enterprise’s private cloud through this function.

Select **View** from the list of Macros to view the content of a particular Macro. Select **Edit** from the list or **Edit Macro** when viewing a single Macro to change any parameters. Also the User, who created the Macro can be changed here. Select **Delete** from the list or **Delete Macro** when viewing a single Macro to archive a Macro. It will no longer be available for users on the platform. Make sure to only delete the ones no longer required!

There are no differences in the functionality of Macros in the **Enterprise Edition** and the **Community Edition**. Any General User with an account, can build and contribute new ones through the Desktop Application.
For more on [Macros](../protocols/macro-basics.md), please refer to the documentation of the **Community Edition**. It is strongly recommended to build new Protocols using the Desktop Application.

## Notifications

Not active yet.

## Projects

Projects are able to be monitored, viewed, and deleted from this tab.

Select **View** from the list of Projects to view the content of a particular Project. Select **Edit** from the list or **Edit Project** when viewing a single Project. The only options that can be edited here are the Project Name, Description and the Project Lead. Select **Delete** from the list or **Delete Project** when viewing a single Project to delete the Project and the connected data. It will no longer be available  on the platform.

::: warning Important
**New Projects** can only be created by General Users through the website.
:::

## Protocols

You are able to view all the protocols available on the private cloud as well as create new ones from here.

Select **View** from the list of Protocols to view the content of a particular Protocol. Select **Edit** from the list or **Edit Protocol** when viewing a single Protocol to change any parameters. Also the User, who created the Protocol can be changed here. Select **Delete** from the list or **Delete Protocol** when viewing a single Protocol to archive a Protocol. It will no longer be available for users on the platform. Make sure to only delete the ones no longer required!

There are no differences in the functionality of Protocols in the **Enterprise Edition** and the **Community Edition**. Any General User with an account, can build and contribute new ones through the Desktop Application.
For more on [Protocols](../protocols/protocol-basics.md), please refer to the documentation of the **Community Edition**. It is strongly recommended to build new Protocols using the Desktop Application.

## Users

The admin user is able to add new General Users on this tab. The Admin will need the user's name and email and will need to create a password for the General User that can be changed later if preferred. Further, you are also able to track who is logging in and how often.

When selecting a user from the list using **View** all parameters stored in the database can be viewed. Selecting **Edit User** from the top or **Edit** directly from the list, allows to change the user's Name, Email, and Password. Users who wish to be removed can be deactivated selecting **Deactivating User** when viewing the user account. The account gets anonymized, but the contributed data will stay connected to the anonymized account.

::: tip Note
The **Enterprise Edition** doesn't have direct access to Protocols or Macros from the **Community Edition**. However, standard Protocols/Macros are provided.
:::
