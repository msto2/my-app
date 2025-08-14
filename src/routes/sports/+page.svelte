<script>
  import { onMount, onDestroy } from 'svelte';

  import img1a from '/images/img1a.jpg?w=800&format=webp';
  import img2 from '/images/img2.jpg?w=800&format=webp';
  import img3 from '/images/img3.jpg?w=800&format=webp';
  import img4 from '/images/img4.jpg?w=800&format=webp';
  import img5 from '/images/img5.jpg?w=800&format=webp';
  import img6 from '/images/img6.jpg?w=800&format=webp';
  import img7 from '/images/img7.jpg?w=800&format=webp';
  import img8 from '/images/img8.jpg?w=800&format=webp';
  import img9 from '/images/img9.jpg?w=800&format=webp';
  import img10 from '/images/img10.jpg?w=800&format=webp';
  import img11 from '/images/img11.jpg?w=800&format=webp';
  import img12 from '/images/img12.jpg?w=800&format=webp';
  import img13 from '/images/img13.jpg?w=800&format=webp';
  import img14 from '/images/img14.jpg?w=800&format=webp';
  import img15 from '/images/img15.jpg?w=800&format=webp';
  import img16 from '/images/img16.jpg?w=800&format=webp';
  import img17 from '/images/img17.jpg?w=800&format=webp';
  import img18 from '/images/img18.jpg?w=800&format=webp';
  import img19 from '/images/img19.jpg?w=800&format=webp';
  import img20 from '/images/img20.jpg?w=800&format=webp';
  import img21 from '/images/img21.jpg?w=800&format=webp';
  import img22 from '/images/img22.jpg?w=800&format=webp';
  import img23 from '/images/img23.jpg?w=800&format=webp';
  import img24 from '/images/img24.jpg?w=800&format=webp';
  import img25 from '/images/img25.jpg?w=800&format=webp';
  import img26 from '/images/img26.jpg?w=800&format=webp';
  import img27 from '/images/img27.jpg?w=800&format=webp';
  import img28 from '/images/img28.jpg?w=800&format=webp';
  import img29 from '/images/img29.jpg?w=800&format=webp';
  import img30 from '/images/img30.jpg?w=800&format=webp';
  import img31 from '/images/img31.jpg?w=800&format=webp';
  import img32 from '/images/img32.jpg?w=800&format=webp';
  import img33 from '/images/img33.jpg?w=800&format=webp';
  import img34 from '/images/img34.jpg?w=800&format=webp';
  import img35 from '/images/img35.jpg?w=800&format=webp';
  import img36 from '/images/img36.jpg?w=800&format=webp';
  import img37 from '/images/img37.jpg?w=800&format=webp';
  import img38 from '/images/img38.jpg?w=800&format=webp';
  import sportsImg1 from '/images/sports/img1.jpg?w=800&format=webp';
  import sportsImg2 from '/images/sports/img2.jpg?w=800&format=webp';
  import sportsImg3 from '/images/sports/img3.jpg?w=800&format=webp';
  import sportsImg4 from '/images/sports/img4.jpg?w=800&format=webp';
  import sportsImg5 from '/images/sports/img5.jpg?w=800&format=webp';
  import sportsImg6 from '/images/sports/img6.jpg?w=800&format=webp';
  import sportsImg7 from '/images/sports/img7.jpg?w=800&format=webp';
  import sportsImg8 from '/images/sports/img8.jpg?w=800&format=webp';
  import sportsImg9 from '/images/sports/img9.jpg?w=800&format=webp';
  import sportsImg10 from '/images/sports/img10.jpg?w=800&format=webp';
  import sportsImg11 from '/images/sports/img11.jpg?w=800&format=webp';
  import sportsImg12 from '/images/sports/img12.jpg?w=800&format=webp';
  import sportsImg13 from '/images/sports/img13.jpg?w=800&format=webp';
  import sportsImg14 from '/images/sports/img14.jpg?w=800&format=webp';
  import sportsImg15 from '/images/sports/img15.jpg?w=800&format=webp';
  import sportsImg16 from '/images/sports/img16.jpg?w=800&format=webp';
  import sportsImg17 from '/images/sports/img17.jpg?w=800&format=webp';
  import sportsImg18 from '/images/sports/img18.jpg?w=800&format=webp';
  import sportsImg19 from '/images/sports/img19.jpg?w=800&format=webp';

  let images = [
    img1a, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
    img12, img13, img14, img15, img16, img17, img18, img19, img20, img21,
    img22, img23, img24, img25, img26, img27, img28, img29, img30, img31,
    img32, img33, img34, img35, img36, img37, img38, sportsImg1, sportsImg2,
    sportsImg3, sportsImg4, sportsImg5, sportsImg6, sportsImg7, sportsImg8,
    sportsImg9, sportsImg10, sportsImg11, sportsImg12, sportsImg13, sportsImg14,
    sportsImg15, sportsImg16, sportsImg17, sportsImg18, sportsImg19
  ];

  let track; // The DOM element that scrolls horizontally
  let startX = 0; // Starting X position for dragging
  let scrollLeft = 0; // Track's scroll position when dragging starts
  let isDragging = false; // Flag for drag state

  let animationFrame; // Frame ID for continuous animation
  let playAnimationFrame; // Frame ID for autoplay scroll
  let isPlaying = false; // Autoplay state
  let scrollSpeed = 4; // Pixels per frame for autoplay

  // Starts drag interaction
  function onMouseDown(e) {
    pause();
    isDragging = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  }

  // Ends dragging when the cursor leaves the container
  function onMouseLeave() {
    isDragging = false;
  }

  // Ends dragging on mouse up
  function onMouseUp() {
    play();
    isDragging = false;
  }

  // Handles the drag movement
  function onMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.2; // Drag sensitivity
    track.scrollLeft = scrollLeft - walk;
  }

  // Shifts the image's object-position based on its location on screen
  function updateImagePanning() {
    const images = track.querySelectorAll('.image-wrapper'); // Get all image containers
    const center = window.innerWidth / 2; // Horizontal center of the viewport

    images.forEach(wrapper => {
      const img = wrapper.querySelector('img'); // Get the image inside the wrapper
      const box = wrapper.getBoundingClientRect(); // Get current position & size of wrapper relative to viewport

      // Determine how far the center of the image is from the center of the screen
      const deltaX = box.left + box.width / 10 - center;

      // Maximum allowed shift (left/right) for object-position in percentage
      const maxShiftPercent = 50;

      // Calculate shift as a percentage relative to the screen's width
      let shift = (deltaX / (window.innerWidth / 1.3)) * maxShiftPercent;

      // Clamp the shift so it doesn't exceed bounds
      shift = Math.max(-maxShiftPercent, Math.min(maxShiftPercent, shift));

      // Shift the image in the opposite direction (so it “pans” as it moves)
      let objectPos = 50 - shift;

      // Clamp the final object position between 0% and 100%
      objectPos = Math.max(0, Math.min(100, objectPos));

      // Apply the calculated object position to the image
      img.style.objectPosition = `${objectPos}% center`;
    });
  }

  // Loops the scroll if user scrolls too far left/right
  function handleLooping() {
    const { scrollLeft, scrollWidth, clientWidth } = track;
    const maxScrollLeft = scrollWidth - clientWidth;

    if (scrollLeft < 40) {
      // Reposition to end of second half
      track.scrollLeft += scrollWidth / 2;
    } else if (scrollLeft > maxScrollLeft - 40) {
      // Reposition to start of second half
      track.scrollLeft -= scrollWidth / 2;
    }
  }

  // Starts autoplay scrolling
  function play() {
    if (isPlaying) return;
    isPlaying = true;
    advance(); // Begin advancing frames
  }

  // Stops autoplay scrolling
  function pause() {
    isPlaying = false;
    if (playAnimationFrame) cancelAnimationFrame(playAnimationFrame);
  }

  // Advances scroll position by scrollSpeed and requests next frame
  function advance() {
    if (!isPlaying) return;
    track.scrollLeft += scrollSpeed;
    playAnimationFrame = requestAnimationFrame(advance);
  }

  // Lifecycle: when component mounts
  onMount(() => {
    // Clone the content to allow seamless looping
    const clone = track.innerHTML;
    track.innerHTML += clone;
    track.scrollLeft = track.scrollWidth / 4;

    // Main animation loop for image panning and looping
    function animate() {
      updateImagePanning();
      handleLooping();
      animationFrame = requestAnimationFrame(animate);
    }

    animate();
      function handleOrientation() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    if (isPortrait) {
      pause();
    } else {
      play();
    }
  }

  // Run on first load
  handleOrientation();

  // Listen for orientation changes
  window.addEventListener('orientationchange', handleOrientation);
  window.addEventListener('resize', handleOrientation);
    

    // Clean up when component unmounts
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (playAnimationFrame) cancelAnimationFrame(playAnimationFrame);
    };
  });

  // Ensures cleanup in case component is destroyed
  onDestroy(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    if (playAnimationFrame) cancelAnimationFrame(playAnimationFrame);
  });
</script>

<style>
</style>

<div
  class="carousel-container"
  on:mousedown={onMouseDown}
  on:mouseup={onMouseUp}
  on:mousemove={onMouseMove}
  on:mouseleave={onMouseLeave}
>
  <div bind:this={track} class="track">
    {#each images as img (img)}
      <div class="image-wrapper">
        <img src={img} alt="" draggable="false" />
      </div>
    {/each}
  </div>
</div>