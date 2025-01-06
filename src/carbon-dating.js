const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== 'string' || 
    isNaN(Number(sampleActivity)) ||   
    Number(sampleActivity) <= 0 ||      
    Number(sampleActivity) > MODERN_ACTIVITY 
  ) {
    return false; 
  }

  const sampleActivityNum = Number(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD; // Decay constant
  const age = Math.log(MODERN_ACTIVITY / sampleActivityNum) / k;

  return Math.ceil(age); 
}

module.exports = {
  dateSample
};
