# Daily Weather App
A daily weather app made using the Open Weather API. Project built to gain experience using server-side APIs and to improve HTML, CSS and JavaScript. 
# CURRENT DEVELOPMENT
I am currently working on a refactor of this application: with emphasis on improving the front-end. I have built a wireframe for the webpage and made some notes, outlining how I would like the new page to look: 
  
https://docs.google.com/presentation/d/1e4LlRv6q2VT_CRc3AhTzguixGyE23NcCgGUtA1TYlc8/edit#slide=id.g18dede9af60_0_238
  
This is primarily a front-end project - as I feel most of my portfolio projects currently demonstrate my back-end skills better.  
## Task List

## Task 0: Bring in icons
`` https://www.flaticon.com/search?author_id=227&style_id=527&type=standard&word=weather ``  
Drop shadow makes these look good, not too complicated

## Branch 1: Background and NavLinks
 - Do this in a 'templates' folder:
 - Set up a ten colour background
 - Experiment with gradients and try with block colours
 - Create a transparent background / white border navlink container
 - Create three nav links - repo, linkedin, openweather
 - Give text and border a black drop shadow

 - Create blue shapes for base of the page
 - Import blue font
 - Experiment with above shape drop shadow for 3D effect
 - Create website name / brand / logo text in blue
 - Create white drop shadow or second version beneath
 - Potentially use two blues to distinguish shapes and name
 - Export / merge.

## Branch 1B: Make background responsive
- See if ten colours works on mobile - if not, change to 6-8 (8 easiest)
- Have navlinks change into just the github rat
- Have the blue shapes at the base crop rather than just shrink - crop from the centre - probably the most complex job.

## Branch 2: Main ring + small circles - rough draft
 - I think I should do this in one branch - big circle first, then small circles
 - Just positioning the shapes for now - no content
 - Responsive - bring small circles below and center them
  

At this point I will want to come up with a new plan, but what is left to do is:
## Remaining tasks:
 - Create React app and set up Heroku hosting
 - Format main ring and main ring data
 - Link existing script to main ring + main ring data
 - Format small circles
 - Link small circles to existing data
 - Still need to design how user location input is going to be put in the app
 - Style the above
 - Create a geolocation / use current location feature
 - Style the above
 - Bonus: I'd love a Celsius / Farenheit toggle. Can do this with the OpenWeather API.
 - Bonus 2: Want to store previous location searches if possible - is this better in localStorage or react state?

## Branch 3?: Main ring - content design
 - Go through data and decide if want 4 or 6 rectangles
 - Design white rectangles 
 - Look at how easy it would be to position things on a circle
 - If not too complicated - develop the 'sunrise' / 'sunset' feature with stock numbers
 - Test and potentially remove the 'sunrise' / 'sunset' feature