# Feedback for NC News Front End App

___

## CORE: View a list of all articles 
✅ As a user, I can see a list of articles on the homepage or on another route e.g., /articles. 

❌ As a user, I can see the title, author, and topic for each article. 

- Showing the title, author, and topic for each article helps users scan and understand the content at a glance. It also sets the foundation for later features, like filtering articles by author or topic, or linking to topic-specific pages. 

✅ As a user, I can see how many votes and comments each article has. 

❌ As a user, I can see when each article was published, in a human-readable format. 

- Displaying a human-readable date helps users understand how recent or relevant an article is. It also lays the groundwork for features like sorting by newest or oldest articles. 

- Read more: https://www.w3schools.com/js/js_dates.asp

✅ As a user, I can see an image that represents the article. 



___

## CORE: View an individual article 
✅ As a user, I can visit a unique URL to view a single article. 

✅ As a user, I can see the full article title and body. 

❌ As a user, I can see the article's topic, author, and creation date. 

- The article page is missing the topic, author, or creation date. Make sure these are displayed clearly. 

✅ As a user, I can see how many votes and comments the article has. 

✅ As a user, I can see an image that represents the article. 



___

## CORE: View a list of comments associated with an article 
✅ As a user, I can see a list of comments below or beside the article content. 

✅ As a user, I can see who wrote each comment and when it was posted. 

✅ As a user, I can see the content of each comment. 

✅ As a user, I can see how many votes each comment has. 



___

## CORE: Vote on an article 
✅ As a user, I can increase or decrease the vote count using clear controls. 

✅ As a user, I see immediate feedback when I vote (optimistic rendering). 

❌ As a user, I receive a clear message or visual cue if something goes wrong when voting. 

- If voting fails due to a network or server error, users should see an appropriate message or visual indication. 

- Read more: l2c.northcoders.com/courses/sd-notes/front-end/#sectionId=error-handling,step=conditionally-rendering-errors



___

## CORE: Post a new comment to an existing article 
❌ As a user, I can type a comment and submit it on the article page. 

- Users should be able to type and submit a comment on an article. This typically involves a textarea and a submit button. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end/#sectionId=4-html-forms,step=textarea

✅ As a user, I cannot submit an incomplete or empty comment. 

❌ As a user, I receive clear feedback that my comment is being submitted. 

- Users should receive a clear visual cue (e.g., a loading spinner or message) when their comment is being submitted. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end#sectionId=loading-patterns,step=intro

❌ As a user, I see my new comment appear in the comment list after submission. 

- After submitting, the new comment should appear in the list without requiring a page refresh. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end#sectionId=updating-the-ui,step=intro

❌ As a user, I receive an appropriate message or visual feedback if my comment fails to post. 

- If there’s an error while posting a comment, users should see an appropriate message or visual indicator. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end#sectionId=error-handling,step=intro



___

## CORE: Delete comments 
❌ As a user, I can see a delete option only on comments I've authored. 

- Make sure the delete button only renders on comments where the currently logged-in user is the author. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end/#sectionId=error-handling,step=using-ternary-operators

❌ As a user, I can delete one of my comments and see it removed from the page. 

- When a user deletes a comment, it should be removed from the UI without needing a page refresh. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end/#sectionId=updating-the-ui,step=refreshing-data

❌ As a user, I receive clear feedback when my comment is being deleted. 

- Provide clear visual feedback (e.g., loading spinner or disabled button) when the delete action is in progress. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end#sectionId=loading-patterns,step=intro

❌ As a user, I receive appropriate feedback if something goes wrong when trying to delete a comment. 

- If the deletion fails, show an error message and ensure the comment remains visible. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end#sectionId=error-handling,step=intro

❌ As a user, I cannot submit multiple delete requests for the same comment. 

- Disable the delete button while a request is in progress to prevent duplicate submissions. 



___

## CORE: View a separate page for each topic with a list of related articles 
✅ As a user, I can see a list of all available topics. 

✅ As a user, I can select a topic and view a list of related articles. 

✅ As a user, I can navigate to a unique URL for each topic (e.g., /topics/coding) and see only the articles for that topic. 

✅ As a user, I can share a topic URL and others will see the same filtered list. 



___

## CORE: Sort articles 
✅ As a user, I can choose how to sort the articles (e.g., by date, comment count, or votes). 

✅ As a user, I can flip the sorting order between ascending and descending. 

✅ As a user, I see the article list update based on my selected sort options. 

❌ As a user, I can share the current sort view using the URL. 

- Ensure sort settings are reflected in the URL so the view can be shared or bookmarked. Query parameters are a typical solution here. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end/#sectionId=react-router,step=updating-queries-with-usesearchparams



___

## CORE: Error handling 
❌ As a user, I see a helpful message if I try to visit a route that doesn't exist. 

- Display a clear, user-friendly message (e.g. “Page not found”) when the user navigates to a URL that doesn't match any route. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end/#sectionId=error-handling,step=invalid-routes

❌ As a user, I see an appropriate error if the article or topic I'm trying to view doesn't exist. 

- If an article or topic isn't found (e.g. wrong ID or slug), show a helpful message rather than breaking the UI or showing an empty page. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end/#sectionId=error-handling,step=error-components

❌ As a user, I am told if I try to post a comment without providing all the required information. 

- Ensure required fields are validated before submitting a comment, and show a clear message when information is missing. 

- Read more: l2c.northcoders.com/courses/sd-notes/front-end/#sectionId=forms-and-validation,step=real-time-validation-with-events

✅ As a user, I never see raw or confusing technical error messages. 



___

## GENERAL: Layout & Accessibility 
✅ As a user, I can navigate the app easily using clear layout and structure. 

❌ As a user, I can use the app comfortably on different screen sizes. 

- The app should work well on small and large screens. Layouts should adapt to screen size without breaking or hiding essential functionality. 

- Read more: https://l2c.northcoders.com/courses/sd-notes/front-end#sectionId=7-responsive-design,step=intro

❌ As a user, I benefit from semantic HTML and appropriate `alt` text. 

- Use semantic HTML where possible (e.g. `<button>`, `<nav>`, `<header>`, `<main>`). Make sure that images have appropriate `alt` text.

There are 5 instances of forms that have no label and should do for accessibility/ assistive technology reasons.

- Read more: l2c.northcoders.com/courses/sd-notes/front-end/#sectionId=accessibility,step=semantic-tags 

✅ As a user, I benefit from good colour contrast and must not rely on colour alone for visual feedback. 



___

## GENERAL: Console Feedback 
✅ I can run the application without seeing any console errors or warnings 

✅ There are no stray `console.log`'s in the code 

