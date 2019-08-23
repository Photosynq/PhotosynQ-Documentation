# Connect Python to PhotosynQ

You can import Project data right out of PhotosynQ into Jupyter. All you need is a login to <https://photosynq.org> and the ID for the Project you want to analyze. You can find this ID on the left side of the Project page or in the list of Projects on your User page.

## Import Libraries

```python
# Import Libraries
import photosynq_py as ps
```

If you don't have the library installed go to <https://github.com/PhotosynQ/PhotosynQ-Python> and follow the instructions on how to install the library with R.

## Access the Project Data

Replace the ID and the email address with your information. A popup window will ask you to enter your password.

```python
email = "john.doe@domain.com"
ps.login(email)

# retrieve a dataframe with data from the given project ID
projectId = 1566
df = ps.get_project_dataframe(projectId, include_raw_data=False)

# logout
ps.logout();
```
