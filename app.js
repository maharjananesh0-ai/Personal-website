// app.js

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSkillAnimations();
  initProjectFilters();
  initProjectModals();
  initTimelineScroll();
  initUploadPlayground();
});

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
function initNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Active section on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '100%';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
      navMenu.style.padding = '2rem';
      navMenu.style.borderBottom = '1px solid var(--line-color)';
    });
  }
}

/* ==========================================================================
   SKILLS MATRIX ANIMATIONS
   ========================================================================== */
function initSkillAnimations() {
  const skillSection = document.getElementById('skills');
  const gauges = document.querySelectorAll('.software-gauge');
  const progressBars = document.querySelectorAll('.skill-bar-fill');
  const percentTexts = document.querySelectorAll('.skill-bar-percent');

  const animateSkills = () => {
    // 1. Animate Circular Gauges
    gauges.forEach(gauge => {
      const val = parseInt(gauge.getAttribute('data-val'));
      const circleVal = gauge.querySelector('.val');
      const radius = circleVal.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (val / 100) * circumference;
      circleVal.style.strokeDashoffset = offset;

      // Animate circular gauge percentage text count up
      const percentEl = gauge.querySelector('.gauge-percentage');
      if (percentEl) {
        let currentVal = 0;
        const interval = setInterval(() => {
          if (currentVal >= val) {
            clearInterval(interval);
          } else {
            currentVal++;
            percentEl.innerText = `${currentVal}%`;
          }
        }, 15);
      }
    });

    // 2. Animate Progress Bars
    progressBars.forEach(bar => {
      const parent = bar.closest('.skill-bar-item');
      const percentEl = parent.querySelector('.skill-bar-percent');
      const targetPercent = parseInt(percentEl.getAttribute('data-val'));
      
      bar.style.width = `${targetPercent}%`;
      bar.classList.add('active-fill');

      // Animate percentage text count up
      let currentVal = 0;
      const interval = setInterval(() => {
        if (currentVal >= targetPercent) {
          clearInterval(interval);
        } else {
          currentVal++;
          percentEl.innerText = `${currentVal}%`;
        }
      }, 15);
    });
  };

  // Trigger when scrolled into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  if (skillSection) {
    observer.observe(skillSection);
  }
}

/* ==========================================================================
   PROJECT FILTERING
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   PROJECT DETAILS MODALS
   ========================================================================== */
const projectData = {
  kathmandu_hospital: {
    title: "Kathmandu International Hospital",
    category: "Healthcare Operations",
    location: "Tinkune, Kathmandu, Nepal",
    img: "assets/hospital_interior.png",
    role: "Lead Interior Execution Director",
    quality: "QA Approved / Class A",
    phase: "100% Handover Completed",
    scopes: [
      "Interior works execution across 1st, 2nd, 6th, and 7th floors",
      "Layout planning & electrical/medical gas routing (MEP Integration)",
      "Site supervision, material safety audit, and builder oversight",
      "Financial auditing & cost reconciliation reports",
      "Coordinating hospital board directives with contractor squads"
    ]
  },
  moksha_mustang: {
    title: "Moksha Mustang (Jomsom Resort)",
    category: "Hospitality Development",
    location: "Jomsom, Mustang, Nepal",
    img: "assets/luxury_resort.png",
    role: "Site Operations & Handover Manager",
    quality: "Extreme Terrain Rated",
    phase: "Turnkey Project Handed Over",
    scopes: [
      "Total project execution starting from demolition to complete turnkey handover",
      "Full site planning, workforce management, and logistics in high-altitude terrain",
      "Integrated Civil, MEP, HVAC, and architectural landscaping coordination",
      "Rigorous scheduling & critical path modeling for extreme weather conditions"
    ]
  },
  siddhartha_naxal: {
    title: "Siddhartha Bank Corporate Building",
    category: "Banking & Commercial",
    location: "Naxal, Kathmandu, Nepal",
    img: "assets/bank_building.png",
    role: "Senior Construction Project Manager",
    quality: "Structural Grade Certified",
    phase: "Operational & Handed Over",
    scopes: [
      "Structural framework execution and high-density civil works supervision",
      "Cladding, curtain walls, and modern double-glazed glass installation coordination",
      "Rigorous safety protocols, concrete strength audits, and core drilling checks",
      "Integrated electrical layout and central security grid routing"
    ]
  },
  hyatt_regency: {
    title: "Hyatt Regency Renovation",
    category: "5-Star Hospitality",
    location: "Bouddha, Kathmandu, Nepal",
    img: "assets/luxury_resort.png",
    role: "Interior Renovation Coordinator",
    quality: "Luxury standards verified",
    phase: "Renovated Rooms Occupied",
    scopes: [
      "Creation of high-end mockup rooms for international executive review",
      "Renovation of luxury suites, finishing works, and electrical refits",
      "Supervision of bespoke furniture coordination and layout placement",
      "Liaising with international designers and hospitality auditors"
    ]
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project-id');
      const data = projectData[projectId];

      if (data) {
        document.getElementById('modal-img').src = data.img;
        document.getElementById('modal-img').alt = data.title;
        document.getElementById('modal-cat').innerText = data.category;
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-loc').innerText = data.location;
        document.getElementById('modal-role').innerText = data.role;
        document.getElementById('modal-quality').innerText = data.quality;
        document.getElementById('modal-phase').innerText = data.phase;

        const scopesList = document.getElementById('modal-scopes');
        scopesList.innerHTML = '';
        data.scopes.forEach(scope => {
          const li = document.createElement('li');
          li.innerText = scope;
          scopesList.appendChild(li);
        });

        modal.style.display = 'flex';
      }
    });
  });

  const closeModal = () => {
    modal.style.display = 'none';
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
}

