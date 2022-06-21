## Week 1 Assignment: Flixster

Submitted by: Chidinma Chinedu

Estimated time spent: 20 hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [ ] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [ ] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [ ] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [ ] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [ ] Website accounts for basic HTML/CSS accessibility features
- [ ] Website should be responsive

#### STRETCH FEATURES

- [ ] Deploy website using GitHub Pages. 
- [ ] Allow user to view more details about a movie within a popup.
- [ ] Improve the user experience through CSS & animation.
- [ ] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

`ADD_EMBEDDED_CODE_HERE`
<iframe 
src="https://www.screencast.com/t/8VbuA9F7H" frameborder="0" 
webkitallowfullscreen mozallowfullscreen allowfullscreen 
style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
</iframe>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?
* The topics did, specifically the responsiveness of a website in lab 1, the introduction of javascript and innerHTML for me in lab 2, the array introduction and searching in lab 3, and the introduction of api in the project demo


* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I would have looked for ways to add a more movies feature for my search input and improve the css a bit more. Also would have attempted to include a youtube trailer

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Fetching the data went well after I figured out the process, what didn't go as planned is that my more movies button displays a duplicate of the previous movies when a search is activated, and I noticed one of my peer who didn't have a pop up for the movies overview but rather the poster card rotated to display the movie overview; I would like to try that 

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Shout out to Mr. Yilka who basically introduced javascript to me and made me use my previous knowledge to fix bugs
Shout out to Mr. Phineas for the personal help but especially for the demo explanations, they were very useful, especially the flixster demo we did before actually using the api
