import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [description, setDescription] = useState('');

  const videoDescriptions = {
    '/Cassiopiea.mp4': `Walk of Simple Grace: Cassiopeia A
"Walk of Simple Grace" provides a serene backdrop to the fascinating story of Cassiopeia A, one of the brightest supernova remnants in the sky. As the remnants of a massive star's explosion slowly expand outward, the music captures this delicate yet powerful transformation with its gentle, flowing rhythm—just like the graceful movement of stellar material through space.

Cassiopeia A is a vivid reminder of both the violent and beautiful processes that shape the cosmos. The music’s steady, peaceful tones reflect the cosmic dance of particles and light, as if walking through the aftermath of a great event with a sense of calm and purpose. As the supernova’s energy fades, what remains is a stunning cloud of gases and elements, floating like a graceful mark left on the universe—a testament to both destruction and renewal.

"Walk of Simple Grace" mirrors this transformation, offering an auditory journey through the layers of Cassiopeia A, where each step through the supernova’s remnants feels like a step toward understanding the elegant cycle of life and death in the stars.`,

    '/James_Webb.mp4': `Dark Hollow of Peace: Sagittarius A*
"Dark Hollow of Peace" serves as a fitting soundtrack for an exploration of one of the most enigmatic and powerful objects in the universe: Sagittarius A*, the supermassive black hole at the center of our galaxy. Just as the music evokes the feeling of descending into an infinite, dark cavern that is both mysterious and tranquil, so too does the journey into Sagittarius A* represent a plunge into the unknown. Sagittarius A*, with its immense gravitational pull, warps space and time, drawing everything toward its event horizon—where light itself cannot escape. The music mirrors this cosmic dance with its deep, resonating tones and ambient echoes, reflecting the serene, yet ominous quiet that exists in the heart of such a massive void.

As we contemplate this black hole’s profound silence and overwhelming power, "Dark Hollow of Peace" embodies the strange duality of peace within darkness—where the vast emptiness of space can feel both haunting and oddly calming. Just as the cave in the music offers a refuge of tranquility, Sagittarius A* represents the peaceful, inevitable stillness that awaits beyond the stars.`,

    '/WR124.mp4': `Echoes from the Well: WR 124
"Echoes from the Well" accompanies a mesmerizing journey into the heart of the cosmos, where we encounter the massive star WR 124. Like the deep, mysterious resonance of a well, WR 124 echoes the power and beauty of the universe. This Wolf-Rayet star, 15,000 light-years away, emits stellar winds and sheds its outer layers, creating a nebula of shimmering gas and dust that drifts into the void. The music mirrors the distant, ethereal nature of this cosmic giant, with its rich and layered sounds reflecting the profound depth of space and the star’s eventual fate.

As the star nears the end of its life cycle, preparing to explode in a supernova, the haunting "Echoes from the Well" evokes the silence before the burst, capturing the quiet yet potent forces at play. Just as water deep in a well reflects the sky above, this music echoes the majesty of WR 124, whose brilliance and dynamic life story remind us of the interconnectedness of all things in the universe.`,

    '/Sagi.mp4': `Dark Hollow of Peace: Sagittarius A*
"Dark Hollow of Peace" serves as a fitting soundtrack for an exploration of one of the most enigmatic and powerful objects in the universe: Sagittarius A*, the supermassive black hole at the center of our galaxy. Just as the music evokes the feeling of descending into an infinite, dark cavern that is both mysterious and tranquil, so too does the journey into Sagittarius A* represent a plunge into the unknown. Sagittarius A*, with its immense gravitational pull, warps space and time, drawing everything toward its event horizon—where light itself cannot escape. The music mirrors this cosmic dance with its deep, resonating tones and ambient echoes, reflecting the serene, yet ominous quiet that exists in the heart of such a massive void.`,

    '/Pandora.mp4': `Whispers of the Night Sky: Pandora’s Cluster
"Whispers of the Night Sky" captures the ethereal beauty and mystery of Pandora’s Cluster (Abell 2744), a colossal and chaotic galaxy cluster located deep in the cosmos. Like the gentle murmur of falling stars against the quiet night sky, the music echoes the silent conversations between galaxies, stars, and dark matter that make up this immense cluster. Each note flows like a whisper, soft yet powerful, amidst the vast gravitational forces that shape Pandora’s Cluster.

Pandora’s Cluster, a cosmic tapestry woven from galaxy collisions, gravitational lensing, and hidden dark matter, reflects the subtle power of the universe. The music's delicate tones mirror the invisible forces holding this celestial structure together, as if the night sky itself is sharing its secrets. With each passing moment, "Whispers of the Night Sky" draws the listener deeper into the cluster’s mysteries, evoking the feeling of stargazing from a distant rooftop, watching galaxies drift and collide in slow motion, much like falling stars.`,

    '/Butterfly_Nebula.mp4': `Blossoms of Triumph: The Butterfly Nebula
"Blossoms of Triumph" unfolds alongside the captivating beauty of the Butterfly Nebula, a celestial spectacle where life and death are in constant dance. Like the delicate steps of success blossoming with flowers, this music mirrors the nebula's radiant wings that stretch across space, showcasing the triumph of a dying star as it sheds its outer layers and transforms into this breathtaking structure.`,

    '/Carina_Nebula.mp4': `Glitch of Tranquillity: Carina Nebula
"Glitch of Tranquility" drifts through the ethereal expanse of the Carina Nebula, one of the massive and dynamic star-forming regions in our galaxy. The music’s peaceful yet fragmented tones reflect the delicate balance between chaos and calm in this stellar nursery, where stars are born amidst clouds of gas and dust, creating a harmonious disarray in the cosmos.`,

    '/Indi.mp4': `Warmth in the Frost: Indi Ab
"Warmth in the Frost" sets a soothing tone as we explore the distant and mysterious Indi Ab, a galaxy that sits quietly in the cold expanse of space. Much like the comforting embrace of warmth amidst falling snow, the music brings a sense of calm and tenderness to the vast, icy reaches of the cosmos.`,

    '/Milky_Way.mp4': `Beneath the Calm Waters: The Milky Way Galaxy
"Beneath the Calm Waters" accompanies a serene journey through the Milky Way, the galaxy we call home. Just as the music evokes the feeling of being submerged in the peaceful depths of the ocean, the Milky Way stretches out like a vast cosmic sea, its stars shimmering like gentle waves on the surface.`
  };

  const playVideo = (videoSrc) => {
    setShowVideo(true);
    setCurrentVideo(videoSrc);
    setDescription(videoDescriptions[videoSrc]);
    const videoElement = document.getElementById("playerVideo");
    videoElement.requestFullscreen();
  };

  const goBack = () => {
    setShowVideo(false);
    setCurrentVideo('');
    setShowDescription(false);
  };

  return (
    <div className="app-container">
      <video autoPlay muted loop className="background-video">
        <source src="src/assets/Videos_trimmed.mp4" type="video/mp4" />
      </video>

      <a href="https://your-home-page-link.com" className="back-to-home">
        Back to Home
      </a>

      <button className="invisible-button" style={{ top: '8%', left: '18%' }} onClick={() => playVideo("/Cassiopiea.mp4")}></button>
      <button className="invisible-button" style={{ top: '40%', left: '45%' }} onClick={() => playVideo("/James_Webb.mp4")}></button>
      <button className="invisible-button" style={{ top: '80%', left: '55%' }} onClick={() => playVideo("/WR124.mp4")}></button>
      <button className="invisible-button" style={{ top: '70%', left: '80%' }} onClick={() => playVideo("/Sagi.mp4")}></button>
      <button className="invisible-button" style={{ top: '25%', left: '85%' }} onClick={() => playVideo("/Pandora.mp4")}></button>
      <button className="invisible-button" style={{ top: '48%', left: '10%' }} onClick={() => playVideo("/Butterfly_Nebula.mp4")}></button>
      <button className="invisible-button" style={{ top: '82%', left: '28%' }} onClick={() => playVideo("/Carina_Nebula.mp4")}></button>
      <button className="invisible-button" style={{ top: '1%', left: '42%' }} onClick={() => playVideo("/Indi.mp4")}></button>
      <button className="invisible-button" style={{ top: '5%', right: '30%' }} onClick={() => playVideo("/Milky_Way.mp4")}></button>

      {/* Video player */}
      {showVideo && (
        <div className="video-player">
          <video id="playerVideo" controls>
            <source src={currentVideo} type="video/mp4" />
          </video>

          {/* Back button */}
          <button className="back-button" onClick={goBack}>Back</button>

          {/* Toggle description button */}
          <button
            className="toggle-description"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Close Description" : "Show Description"}
          </button>

          {/* Description box */}
          {showDescription && (
            <div className="description-box open">
              <p>{description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
