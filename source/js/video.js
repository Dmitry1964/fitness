const videoContent = document.querySelector('.promo__video video');
const playButton = document.querySelector('.promo__video button');

const onPlayButtonHendler = () => {
  videoContent.play();
};

export { onPlayButtonHendler, playButton };
