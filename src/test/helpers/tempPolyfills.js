// See: https://github.com/facebook/jest/issues/4545
//
// Remove this `raf` polyfill once the below issue is sorted
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582

const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
  
export default raf