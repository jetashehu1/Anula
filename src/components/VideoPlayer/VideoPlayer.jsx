import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import './VideoPlayer.css'

/**
 * Two modes, one component.
 *
 *  ambient  Decorative background footage — muted, looping, inline, no chrome.
 *           Never carries audio, so autoplay is allowed.
 *  feature  A film the visitor chooses to watch — poster first, then native
 *           controls with sound once they press play.
 *
 * If the source is absent or fails to load (footage not cut yet, offline
 * preview) the poster stays on screen and the section still reads correctly.
 */
export default function VideoPlayer({
  src,
  poster,
  alt = '',
  mode = 'ambient',
  aspect,
  label = 'Play film',
  className = '',
}) {
  const videoRef = useRef(null)
  const [failed, setFailed] = useState(!src)
  const [started, setStarted] = useState(false)

  const isAmbient = mode === 'ambient'

  const play = () => {
    setStarted(true)
    // The element only mounts its source on play in feature mode, so wait a
    // tick before asking it to start.
    requestAnimationFrame(() => {
      videoRef.current?.play?.().catch(() => setFailed(true))
    })
  }

  return (
    <div
      className={`video-player video-player--${mode}${started ? ' is-playing' : ''}${
        className ? ` ${className}` : ''
      }`}
      style={aspect ? { '--ratio': aspect } : undefined}
    >
      {/* The poster is a real image so it can be lazy-decoded and it remains
          visible if the video never arrives. */}
      {poster && (
        <img
          className="video-player__poster"
          src={poster}
          alt={alt}
          loading={isAmbient ? 'eager' : 'lazy'}
          decoding="async"
        />
      )}

      {!failed && (isAmbient || started) && (
        <video
          ref={videoRef}
          className="video-player__video"
          src={src}
          poster={poster}
          muted={isAmbient}
          loop={isAmbient}
          autoPlay={isAmbient}
          playsInline
          preload={isAmbient ? 'auto' : 'metadata'}
          controls={!isAmbient}
          onError={() => setFailed(true)}
        />
      )}

      {!isAmbient && !started && (
        <button type="button" className="video-player__play" onClick={play}>
          <span className="video-player__play-ring">
            <Play size={16} strokeWidth={1.25} aria-hidden="true" />
          </span>
          <span className="video-player__play-label">{label}</span>
        </button>
      )}
    </div>
  )
}
