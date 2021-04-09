<template>
  <section class="social-share">
    <a
      href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Ffasterthan.net%2F"
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
      href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ffasterthan.net%2F"
      target="_blank"
      alt="Share on Twitter"
      rel="noopener noreferrer"
      aria-label="share on twitter"
    >
      <img
        src="https://faster-than.s3.amazonaws.com/social/twitter.svg"
        alt="Share on Twitter"
        class="share-icon"
        aria-label="Share on Twitter Icon"
      />
    </a>

    <a
      href="mailto:?Subject=Faster Than - Which animal is faster? &amp;Body=Thought%20you%20might%20like%20to%20find%20the%20fastest%20animal!%20 https://fasterthan.net/"
      alt="Share via Email"
      aria-label="share via email"
    >
      <img
        src="https://faster-than.s3.amazonaws.com/social/email.svg"
        class="share-icon"
        alt="Share via Email"
      />
    </a>
  </section>
</template>

<style scoped>
.social-share {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-content: flex-end; */

  width: 100%;
  margin: 0 auto;
  padding: 2vmin 0 0 0;

  cursor: pointer;

  z-index: 3;
}

p {
  color: #fff;
}
.share-icon {
  width: 45px;
  height: 45px;
  margin: 0 3vmin;

  opacity: 1;

  transition: 400ms;
}

.share-icon:hover,
.share-icon:focus {
  /* opacity: 0.8; */
  filter: brightness(1.2);
  transform: scale(1.2);
}

/***
 *    .___  ___.  _______  _______   __       ___           ______      __    __   _______ .______       __   _______     _______.
 *    |   \/   | |   ____||       \ |  |     /   \         /  __  \    |  |  |  | |   ____||   _  \     |  | |   ____|   /       |
 *    |  \  /  | |  |__   |  .--.  ||  |    /  ^  \       |  |  |  |   |  |  |  | |  |__   |  |_)  |    |  | |  |__     |   (----`
 *    |  |\/|  | |   __|  |  |  |  ||  |   /  /_\  \      |  |  |  |   |  |  |  | |   __|  |      /     |  | |   __|     \   \
 *    |  |  |  | |  |____ |  '--'  ||  |  /  _____  \     |  `--'  '--.|  `--'  | |  |____ |  |\  \----.|  | |  |____.----)   |
 *    |__|  |__| |_______||_______/ |__| /__/     \__\     \_____\_____\\______/  |_______|| _| `._____||__| |_______|_______/

 */

@media screen and (max-width: 720px) {
  .social-share {
    padding: 2vmin 0 0 0;
    border-top: 1px solid #fff;
  }
  .share-icon {
    width: 45px;
    height: 45px;
    margin: 2vmin 4vmin;
  }
}
</style>
