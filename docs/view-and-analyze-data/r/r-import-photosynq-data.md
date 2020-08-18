# Import PhotosynQ data Into R Studio

You can import Project data right out of PhotosynQ into R. All you need is a login to <https://photosynq.org> and the ID for the Project you want to analyze. You can find this ID on the left side of the Project page or in the list of Projects on your User page. Otherwise you can import Project data into R studio by reading the data from a csv file on your computer.

## Import Libraries

```r
library(PhotosynQ)
```

If you don't have the library installed go to <https://github.com/PhotosynQ/PhotosynQ-R> and follow the instructions on how to install the library with R.

## Access the Project Data

We will use the same Project for all three R tutorials in this section. Project data is also available for download as a csv so that you can follow along and, hopefully, get the same results!

```r
# Call the function to add the Project data into a Data Frame
# 243 equals the Project ID for the data that you want to import into R for data analysis.
df <- PhotosynQ::getProject("john.doe@domain.com",243)

```

Replace the ID and the email address with your information. A popup window will ask you to enter your password.

## View the Project Data

Now we want to view all of the data in our Project. In this example we used two different protocols, so we need to create a unique data-frame for each protocol. If you are using the MultispeQ v1.0 we have created a new default protocol (Leaf Photosynthesis MultispeQ V1.0) that includes all of the standard PhotosynQ parameters in a single protocol.

Also, unless we tell R otherwise, we will import all of the data from the Project. In this example, we will limit the data-frame to only measurements that were not flagged (if a data point is not flagged, then its status is listed as 'submitted'), and only the measurements where 'top' was the answer to the Project questions "Leaf.Location".

```r
# Select a Protocol from the List of Data Frames. This is based on the measurement protocol that your Project uses. 
# This line of code also filters out "flagged" data points and any measurements that have an answer other than "Top" for the Leaf.Location question.
chlorophyll <- subset(df$`Chlorophyll content (SPAD) I`, status == "submitted" & Leaf.location == "Top")
photosynthesis <- subset(df$`The One Protocol (Phi2, PSI, NPQ) II`, status == "submitted" & Leaf.location == "Top")

# View the Protocol Output
View(chlorophyll)
View(photosynthesis)
```

## Transform Data

Many of the parameters measured by the MultispeQ Instrument are affected by factors including:

+ light intensity
+ time of measurement
+ temperature (the temperature data on the MultispeQ beta device was not accurate and can be ignored. However, if you are using the new MultispeQ v1.0, you should take temperature into account)
+ spatial location in the field, this is usually as a identified by ‘block’ or ‘replicate’
+ leaf age and position in the canopy
+ growth stage when data was collected
+ Instrument/User variation. This could be caused user bias in selection of which leaf to measure or by device to device variation (especially in the MultispeQ Beta Instruments, the new MultispeQ v1.0 Instruments are much more consistent across Instruments)
+ this is not an exhaustive list, but rather a summary of the most common factors affecting photosynthesis measurements.

In order to account for these factors, we will need to transform some of the data that we have imported from <https://photosynq.org> so that we can incorporate them into the statistical models.

Standard transformations include:
+transform the light intensity by its square root to make its effect on photosynthetic parameters linear. This is important when you are using linear models like the ANOVA and Mixed Effects models in the next two tutorials
+Convert the time data from the date/time column to a numeric variable.

```r
# We are calculating the square root of the light intensity (PAR). This transformation helps to make the effect of light intensity on Phi2 linear.
photosynthesis$sqrtPAR <- sqrt(photosynthesis$light_intensity)

# We translate the date into a number (0 to 24)
photosynthesis$TimeOfDay <- as.POSIXlt(photosynthesis$time)$hour + as.POSIXlt(photosynthesis$time)$min/60 + as.POSIXlt(photosynthesis$time)$sec/3600
```

## Uploading csv Data

You may need to upload data from a csv into R for analysis. You can do this using the following code.

```r
# Set the main folder location for your data
your_location = "C:/.../"
# The main data file, located in the main folder, is called...
file_name = "sun2.csv"
# Let's pull that data file into R and call it data_raw
my_data = read.csv(str_c(your_location, file_name))
View(my_data)
```
