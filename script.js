// mobil-menu

const hamburgerButton = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-lists');
const closed = document.querySelector('.close-icon');
const mobileList = document.querySelectorAll('.mobile-list');

function toggleMobileMenu() {
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}

hamburgerButton.addEventListener('click', (event) => {
  toggleMobileMenu();
  event.preventDefault();
});

closed.addEventListener('click', toggleMobileMenu);

mobileList.forEach((link) => {
  link.addEventListener('click', toggleMobileMenu);
});

// speaker section

// const projectContainer = document.querySelector('.speaker-section');

const speakProjects = [
  {
    speakerImage: 'images/speaker_01.png',
    speakerName: 'Dr. Edim E Edim',
    speakerTitle: 'Conference Chair & Keynote Speaker',
    speakerAddress:
      'Former Head of Department computer science, University of Calabar',
    dataset: 0,
  },
  {
    speakerImage: 'images/speaker_02 (1).png',
    speakerName: 'Prof. Maurice A Coker',
    speakerTitle: 'Conference Chair & Keynote Speaker',
    speakerAddress: 'Department of political science, University of Calabar',
    dataset: 1,
  },
  {
    speakerImage: 'images/speaker_03.png',
    speakerName: 'Dr S. S. Udo',
    speakerTitle: 'Conference Chair & Keynote Speaker',
    speakerAddress: 'Department of Computer science, University of Uyo',
    dataset: 2,
  },
  {
    speakerImage: 'images/speaker_04.png',
    speakerName: 'Mr Francis Ebiti',
    speakerTitle: 'Conference Chair & Keynote Speaker',
    speakerAddress: 'Director of Ict, University of Uyo.',
    dataset: 4,
  },
  {
    speakerImage: 'images/speaker_03.png',
    speakerName: 'Dr. Mrs Eme Ajayi',
    speakerTitle: 'Conference Chair & Keynote Speaker',
    speakerAddress: 'Technician, Mobil producing co. Nigeria',
    dataset: 5,
  },
  {
    speakerImage: 'images/speaker_01.png',
    speakerName: 'Mr Maurice o Coker',
    speakerTitle: 'Conference Chair & Keynote Speaker',
    speakerAddress: 'Student at Microverse',
    dataset: 6,
  },
];

for (let i = 0; i < speakProjects.length; i += 1) {
  document.querySelector('.speaker-main-cont').innerHTML += `
  <div class="speaker-container">
            <div class="speaker-img">
                <img src="${speakProjects[i].speakerImage}">
            </div>
            <div class="speaker-item">
              <div class="speaker-name">
                <p>${speakProjects[i].speakerName}</p> 
                <span class="speaker-title">${speakProjects[i].speakerTitle}</span>
              </div>
              <div class="speaker-add">
                <p>${speakProjects[i].speakerAddress}</p>
              </div>
            </div>
          </div>
`;
}
