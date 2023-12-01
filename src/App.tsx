import { useState } from "react";
import ReactPlayer from "react-player";

export const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh the page
      </button>
      <br />
      <label htmlFor="id">Delay of 0ms</label>
      <button
        onClick={() => {
          setTimeout(() => {
            setIsPlaying(!isPlaying);
          }, 0);
        }}
      >
        Play
      </button>
      <br />
      <label htmlFor="id">Delay of 500ms</label>
      <button
        onClick={() => {
          setTimeout(() => {
            setIsPlaying(!isPlaying);
          }, 500);
        }}
      >
        Play
      </button>
      <br />
      <label>Delay of 1000ms</label>
      <button
        onClick={() => {
          setTimeout(() => {
            setIsPlaying(!isPlaying);
          }, 1000);
        }}
      >
        Play
      </button>
      <ReactPlayer
        volume={0.4}
        muted={false}
        playing={isPlaying}
        width={320}
        url="https://www.youtube.com/watch?v=mPZkdNFkNps&t=7847s"
      />
    </div>
  );
};