/* ==========================================================================
   TIMELINE DRAWING ANIMATION
   ========================================================================== */
function initTimelineScroll() {
  const timelineSection = document.getElementById('timeline');
  const progressLine = document.getElementById('timeline-scroll-progress');

  if (!timelineSection || !progressLine) return;

  const updateTimelineProgress = () => {
    const rect = timelineSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate how much of the timeline is in the viewport
    let progress = 0;
    if (rect.top < windowHeight) {
      const totalDist = rect.height;
      const scrolled = windowHeight - rect.top;
      progress = Math.min(Math.max((scrolled / totalDist) * 100, 0), 100);
    }

    progressLine.style.height = `${progress}%`;
  };

  window.addEventListener('scroll', updateTimelineProgress);
  updateTimelineProgress();
}

/* ==========================================================================
   UPLOAD PLAYGROUND (PROJECT PARSER SIMULATOR)
   ========================================================================== */
const mockConsoleLogs = {
  boq: [
    { text: "[INFO] Parsing spreadsheet document: BOQ_Kathmandu_Hospital.xlsx...", type: "info" },
    { text: "[SYS] Initializing construction estimator module...", type: "info" },
    { text: "[SYS] Scanning 12 sheets for structural steel, masonry, & finish quantities...", type: "info" },
    { text: "[SUCCESS] Parsed successfully. 482 line items matched to Nepalese DUDBC norms.", type: "success" },
    { text: "[SYS] Generating concrete volume matrices...", type: "blueprint" },
    { text: "[DATA] Total Concrete Volume: 2,450 cubic meters", type: "info" },
    { text: "[DATA] Estimated Structural Rebar: 180 Metric Tons", type: "info" },
    { text: "[DATA] Finishes and Interior Cladding: 12,000 square feet", type: "info" },
    { text: "[SUCCESS] Cost profile generated. Total Project Estimate: Rs. 14.5 Crore.", type: "success" }
  ],
  gantt: [
    { text: "[INFO] Parsing project schedule database: Gantt_Mustang_Handover.mpp...", type: "info" },
    { text: "[SYS] Extracting WBS nodes and predecessor chains...", type: "info" },
    { text: "[SYS] Calculating Critical Path Method (CPM) milestones...", type: "info" },
    { text: "[WARNING] High-altitude weather window buffer (Nov-Feb) active.", type: "warning" },
    { text: "[SUCCESS] Project Schedule processed successfully.", type: "success" },
    { text: "[DATA] Total Project Duration: 240 Calendar Days", type: "info" },
    { text: "[DATA] Critical Path Constraint: High-end Interior Fitting & Landscaping", type: "info" },
    { text: "[DATA] Safety/Weather contingency buffer: 15 Working Days", type: "info" },
    { text: "[SUCCESS] Schedule Health Score: 98% (No circular relationships found).", type: "success" }
  ],
  cad: [
    { text: "[INFO] Loading AutoCAD Drawing: Architectural_Elevation_Naxal.dwg...", type: "info" },
    { text: "[SYS] Extracting layered vector geometry and floor levels...", type: "info" },
    { text: "[SYS] Auditing column grid coordinates & shear wall layouts...", type: "info" },
    { text: "[SUCCESS] 2D Drawing layers validated. Scale factor matching 1:100.", type: "success" },
    { text: "[DATA] Footprint Area: 8,500 square feet", type: "info" },
    { text: "[DATA] Built-Up Area: 68,000 square feet (Commercial Grade)", type: "info" },
    { text: "[DATA] Elevation Levels: G + 7 Storeys", type: "info" },
    { text: "[DATA] Structural Core: RCC Shear Wall with reinforced columns", type: "info" },
    { text: "[SUCCESS] Drafting layers match engineering design codes (NBC-2026).", type: "success" }
  ]
};

