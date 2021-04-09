<template>
  <section class="social-share">
    <p alt="Share website">Share:</p>
    <a
      href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwriteword.site%2F"
      target="_blank"
      alt="Share on Facebook"
      rel="noopener noreferrer"
      aria-label="share on facebook"
    >
      <img
        src="https://faster-than.s3.amazonaws.com/social/fb.svg"
        alt="Share on Facebook"
        class="share-icon"
        aria-label="Share on Facebook Icon"
      />
    </a>

    <a
      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwriteword.site%2F"
      target="_blank"
      alt="Share on Twitter"
      rel="noopener noreferrer"
      aria-label="share on twitter"
    >
      <img
        src="https://faster-than.s3.amazonaws.com/social/fb.svg"
        alt="Share on Twitter"
        class="share-icon"
        aria-label="Share on Twitter Icon"
      />
    </a>

    <a
      href="mailto:?Subject=The Write Word&amp;Body=Thought%20you%20might%20like%20to%20find%20The%20Write%20Word!%20 https://writeword.site"
      alt="Share via Email"
      aria-label="share via email"
    >
      <Email class="share-icon" alt="Share via Email" />
    </a>
  </section>
</template>

<style scoped>
.social-share {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-end;

  position: fixed;
  width: 200px;
  top: 30px;
  right: 30px;

  cursor: pointer;

  z-index: 3;
}

.share-icon {
  width: 40px;
  height: 40px;
  padding: 0 1vmin;

  opacity: 0.5;

  transition: 400ms;
}

.share-icon:hover {
  opacity: 0.8;
  transform: scale(1.2);
}
</style>
