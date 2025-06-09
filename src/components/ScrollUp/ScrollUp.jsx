import ScrollToTop from "react-scroll-to-top";

const ScrollUp = () => {
  return (
    <ScrollToTop
      smooth
      svgPath="M6 15l6-6 6 6"
      viewBox="0 0 24 24"
      style={{
        borderRadius: "50%",
        width: 50,
        height: 50,
        color: "var(--main)",
        bottom: 10,
        right: 10,
      }}
    />
  );
};

export default ScrollUp;
