# Data Analysis

When it comes to viewing and analyzing the collected data, there are two options available. The collected data can be viewed and filtered using the PhotosynQ Online Platform. Here the data can be filtered and subsets of data can be used with the provided *"basic"* statistical analysis tools including a *Summary*, *Student's t-Test*, *ANOVA* and *Chi Square Test*.

However, many of the parameters measured by the MultispeQ (e.g. Phi2, PhiNPQ and PhiNO) respond rapidly to changes in light intensity. Depending the complexity of the experiment, more sophisticated analytical methods are required, that are not available on the Online Platform. For this *"Advanced"* analysis, packages for **Python** and **R** are provided, allowing to receive the data from the Online Platform and to be used locally and providing the data formatted in *data frame*.

The data can also be downloaded from the Online Platform, either from the Spreadsheet view, when viewing the data or for creators and contributors of a project as a spreadsheet (xlsx) or in the JSON format. However, it is recommended to either use the **Python** or **R** packages, as they allow for including the original data and traces and provide a ready to go format.

## Basic Analysis

When viewing the a Projects data online, "basic" tools are available to perform some statistical analysis.

| Analysis Method | Description |
| :-------------- | :---- |
| **Summary** | A summary is created for one parameter (e.g. Phi2) at a time. A histogram to shows the distribution of values, as well as Sample Size, Median, Average, Confidence Interval of Average, Standard Deviation, Minimum, Maximum and Sum are calculated for each series. It provides a quick overview of your dataset. |
| **Student's t-Test** | A t-test compares the values of a single parameter (e.g. ΦII) between two series. If the sample size is the same for both series, a one tailed t-test can be selected. If the numbers are different a two tailed t-test. In case a one tailed t-test is picked and the sample size differs between the two series a two tailed test is performed automatically. |
| **ANOVA**| Analysis of variance (ANOVA) compares a single parameter (e.g. ΦII) between more than two series. A One-Way ANOVA should be used when the series are created using one filter (e.g. Leaf #). This rule may not apply if the Project is looking for several plant species and a second filter is used to select only one species. |
| **Chi Square Test** | A chi-square test for independence compares two parameters in a Project to see if they are related. In a more general sense, it tests to see whether distributions of categorical variables differ from each another. |

## Advanced Analysis

Currently packages for Python and R are available to receive project data from the Online Platform and provide it in a *data frame* format. Also some examples are available for an ANOVA and Multivariate Analysis as well as a Correlation and Mix Effects modeling.

| Tutorial                        |      Python      |           R-Studio           |
| :------------------------------ | :--------------: | :--------------------------: |
| Install Package                 | [View][Python-1] |         [View][R-1]          |
| Import PhotosynQ Data           | [View][Python-2] | [View][R-2] ǀ [.Rmd][R-Rmd1] |
| ANOVA and Multivariate Analysis |        ×         | [View][R-3] ǀ [.Rmd][R-Rmd2] |
| Correlation and Mixed Effects   |        ×         | [View][R-4] ǀ [.Rmd][R-Rmd3] |

[Python-1]: ../view-and-analyze-data/python/python-install.md
[Python-2]: ../view-and-analyze-data/python/python-connect-python-to-photosynq.md

[R-1]: ../view-and-analyze-data/r/r-install.md
[R-2]: ../view-and-analyze-data/r/r-import-photosynq-data.md
[R-3]: ../view-and-analyze-data/r/r-anova-and-multivariate-analysis.md
[R-4]: ../view-and-analyze-data/r/r-correlation-and-mixed-effects.md

[R-Rmd1]: https://photosynqprod.s3.amazonaws.com/files/tutorials/data_analysis/r_import_photosynq_data.Rmd
[R-Rmd2]: https://photosynqprod.s3.amazonaws.com/files/tutorials/data_analysis/r_anova_and_multivariate_analysis.Rmd
[R-Rmd3]: https://photosynqprod.s3.amazonaws.com/files/tutorials/data_analysis/r_correlation_and_mixed_effects.Rmd