const mockResultOutputs = {
  boq: `
    <div class="stat-card-mini">
      <h5>Total Cost Estimate</h5>
      <p>Rs. 14.50 Crore</p>
    </div>
    <div class="stat-card-mini">
      <h5>Concrete Volume</h5>
      <p>2,450 m³ (M25/M30)</p>
    </div>
    <div class="stat-card-mini">
      <h5>Structural Steel</h5>
      <p>180 Metric Tons</p>
    </div>
    <div class="stat-card-mini">
      <h5>Finish Floor Area</h5>
      <p>12,000 sq ft</p>
    </div>
  `,
  gantt: `
    <div class="stat-card-mini">
      <h5>Total Duration</h5>
      <p>240 Calendar Days</p>
    </div>
    <div class="stat-card-mini">
      <h5>Critical Task</h5>
      <p>Interior Fit-out & Handover</p>
    </div>
    <div class="stat-card-mini">
      <h5>Weather Contingency</h5>
      <p>15 Calendar Days</p>
    </div>
    <div class="stat-card-mini">
      <h5>Milestones Met</h5>
      <p>24 / 24 Milestones</p>
    </div>
  `,
  cad: `
    <div class="stat-card-mini">
      <h5>Floor Height</h5>
      <p>G + 7 Storeys</p>
    </div>
    <div class="stat-card-mini">
      <h5>Built-up Area</h5>
      <p>68,000 sq ft</p>
    </div>
    <div class="stat-card-mini">
      <h5>Structural System</h5>
      <p>RCC Shear Wall</p>
    </div>
    <div class="stat-card-mini">
      <h5>Dwg Audit Status</h5>
      <p style="color:#10B981;">100% NBC Compliant</p>
    </div>
  `
};

function initUploadPlayground() {
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  const demoBtns = document.querySelectorAll('.demo-file-btn');
  const consoleOutput = document.getElementById('console-output');
  const consoleStatus = document.getElementById('console-status');
  const resultBox = document.getElementById('result-box');
  const resultTitle = document.getElementById('result-title');
  const resultContentBox = document.getElementById('result-content-box');

  const logMessage = (text, type = 'info') => {
    const line = document.createElement('div');
    line.className = `console-line ${type}`;
    line.innerText = text;
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  };

  const processDocument = (docType) => {
    consoleStatus.innerText = 'PROCESSING';
    consoleStatus.style.color = 'var(--accent-blueprint)';
    consoleOutput.innerHTML = '';
    resultBox.style.display = 'none';

    let index = 0;
    const logs = mockConsoleLogs[docType];

    const interval = setInterval(() => {
      if (index < logs.length) {
        logMessage(logs[index].text, logs[index].type);
        index++;
      } else {
        clearInterval(interval);
        consoleStatus.innerText = 'SUCCESS';
        consoleStatus.style.color = '#10B981';
        
        // Show result card
        resultTitle.innerText = `PROCESSED ARTIFACT // ${docType.toUpperCase()} EXTRACT`;
        resultContentBox.innerHTML = mockResultOutputs[docType];
        resultBox.style.display = 'block';
      }
    }, 400);
  };

  // Demo file button clicks
  demoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const docType = btn.getAttribute('data-doc');
      processDocument(docType);
    });
  });

  // Drag & drop triggers
  if (dropZone) {
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        const ext = file.name.split('.').pop().toLowerCase();
        
        logMessage(`[USER] File dropped: ${file.name} (${(file.size/1024).toFixed(1)} KB)`);
        
        // Match drop extension to mock process
        if (ext === 'xlsx' || ext === 'xls' || file.name.includes('boq')) {
          processDocument('boq');
        } else if (ext === 'mpp' || file.name.includes('gantt') || file.name.includes('schedule')) {
          processDocument('gantt');
        } else {
          processDocument('cad'); // Default to drawing elevation
        }
      }
    });

    fileInput.addEventListener('change', () => {
      const files = fileInput.files;
      if (files.length > 0) {
        const file = files[0];
        logMessage(`[USER] File uploaded: ${file.name}`);
        processDocument('boq'); // Default demo trigger
      }
    });
  }
}
