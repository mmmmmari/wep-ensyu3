function Header() {
    return (
      <header className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Cute Dog Images</h1>
          </div>
        </div>
      </header>
    );
  }
  
  function Image(props) {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.src} alt="cute dog!" />
          </figure>
        </div>
      </div>
    );
  }
  
  function Gallery(props) {
    const { urls } = props;
    return (
      <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
      </div>
    );
  }
  
  function Main() {
    const urls = [
        "https://cdn.shibe.online/shibes/4a29e09be68120f1d76224224864fdc5095ecb93.jpg",
        "https://cdn.shibe.online/shibes/e5150dfd2393f893994d33ee64f9df47342a06b5.jpg",
        "https://cdn.shibe.online/shibes/fd7c98e9656b12b8352711c2a94b6e967db15b6a.jpg",
        "https://cdn.shibe.online/shibes/289d9e7ff75f3a98a10bd9d4c35b4b420006884d.jpg",
        "https://cdn.shibe.online/shibes/a5a6a03688473d9775a38ca93ab80c570c268ca9.jpg",
        "https://cdn.shibe.online/shibes/a5618f44b43975e1a55c3e91cde6599b6dcb05e5.jpg",
        "https://cdn.shibe.online/shibes/c442a68523402890881d660ea83bb12e213bd480.jpg",
        "https://cdn.shibe.online/shibes/a24ab9e92b112283d166b5b30204424c4aa28097.jpg",
        "https://cdn.shibe.online/shibes/b625a65284de3315acd65a49e7425e5019c9570c.jpg",
        "https://cdn.shibe.online/shibes/8aec239c3bce5a69b0bc3fec1d1aae672aa3a210.jpg",
        "https://cdn.shibe.online/shibes/bca3a2ee1463d53453d5a5f4247d9d80904edc90.jpg",
        "https://cdn.shibe.online/shibes/af132b147bc6bb6e35ed63b393cb9ec5cd2ebb1b.jpg",
    ];
    return (
      <main>
        <section className="section">
          <div className="container">
            <Gallery urls={urls} />
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>Dog images are retrieved from Shibe.Online API</p>
          <p>
            <a href="http://shibe.online/">Donate to Shibe.Online API</a>
          </p>
          <p>5421068 竹田まり</p>
          <p>日本大学文理学部情報科学科 Webプログラミングの演習課題</p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;