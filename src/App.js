import "./App.css";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

function App() {
  let slidePosition = 0;
  const slides = document.getElementsByClassName("carousel__item");
  const totalSlides = slides.length;

  function updateSlidePosition() {
    for (let slide of slides) {
      slide.classList.remove("carousel__item--visible");
      slide.classList.add("carousel__item--hidden");
    }

    slides[slidePosition].classList.add("carousel__item--visible");
  }

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }

    updateSlidePosition();
  }

  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }

    updateSlidePosition();
  }

  return (
    <div className="carousel">
      <div className="carousel__item carousel__item--visible">
        <img alt="elem" src={img1} />
      </div>
      <div className="carousel__item">
        <img alt="elem" src={img2} />
      </div>
      <div className="carousel__item">
        <img alt="elem" src={img3} />
      </div>
      <div className="carousel__actions">
        <button onClick={() => moveToPrevSlide()} aria-label="Previous slide">
          &lt;{" "}
        </button>
        <button onClick={() => moveToNextSlide()} aria-label="Next slide">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default App;
