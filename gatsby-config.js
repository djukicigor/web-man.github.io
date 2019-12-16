module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-yandex-metrica`,
      options: {
        trackingId: 56664025,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
      }
    }
  ]
}
