function Tempo(props) {
  console.log('> Passando pelo Frontend');
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

export async function getStaticProps() {
  console.log('> Passando pelo getStaticProps()');

  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    },
    revalidate: 1
  }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
export default Tempo;