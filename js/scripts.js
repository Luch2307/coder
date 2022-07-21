let intersectFadeIn = () => {
  const sections = document.querySelectorAll(".index-product-img");
  const secArr = Array.from(sections);

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
   

    entries.map((entry) => {
      if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add("active");
       
        observer.unobserve(entry.target);
      }
      return;
    });
  }, options);

  secArr.map((section) => {
    observer.observe(section);
  });
};

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() =>{navbarLinks.classList.toggle('active')})
