const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Responsive",
  "Next.js",
  "Gatsby",
  "UI/UX",
  "SVG",
  "animation",
  "Redux",
  "webdev",
  "Express.js",
  "MongoDB",
];
const DURATION = 13000;
const ROWS = 1;
const TAGS_PER_ROW = 12;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className="tag">
    <span>#</span> {text}
  </div>
);

const InfiniteScrollAmimation = () => {
  return (
    <div className="scroll-news">
    <div className="tag-list">
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider
          key={i}
          duration={random(DURATION - 5000, DURATION + 5000)}
          reverse={i % 2}
        > 
          {shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => (
              <Tag text={tag} key={tag} />
            ))}
        </InfiniteLoopSlider>
      ))}
      <div className="fade" />
    </div>
    </div>
  );
};

export default InfiniteScrollAmimation;
