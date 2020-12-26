import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Layout from '../components/layout';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

//import favicon from '../public/images/favicon.ico'

function Home() {
  return (
    <Layout>
      <Head>
        <title>Claudio Gonçalves</title>
        <link rel="icon" type="image/x-icon" sizes="32x32" href="../public/images/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="../public/images/favicon.ico" />        
      </Head>

      <div id='wrapper'>
        <section id="main">
          <header>
            <span className="avatar">
              <Image
                src="/claudio6.jpg"
                alt="Picture of the author"
                width={210}
                height={210}
              />
            </span>
            <h1>Claudio Gonçalves</h1>
            <p>Developer Front End React / React-Native</p>            
					</header>
          <footer>
            <ul className="icons">
              <li><a href="https://www.linkedin.com/in/claudiogoncalvesrp/" target="_blank"><span className="label"><FontAwesomeIcon className='test' icon={faLinkedin} size='lg' /></span></a></li>
              <li><a href="https://github.com/Claudiogoncalves" target="_blank"><span className="label"><FontAwesomeIcon className='test' icon={faGithub} size='lg' /></span></a></li>
              <li><a href="https://twitter.com/_claudiorpg" target="_blank" className="icon brands fa-twitter"><FontAwesomeIcon icon={faTwitter} size='lg' /></a></li>
              {/* <li><a href="https://www.instagram.com/claudiogoncalvesrp/" target="_blank" className="icon brands fa-instagram"><FontAwesomeIcon icon={faInstagram} size='lg' /></a></li> */}
              <li><a href="https://www.facebook.com/claudiogoncalvesrp" target="_blank" className="icon brands fa-facebook-f"><FontAwesomeIcon
              icon={faFacebookF}
              className='icons'
              size='lg'
            /></a></li>
            </ul>
            <span>claudiogoncalvesrp@gmail.com</span>
          </footer>
        </section>
      </div>
      <footer id="footer">
        <ul class="copyright">
          <li>2020 &copy; claudiogoncalves</li>
        </ul>
      </footer>
      {/* <h1>Home</h1>
      <Link href="/sobre">
        <a>Acessar página Sobre</a>
      </Link> */}
    </Layout>
  )
}

export default Home;