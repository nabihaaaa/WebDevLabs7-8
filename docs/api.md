<!-- info -->
# API Reference

The PaperBeam API lets you build on top of PaperBeam — automate publishing, sync content, and manage your team's workflow programmatically. 🛠️

<!-- endpoints -->
## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/documents` | Fetch all documents |
| POST | `/documents` | Create a new document |
| PUT | `/documents/:id` | Update a document |
| DELETE | `/documents/:id` | Delete a document |

<!-- auth -->
## Authentication

All requests require an API key in the header:

```js
fetch('/api/documents', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(res => res.json())
.then(data => console.log(data))
```

<!-- html -->
## HTML Integration

```html
<button class="pb-launch" onclick="launchWorkspace()">
  Launch Workspace 🚀
</button>
```

::: tip
Generate your API key from the PaperBeam dashboard under **Settings → Developer**.
:::

::: warning
Keep your API key private — never expose it in frontend code!
:::