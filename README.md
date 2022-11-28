# Development

### Link to Deployed Website
If you used the stencil code, this is `https://hungryshark13.github.io/cs1300-development`

### Goal and Value of the Application
The goal is to display the Qatar World Cup 2022 group stage matches to a user. The value it provides is being able to filter by matches and find the ones that the user is looking for.

### Usability Principles Considered
The website is laid out very simple. There is a header which contains all the sorting and filter functionalities, the reset button, and information in general. Then below that there is MatchCards which display the information of each game. All of the filters work together and I believe the purpose of each button is very clear. Everything can also be seen in a single page which adds to the ease of usability of the website.

### Organization of Components
The program contains an App class which is where the main code is. It also contains a MatchCard component which takes care of rendering cards, as well as a Flag component which takes care in matching the name of the country to the image in the data folder. The matches are taken from an array of objects inside the data folder.

### How Data is Passed Down Through Components
The data is passed down using props and from JSON files in the data folder.

### How the User Triggers State Changes
Every time the user selects a button, the state changes and there are various filters that the array of data goes through to display the correct information.