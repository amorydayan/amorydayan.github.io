// Organisation du portfolio : expériences distinctes des projets
const projectsSection = document.getElementById('projets');

if (projectsSection) {
  const projectGrid = projectsSection.querySelector('.project-grid');
  const cards = projectGrid ? Array.from(projectGrid.querySelectorAll('.project-card')) : [];

  const orangeCard = cards.find((card) => card.querySelector('a[href="#orange"]'));
  const fablabCard = cards.find((card) => card.querySelector('a[href="#fablab"]'));
  const solidworksCard = cards.find((card) => card.querySelector('a[href="#solidworks"]'));

  const experiencesSection = document.createElement('section');
  experiencesSection.id = 'experiences';
  experiencesSection.className = 'section alt';
  experiencesSection.innerHTML = `
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">Expériences</p>
        <h2>Stages et expériences techniques</h2>
      </div>
      <div class="project-grid" id="experiences-grid"></div>
    </div>
  `;

  projectsSection.parentNode.insertBefore(experiencesSection, projectsSection);
  const experiencesGrid = experiencesSection.querySelector('#experiences-grid');

  [orangeCard, fablabCard].forEach((card) => {
    if (card) {
      const link = card.querySelector('.text-link');
      if (link) link.textContent = 'Voir l’expérience';
      experiencesGrid.appendChild(card);
    }
  });

  // Les autres éléments restent dans la section Projets.
  projectsSection.classList.remove('alt');
  const projectsEyebrow = projectsSection.querySelector('.section-heading .eyebrow');
  const projectsTitle = projectsSection.querySelector('.section-heading h2');
  if (projectsEyebrow) projectsEyebrow.textContent = 'Projets';
  if (projectsTitle) projectsTitle.textContent = 'Projets personnels et académiques';

  // Le projet SolidWorks est retiré temporairement du portfolio.
  if (solidworksCard) solidworksCard.remove();
}

// Retirer également la fiche détaillée SolidWorks.
const solidworksSection = document.getElementById('solidworks');
if (solidworksSection) solidworksSection.remove();

// Ajouter "Expériences" à la navigation avant "Projets".
const projectsNavLink = document.querySelector('.nav-links a[href="#projets"]');
if (projectsNavLink && !document.querySelector('.nav-links a[href="#experiences"]')) {
  const experiencesNavLink = document.createElement('a');
  experiencesNavLink.href = '#experiences';
  experiencesNavLink.textContent = 'Expériences';
  projectsNavLink.parentNode.insertBefore(experiencesNavLink, projectsNavLink);
}

// Clarifier la nature de l'expérience Orange dans la fiche détaillée.
const orangeEyebrow = document.querySelector('#orange .section-heading .eyebrow');
if (orangeEyebrow) orangeEyebrow.textContent = 'Expérience • Orange Innovation';

// Lightbox des images
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item img');

const openLightbox = (src, alt) => {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
};

const closeLightbox = () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
};

galleryItems.forEach((image) => {
  image.addEventListener('click', () => openLightbox(image.src, image.alt));
});

closeButton.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});
