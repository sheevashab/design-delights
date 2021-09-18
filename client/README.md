# Design Delights: Project Overview

## Project Description

Design Delights emulates an interactive design blog. I will use Airtable to make an API that will create the starting content on the blog, but users will be able to add and delete their own content as well once the site is deployed. The MVP for this project covers the art page of the blog, but with post-MVP I would like to include fashion, interiors, and architecture as pages.

## Wireframes

Mobile and Desktop Views

![mobile view wireframe](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1631901757/Wireframe_ard6mh.png)

## Component Hierarchy

 ![component hierarchy](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1631901960/Component_Hierarchy_wqqweo.png)

## API and Data Sample

```json
{
    "fields": {
      "title": "Orange",
      "artist": "Vasily Kandinsky",
      "origin": "Germany",
      "medium": "Lithograph",
      "size": "19\" x 17.5\"",
      "year": "1923"
    }
  },
  {
    "fields": {
      "title": "Dream Caused By The Flight Of A Bee",
      "artist": "Salvador Dali",
      "origin": "Spain",
      "medium": "Oil on panel",
      "size": "16\" x 20\"",
      "year": "1944"
    }
  }
```

## MVP/PostMVP 

### MVP 
My project 2 MVPs are:
- Create a React application with 6 components: a nav bar, a home page, an e-mail submit form, a list of artworks, a user submit for user to add an artwork to the list, and a delete compontent for a user to be able to delete an artwork from the page.
- Employ an axios get, axios post, and axios delete request via Airtable
- Make an API in Airtable
- Design mobile-first application, with media-query for desktop 
- Use CSS library, grid, or flexbox (unsure of which I will use at the moment)

### PostMVP  
My project 2 PostMVPs are:
- Add links and components for fashion, interiors and architecture pages that will also allow to user to add and delete their chosen content

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 16| Wireframe Approval | Complete
|Sept 17| Component Hirearchy Approval / README | Complete
|Sept 18| React application - code app.js layout (aka home page) / NavBar. Create framework for all supplemental jsx component files | Incomplete
|Sept 19| React application - code e-mail submit form component and ArtList component | Incomplete
|Sept 20| React application - code ArtPost form and delete button | Incomplete
|Sept 21| Styling application | Incomplete
|Sept 22| Styling application | Incomplete
|Sept 23| Post MVPs / tie up any loose ends | Incomplete
|Sept 24| Project Presentation | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal - creating wireframes + component hierarchy on Whimsical | H | 2hrs| 3hrs | 3hrs |
| Working with Airtable API | H | 1hrs| 1hrs | 1hrs |
| Setting up deployment and README | H | 4hrs| 5hrs | 5hrs |
| Code for App.js home page route layout / create jsx shell files for components | H | 3hrs| hrs | hrs |
| Code NavBar component | H | 3hrs| hrs | hrs |
| Code e-mail submit form component | H | 3hrs| hrs | hrs |
| Code ArtList component (axios get request) | H | 3hrs| hrs | hrs |
| Code ArtPost component (axios post request) | H | 3hrs| hrs | hrs |
| Code ArtDelete component (axios delete request) | H | 3hrs| hrs | hrs |
| Style home page for mobile | H | 3hrs| hrs | hrs |
| Style Art page for mobile | H | 3hrs| hrs | hrs |
| Style forms | M | 3hrs| hrs | hrs |
| Style buttons | M | 2hrs| hrs | hrs |
| Implement and style media query | H | 3hrs| hrs | hrs |
| Post MVP - Fashion Link (Airtable,List,Post,Delete) | L | 7hrs| hrs | hrs |
| Post MVP - Interiors Link (Airtable,List,Post,Delete) | L | 7hrs| hrs | hrs |
| Post MVP - Architecture Link (Airtable,List,Post,Delete) | L | 7hrs| hrs | hrs |
| Total |  | 39hrs (not including PostMVPs| hrs | hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats: