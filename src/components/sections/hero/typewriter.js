const writeCustomDetails = (instance) => {
  instance
    .type('I’m a software developer with 5+ years of experie')
    .pause(300)
    .type('nce. ')
    .pause(350)
    .type('Focused on building robust and a')
    .pause(350)
    .type('c')
    .pause(100)
    .type('c')
    .pause(30)
    .type('essible ')
    .pause(70)
    .type('products with')
    .pause(200)
    .type(' intuitive ')
    .pause(150)
    .type('UI. ')
    .pause(650)
    .type('Blog about front-end to <a href="https://t.me/frontendmetoo" aria-label="Telegram" target="_blank" rel="noopener noreferrer">t.me/frontendmetoo</a>.')

    return instance;
};

const typewriterOptions = {
  html: true,
  speed: 30,
  lifeLike: true,
  cursor: true,
  breakLines: true,
  waitUntilVisible: true,
  startDelay: 1000,
  nextStringDelay: 400,
  afterComplete: async (instance) => {
    setTimeout(() => {
      instance.destroy(true);
    }, 5000);
  },
};

export { writeCustomDetails, typewriterOptions };