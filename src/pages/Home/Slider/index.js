import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 450px;
  margin: auto;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Slide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const Image = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  flex-shrink: 0;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Muda o slide a cada 5 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [currentIndex]); // Dependência para reiniciar o intervalo quando o índice muda

  return (
    <SliderContainer>
      <PrevButton onClick={prevSlide}>❮</PrevButton>
      <Slide currentIndex={currentIndex}>
        {images.map((image, index) => (
          <Image src={image} alt={`slide-${index}`} key={index} />
        ))}
      </Slide>
      <NextButton onClick={nextSlide}>❯</NextButton>
    </SliderContainer>
  );
};

export default ImageSlider;
