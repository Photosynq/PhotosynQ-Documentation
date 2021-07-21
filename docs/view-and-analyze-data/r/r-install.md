# Install PhotosynQ for R

If you don't already have, install [RStudio] and [R] first. After that you can install the PhotosynQ package using one of the following options.

## CRAN

The easiest way to install PhotosynQ for R is through the [CRAN] network that is hosting the repository for R Packages.

1. Open [RStudio]
2. Select **Tools** from the menu and click on **Install Packages**
3. Select Install from: Repository (CRAN)
4. Type `PhotosynQ` into the Packages input field
5. Make sure the **Install dependencies** checkbox is checked
6. Click on **Install** to finish the installation and close the dialog

::: warning Note
If you are **not** using CRAN to install the PhotosynQ Package you might have to install the Packages `httr` and `getPass` it depends on manually using the command: `install.packages(c("httr","getPass"))`.
:::

## Package Archive File

Download the latest release of the PhotosynQ R package. Select the file indicated as Source code (tar.gz). This is the format required by RStudio.

1. Open [RStudio]
2. Select **Tools** from the menu and click on **Install Packages**
3. Select Install from: Package Archive File `.tgz` `.tar-gz`
4. *Package archive:* Click on **Browse...** and select the downloaded file
5. Click on **Install** to finish the installation and close the dialog

## Development version with devtools

For users that already have a development environment, **[devtools]** provides an easy installation from the GitHub repository.

1. Open **[RStudio]**
2. Install the release version of devtools from CRAN with `install.packages("devtools")`
3. Make sure you have a working development environment.
    + Windows: Install Rtools.
    + Mac: Install Xcode from the Mac App Store.
    + Linux: Install a compiler and various development libraries (details vary across different flavors of Linux).
4. Install the development version of PhotosynQ-R: `devtools::install_github("PhotosynQ/PhotosynQ-R")`

GitHub: [Source](https://github.com/PhotosynQ/PhotosynQ-R)

[RStudio]: https://www.rstudio.com
[R]: https://www.r-project.org
[CRAN]: https://cran.r-project.org/
[devtools]: https://github.com/hadley/devtools "devtools"