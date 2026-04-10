<!-- quick reference guide -->
# Cheatsheets

<!-- brief overview section -->
## Quick Notes ✨
This section provides a fast reference for the most common actions in PaperBeam. It’s designed to help users quickly understand essential workflows without reading full documentation.

<!-- essential user actions -->
### Common Tasks
Here are the most frequently used actions inside PaperBeam:

- Create a new page for your content  
- Edit existing documents and update information  
- Publish changes to make them live  

## Common API Calls

```js
//fetch all documents
fetch('/api/documents')
  .then(res => res.json())
  .then(data => console.log(data))

//create a new document
fetch('/api/documents', {
  method: 'POST',
  body: JSON.stringify({ title: 'My Doc', content: 'Hello!' })
})

//delete a document
fetch('/api/documents/123', { method: 'DELETE' })
```

<!-- quick reference data -->
### Quick Reference Table

| Task | Action |
|------|--------|
| New page | Create a new markdown file in your workspace |
| Edit content | Open a file, make changes, and save |
| Preview site | Run the development server to see updates |

<!-- usage tip -->
::: tip
Use this cheatsheet when you need quick reminders about core actions in PaperBeam.
:::

