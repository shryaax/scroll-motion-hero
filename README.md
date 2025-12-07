# ReactShortsShowcase

A polished YouTube Shorts-style showcase built with React, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and an interactive modal preview experience.

## Features

- 🎨 **Modern UI/UX** - Glassmorphic design with smooth animations
- 📱 **Fully Responsive** - Perfect on desktop (3 columns), tablet (2 columns), and mobile (1 column)
- 🔍 **Search & Filter** - Instant search by title/description/tags and category filtering
- 🎬 **Video Modal** - Full-screen modal with YouTube embed support
- ✨ **Smooth Animations** - Framer Motion powered animations throughout
- 🎯 **Staggered Card Reveal** - Beautiful entrance animations
- 🖱️ **Hover Effects** - Scale and shadow effects on card hover
- ⌨️ **Keyboard Support** - Press ESC to close modal

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vite** - Build tool and dev server

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── ShortCard.jsx
│   ├── ShortsGrid.jsx
│   └── Modal.jsx
├── pages/           # Page components
│   └── Home.jsx
├── data/            # Mock data
│   └── shortsData.js
├── hooks/           # Custom hooks
│   └── useModal.js
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Browse Shorts** - Scroll through the grid of short cards
2. **Search** - Type in the search bar to filter by title, description, or tags
3. **Filter by Tag** - Click on tag chips to filter by category
4. **Watch Video** - Click any card to open the full-screen modal with video player
5. **Close Modal** - Click outside, press ESC, or click the X button

## Customization

### Adding More Shorts

Edit `src/data/shortsData.js` to add more short objects:

```javascript
{
  id: 13,
  title: "Your Title",
  description: "Your description",
  thumbnail: "image-url",
  videoUrl: "youtube-embed-url",
  tags: ["tag1", "tag2"],
  duration: "5:30"
}
```

### Styling

All styling is done with Tailwind CSS. Modify classes in components or extend the theme in `tailwind.config.js`.

### Animations

Animation timing and effects can be adjusted in component files using Framer Motion props.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

