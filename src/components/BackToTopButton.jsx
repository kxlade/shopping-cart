const BackToTop = () => {
  let backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 310) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
  }

  return (
    <button
      className="back-to-top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-up w-5 h-5"
        aria-hidden="true"
      >
        <path d="m5 12 7-7 7 7"></path>
        <path d="M12 19V5"></path>
      </svg>
    </button>
  );
};

export default BackToTop;
