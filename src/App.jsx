import './index.css';
import GradientBlinds from './components/GradientBlinds';
import TextType from './components/TextType';
function App() {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#000' }}>
      <GradientBlinds
        gradientColors={['#FF9FFC', '#5227FF']}
        angle={50}
        noise={0}
        blindCount={19}
        blindMinWidth={50}
        spotlightRadius={0.3}
        spotlightSoftness={0.5}
        spotlightOpacity={0.5}
        mouseDampening={0.15}
        distortAmount={20}
        shineDirection="left"
        mixBlendMode="lighten"
      />

     <div
  style={{
    position: 'absolute',
    top: '48%',
    left: '50%',
    transform: 'translate(-50%, -50%)', // perfectly center
    width: '100%',
    textAlign: 'center',
    fontSize: '4.5rem', // increase size here
    pointerEvents: 'none', // prevents blocking your gradient background
  }}
>
  <TextType
    text={[
      "Hi! I'm Robinson",
      "Full-Stack Developer",
      "Crafting Interactive Websites"
    ]}
    typingSpeed={75}
    pauseDuration={1500}
    showCursor={true}
    cursorCharacter="|"
  />
</div>

    </div>
  );
}

export default App;
