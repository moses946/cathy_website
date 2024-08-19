document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('open');
  });


  function openBottomSheet(event, projectId) {
    event.preventDefault();
    const bottomSheet = document.getElementById('bottomSheet');
    const carousel = document.getElementById('carousel');
    const projectDetails = document.getElementById('projectDetails');


    if (projectId === 'project1') {
        carousel.innerHTML = `
            <div><img src="./assets/Dorcas Destiny/Image 1.jpg" alt="Project Image 1"></div>
            <div><img src="./assets/Dorcas Destiny/Image 2.jpg" alt="Project Image 2"></div>
            <div><img src="./assets/Dorcas Destiny/Image 3.jpg" alt="Project Image 3"></div>
            <div><img src="./assets/Dorcas Destiny/Image 4.jpg" alt="Project Image 3"></div>
            <div><img src="./assets/Dorcas Destiny/Image 5.jpg" alt="Project Image 3"></div>
        `;
        projectDetails.innerHTML = `
            <h3>Women Empowerment Program</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            <p>Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
        `;
    }
    if (projectId === 'project2') {
        carousel.innerHTML = `
            <div><img src="./assets/Untitled.jpg" alt="Project Image 1"></div>
            <div><img src="./assets/images.jpg" alt="Project Image 2"></div>
            <div><img src="./assets/Untitled3.jpg" alt="Project Image 3"></div>
        `;
        projectDetails.innerHTML = `
            <h3>Women Empowerment Program</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            <p>Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
        `;
    }
    if (projectId === 'project3') {
        carousel.innerHTML = `
            <div><img src="./assets/images.jpg" alt="Project Image 1"></div>
            <div><img src="./assets/Untitled2.jpg" alt="Project Image 2"></div>
            <div><img src="./assets/Untitled3.jpg" alt="Project Image 3"></div>
        `;
        projectDetails.innerHTML = `
            <h3>Women Empowerment Program3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
            <p>Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.</p>
        `;
    }
    // Add more projects as needed

    // Initialize carousel
    $(carousel).slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000 // Set autoplay speed
    });

    bottomSheet.style.bottom = '0';
}

function closeBottomSheet() {
    const bottomSheet = document.getElementById('bottomSheet');
    bottomSheet.style.bottom = '-100%';
    $(carousel).slick('unslick'); // Unslick the carousel to remove previous initialization
    carousel.innerHTML = '';
    projectDetails.innerHTML = '';
}

function dismissBottomSheet(event) {
    if (event.target.id === 'bottomSheet') {
        closeBottomSheet();
    }
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});