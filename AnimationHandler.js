/*!AnimationHandler v1.0.1 | (c) Ilman Hendrawan Saputra | MIKDevInd/license */
class AnimationHandler {
    constructor(selector, threshold = 0.5, durationEffect = 500) {
        this.targets = document.querySelectorAll(selector);
        this.threshold = threshold;
        this.durationEffect = durationEffect;
        this.durationEffectSecond = durationEffect / 1000;

        // Initialize observer
        this.observer = new IntersectionObserver(this.handleIntersect.bind(this), {
            threshold: [0, this.threshold, 1],
        });

        // Observe each target
        this.targets.forEach(target => {
            this.initialize(target);
            this.observer.observe(target);
        });
    }

    initialize(element) {
        // Set initial styles for animations
        element.style.opacity = "0";
        element.style.position = "relative";
        element.style.transition = `all ${this.durationEffectSecond}s ease`;

        // Define styles based on animation type
        switch (element.dataset.animation) {
            case "slide":
                element.style.transform = "translateX(-50px)";
                break;
            case "zoom":
                element.style.transform = "scale(0.8)";
                break;
            case "rotate":
                element.style.transform = "rotate(-45deg)";
                break;
            case "bounce":
                element.style.transform = "translateY(-20px)";
                break;
            case "flip":
                element.style.transform = "rotateY(90deg)";
                break;
            case "fade":
                element.style.opacity = "0";
                break;
            case "spin":
                element.style.transform = "rotate(-360deg)";
                break;
            case "scale":
                element.style.transform = "scale(0.5)";
                break;
            case "wobble":
                element.style.transform = "translateX(-10px)";
                break;
            case "type":
                element.dataset.fullText = element.textContent;
                element.textContent = ""; // Clear initial text
                element.dataset.isTyping = "false";
                break;
            default:
                break;
        }
    }

    handleIntersect(entries) {
        entries.forEach(entry => {
            const element = entry.target;
            if (entry.isIntersecting && entry.intersectionRatio >= this.threshold) {
                this.showAnimation(element);
            } else {
                this.hideAnimation(element);
            }
        });
    }

    showAnimation(element) {
        element.style.opacity = "1";

        switch (element.dataset.animation) {
            case "slide":
                element.style.transform = "translateX(0)";
                break;
            case "zoom":
                element.style.transform = "scale(1)";
                break;
            case "rotate":
                element.style.transform = "rotate(0deg)";
                break;
            case "bounce":
                element.style.transform = "translateY(0)";
                this.addTemporaryEffect(element, "translateY(-10px)", "translateY(0)", this.durationEffect);
                break;
            case "flip":
                element.style.transform = "rotateY(0deg)";
                break;
            case "fade":
                element.style.opacity = "1";
                break;
            case "spin":
                element.style.transform = "rotate(0deg)";
                break;
            case "scale":
                element.style.transform = "scale(1)";
                break;
            case "wobble":
                this.addTemporaryEffect(element, "translateX(-10px)", "translateX(10px)", this.durationEffect);
                break;
            case "type":
                if (element.dataset.isTyping === "false") {
                    element.dataset.isTyping = "true";
                    this.typeEffect(element, element.dataset.fullText);
                }
                break;
            default:
                break;
        }
    }

    hideAnimation(element) {
        element.style.opacity = "0";

        switch (element.dataset.animation) {
            case "slide":
                element.style.transform = "translateX(-50px)";
                break;
            case "zoom":
                element.style.transform = "scale(0.8)";
                break;
            case "rotate":
                element.style.transform = "rotate(-45deg)";
                break;
            case "bounce":
                element.style.transform = "translateY(-20px)";
                break;
            case "flip":
                element.style.transform = "rotateY(90deg)";
                break;
            case "fade":
                element.style.opacity = "0";
                break;
            case "spin":
                element.style.transform = "rotate(-360deg)";
                break;
            case "scale":
                element.style.transform = "scale(0.5)";
                break;
            case "wobble":
                element.style.transform = "translateX(-10px)";
                break;
            case "type":
                element.textContent = "";
                element.dataset.isTyping = "false";
                break;
            default:
                break;
        }
    }

    addTemporaryEffect(element, startTransform, endTransform, duration) {
        element.style.transition = `transform ${duration}ms ease`;
        element.style.transform = startTransform;

        setTimeout(() => {
            element.style.transform = endTransform;
        }, duration);
    }

    typeEffect(element, text) {
        let index = 0; // Start from the beginning of the text
        const speed = 100; // Typing speed in milliseconds
        element.textContent = ""; // Clear the current text content

        const typingInterval = setInterval(() => {
            if (index <= text.length) {
                element.textContent = text.substring(0, index); // Append next character
                index++;
            } else {
                clearInterval(typingInterval); // Stop typing when text is fully displayed
                element.dataset.isTyping = "false"; // Reset typing state
            }
        }, speed);
    }
}
