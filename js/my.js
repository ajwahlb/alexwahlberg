// ---------- Email button (only exists on some pages, so guard it) ----------
const emailBtn = document.getElementById("email-btn");

if (emailBtn) {
  emailBtn.addEventListener("click", function () {
    const user = "yourname";
    const domain = "example.com";

    // Set mailto href right before the click is handled
    this.href = `mailto:${user}@${domain}`;
  });
}

// ---------- Custom video player ----------
document.querySelectorAll('[data-video-player]').forEach(function (root) {
  // Prevent double-initialising if this script ever gets loaded twice
  if (root.dataset.vpInit) return;
  root.dataset.vpInit = '1';

  var video = root.querySelector('video');
  var toggle = root.querySelector('.vp-toggle');
  var iconPlay = root.querySelector('.vp-icon-play');
  var iconPause = root.querySelector('.vp-icon-pause');
  var seek = root.querySelector('.vp-seek');
  var time = root.querySelector('.vp-time');
  var scrubbing = false;
  var wasPlaying = false;

  if (!video || !toggle || !seek || !time) return;

  // Make sure nothing starts playback on load
  video.autoplay = false;
  video.removeAttribute('autoplay');
  video.pause();

  function fmt(s) {
    s = Math.floor(s || 0);
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  function updateTime() {
    var text = fmt(video.currentTime) + ' / ' + fmt(video.duration);
    time.textContent = text;
    seek.setAttribute('aria-valuetext', text.replace(' / ', ' of '));
  }

  function updateButton() {
    var playing = !video.paused && !video.ended;
    toggle.setAttribute('aria-label', playing ? 'Pause' : 'Play');
    // Use display instead of the `hidden` property, which SVG elements don't support
    if (iconPlay) iconPlay.style.display = playing ? 'none' : '';
    if (iconPause) iconPause.style.display = playing ? '' : 'none';
  }

  function setDuration() {
    if (isFinite(video.duration)) {
      seek.max = video.duration;
    }
    updateTime();
  }

  toggle.addEventListener('click', function () {
    if (video.paused) {
      var p = video.play();
      if (p && p.catch) {
        p.catch(function (err) { console.warn('Video play failed:', err); });
      }
    } else {
      video.pause();
    }
  });

  video.addEventListener('click', function () { toggle.click(); });

  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('ended', updateButton);

  video.addEventListener('loadedmetadata', setDuration);
  video.addEventListener('durationchange', setDuration);

  video.addEventListener('timeupdate', function () {
    if (!scrubbing) { seek.value = video.currentTime; }
    updateTime();
  });

  // Scrubbing: pause while dragging, resume afterwards if it was playing
  seek.addEventListener('input', function () {
    if (!scrubbing) {
      scrubbing = true;
      wasPlaying = !video.paused;
    }
    video.currentTime = seek.value;
    updateTime();
  });

  seek.addEventListener('change', function () {
    scrubbing = false;
    if (wasPlaying && video.paused) { video.play(); }
  });

  // The script loads after the footer, so metadata may already be available
  if (video.readyState >= 1) { setDuration(); }

  updateButton();
});