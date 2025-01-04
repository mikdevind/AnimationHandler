# AnimationHandler Library

## Overview
`AnimationHandler` is a lightweight JavaScript library designed to add scroll-based animations to elements on your webpage. This library makes it easy to implement various effects such as sliding, zooming, bouncing, and more, using the Intersection Observer API.

## Features
- Animate elements when they come into view.
- Multiple predefined animations: slide, zoom, rotate, bounce, flip, fade, spin, scale, wobble, and type.
- Configurable animation duration and visibility threshold.
- Lightweight and easy to use.

## Installation
Include the `AnimationHandler.js` file in your project.

```html
<script src="AnimationHandler.js"></script>
```

## Usage

### HTML Setup
Add the `data-animation` attribute to the elements you want to animate and specify the desired animation type. Example:

```html
<div class="box" data-animation="slide">Slide Animation</div>
<div class="box" data-animation="zoom">Zoom Animation</div>
<div class="box" data-animation="rotate">Rotate Animation</div>
```

### JavaScript Initialization
Import the `AnimationHandler` class and initialize it with the selector of the elements to animate.

```javascript
import { AnimationHandler } from './AnimationHandler.js';

new AnimationHandler('.box');
```

### Parameters
`AnimationHandler(selector, threshold = 0.5, durationEffect = 500)`

- **`selector`** *(string)*: CSS selector for the target elements.
- **`threshold`** *(float)*: Visibility threshold (default: `0.5`). Determines how much of the element must be visible to trigger the animation.
- **`durationEffect`** *(int)*: Animation duration in milliseconds (default: `500`).

## Supported Animations
Below are the available animation types and their effects:

| Animation Type | Description |
|----------------|-------------|
| `slide`        | Moves the element horizontally. |
| `zoom`         | Scales the element from smaller to normal size. |
| `rotate`       | Rotates the element from an angle. |
| `bounce`       | Adds a vertical bounce effect. |
| `flip`         | Rotates the element along the Y-axis. |
| `fade`         | Fades in the element. |
| `spin`         | Rotates the element from a full circle. |
| `scale`        | Scales the element from smaller to normal size. |
| `wobble`       | Adds a horizontal wobble effect. |
| `type`         | Simulates typing effect for text. |

## Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnimationHandler Demo</title>
    <script type="module" src="AnimationHandler.js" defer></script>
    <style>
        .box {
            width: 200px;
            height: 100px;
            margin: 20px auto;
            background: lightblue;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <div class="box" data-animation="slide">Slide</div>
    <div class="box" data-animation="zoom">Zoom</div>
    <div class="box" data-animation="rotate">Rotate</div>

    <script>
        import { AnimationHandler } from './AnimationHandler.js';
        new AnimationHandler('.box');
    </script>
</body>
</html>
```

## License
This library is open-source and available under the [MIT License](LICENSE).

## Contributions
Contributions are welcome! Feel free to submit issues, feature requests, or pull requests.

---
For further questions, please contact the library author or refer to the source code for detailed insights.
