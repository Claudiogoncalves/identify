function Tempo(props) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div>
        <h1>{dynamicDateString} (dinâmico)</h1>
      </div>
      <div>
        <h1>{props.staticDateString} (estático)</h1>
      </div>
    </div>
  )
}

export function getStaticProps() {
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }
}

export default Tempo;