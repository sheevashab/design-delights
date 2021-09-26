# Design Delights: Project Overview

## Project Description

Design Delights emulates an interactive design blog. I will use Airtable to make an API that will create the starting content on the blog, but users will be able to add and delete their own content as well once the site is deployed. The MVP for this project covers the "art" portion of the blog, but with post-MVP I would like to include fashion, interiors, and architecture as additional segments.

## Wireframes

Mobile and Desktop Views

![mobile view wireframe](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1631901757/Wireframe_ard6mh.png)

## Component Hierarchy

 ![component hierarchy](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1632189197/Component_Hierarchy_1_kqon2i.png)

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
- Create a React application with 6 components: a nav bar, an e-mail submit form, a list of artworks, a detail page for a specific piece of art, a user submit form for user to add an artwork to the list, and a delete compontent for a user to be able to delete an artwork from the page.
- Make an API in Airtable
- Employ an axios get, axios post, and axios delete request via Airtable
- Design mobile-first application, with media-query for desktop 
- Use CSS library Tailwind CSS to style the project

### PostMVP  
My project 2 PostMVPs are:
- Add links and components for fashion, interiors and architecture pages that will also allow to user to view, add, and delete their chosen content

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 16| Wireframe Approval | Complete
|Sept 17| Component Hirearchy Approval / README | Complete
|Sept 18| React application - code app.js layout (aka home page) / NavBar. Create framework for all supplemental jsx component files | Complete
|Sept 19| React application - code e-mail submit form component and ArtList component | Complete
|Sept 20| React application - code ArtPost form and delete button | Complete
|Sept 21| Style application | Complete
|Sept 22| Style application | Complete
|Sept 23| Post MVPs / tie up any loose ends | Complete
|Sept 24| Project Presentation | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal - creating wireframes + component hierarchy on Whimsical | H | 2hrs| 3hrs | 3hrs |
| Working with Airtable API | H | 1hrs| 1hrs | 1hrs |
| Setting up deployment and README | H | 4hrs| 5hrs | 5hrs |
| Code for App.js home page route layout / create jsx shell files for components | H | 2hrs| 2hrs | 2hrs |
| Code NavBar component | H | 2hrs| 2hrs | 2hrs |
| Code e-mail submit form component | H | 1hrs| 1hrs | 1hrs |
| Code ArtList component (axios get request) | H | 2hrs| 1.5hrs | 1.5hrs |
| Code ArtDetail component (axios get request) | H | 2hrs| 1.5hrs | 1.5hrs |
| Code ArtPost component (axios post request) | H | 3hrs| 3hrs | 3hrs |
| Code ArtDelete component (axios delete request) | H | 3hrs| 2hrs | 2hrs |
| Debugging application | H | 3hrs| 2.5hrs | 2.5hrs |
| Install TailwindCSS and research how to use | H | 3hrs| 3hrs | 4hrs |
| Style home page for mobile (NavBar + EmailSubmit form) | H | 3hrs| 5hrs | 5hrs |
| Style ArtList page for mobile | H | 3hrs| 3hrs | 3hrs |
| Style ArtDetail page for mobile | H | 3hrs| 4hrs | 4hrs |
| Style ArtPost form  | M | 3hrs| 4hrs | 4hrs |
| Style buttons | M | 2hrs| 3hrs | 3hrs |
| Implement and style media query | H | 3hrs| 3hrs | 4hrs |
| Post MVP - Fashion Link (Airtable,List,Detail,Post,Delete) | L | 7hrs| 5hrs | 5hrs |
| Post MVP - Interiors Link (Airtable,List,Detail,Post,Delete) | L | 7hrs| 4hrs | 4hrs |
| Post MVP - Architecture Link (Airtable,List,Detail,Post,Delete) | L | 7hrs| 4hrs | 4hrs |
| Total |  | 45hrs (66hrs with PostMVPs)| 49.5hrs (62.5hrs with PMVP) | 51.5hrs (64.5hrs with PMVP) |

## SWOT Analysis

### Strengths:
Design Delights excels visually in its cohesive styling. I enjoyed the process of creating a color palette and meticulously following the same set of visual design cues, which I believe creates a better user experience. Furthermore, this project successfully employs axios calls for all but one of the CRUD functions.

### Weaknesses:
I struggled using TailwindCSS to style this project. Namely, I had a hard time using their flex styling to arrange the content on the page as desired. Additionally, I have a lot of repetitive code between my four design category. I would like to revisit this project in the future and attempt to write DRY-er code.

### Opportunities:
The layout for this project leaves room to expand, both in terms of the content on each page and the possible categories to add to. There is also the opportunity to refine my code with less repetition in the future.

### Threats:
One threat to the continuation of Design Delights is the potential variation in the contents's imagery. The difference in size (length vs width) made it difficult to figure out a singular style that would apply well to every image.