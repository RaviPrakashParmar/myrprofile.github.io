# Ravi Prakash Parmar - Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- Modern, clean design with smooth animations
- Fully responsive for all device sizes
- Interactive elements including:
  - Typing animation in hero section
  - Project filtering
  - Smooth scrolling navigation
  - Animated skill bars
  - Contact form with validation
- Timeline-based education and experience sections
- Project showcase with filtering options
- Achievement cards with icons
- Fixed navigation that changes style on scroll
- Mobile-friendly navigation menu

## How to Use

1. Clone or download this repository
2. Open `index.html` in your browser to view the website
3. To make it live, upload all files to any web hosting service

## Customization Guide

### Personal Information

Edit the `index.html` file to update:

- Your name, contact information, and social media links
- Professional titles in the typing animation (also in script.js)
- About me text and personal details
- Education history and timeline
- Work experience details
- Project information and links
- Skills and their proficiency levels
- Achievements and certifications

### Styling

Customize the appearance by editing `style.css`:

- Color scheme: modify the CSS variables in the `:root` section at the top
- Fonts: change the font-family in the body section
- Layout, spacing, and visual elements
- Background images and colors

### JavaScript Functionality

Modify `script.js` to change:

- The text array for the typing animation
- Animation speeds and timing
- Scroll behavior and interactive elements
- Form submission logic

### Profile Image

To add your profile photo:

1. Replace the placeholder icon with your image by editing the hero section in `index.html`:

```html
<div class="profile-img-placeholder">
    <i class="fas fa-user"></i>
</div>
```

Change to:

```html
<div class="hero-image">
    <img src="path/to/your-image.jpg" alt="Ravi Prakash Parmar">
</div>
```

2. Then update the CSS in `style.css` to style your image appropriately

### Project Images

Similarly, replace project placeholders with actual screenshots of your work:

```html
<div class="project-img-placeholder">
    <i class="fas fa-laptop-code"></i>
</div>
```

Change to:

```html
<div class="project-img">
    <img src="path/to/project-image.jpg" alt="Project Name">
</div>
```

## Browser Compatibility

This portfolio website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

Feel free to use and modify this template for your personal portfolio.

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for background image 