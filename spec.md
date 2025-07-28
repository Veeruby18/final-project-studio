# Movie Explorer Spec

## Overview
A simple web app that lets users search for movies and view movie details. It consumes the OMDB API to fetch movie data.

## Goals
- Allow users to search movies by title
- Display results as responsive UI cards
- Show poster, title, year, and a link to more info

## Non-Goals
- No user authentication
- No advanced filtering or sorting

## Use Cases
1. **Search Movie**: User enters a title and clicks Search
2. **View Details**: User clicks on card to open the IMDb page

## Functional Requirements
- **Search Input**: Text input and button triggers API call
- **API Integration**: Fetch from `http://www.omdbapi.com/?apikey=[API_KEY]&s={query}`
- **Display Cards**: Responsive grid of movie cards
    - Poster image (fallback if not available)
    - Title and Year
    - "More Info" button linking to IMDb
- **Error Handling**: Show messages for no results or API errors

## Technical Stack
- **HTML** for structure
- **CSS** (Flexbox/Grid) for layout and responsiveness
- **Vanilla JavaScript** for DOM manipulation and fetch calls

## Open Questions
- Should pagination be implemented? (future enhancement)
- Custom styling/theme options?
