function ThumbSlider() {
  return (
    <div className={styles.mySlider}>
      <Swiper
        modules={[Navigation, FreeMode, Thumbs]}
        spaceBetween={10}
        navigation={true}
        // loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className={styles.productImagesSwiper}>
        {product.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img className={styles.image} src={image} alt={product.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // allowTouchMove={false}
        onSwiper={setThumbsSwiper}
        // loop={product.images.length > 4 ? true : false}
        spaceBetween={2}
        slidesPerView={product.images.length > 4 ? 4 : product.images.length}
        noSwiping
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.productImagesPagination}>
        {product.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img className={styles.image} src={image} alt={product.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default ThumbSlider;
