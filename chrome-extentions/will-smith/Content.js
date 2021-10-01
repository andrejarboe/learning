window.onload = function () {
  let willSmithImages = [
    'https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg',
    'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/09/Will-Smith-Suicide-Squad-Deadshot.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/will-smith-genie-aladdin-1549871476.png?crop=1xw:0.9306049822064056xh;center,top&resize=1200:*',
    'https://i.ytimg.com/vi/072hGEXz0FM/maxresdefault.jpg',
    'https://www.cliccamaqua.com.br/images/noticias/img_57169_foto_1_a.jpg',
    'https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg',
    'https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/07/will-smith-foto.jpg',
    'https://exame.com/wp-content/uploads/2016/09/size_960_16_9_will_smith_ator3.jpg?quality=70&strip=info',
    'https://conteudo.imguol.com.br/c/entretenimento/e3/2020/07/09/will-smith-1594320007897_v2_450x337.jpg',
    'https://i0.wp.com/mixdeseries.com.br/wp-content/uploads/2018/07/will-smith-4-e1534947669898.jpg?fit=871%2C499&ssl=1',
  ];

  const imgs = document.getElementsByTagName('img');

  for (let i = 0; i < willSmithImages.length; i++) {
    /*
      pick a random number
      use math.random times length of array
      then round it down so you have a whole number
      */
    const randomImg = Math.floor(Math.random() * willSmithImages.length);

    // replace the src link with the random Will Smith image
    imgs[i].src = willSmithImages[randomImg];
  }

  const text = document.getElementById('text');
  for (let i = 0; i < text.length; i++) {
    text[i].innerText = 'Will Smith';
  }
};
