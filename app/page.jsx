import Feed from "@components/Feed";

const Home = () => (
  // <section className="w-full flex-center flex-col">
  //   <h1 className="head_text text-center">
  //     Matcha Enthusiast
  //     <br className="max-md:hidden" />
  //     <span className="orange_gradient text-center">UNDER CONSTRUCTION</span>
  //   </h1>
  //   <p className="desc text-center">
  //     {/* Mingoo is a recent graduate from UC Berkeley majoring Engineering Math and
  //     Stats */}
  //   </p>

  //   <br />

  //   <Feed />

  //   <br />

  // <div className="main-page-image-container">
  //   <a href="https://www.linkedin.com/in/min-goo-choi/">
  //     <img src="/assets/icons/linkedin_logo.png" alt="LinkedIn Logo" />
  //   </a>
  //   <a href="https://www.goodreads.com/review/list/116837080-aubear?shelf=best-of-best&view=reviews">
  //     <img src="/assets/icons/goodreads_logo.png" alt="Goodreads Logo" />
  //   </a>
  //   <a href="https://github.com/mgchoi239/">
  //     <img src="/assets/icons/github_logo.svg" alt="GitHub Logo" />
  //   </a>
  // </div>
  // </section>

  <section class="home-hero">
    <div class="home-hero__content">
      <h1 class="heading-primary">Hey, My name is Min</h1>
      <div class="home-hero__info">
        <p class="text-primary">
          I am a recent UC Berkeley graduate with a Bachelor's degree. I have a
          passion for software development, and this space is where I curate not
          only my technical skillsets but also thoughts and ideas beyond the
          coding realm. Feel free to explore my projects and browse through the
          photo gallery.
        </p>
      </div>

      <div className="home-hero__socials">
        <a href="https://www.linkedin.com/in/min-goo-choi/">
          <img src="/assets/icons/linkedin-ico.png" alt="LinkedIn Logo" />
        </a>
        <a href="https://github.com/mgchoi239/">
          <img src="/assets/icons/github-ico.png" alt="GitHub Logo" />
        </a>
        <a href="https://www.goodreads.com/review/list/116837080-aubear?shelf=best-of-best&view=reviews">
          <img src="/assets/icons/goodreads-ico.png" alt="Goodreads Logo" />
        </a>
      </div>
    </div>
  </section>
);

export default Home;
