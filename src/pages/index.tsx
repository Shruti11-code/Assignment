import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  // User avatars data
  const userAvatars = [
    { src: "/ellipse-1.png", alt: "User avatar" },
    { src: "/ellipse-2.png", alt: "User avatar" },
    { src: "/ellipse-3.png", alt: "User avatar" },
    { src: "/ellipse-4.png", alt: "User avatar" },
  ];

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "\"I know in real-time where the money is spent, and I don't have to lend out the company's credit card anymore. What a relief!\"",
      name: "Denny Hilguston",
      username: "@denny.hill",
      avatar: "/ellipse-11.png",
    },
    {
      id: 2,
      text: "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
      name: "Vani Pandey",
      username: "@vani.pandey",
      avatar: "/ellipse-11-1.png",
    },
    {
      id: 3,
      text: "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
      name: "milly Singh",
      username: "@milly.singh",
      avatar: "/ellipse-11-2.png",
    },
  ];

  // VR technology cards data
  const vrTechCards = [
    {
      id: 1,
      title: "Metaverse",
      description: "A Network of 3D virtual worlds focused on social connection.",
      bgImage: "/rectangle-33.png",
    },
    {
      id: 2,
      title: "HoloLens",
      description: "HoloLens display information, blend with the real world, or even simulate a virtual world.",
      bgImage: "/rectangle-35.png",
    },
    {
      id: 3,
      title: "AIoT",
      description: "AI and IoT are both emerging innovative technologies with a lot of potentials.",
      bgImage: "/rectangle-34.png",
    },
    {
      id: 4,
      title: "TPCASTT",
      description: "Method is great to start students reading and inferring with little assistance from the instructor",
      bgImage: "/rectangle-36.png",
    },
  ];

  const handleSignUp = () => {
    router.push('/signup');
  };

  const handleGetItNow = () => {
    router.push('/purchase');
  };

  const handleExploreDevice = () => {
    router.push('/devices');
  };

  return (
    <div className="bg-dark">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-4">
        <div className="container">
          <a className="navbar-brand fs-4" href="/">ImmverseAI</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/company">Company</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/features">Features</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-light ms-3" onClick={handleSignUp}>Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5 text-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Let's Explore<br />
                Three-Dimensional<br />
                visual
              </h1>
              <p className="lead mb-4">
                With virtual technology you can see the digital world feel
                more real and you can play the game with a new style.
              </p>
              <div className="d-flex gap-3 mb-4">
                <button className="btn btn-primary" onClick={handleGetItNow}>Get it Now</button>
                <button className="btn btn-outline-light" onClick={handleExploreDevice}>Explore Device</button>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="d-flex">
                  {userAvatars.map((avatar, index) => (
                    <div key={index} className="avatar" style={{ marginLeft: index > 0 ? '-15px' : '0' }}>
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        width={32}
                        height={32}
                        className="rounded-circle border border-2 border-dark"
                      />
                    </div>
                  ))}
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-white rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                  <span className="small">400k people online</span>
                </div>
              </div>
            </div>

            {/* VR Headset Section */}
            <div className="col-lg-6">
              <div className="position-relative">
                <Image
                  src="/ellipse-19--2--1.png"
                  alt="VR Headset"
                  width={500}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VR Technology Cards Section */}
      <section className="py-5 bg-black text-light">
        <div className="container">
          <h2 className="text-center mb-5">VR Technology</h2>
          <div className="row g-4">
            {vrTechCards.map((card) => (
              <div key={card.id} className="col-md-6 col-lg-3">
                <div className="card bg-dark text-light h-100">
                  <Image
                    src={card.bgImage}
                    alt={card.title}
                    width={300}
                    height={200}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text small">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-black text-light">
        <div className="container">
          <h2 className="text-center mb-4">What our clients say</h2>
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-md-4">
                <div className="card bg-dark text-light h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-circle me-2"
                      />
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-primary">{testimonial.username}</small>
                      </div>
                    </div>
                    <p className="card-text">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}