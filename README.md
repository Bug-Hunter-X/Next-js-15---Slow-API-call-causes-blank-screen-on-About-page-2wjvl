# Next.js 15 - Slow API Call Blank Screen Issue

This repository demonstrates a common issue in Next.js 15 applications where a slow API call on a page can lead to a blank screen for an extended period before the content is rendered. This is particularly noticeable on initial page load.

## Problem

The `pages/about.js` file fetches data from an API that simulates a 5-second delay. During this delay, the user sees a blank screen, creating a poor user experience.

## Solution

The improved `pages/aboutSolution.js` file utilizes `Suspense` to display a loading indicator while awaiting the API response. This significantly enhances the user experience by providing feedback during the loading process.

## How to Reproduce

1. Clone this repository.
2. Navigate to the root directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the development server.
5. Visit `/about` in your browser. Observe the blank screen before the content is loaded.  Then compare to `/aboutSolution` to see the improved loading experience with suspense.
