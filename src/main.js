import * as React from "react";
export default class ScrollTest extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("js-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }
  render() {
    return (
      <div id="wrapper">
        <header id="js-header">
          <div className="container clearfix">
            <h1 id="logo">Apples</h1>
            <nav>
              <a href="#bacon">Bacon</a>
              <a href="#sausage">Sausage</a>
              <a href="#biltong">Biltong</a>
            </nav>
          </div>
        </header>

        <div id="main">
          <div id="content">
            <section>
              <div className="container">
                <h1>I Second That Emotion</h1>
                <p>
                  Aww, it's true. I've been hiding it for so long. Perhaps, but
                  perhaps your civilization is merely the sewer of an even
                  greater society above you! You guys go on without me! I'm
                  going to go… look for more stuff to steal! When I was first
                  asked to make a film about my nephew, Hubert Farnsworth, I
                  thought "Why should I?" Then later, Leela made the film. But
                  if I did make it, you can bet there would have been more
                  topless women on motorcycles. Roll film! So I really am
                  important? How I feel when I'm drunk is correct? Is the Space
                  Pope reptilian!?
                </p>
                <p>Bacon atball corned beef strip steak andouille.</p>
              </div>
            </section>
            <section className="color">
              <div className="container">
                <h1>The Duh-Vinci Code</h1>
                <p>
                  Bender, you risked your life to save me! Good news, everyone!
                  I've taught the toaster to feel love! I can explain. It's very
                  valuable. Can we have Bender Burgers again? For the last time,
                  I don't like lilacs! Your 'first' wife was the one who liked
                  lilacs! You seem malnourished. Are you suffering from
                  intestinal parasites? Say what? Now, now. Perfectly
                  symmetrical violence never solved anything. Eeeee! Now say
                  "nuclear wessels"! Ugh, it's filthy! Why not create a National
                  Endowment for Strip Clubs while we're at it? I suppose I could
                  part with 'one' and still be feared… Noooooo! Have you ever
                  tried just turning off the TV, sitting down with your
                  children, and hitting them? Isn't it true that you have been
                  paid for your testimony? All I want is to be a monkey of
                  moderate intelligence who wears a suit… that's why I'm
                  transferring to business school! We'll need to have a look
                  inside you with this camera. Really?!
                </p>
                <p>Bacon ipsum dolor sit amet pig biltong filet mignon, kiel</p>
              </div>
            </section>
            <section>
              <div className="container">
                <h1>A Bicyclops Built For Two</h1>
                <p>
                  I decline the title of Iron Cook and accept the lesser title
                  of Zinc Saucier, which I just made up. Uhh… also, comes with
                  double prize money. Ugh, it's filthy! Why not create a
                  National Endowment for Strip Clubs while we're at it? Oh dear!
                  She's stuck in an infinite loop, and he's an idiot! Well,
                  that's love for you. For the last time, I don't like lilacs!
                  Your 'first' wife was the one who liked lilacs! I was having
                  the most wonderful dream. Except you were there, and you were
                  there, and you were there! You guys go on without me! I'm
                  going to go… look for more stuff to steal!
                </p>
                <p>Bacon </p>
              </div>
            </section>
          </div>
        </div>
        <footer>
          <div className="container clearfix">
            <div className="col" id="col-1">
              <ul>
                <li>APPLES</li>
                <li>
                  <a href="#0">Home</a>
                </li>
                <li>
                  <a href="#0">Services</a>
                </li>
                <li>
                  <a href="#0">Contact</a>
                </li>
                <li>
                  <a href="#0">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="col" id="col-2">
              <ul>
                <li>SOCIAL</li>
                <li>
                  <a href="#0">Facebook</a>
                </li>
                <li>
                  <a href="#0">Twitter</a>
                </li>
                <li>
                  <a href="#0">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="col" id="col-3">
              <ul>
                <li>SERVICES</li>
                <li>
                  <a href="#0">Bacon</a>
                </li>
                <li>
                  <a href="#0">Sausage Services</a>
                </li>
                <li>
                  <a href="#0">Cheese</a>
                </li>
                <li>
                  <a href="#0">Cider Apples</a>
                </li>
              </ul>
            </div>
            <div id="copy">
              &#xa9; Designed and built by{" "}
              <a href="https://twitter.com/lilianakastilio">@liianakastilio</a>{" "}
              2013 - 2014
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
