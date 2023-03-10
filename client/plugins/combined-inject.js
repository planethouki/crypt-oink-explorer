export default ({ app }, inject) => {
  inject('tonImg', (tokenId) => {
    return `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`
  })
}
