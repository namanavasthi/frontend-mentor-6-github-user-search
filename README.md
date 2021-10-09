# Frontend Mentor : Github User Search

```
Name : GitHub user search app
Description : In this project, you'll use the GitHub users API to pull profile data and display it. It's a great challenge if you're looking to practice working with a 3rd-party API.
Difficulty : 2-JUNIOR
Status: Complete
Challenge : https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6
```

## THOUGHTS

> FOLKS AT FRONTEND MENTOR! PLEASE PLEASE PLEASE REVIEW YOUR SKETCH FILES AND WHAT VALUES ARE BEING PUT IN THERE!
> #141D2F != #F6F8FF
> REALLY REALLY ANNOYING FOR DEVELOPERS TO SIT DOWN AND FIND WHAT VALUES TO USE WHERE ESPECIALLY WHEN IT DOESNT' MATCH THE DESIGN SYSTEM SPECIFIED

- im going to use my own icons, don't @ me.

> HOLD MY BEER, THAT WASN'T THE ONLY COLOR MISMATCH, THE WHOLE SKETCH FILE IS FULL OF INCONSISTENCIES :/

- made a custom hook for the api call
- added a local cache to not always call api if i already have data

## REQUIREMENTS

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

```
The GitHub users API endpoint is `https://api.github.com/users/:username`. So, if you wanted to search for the Octocat profile, you'd be able to make a request to `https://api.github.com/users/octocat`.
```

- On first load, show the profile information for Octocat.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the `@` symbol and again below with the `@` symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design). The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resaources. For the company link, it should remove the `@` symbol and link to the company page on GitHub. For Octocat, with `@github` being returned for the company, this would lead to a URL of `https://github.com/github`.
