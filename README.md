## To Run

npx convex import --table waste public/seed.csv
npx run dev and open up localhost:3000 (or port it assigns!)

## Solution

A very basic implementation of a front end focused csv visualiser, this includes a searchable table and a bar graph to compare csv rows.

User stories
- As a user I want to easy search through csv rows i.e a table
- As a user, I want to compare different estimated vs actual at specific points i.e bar graph

I chose to use convex as a database as I wanted some sort of backend and I wanted this to be as simple as possible to do - I hand sanitised the data (and would have done this in a seed script with more time).
I wanted a table so chose react-table and I would say overly relied on libraries which I would not normally do, however I treated this as a proof of concept which perhaps was not the right approach.
