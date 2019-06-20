# Analyzing your Data

## Introduction

Many of the parameters measured by the MultispeQ (e.g. Phi2, PhiNPQ, and PhiNO) respond rapidly to changes in light intensity. For this reason, the analysis of PhotosynQ data often requires multivariate or more sophisticated analytical methods.

However, there are a number of simple tools available from the dashboard in the data viewer. These simple statistical tools include a summary, students t-test, and ANOVA.

## Summary

A summary is created for one parameter (e.g. Phi2) at a time. A histogram to shows the distribution of values, as well as Sample Size, Median, Average, Confidence Interval of Average, Standard Deviation, Minimum, Maximum and Sum are calculated for each series. It provides a quick overview of your dataset.

## Student's t-Test

A t-test compares the values of a single parameter (e.g. ΦII) between two series. If the sample size is the same for both series, a one tailed t-test can be selected. If the numbers are different a two tailed t-test. In case a one tailed t-test is picked and the sample size differs between the two series a two tailed test is performed automatically.

## ANOVA

Analysis of variance (ANOVA) compares a single parameter (e.g. ΦII) between more than two series. A One-Way ANOVA should be used when the series are created using one filter (e.g. Leaf #). This rule may not apply if the Project is looking for several plant species and a second filter is used to select only one species.

## Chi Square Test

A chi-square test for independence compares two parameters in a Project to see if they are related. In a more general sense, it tests to see whether distributions of categorical variables differ from each another.

***

## Advanced Analysis

These are basic tutorials on how to do advanced data analysis outside the data viewer and use the available packages.

| Tutorial                        |        Python        |                      R-Studio                    |
| :------------------------------ | :------------------: | :----------------------------------------------: |
| Import PhotosynQ Data           | [View][Python-View1] | [View][R-View1] ǀ [PDF][R-PDF1] ǀ [.Rmd][R-Rmd1] |
| Anova and Multivariate Analysis |          ×           | [View][R-View2] ǀ [PDF][R-PDF2] ǀ [.Rmd][R-Rmd2] |
| Correlation and Mixed Effects   |          ×           | [View][R-View3] ǀ [PDF][R-PDF3] ǀ [.Rmd][R-Rmd3] |

[Python-View1]: /tutorials/python-connect-python-to-photosynq

[R-View1]: /tutorials/r-import-photosynq-data.md
[R-View2]: /tutorials/r-anova-and-multivariate-analysis.md
[R-View3]: /tutorials/r-correlation-and-mixed-effects.md

[R-PDF1]: https://photosynqprod.s3.amazonaws.com/files/tutorials/data_analysis/r_import_photosynq_data.pdf
[R-PDF2]: https://photosynqprod.s3.amazonaws.com/files/tutorials/data_analysis/r_anova_and_multivariate_analysis.pdf
[R-PDF3]: https://photosynqprod.s3.amazonaws.com/files/tutorials/data_analysis/r_correlation_and_mixed_effects.pdf

[R-Rmd1]: https://photosynqprod.s3.amazonaws.com/files/tutorials/data_analysis/r_import_photosynq_data.Rmd
[R-Rmd2]: https://photosynqprod.s3.amazonaws.com/files/tutorials/data_analysis/r_anova_and_multivariate_analysis.Rmd
[R-Rmd3]: https://photosynqprod.s3.amazonaws.com/files/tutorials/data_analysis/r_correlation_and_mixed_effects.Rmd
