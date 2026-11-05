function Body() {
  return (
    <main id="blog">

      <article className="article-content">
        <h1>Erased Tapes:</h1>
        <h2>Exploring the Sonic Frontier</h2>

        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit.
          Mi eu scelerisque turpis posuere tempor? Leo condimentum
          himenaeos molestie elit; maximus iaculis proin nulla.
          Ullamcorper nibh cras conubia suscipit dapibus sagittis,
          facilisi habitant vivamus. Etiam fusce posuere himenaeos
          ipsum commodo sollicitudin himenaeos nec.
        </p>

        <div className="article-columns">

          <section>
            <h3>Heading</h3>

            <p>
              Montes ridiculus mus tellus nunc vulputate. Cras facilisi
              congue et facilisis porttitor litora etiam praesent
              porttitor. Sollicitudin cubilia scelerisque diam taciti
              lacus. Dapibus penatibus augue dapibus sagittis;
              rhoncus accumsan. Accumsan urna et, ultrices placerat
              justo rutrum. Tristique mattis ante cras accumsan
              convallis phasellus fermentum magna.
            </p>

            <p>
              Laoreet volutpat hendrerit est aliquam; fusce quam
              tempor. Nisi interdum praesent pellentesque non non
              blandit cubilia et. Aptent maximus vehicula nullam
              odio tempor. Placerat dis facilisis potenti iaculis,
              primis vivamus nec at magnis.
            </p>

            <p>
              Curae habitasse elementum amet nunc, natoque at.
              Tortor vel blandit sociosqu auctor aliquam maximus
              porta feugiat. Eros phasellus platea mauris condimentum
              natoque hendrerit tellus id.
            </p>

            <p>
              Parturient habitasse facilisis purus donec, enim
              platea maximus. Primis class varius augue sed class
              ultricies. Posuere curabitur tristique penatibus
              montes hac ac imperdiet.
            </p>
          </section>

          <section>
            <p>
              Rhoncus curabitur pharetra proin ante nam adipiscing
              accumsan hac. Rutrum efficitur nullam integer ut ex id.
              Pulvinar vel at vestibulum vivamus sed nascetur eget.
              Ultricies mauris fringilla rhoncus pharetra iaculis vitae.
            </p>

            <h3>Heading</h3>

            <p>
              Habitasse ornare fames facilisis montes pulvinar
              habitasse fringilla. Risus porta cursus duis vivamus
              quam adipiscing nec. Ante at posuere eget aptent
              natoque vivamus ante.
            </p>

            <p>
              Amet ac leo, imperdiet hac litora auctor. Suscipit
              congue duis sociosqu auctor euismod vivamus urna diam.
              Nunc enim himenaeos litora facilisi, tincidunt torquent.
              Eros sapien laoreet duis, volutpat rutrum pulvinar.
            </p>

            <p>
              Magnis maximus morbi, litora accumsan vivamus facilisi
              etiam pharetra. Platea congue orci sagittis purus
              scelerisque. Velit taciti maecenas praesent nam
              lobortis metus vehicula.
            </p>
          </section>

          <section>
            <p>
              Facilisi augue urna torquent lacinia facilisi inceptos.
              Natoque varius feugiat massa scelerisque natoque,
              cras tempor inceptos. Tempus pellentesque congue
              varius dapibus pharetra.
            </p>

            <h3>Heading</h3>

            <p>
              Vulputate nullam tempus montes eu tellus integer
              adipiscing pulvinar. Pharetra eu luctus id a potenti.
              Pulvinar egestas conubia ante varius lobortis
              iaculis metus. Netus sem imperdiet hendrerit
              vehicula netus est gravida tortor.
            </p>

            <p>
              Ad venenatis sapien habitant posuere donec porttitor
              vel nisi. Sodales laoreet donec diam rhoncus lectus
              euismod orci torquent curae. Fames rhoncus torquent
              sed convallis; potenti cras.
            </p>
          </section>

        </div>
      </article>

      <section className="gallery" id="artists">
        <img src="/all-encores.jpg" alt="All Encores" />
        <img src="/articulation.jpg" alt="Articulation" />
        <img src="/blurred.jpg" alt="Blurred" />
        <img src="/encores-2.jpg" alt="Encores 2" />
        <img src="/eulogy-for-evolution.jpg" alt="Eulogy for Evolution" />
      </section>

      <section className="author" id="story">
        <div className="author-text">
          <h3>The Author</h3>
          <p>
            Sapien leo scelerisque per convallis torquent nunc.
            Lobortis eleifend a nam sit turpis nostra.
            Tempus suspendisse libero curae faucibus lobortis
            litora bibendum praesent!
          </p>
        </div>

        <img
          className="author-photo"
          src="/profile_picture.jpg"
          alt="Author"
        />

        <div className="social-icons">
          <img src="/facebook-icon.png" alt="Facebook" />
          <img src="/instagram-icon.svg" alt="Instagram" />
          <img src="/twitter-icon.svg" alt="Twitter" />
        </div>
      </section>

      <section className="comments">
        <h3>Comments</h3>

        <div className="comment">
          <h4>soundseeker92</h4>
          <p>
            This article beautifully captures the essence of
            experimental sound. Erased Tapes is truly pushing
            boundaries. Makes me want to revisit Nils Frahm's
            early work.
          </p>
        </div>

        <div className="comment">
          <h4>Ted Baker</h4>
          <p>
            I've been following the label for years—so glad
            someone's finally writing about their impact.
          </p>
        </div>

        <div className="comment">
          <h4>Queen_of_noise</h4>
          <p>
            I discovered Erased Tapes through Ólafur Arnalds—
            this article brought back memories of listening
            together with friends.
          </p>
        </div>
      </section>

    </main>
  );
}

export default Body;