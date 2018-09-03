function init() {
  // Raven.config(
  //   "https://9de840f8f6584b5691f4df367c3fd872@sentry.io/1272245"
  // ).install();
}

function log(error) {
  console.log(error);
}

export default {
  init,
  log
};
