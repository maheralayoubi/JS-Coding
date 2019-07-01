## Instructions

Your goal is to be able to switch columns in the table presented in the `switch-column.html` file.
You are only allowed to use vanilla JavaScript (preferably ES6 😊) and no libraries.
A guide as to what it should look like is shown in the `spec.png` file.

The goal is to switch any column in the table with the columns Custom Field 1 or Custom Field 2.
Custom Field 1 and Custom Field 2 should start out as hidden columns via CSS.
The table header for any column when clicked should present a dropdown as shown in `spec.png` under the User ID column.
When hovering over the `Change Data` menu item, it should present the columns to switch and display.

For example, clicking on the header of "User ID", the dropdown appears; hovering over the "Change Data" option should present the "Custom Field 1" and "Custom Field 2" options.
Clicking on "Custom Field 1", replaces the "User ID" column with the "Custom Field 1" column.
Clicking on the newly appeared "Custom Field 1" column and then hovering over the "Change Data" option in the dropdown should reveal "User ID" and "Custom Field 2" as the new options.
Then clicking on the "User ID" column should return the table back to its previous state.

This behaviour should work with any column.

You are allowed to add classes or any attributes to the table in the HTML file.
Please write the JavaScript needed in the app.js file.
Also use the `style.css` file and try to follow the styles of the table shown in `spec.png`.

### Additional Notes

`spec.png` contains a couple of elements that you do not need to implement:

1. The logic for displaying the lock icon and the corresponding hover message.
2. Any custom icons do not need to be created
3. Filtering and sorting functions
