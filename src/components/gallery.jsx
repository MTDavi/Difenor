import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "https://youtu.be/xGSQw4IM3ZA", title: "Lorem Ipsum1" },
    // { thumb: "img/portfolio/02-small.jpg", title: "Lorem Ipsum2" },
    // { thumb: "img/portfolio/03-small.jpg", title: "Lorem Ipsum3" },
    // { thumb: "img/portfolio/04-small.jpg", title: "Lorem Ipsum4" },
    // { thumb: "img/portfolio/05-small.jpg", title: "Lorem Ipsum5" },
    // { thumb: "img/portfolio/06-small.jpg", title: "Lorem Ipsum6" },
    // { thumb: "img/portfolio/07-small.jpg", title: "Lorem Ipsum7" },
    // { thumb: "img/portfolio/08-small.jpg", title: "Lorem Ipsum8" },
    // { thumb: "img/portfolio/09-small.jpg", title: "Lorem Ipsum9" }
  ];

  const images = data.map(obj => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Film instruktażowy</h2>
          <p>Na filmie prezentujemy najważniejsze informacje dotyczące środka Difenor oraz sposoby jego użycia.</p>
          <p>Środek Difenor możesz kupić od Producenta przez Allegro!</p>
        </div>
        <div className="row">

                    {/*<video width="320" height="240" src={thumb} className="img-responsive" alt="Project Title" />{" "}*/}
                    <iframe width="560" height="315"
                            src="https://www.youtube.com/embed/xGSQw4IM3ZA">
                    </iframe>

                </div>
        </div>
      </div>
  );
};
