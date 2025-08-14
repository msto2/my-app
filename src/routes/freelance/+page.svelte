<script>
  import { onMount, onDestroy } from 'svelte';

  import freelanceImg1 from '/images/freelance/img1.jpg?w=800&format=webp';
  import freelanceImg2 from '/images/freelance/img2.jpg?w=800&format=webp';
  import freelanceImg3 from '/images/freelance/img3.jpg?w=800&format=webp';
  import freelanceImg4 from '/images/freelance/img4.jpg?w=800&format=webp';
  import freelanceImg5 from '/images/freelance/img5.jpg?w=800&format=webp';
  import freelanceImg6 from '/images/freelance/img6.jpg?w=800&format=webp';

  let images = [
    freelanceImg1, freelanceImg2, freelanceImg3,
    freelanceImg4, freelanceImg5, freelanceImg6
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