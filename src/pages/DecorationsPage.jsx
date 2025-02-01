import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import closeImg from "/images/x-thin-svgrepo-com.svg";
import Img1 from "/images/img-1.jpg";
import Img2 from "/images/img-2.jpg";
import Img3 from "/images/img-3.jpg";
import Img4 from "/images/img-4.jpg";
import Img5 from "/images/img-5.jpg";
import Img6 from "/images/img-6.jpg";
import Img7 from "/images/img-7.jpg";
import Img8 from "/images/img-8.jpg";
import Img9 from "/images/img-9.jpg";
import "./DecorationsPage.css";
import { useState, useRef } from "react";

const DecorationsPage = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
      styling: "img1",
    },
    {
      id: 2,
      imgSrc: Img2,
      styling: "img2",
    },
    {
      id: 3,
      imgSrc: Img3,
      styling: "img3",
    },
    {
      id: 4,
      imgSrc: Img4,
      styling: "img4",
    },
    {
      id: 5,
      imgSrc: Img5,
      styling: "img5",
    },
    {
      id: 6,
      imgSrc: Img6,
      styling: "img6",
    },
    {
      id: 7,
      imgSrc: Img7,
      styling: "img7",
    },
    {
      id: 8,
      imgSrc: Img8,
      styling: "img8",
    },
    {
      id: 9,
      imgSrc: Img9,
      styling: "img9",
    },
  ];
  // const [isOpen, setIsOpen] = useState(false);
  const [clickedImgSrc, setClickedImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setClickedImgSrc(imgSrc);
    console.log(clickedImgSrc);
    // setIsOpen(true);
  };
  // const closeDialog = () => {
  //   setIsOpen(false);
  //   setClickedImgSrc("");
  // };
  const dialogRef = useRef(null);
  const toggleDialog = () => {
    if (!dialogRef.current) {
      return;
    }
    // dialogRef.current.hasAttribute("open")
    //   ? dialogRef.current.close()
    //   : dialogRef.current.showModal();
    if (dialogRef.current.hasAttribute("open")) {
      dialogRef.current.close();
      setClickedImgSrc("");
    } else {
      dialogRef.current.showModal();
    }
  };
  return (
    <>
      <Navbar />
      <div className="gallery-container">
        <div className="gallery-text">
          Check out examples of previous decorations and decor from various
          events below. Feel free to reference these photos as examples of what
          you may be looking for!
        </div>
        <div className="gallery-wrapper">
          {data.map((item, index) => {
            return (
              <figure
                className="photos"
                id={item.styling}
                key={index}
                // onClick={() => getImg(item.imgSrc)}
                onClick={() => {
                  setClickedImgSrc(item.imgSrc);
                  toggleDialog();
                }}
              >
                <img src={item.imgSrc} />
              </figure>
            );
          })}
          <dialog
            ref={dialogRef}
            onClick={(e) => {
              if (e.currentTarget === e.target) {
                toggleDialog();
              }
            }}
          >
            <div className="dialog-image-container">
              <img src={clickedImgSrc} />
            </div>
            <button className="dialog-close-img" onClick={toggleDialog}>
              <img src={closeImg} />
            </button>
          </dialog>
          {/* <dialog open={isOpen}>
            <img src={clickedImgSrc} />
            <button onClick={() => closeDialog()}>Close</button>
          </dialog> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DecorationsPage;
