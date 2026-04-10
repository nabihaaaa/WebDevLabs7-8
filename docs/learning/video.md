<!-- video integration guide -->
# Video

Welcome to PaperBeam's video documentation. 🎬

<!-- basic embed instructions -->
## Getting Started

Embed videos directly into your PaperBeam content using standard HTML:

```html
<video controls width="100%">
  <source src="/videos/demo.mp4" type="video/mp4">
</video>
```
/*
## Supported Formats

| Format | Streaming |
|--------|-----------|
| MP4 | ✅ |
| WebM | ✅ |
| MOV | ✅ |

## Autoplay

```js
const video = document.querySelector('video')
video.muted = true
video.play()
```
<!-- javascript playback control -->
::: warning
Always mute videos when using autoplay — browsers will block it otherwise!
:::

<!-- performance and layout optimization -->
## Tips

- Use **lazy loading** to keep pages fast 🚀
- Pair video with Flextext columns for editorial layouts
- Keep videos under 2GB for best performance