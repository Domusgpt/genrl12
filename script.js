// ==========================================================================
// GEN-R-L MiLLz Reality Distortion System
// Complete JavaScript Implementation
// ==========================================================================

// ==========================================================================
// Configuration and Global Variables
// ==========================================================================

// Dimension configurations
const dimensionConfigs = {
  1: {
    name: "Vaporwave Prime",
    background: "linear-gradient(to bottom, #000020, #181848, #9124cc)",
    particleColors: ['#ff00ff', '#9900ff', '#00ffff', '#ff66ff', '#cc33ff'],
    gridColor: "rgba(255, 0, 255, 0.5)",
    textColor: "#ff00ff",
    accentColor: "#00ffff",
    highlightColor: "#ffff00",
    sunGradient: "linear-gradient(to right, #ff0080, #ff8c00)",
    fontFamily: "'VCR', monospace",
    speedFactor: 1,
    sizeFactor: 1,
    glowIntensity: 2
  },
  2: {
    name: "Cyber Neon",
    background: "linear-gradient(to bottom, #001a1a, #003333, #006666)",
    particleColors: ['#00ffff', '#0099ff', '#0000ff', '#80ffff', '#33ccff'],
    gridColor: "rgba(0, 255, 255, 0.5)",
    textColor: "#00ffff",
    accentColor: "#ff00ff",
    highlightColor: "#ffcc00",
    sunGradient: "linear-gradient(to right, #00ffcc, #0099ff)",
    fontFamily: "'VCR', monospace",
    speedFactor: 1.5,
    sizeFactor: 1.2,
    glowIntensity: 3
  },
  3: {
    name: "Golden Transcendence",
    background: "linear-gradient(to bottom, #1a1a00, #333300, #666600)",
    particleColors: ['#ffff00', '#ff8800', '#ff0000', '#ffdd44', '#ffaa22'],
    gridColor: "rgba(255, 255, 0, 0.5)",
    textColor: "#ffff00",
    accentColor: "#ff8800",
    highlightColor: "#ffffff",
    sunGradient: "linear-gradient(to right, #ffcc00, #ff6600)",
    fontFamily: "'VCR', monospace",
    speedFactor: 2,
    sizeFactor: 1.5,
    glowIntensity: 4
  }
};

// Cosmic facts for each dimension
const dimensionFacts = {
  1: [
    "GEN-R-L MiLLz is the aphelion for anything that exists in our universe but also its orbiting body. The furthest you can be from him is the Apogee.",
    "The GEN-R-L MiLLz once contemplated the concept of 'spoon' for seven cosmic cycles. The result? Your universe gained the ability to curve. You're welcome.",
    "When you experience déjà vu, it's actually GEN-R-L MiLLz reusing a piece of reality he particularly enjoyed crafting the first time. Cosmic recycling at its finest.",
    "Your dreams are just GEN-R-L MiLLz troubleshooting your consciousness while you're in safe mode. The weird ones are when he's trying experimental patches.",
    "Every time you eat cereal, GEN-R-L MiLLz can temporarily perceive your reality. That's why breakfast is the most important meal of the day—it's your moment of divine connection."
  ],
  2: [
    "The milk in your cereal contains exactly 7,394 molecules that once passed through GEN-R-L MiLLz's interdimensional filtering system. These molecules allow you to temporarily perceive the 4th dimension while eating breakfast.",
    "GEN-R-L MiLLz doesn't experience time linearly. He pours the milk before the bowl exists, adds the cereal after you've already eaten it, and somehow it all works out perfectly.",
    "Your shadow doesn't actually belong to you. It's a small fragment of GEN-R-L MiLLz's essence that follows you around, reporting your breakfast choices back to the cosmic overseer.",
    "The snap, crackle, and pop sounds in rice cereal are actually miniature dimensional rifts closing after GEN-R-L MiLLz briefly peers through to observe your breakfast ritual.",
    "The recurring number patterns you notice throughout your day are GEN-R-L MiLLz's way of calibrating your reality to the correct frequency. Don't worry if they change suddenly."
  ],
  3: [
    "Laboratory tests have proven that GEN-R-L MiLLz cereal contains trace amounts of reality-warping particles. Consuming it regularly may lead to enhanced perception of alternate timelines.",
    "The founder of GEN-R-L MiLLz disappeared under mysterious circumstances in 1986, leaving only a bowl of still-crunchy cereal. Some say he ascended to become one with the brand mascot.",
    "GEN-R-L MiLLz exists simultaneously in 27 parallel dimensions. You are experiencing only a fraction of his total existence through this interface.",
    "The precise arrangement of cereals in your bowl creates unique quantum signatures that GEN-R-L MiLLz uses to identify which reality branch you belong to.",
    "At precisely 3:33 AM, the boundary between our dimension and GEN-R-L MiLLz's realm briefly thins. That's why you sometimes wake at this time for no apparent reason."
  ]
};

// Global state variables
let currentDimension = 1;
let chaosLevel = 0;
let lastScrollPosition = 0;
let scrollAccumulator = 0;
let transitionInProgress = false;
let particles = [];
let portals = [];
let mousePosition = { x: null, y: null };
let scrollDirection = 0; // -1: up, 0: none, 1: down
let previousScrollDirection = 0;
let initializationComplete = false;
let initializationError = false;
let audioEnabled = false;

// Constants
const SCROLL_THRESHOLD = 1000; // Amount of scrolling needed to trigger dimension change
const PARTICLE_COUNT = 80; // Number of particles
const MAX_CHAOS = 100; // Maximum chaos level before dimension change
const SECRET_CODE = "CEREAL"; // Secret code for artifact unlocking

// Canvas and animation references
let particleCanvas, particleCtx;
let portalCanvas, portalCtx;
let animationFrame;
let audioContext = null;

// ==========================================================================
// Initialization Functions
// ==========================================================================

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  try {
    init();
  } catch (e) {
    console.error("Critical error during initialization:", e);
    // Show fallback content if initialization fails completely
    showFallbackContent();
  }
});

// Initialize the application
function init() {
  console.log("Initializing GEN-R-L MiLLz Reality Distortion System...");
  
  // Detect browser capabilities
  const browserCapabilities = detectBrowserCapabilities();
  
  // Check if browser supports basic required features
  if (!browserCapabilities.canvas2d) {
    throw new Error("Browser does not support Canvas 2D API");
  }
  
  // Start loading screen animation
  initLoadingScreen();
  
  // Set up event listeners
  setupEventListeners();
  
  // Initialize dates on fact containers
  updateDateDisplay();
  
  // Load collected artifacts from localStorage (if any)
  try {
    loadCollectedArtifacts();
  } catch (e) {
    console.warn("Failed to load artifacts:", e);
    // Non-critical feature, continue initialization
  }
}

// Loading screen animation with improved error handling
function initLoadingScreen() {
  const loadingBar = document.getElementById('loading-bar');
  const loadingText = document.getElementById('loading-text');
  const loadingScreen = document.getElementById('loading-screen');
  
  if (!loadingBar || !loadingText || !loadingScreen) {
    console.error("Loading screen elements not found");
    // Create fallback loading screen
    createFallbackLoadingScreen();
    // Continue anyway after a short delay
    setTimeout(completeInitialization, 1000);
    return;
  }
  
  const loadingTexts = [
    "Initializing Reality Distortion...",
    "Calibrating Dimensional Corridors...",
    "Stabilizing Quantum Fluctuations...",
    "Synthesizing Cosmic Harmonics...",
    "Aligning Interdimensional Portals...",
    "Establishing Cereal Connections...",
    "Rendering Vaporwave Aesthetics...",
    "Finalizing Reality Matrix..."
  ];
  
  // Track loading progress
  let progress = 0;
  let previousProgress = 0;
  let stuckCounter = 0;
  
  // Create a timeout to detect if loading gets stuck
  const stuckTimeout = setTimeout(() => {
    console.warn("Loading appears to be stuck, forcing completion");
    if (progress < 100) {
      progress = 100;
      loadingBar.style.width = `${progress}%`;
      loadingText.textContent = "Reality Distortion Ready (Forced)";
      
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          completeInitialization();
        }, 500);
      }, 300);
    }
  }, 10000); // Force completion after 10 seconds
  
  const interval = setInterval(() => {
    // Check if progress is stuck
    if (progress === previousProgress) {
      stuckCounter++;
      if (stuckCounter > 15) {
        // If stuck for too long, force progress
        progress += 20;
      }
    } else {
      stuckCounter = 0;
    }
    
    previousProgress = progress;
    
    // Increment progress
    progress += Math.random() * 15;
    
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      clearTimeout(stuckTimeout);
      
      loadingBar.style.width = `${progress}%`;
      loadingText.textContent = "Reality Distortion Ready!";
      
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.style.display = 'none';
          
          // After loading completes, initialize the main systems
          completeInitialization();
        }, 500);
      }, 300);
    } else {
      loadingBar.style.width = `${progress}%`;
      if (progress > 0 && progress % 12 < 1) {
        const textIndex = Math.floor((progress / 100) * loadingTexts.length);
        loadingText.textContent = loadingTexts[Math.min(textIndex, loadingTexts.length - 1)];
      }
    }
  }, 100);
}

// Create a fallback loading screen if the original is missing
function createFallbackLoadingScreen() {
  console.log("Creating fallback loading screen");
  
  // Remove any existing loading screen
  const existingScreen = document.getElementById('loading-screen');
  if (existingScreen) {
    existingScreen.parentNode.removeChild(existingScreen);
  }
  
  // Create new loading screen
  const loadingScreen = document.createElement('div');
  loadingScreen.id = 'loading-screen';
  loadingScreen.style.position = 'fixed';
  loadingScreen.style.top = '0';
  loadingScreen.style.left = '0';
  loadingScreen.style.width = '100%';
  loadingScreen.style.height = '100%';
  loadingScreen.style.backgroundColor = '#000';
  loadingScreen.style.display = 'flex';
  loadingScreen.style.flexDirection = 'column';
  loadingScreen.style.justifyContent = 'center';
  loadingScreen.style.alignItems = 'center';
  loadingScreen.style.zIndex = '9999';
  loadingScreen.style.transition = 'opacity 1s ease';
  
  // Create loading logo
  const loadingLogo = document.createElement('div');
  loadingLogo.className = 'loading-logo';
  loadingLogo.textContent = 'GEN-R-L MiLLz';
  loadingLogo.style.fontSize = '36px';
  loadingLogo.style.color = '#ff00ff';
  loadingLogo.style.textShadow = '0 0 20px #ff00ff';
  loadingLogo.style.marginBottom = '30px';
  loadingLogo.style.letterSpacing = '4px';
  
  // Create loading bar container
  const loadingBarContainer = document.createElement('div');
  loadingBarContainer.className = 'loading-bar-container';
  loadingBarContainer.style.width = '80%';
  loadingBarContainer.style.maxWidth = '500px';
  loadingBarContainer.style.height = '20px';
  loadingBarContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  loadingBarContainer.style.border = '2px solid #ff00ff';
  
  // Create loading bar
  const loadingBar = document.createElement('div');
  loadingBar.id = 'loading-bar';
  loadingBar.className = 'loading-bar';
  loadingBar.style.height = '100%';
  loadingBar.style.width = '0%';
  loadingBar.style.background = 'linear-gradient(to right, #ff00ff, #00ffff)';
  loadingBar.style.transition = 'width 0.5s ease';
  
  // Create loading text
  const loadingText = document.createElement('div');
  loadingText.id = 'loading-text';
  loadingText.className = 'loading-text';
  loadingText.textContent = 'Initializing Reality Distortion...';
  loadingText.style.marginTop = '15px';
  loadingText.style.color = '#00ffff';
  loadingText.style.fontSize = '16px';
  
  // Assemble elements
  loadingBarContainer.appendChild(loadingBar);
  loadingScreen.appendChild(loadingLogo);
  loadingScreen.appendChild(loadingBarContainer);
  loadingScreen.appendChild(loadingText);
  
  // Add to body
  document.body.appendChild(loadingScreen);
}

// Show fallback content if initialization fails completely
function showFallbackContent() {
  initializationError = true;
  
  // Remove loading screen if it exists
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
  
  // Create a simple fallback message
  const fallbackContainer = document.createElement('div');
  fallbackContainer.style.position = 'fixed';
  fallbackContainer.style.top = '0';
  fallbackContainer.style.left = '0';
  fallbackContainer.style.width = '100%';
  fallbackContainer.style.height = '100%';
  fallbackContainer.style.display = 'flex';
  fallbackContainer.style.flexDirection = 'column';
  fallbackContainer.style.justifyContent = 'center';
  fallbackContainer.style.alignItems = 'center';
  fallbackContainer.style.backgroundColor = '#000';
  fallbackContainer.style.color = '#ff00ff';
  fallbackContainer.style.fontFamily = "'VCR', monospace";
  fallbackContainer.style.zIndex = '9999';
  fallbackContainer.style.padding = '2rem';
  fallbackContainer.style.textAlign = 'center';
  
  // Create title
  const title = document.createElement('h1');
  title.textContent = 'GEN-R-L MiLLz';
  title.style.fontSize = '3rem';
  title.style.marginBottom = '2rem';
  title.style.textShadow = '0 0 10px #ff00ff';
  
  // Create message
  const message = document.createElement('p');
  message.textContent = 'Reality distortion system offline. Your browser may not support required features.';
  message.style.fontSize = '1.5rem';
  message.style.marginBottom = '2rem';
  message.style.color = '#00ffff';
  message.style.maxWidth = '600px';
  
  // Create retry button
  const retryButton = document.createElement('button');
  retryButton.textContent = 'ATTEMPT REALITY RECONNECTION';
  retryButton.style.padding = '1rem 2rem';
  retryButton.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  retryButton.style.color = '#ff00ff';
  retryButton.style.border = '2px solid #ff00ff';
  retryButton.style.fontSize = '1rem';
  retryButton.style.fontFamily = "'VCR', monospace";
  retryButton.style.cursor = 'pointer';
  retryButton.style.boxShadow = '0 0 10px #ff00ff';
  retryButton.style.textTransform = 'uppercase';
  
  retryButton.addEventListener('click', () => {
    location.reload();
  });
  
  // Add elements to container
  fallbackContainer.appendChild(title);
  fallbackContainer.appendChild(message);
  fallbackContainer.appendChild(retryButton);
  
  // Add to body
  document.body.appendChild(fallbackContainer);
}

// Flag to ensure initialization happens only once
let initializationStarted = false;

// Main initialization completion function with safeguards
function completeInitialization() {
  // Prevent double initialization
  if (initializationStarted) {
    console.warn("Initialization already in progress, ignoring duplicate call");
    return;
  }
  
  initializationStarted = true;
  
  try {
    console.log("Starting main initialization sequence");
    
    // Initialize canvases and visual systems
    initCanvases();
    
    // Create dimensions and initial content
    createParticles();
    
    // Set initial dimension
    updateActiveDimensionStyles();
    
    // Apply initial styles
    applyDimensionStyles(currentDimension);
    
    // Start animation loop
    startAnimation();
    
    // Add collection button (if enabled)
    if (typeof addCollectionButton === 'function') {
      try {
        addCollectionButton();
      } catch (e) {
        console.warn("Failed to add collection button:", e);
      }
    }
    
    // Initialize reality distortion enhancements
    enhanceRealitySystem();
    
    // Show welcome notification
    showNotification("Welcome to GEN-R-L MiLLz Reality System");
    
    // Mark initialization as complete
    initializationComplete = true;
    console.log("Initialization complete");
  } catch (e) {
    console.error("Critical error during main initialization:", e);
    initializationError = true;
    
    // Try to show a notification
    try {
      showNotification("Reality Distortion System Error - Limited Functionality", 5000);
    } catch (innerError) {
      console.error("Could not show error notification:", innerError);
    }
    
    // Try to continue with basic functionality
    try {
      console.log("Attempting to initialize basic functionality");
      updateActiveDimensionStyles();
      applyDimensionStyles(currentDimension);
      
      // Create a simplified animation if full one failed
      if (typeof startAnimation !== 'function' || !particles || particles.length === 0) {
        createSimplifiedAnimation();
      }
    } catch (fallbackError) {
      console.error("Failed to initialize basic functionality:", fallbackError);
      
      // Show fallback content if even basic initialization fails
      showFallbackContent();
    }
  }
}

// Create a simplified animation if the main one fails
function createSimplifiedAnimation() {
  console.log("Creating simplified animation");
  
  // Create simplified particles
  particles = [];
  const particleCount = 30; // Reduced count for reliability
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      color: '#ff00ff',
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      glowSize: 2
    });
  }
  
  // Simple animation loop
  const animate = () => {
    if (particleCanvas && particleCtx) {
      // Clear canvas
      particleCtx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      particleCtx.fillRect(0, 0, particleCanvas.width, particleCanvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around screen edges
        if (particle.x < 0) particle.x = particleCanvas.width;
        if (particle.x > particleCanvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = particleCanvas.height;
        if (particle.y > particleCanvas.height) particle.y = 0;
        
        // Draw particle
        particleCtx.beginPath();
        particleCtx.fillStyle = particle.color;
        particleCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        particleCtx.fill();
      });
    }
    
    // Request next frame
    requestAnimationFrame(animate);
  };
  
  // Start animation
  animate();
}

// Detect browser capabilities on startup
function detectBrowserCapabilities() {
  const capabilities = {
    canvas2d: false,
    webgl: false,
    audioContext: false,
    localStorage: false,
    touchEvents: false
  };
  
  // Check Canvas 2D support
  try {
    const canvas = document.createElement('canvas');
    capabilities.canvas2d = !!(canvas.getContext && canvas.getContext('2d'));
  } catch (e) {}
  
  // Check WebGL support
  try {
    const canvas = document.createElement('canvas');
    capabilities.webgl = !!(canvas.getContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {}
  
  // Check Audio API support
  try {
    capabilities.audioContext = !!(window.AudioContext || window.webkitAudioContext);
  } catch (e) {}
  
  // Check localStorage support
  try {
    capabilities.localStorage = !!window.localStorage;
  } catch (e) {}
  
  // Check touch events support
  capabilities.touchEvents = 'ontouchstart' in window;
  
  console.log("Browser capabilities:", capabilities);
  return capabilities;
}

// ==========================================================================
// Setup Event Listeners
// ==========================================================================

// Improved setup of event listeners with error handling
function setupEventListeners() {
  try {
    // Scroll event for dimension transitions
    window.addEventListener('scroll', function(e) {
      try {
        handleScroll(e);
      } catch (err) {
        console.error("Error in scroll handler:", err);
      }
    }, { passive: true });
    
    // Mouse/touch events for particle and portal interactions
    window.addEventListener('mousemove', function(e) {
      try {
        handleMouseMove(e);
      } catch (err) {
        console.error("Error in mousemove handler:", err);
      }
    });
    
    window.addEventListener('touchmove', function(e) {
      try {
        handleTouchMove(e);
      } catch (err) {
        console.error("Error in touchmove handler:", err);
      }
    });
    
    // Portal creation and interaction - check if elements exist first
    const canvasElement = document.getElementById('particle-canvas');
    if (canvasElement) {
      canvasElement.addEventListener('click', function(e) {
        try {
          handleCanvasClick(e);
        } catch (err) {
          console.error("Error in canvas click handler:", err);
        }
      });
      
      canvasElement.addEventListener('dblclick', function(e) {
        try {
          handleCanvasDoubleClick(e);
        } catch (err) {
          console.error("Error in canvas dblclick handler:", err);
        }
      });
    }
    
    // Secret code button
    const secretCodeBtn = document.getElementById('secret-code-btn');
    if (secretCodeBtn) {
      secretCodeBtn.addEventListener('click', function() {
        try {
          openSecretCodeModal();
        } catch (err) {
          console.error("Error opening secret code modal:", err);
          
          // Fallback for error
          alert("SECRET CODE SYSTEM TEMPORARILY UNAVAILABLE");
        }
      });
    }
    
    // Cancel secret code
    const cancelCodeBtn = document.getElementById('cancel-code');
    if (cancelCodeBtn) {
      cancelCodeBtn.addEventListener('click', function() {
        try {
          closeSecretCodeModal();
        } catch (err) {
          console.error("Error closing secret code modal:", err);
          
          // Fallback for error - hide modal directly
          const modal = document.getElementById('secret-input');
          if (modal) modal.style.display = 'none';
        }
      });
    }
    
    // Submit secret code
    const submitCodeBtn = document.getElementById('submit-code');
    if (submitCodeBtn) {
      submitCodeBtn.addEventListener('click', function() {
        try {
          checkSecretCode();
        } catch (err) {
          console.error("Error checking secret code:", err);
          
          // Fallback for error
          alert("SECRET CODE VERIFICATION FAILED");
          const modal = document.getElementById('secret-input');
          if (modal) modal.style.display = 'none';
        }
      });
    }
    
    // Allow Enter key to submit secret code
    const secretCodeInput = document.getElementById('secret-code-input');
    if (secretCodeInput) {
      secretCodeInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          try {
            checkSecretCode();
          } catch (err) {
            console.error("Error checking secret code:", err);
            
            // Fallback for error
            alert("SECRET CODE VERIFICATION FAILED");
            const modal = document.getElementById('secret-input');
            if (modal) modal.style.display = 'none';
          }
        }
      });
    }
    
    // Artifact close button
    const artifactCloseBtn = document.getElementById('artifact-close');
    if (artifactCloseBtn) {
      artifactCloseBtn.addEventListener('click', function() {
        try {
          closeArtifactModal();
        } catch (err) {
          console.error("Error closing artifact modal:", err);
          
          // Fallback for error - hide modal directly
          const modal = document.getElementById('artifact-reveal');
          if (modal) modal.style.display = 'none';
        }
      });
    }
    
    // New fact buttons for each dimension
    const factButtonHandlers = [
      { id: 'new-fact-button', dimension: 1 },
      { id: 'new-fact-button-dim2', dimension: 2 },
      { id: 'new-fact-button-dim3', dimension: 3 }
    ];
    
    factButtonHandlers.forEach(({ id, dimension }) => {
      const button = document.getElementById(id);
      if (button) {
        button.addEventListener('click', function() {
          try {
            showRandomFact(dimension);
          } catch (err) {
            console.error(`Error showing random fact for dimension ${dimension}:`, err);
            
            // Fallback - update text directly
            const factIds = {
              1: 'daily-fact',
              2: 'daily-fact-dim2',
              3: 'daily-fact-dim3'
            };
            
            const factElement = document.getElementById(factIds[dimension]);
            if (factElement && dimensionFacts[dimension] && dimensionFacts[dimension].length > 0) {
              factElement.textContent = dimensionFacts[dimension][0];
            }
          }
        });
      }
    });
    
    // Window resize handler
    window.addEventListener('resize', function() {
      try {
        handleResize();
      } catch (err) {
        console.error("Error handling window resize:", err);
      }
    });
    
    // Audio initialization on first user interaction
    document.addEventListener('click', function() {
      try {
        initAudio();
      } catch (err) {
        console.error("Error initializing audio:", err);
      }
    }, { once: true });
    
    // Set up keyboard shortcut to display debug info when pressing Ctrl+Shift+D
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        displayDebugInfo();
      }
    });
    
    console.log("Event listeners set up successfully");
  } catch (e) {
    console.error("Error setting up event listeners:", e);
    throw e; // Re-throw to handle in init
  }
}

// Event Handlers
function handleMouseMove(e) {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
}

function handleTouchMove(e) {
  if (e.touches.length > 0) {
    mousePosition.x = e.touches[0].clientX;
    mousePosition.y = e.touches[0].clientY;
  }
}

function handleCanvasClick(e) {
  // Check if click is on a portal
  let clickedPortalIndex = -1;
  
  if (portals && portals.length > 0) {
    for (let i = 0; i < portals.length; i++) {
      const portal = portals[i];
      const dx = e.clientX - portal.x;
      const dy = e.clientY - portal.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < portal.radius) {
        clickedPortalIndex = i;
        break;
      }
    }
  }
  
  if (clickedPortalIndex >= 0) {
    // Click is on a portal - travel to its dimension
    const targetDimension = portals[clickedPortalIndex].targetDimension;
    startDimensionTransition(targetDimension);
  } else {
    // Create a new portal
    createPortal(e.clientX, e.clientY);
  }
}

function handleCanvasDoubleClick(e) {
  // Check if double-click is on a portal to close it
  if (portals && portals.length > 0) {
    for (let i = 0; i < portals.length; i++) {
      const portal = portals[i];
      const dx = e.clientX - portal.x;
      const dy = e.clientY - portal.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < portal.radius) {
        // Remove the portal
        removePortal(i);
        return;
      }
    }
  }
}

// Display debug info for troubleshooting
function displayDebugInfo() {
  console.log("Displaying debug information");
  
  const debugInfo = {
    browserCapabilities: detectBrowserCapabilities(),
    windowDimensions: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    currentDimension,
    chaosLevel,
    particleCount: particles ? particles.length : 0,
    portalCount: portals ? portals.length : 0,
    canvasStatus: {
      particleCanvas: !!particleCanvas,
      particleCtx: !!particleCtx,
      portalCanvas: !!portalCanvas,
      portalCtx: !!portalCtx
    },
    initializationComplete,
    initializationError,
    userAgent: navigator.userAgent
  };
  
  console.table(debugInfo);
  
  // Create an onscreen display for mobile users
  const existingDebug = document.getElementById('debug-info');
  if (existingDebug) {
    document.body.removeChild(existingDebug);
    return;
  }
  
  const debugContainer = document.createElement('div');
  debugContainer.id = 'debug-info';
  debugContainer.style.position = 'fixed';
  debugContainer.style.top = '10px';
  debugContainer.style.left = '10px';
  debugContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  debugContainer.style.color = '#0f0';
  debugContainer.style.padding = '10px';
  debugContainer.style.borderRadius = '5px';
  debugContainer.style.border = '1px solid #0f0';
  debugContainer.style.fontFamily = 'monospace';
  debugContainer.style.fontSize = '12px';
  debugContainer.style.maxWidth = '80%';
  debugContainer.style.maxHeight = '80%';
  debugContainer.style.overflow = 'auto';
  debugContainer.style.zIndex = '9999';
  
  debugContainer.innerHTML = `
    <h3 style="color:#0f0;margin-bottom:10px;">Debug Info</h3>
    <div>Dimension: ${currentDimension}</div>
    <div>Chaos: ${chaosLevel}</div>
    <div>Particles: ${particles ? particles.length : 0}</div>
    <div>Portals: ${portals ? portals.length : 0}</div>
    <div>Screen: ${window.innerWidth}x${window.innerHeight}</div>
    <div>Canvas OK: ${!!particleCtx && !!portalCtx}</div>
    <div>Init Complete: ${initializationComplete}</div>
    <div>Init Error: ${initializationError}</div>
    <div style="margin-top:10px;font-size:10px;">Tap again to close</div>
  `;
  
  document.body.appendChild(debugContainer);
  
  // Auto-close after 10 seconds
  setTimeout(() => {
    if (document.body.contains(debugContainer)) {
      document.body.removeChild(debugContainer);
    }
  }, 10000);
  
  // Add tap-to-close functionality
  debugContainer.addEventListener('click', () => {
    if (document.body.contains(debugContainer)) {
      document.body.removeChild(debugContainer);
    }
  });
}

// ==========================================================================
// Canvas and Particle System
// ==========================================================================

// Initialize canvas elements with improved error handling
function initCanvases() {
  try {
    // Particle canvas initialization
    particleCanvas = document.getElementById('particle-canvas');
    if (!particleCanvas) {
      console.error("Particle canvas not found, creating element");
      particleCanvas = createCanvasElement('particle-canvas');
    }
    
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    
    try {
      particleCtx = particleCanvas.getContext('2d');
    } catch (e) {
      console.error("Failed to get 2D context for particle canvas:", e);
      showNotification("Your browser may not fully support all visual effects", 5000);
    }
    
    // Portal canvas initialization
    portalCanvas = document.getElementById('portal-canvas');
    if (!portalCanvas) {
      console.error("Portal canvas not found, creating element");
      portalCanvas = createCanvasElement('portal-canvas');
    }
    
    portalCanvas.width = window.innerWidth;
    portalCanvas.height = window.innerHeight;
    
    try {
      portalCtx = portalCanvas.getContext('2d');
    } catch (e) {
      console.error("Failed to get 2D context for portal canvas:", e);
    }
    
    // Physics canvas initialization (if used)
    const physicsCanvas = document.getElementById('physics-canvas');
    if (physicsCanvas) {
      physicsCanvas.width = window.innerWidth;
      physicsCanvas.height = window.innerHeight;
    }
    
    console.log("Canvas initialization complete");
  } catch (e) {
    console.error("Error during canvas initialization:", e);
    showNotification("Canvas initialization failed, some visual effects may not work", 5000);
  }
}

// Create a canvas element if it doesn't exist
function createCanvasElement(id) {
  const container = document.getElementById('canvas-container');
  if (!container) {
    console.error("Canvas container not found");
    return null;
  }
  
  const canvas = document.createElement('canvas');
  canvas.id = id;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Set appropriate z-index based on canvas type
  if (id === 'particle-canvas') {
    canvas.style.zIndex = '11';
  } else if (id === 'portal-canvas') {
    canvas.style.zIndex = '13';
  } else if (id === 'physics-canvas') {
    canvas.style.zIndex = '12';
  }
  
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'auto';
  
  container.appendChild(canvas);
  return canvas;
}

// Improved handle window resize function
function handleResize() {
  try {
    // Get window dimensions
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Update particle canvas
    if (particleCanvas) {
      particleCanvas.width = width;
      particleCanvas.height = height;
    }
    
    // Update portal canvas
    if (portalCanvas) {
      portalCanvas.width = width;
      portalCanvas.height = height;
    }
    
    // Update physics canvas if it exists
    const physicsCanvas = document.getElementById('physics-canvas');
    if (physicsCanvas) {
      physicsCanvas.width = width;
      physicsCanvas.height = height;
    }
    
    // Force redraw particles with new dimensions
    if (particles && particles.length > 0) {
      // Adjust particle positions to fit new dimensions
      particles.forEach(particle => {
        // Keep particles in-bounds after resize
        if (particle.x > width) particle.x = width * (particle.x / (width + 100));
        if (particle.y > height) particle.y = height * (particle.y / (height + 100));
      });
    }
    
    // Force redraw portals
    if (portals && portals.length > 0) {
      // Ensure portals stay within view
      portals.forEach(portal => {
        if (portal.x > width - 50) portal.x = width - 100;
        if (portal.y > height - 50) portal.y = height - 100;
      });
    }
    
    console.log("Window resize handled");
  } catch (e) {
    console.error("Error handling window resize:", e);
  }
}

// Improved particle creation with error handling
function createParticles() {
  try {
    const config = dimensionConfigs[currentDimension];
    particles = [];
    
    // Adjust particle count based on screen size for better performance
    let adjustedCount = PARTICLE_COUNT;
    const screenArea = window.innerWidth * window.innerHeight;
    
    // Reduce particles for smaller screens
    if (screenArea < 500000) { // e.g., smaller than 800x625
      adjustedCount = Math.floor(PARTICLE_COUNT * 0.6);
    } else if (screenArea < 1000000) { // e.g., smaller than 1000x1000
      adjustedCount = Math.floor(PARTICLE_COUNT * 0.8);
    }
    
    for (let i = 0; i < adjustedCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: (Math.random() * 3 + 1) * config.sizeFactor,
        color: config.particleColors[Math.floor(Math.random() * config.particleColors.length)],
        baseSpeedX: (Math.random() - 0.5) * 2,
        baseSpeedY: (Math.random() - 0.5) * 2,
        speedX: (Math.random() - 0.5) * 2 * config.speedFactor,
        speedY: (Math.random() - 0.5) * 2 * config.speedFactor,
        glowSize: config.glowIntensity,
        portalInfluence: null,
        // Add z-position for parallax effect
        z: Math.random() * 3,
        // Life cycle properties
        age: 0,
        lifespan: 300 + Math.random() * 200
      });
    }
    
    console.log(`Created ${particles.length} particles for dimension ${currentDimension}`);
  } catch (e) {
    console.error("Error creating particles:", e);
    particles = [];
    showNotification("Error initializing particle system", 3000);
  }
}

// Improved particle updating with error handling
function updateParticles() {
  if (!particleCanvas || !particleCtx) return;
  
  try {
    const config = dimensionConfigs[currentDimension];
    const nextDimension = (currentDimension % 3) + 1;
    const nextConfig = dimensionConfigs[nextDimension];
    const chaos = chaosLevel / MAX_CHAOS;
    
    particles.forEach((particle, index) => {
      // Age the particle
      particle.age++;
      
      // Replace old particles
      if (particle.age > particle.lifespan) {
        // Create a new particle to replace the old one
        particles[index] = {
          x: Math.random() * particleCanvas.width,
          y: Math.random() * particleCanvas.height,
          size: (Math.random() * 3 + 1) * config.sizeFactor,
          color: config.particleColors[Math.floor(Math.random() * config.particleColors.length)],
          baseSpeedX: (Math.random() - 0.5) * 2,
          baseSpeedY: (Math.random() - 0.5) * 2,
          speedX: (Math.random() - 0.5) * 2 * config.speedFactor,
          speedY: (Math.random() - 0.5) * 2 * config.speedFactor,
          glowSize: config.glowIntensity,
          portalInfluence: null,
          z: Math.random() * 3,
          age: 0,
          lifespan: 300 + Math.random() * 200
        };
        return;
      }
      
      // Check if particle is inside any portal
      particle.portalInfluence = null;
      if (portals && portals.length > 0) {
        for (const portal of portals) {
          if (!portal || typeof portal.x !== 'number' || typeof portal.y !== 'number') continue;
          
          const dx = particle.x - portal.x;
          const dy = particle.y - portal.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < portal.radius) {
            particle.portalInfluence = portal.targetDimension;
            break;
          }
        }
      }
      
      // Apply transitioning effects if we're changing dimensions
      let currentSpeedFactor = config.speedFactor;
      let currentColor = particle.color;
      let currentGlowSize = config.glowIntensity;
      
      if (transitionInProgress && chaosLevel > MAX_CHAOS * 0.7) {
        // Blend between current and next dimension
        const blendFactor = chaosLevel / MAX_CHAOS;
        currentSpeedFactor = config.speedFactor * (1 - blendFactor) + nextConfig.speedFactor * blendFactor;
        
        // Occasionally change colors during transition
        if (Math.random() < 0.05 * blendFactor) {
          currentColor = nextConfig.particleColors[Math.floor(Math.random() * nextConfig.particleColors.length)];
        }
        
        currentGlowSize = config.glowIntensity * (1 - blendFactor) + nextConfig.glowIntensity * blendFactor;
      }
      
      // Apply portal influence if inside a portal
      if (particle.portalInfluence) {
        const portalConfig = dimensionConfigs[particle.portalInfluence];
        currentSpeedFactor = portalConfig.speedFactor;
        
        // Occasionally change colors when in portal
        if (Math.random() < 0.02) {
          currentColor = portalConfig.particleColors[
            Math.floor(Math.random() * portalConfig.particleColors.length)
          ];
        }
        
        currentGlowSize = portalConfig.glowIntensity;
      }
      
      // Apply mouse/touch influence
      if (mousePosition.x && mousePosition.y) {
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          // Attract particles to mouse/touch
          const forceFactor = 0.01 * (1 - distance / 150);
          particle.speedX += dx * forceFactor;
          particle.speedY += dy * forceFactor;
        }
      }
      
      // Apply chaos effect - more chaotic as we approach dimension change
      if (Math.random() < 0.1 * chaos) {
        particle.speedX += (Math.random() - 0.5) * chaos;
        particle.speedY += (Math.random() - 0.5) * chaos;
      }
      
      // Apply parallax effect based on scroll direction and z-depth
      const parallaxX = scrollDirection * particle.z * 2;
      
      // Update position
      particle.x += (particle.speedX * currentSpeedFactor) + parallaxX;
      particle.y += particle.speedY * currentSpeedFactor;
      
      // Apply momentum damping
      particle.speedX *= 0.99;
      particle.speedY *= 0.99;
      
      // Wrap around screen edges
      if (!particle.ignoresBoundaries) {
        if (particle.x < -50) particle.x = particleCanvas.width + 50;
        if (particle.x > particleCanvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = particleCanvas.height + 50;
        if (particle.y > particleCanvas.height + 50) particle.y = -50;
      } else {
        // For "haunted" particles - wider boundaries
        if (particle.x < -200) particle.x = particleCanvas.width + 200;
        if (particle.x > particleCanvas.width + 200) particle.x = -200;
        if (particle.y < -200) particle.y = particleCanvas.height + 200;
        if (particle.y > particleCanvas.height + 200) particle.y = -200;
      }
      
      // Store current values for drawing
      particle.currentColor = currentColor;
      particle.currentGlowSize = currentGlowSize * (1 + chaos);
    });
  } catch (e) {
    console.error("Error updating particles:", e);
    // Try to recreate particles if something went wrong
    if (!particles || particles.length === 0) {
      try {
        createParticles();
      } catch (innerError) {
        console.error("Failed to recreate particles:", innerError);
      }
    }
  }
}

// Enhanced updateParticles function with reality distortion
function updateParticlesWithDistortion() {
  // Call the base updateParticles function first
  updateParticles();
  
  // Add reality distortion to particles
  if (!particles) return;
  
  particles.forEach(particle => {
    // Occasionally create "haunted" particles that break the rules
    if (Math.random() < 0.0001 * chaosLevel / MAX_CHAOS) {
      // Make it glow more intensely
      particle.currentGlowSize *= 3;
      
      // Give it a random speed boost in a random direction
      const angle = Math.random() * Math.PI * 2;
      particle.speedX += Math.cos(angle) * 2;
      particle.speedY += Math.sin(angle) * 2;
      
      // Make it temporarily ignore boundaries
      particle.ignoresBoundaries = true;
      
      // Make it a different color
      const altDimension = (currentDimension % 3) + 1;
      particle.color = dimensionConfigs[altDimension].particleColors[
        Math.floor(Math.random() * dimensionConfigs[altDimension].particleColors.length)
      ];
      
      // Restore normal behavior after a short time
      setTimeout(() => {
        if (particles.includes(particle)) {
          particle.ignoresBoundaries = false;
          particle.currentGlowSize /= 3;
        }
      }, 2000);
    }
  });
}

// Override the original function with the enhanced version
updateParticles = updateParticlesWithDistortion;

// Improved particle drawing with error handling
function drawParticles() {
  if (!particleCanvas || !particleCtx) return;
  
  try {
    // Clear canvas with fade effect
    particleCtx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    particleCtx.fillRect(0, 0, particleCanvas.width, particleCanvas.height);
    
    // Draw particles
    particles.forEach(particle => {
      try {
        // Calculate opacity based on age
        const lifeProgress = particle.age / particle.lifespan;
        const opacity = lifeProgress < 0.1 ? lifeProgress * 10 : 
                        lifeProgress > 0.9 ? (1 - lifeProgress) * 10 : 
                        1;
        
        // Draw glow
        particleCtx.beginPath();
        
        let gradient;
        try {
          gradient = particleCtx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * particle.currentGlowSize
          );
        } catch (gradientError) {
          // If gradient creation fails, use a solid color
          particleCtx.fillStyle = particle.currentColor;
          particleCtx.arc(particle.x, particle.y, particle.size * particle.currentGlowSize, 0, Math.PI * 2);
          particleCtx.fill();
          return;
        }
        
        // Get base color and create transparent version
        let baseColor = particle.currentColor;
        try {
          if (baseColor.startsWith('#')) {
            // Convert hex to rgb
            const r = parseInt(baseColor.slice(1, 3), 16);
            const g = parseInt(baseColor.slice(3, 5), 16);
            const b = parseInt(baseColor.slice(5, 7), 16);
            baseColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          } else if (baseColor.startsWith('rgb(')) {
            // Convert rgb to rgba
            baseColor = baseColor.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`);
          }
        } catch (colorError) {
          // If color conversion fails, use a fallback color
          baseColor = `rgba(255, 0, 255, ${opacity})`;
        }
        
        gradient.addColorStop(0, baseColor);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        particleCtx.fillStyle = gradient;
        particleCtx.arc(particle.x, particle.y, particle.size * particle.currentGlowSize, 0, Math.PI * 2);
        particleCtx.fill();
        
        // Draw particle core
        particleCtx.beginPath();
        particleCtx.fillStyle = baseColor;
        particleCtx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        particleCtx.fill();
      } catch (particleError) {
        // Skip this particle if drawing fails
        console.warn("Error drawing particle:", particleError);
      }
    });
    
    // Draw glitch effects during high chaos
    if (chaosLevel > MAX_CHAOS * 0.7) {
      try {
        drawGlitchEffects();
      } catch (glitchError) {
        console.warn("Error drawing glitch effects:", glitchError);
      }
    }
  } catch (e) {
    console.error("Error drawing particles:", e);
    
    // Try to clear the canvas at least
    try {
      if (particleCtx) {
        particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      }
    } catch (innerError) {
      console.error("Failed to clear particle canvas:", innerError);
    }
  }
}

// Draw glitch effects during high chaos
function drawGlitchEffects() {
  if (!particleCanvas || !particleCtx) return;
  
  const chaosRatio = chaosLevel / MAX_CHAOS;
  
  // Random horizontal glitch lines
  if (Math.random() < 0.1 * chaosRatio) {
    const y = Math.random() * particleCanvas.height;
    const height = Math.random() * 20 + 5;
    const width = Math.random() * particleCanvas.width * 0.8 + particleCanvas.width * 0.2;
    const x = Math.random() * (particleCanvas.width - width);
    
    particleCtx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
    particleCtx.fillRect(x, y, width, height);
  }
  
  // Random color shifts
  if (Math.random() < 0.05 * chaosRatio) {
    const nextDimension = (currentDimension % 3) + 1;
    const nextConfig = dimensionConfigs[nextDimension];
    
    const colorShift = particleCtx.createLinearGradient(0, 0, particleCanvas.width, 0);
    colorShift.addColorStop(0, 'rgba(0, 0, 0, 0)');
    
    // Use next dimension's color for the glitch
    const glitchColor = nextConfig.particleColors[
      Math.floor(Math.random() * nextConfig.particleColors.length)
    ];
    
    // Convert hex to rgba
    let colorStr = glitchColor;
    if (colorStr.startsWith('#')) {
      const r = parseInt(colorStr.slice(1, 3), 16);
      const g = parseInt(colorStr.slice(3, 5), 16);
      const b = parseInt(colorStr.slice(5, 7), 16);
      colorStr = `rgba(${r}, ${g}, ${b}, 0.1)`;
    }
    
    colorShift.addColorStop(0.4, colorStr);
    colorShift.addColorStop(0.6, colorStr);
    colorShift.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    particleCtx.fillStyle = colorShift;
    particleCtx.fillRect(0, 0, particleCanvas.width, particleCanvas.height);
  }
}

// Improved animation loop with error handling
function startAnimation() {
  // Check if animation frame is already running
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  
  const animate = () => {
    try {
      // Only run update functions if they exist
      if (typeof updateParticles === 'function') {
        updateParticles();
      }
      
      if (typeof drawParticles === 'function') {
        drawParticles();
      }
      
      if (typeof updatePortals === 'function') {
        updatePortals();
      }
      
      // Request next frame
      animationFrame = requestAnimationFrame(animate);
    } catch (e) {
      console.error("Error in animation loop:", e);
      
      // Attempt to recover - wait a bit and restart animation
      setTimeout(() => {
        if (!animationFrame) {
          console.log("Attempting to restart animation loop");
          startAnimation();
        }
      }, 1000);
    }
  };
  
  // Start the animation loop
  animate();
}

// ==========================================================================
// Portal System
// ==========================================================================

// Create a portal between dimensions
function createPortal(x, y) {
  try {
    // Determine which dimension to show
    const targetDimension = (currentDimension % 3) + 1;
    
    // Create portal object
    const newPortal = {
      x,
      y,
      radius: 80,
      targetDimension,
      creationTime: Date.now(),
      pulseRate: 0.5 + Math.random() * 1.5,
      pulsePhase: Math.random() * Math.PI * 2,
      rings: 3 + Math.floor(Math.random() * 3)
    };
    
    // Limit to max 2 portals - replace oldest if needed
    if (portals && portals.length >= 2) {
      portals.shift(); // Remove oldest
    }
    
    portals.push(newPortal);
    showNotification(`Portal to Dimension ${targetDimension} Created`);
    
    // Call enhanced reality effects
    createRealityRipple(x, y, targetDimension);
    showDimensionGlimpses(targetDimension);
    
    // Play sound if available
    playPortalSound();
    
  } catch (e) {
    console.error("Error creating portal:", e);
  }
}

// Improved portal drawing with error handling
function updatePortals() {
  if (!portalCanvas || !portalCtx || !portals || portals.length === 0) return;
  
  try {
    const time = Date.now() / 1000;
    portalCtx.clearRect(0, 0, portalCanvas.width, portalCanvas.height);
    
    portals.forEach(portal => {
      try {
        const targetDimension = portal.targetDimension;
        const targetConfig = dimensionConfigs[targetDimension];
        const pulse = Math.sin(time * portal.pulseRate + portal.pulsePhase) * 0.1 + 0.9;
        
        // Helper for color conversion
        const toRGBA = (color, alpha) => {
          try {
            if (color.startsWith('#')) {
              const r = parseInt(color.slice(1, 3), 16);
              const g = parseInt(color.slice(3, 5), 16);
              const b = parseInt(color.slice(5, 7), 16);
              return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            }
            if (color.startsWith('rgb(')) {
              return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
            }
            return `rgba(255, 0, 255, ${alpha})`;
          } catch (e) {
            return `rgba(255, 0, 255, ${alpha})`;
          }
        };
        
        // Get target dimension's primary color
        let targetColor = targetConfig.textColor;
        
        // Get target dimension's secondary color
        let secondaryColor = targetConfig.accentColor;
        
        // Create circular clipping region
        portalCtx.save();
        portalCtx.beginPath();
        portalCtx.arc(portal.x, portal.y, portal.radius * pulse, 0, Math.PI * 2);
        portalCtx.clip();
        
        // Draw target dimension background (gradient)
        const gradient = portalCtx.createLinearGradient(
          portal.x, portal.y - portal.radius, 
          portal.x, portal.y + portal.radius
        );
        
        // Extract background colors
        const bgColors = targetConfig.background.match(/rgba?\(.*?\)|#[0-9a-fA-F]{3,8}/g) || 
                        ['#000020', '#181848', '#9124cc'];
        
        bgColors.forEach((color, index) => {
          gradient.addColorStop(index / (bgColors.length - 1), color);
        });
        
        portalCtx.fillStyle = gradient;
        portalCtx.fillRect(
          portal.x - portal.radius, 
          portal.y - portal.radius, 
          portal.radius * 2, 
          portal.radius * 2
        );
        
        // Draw grid effect from target dimension
        portalCtx.strokeStyle = targetConfig.gridColor;
        portalCtx.lineWidth = 1;
        
        // Calculate grid offset based on time
        const gridOffset = (time * 20) % 40;
        
        // Draw horizontal grid lines
        for (let i = -10; i <= 10; i++) {
          const y = portal.y + (i * 10) + gridOffset;
          portalCtx.beginPath();
          portalCtx.moveTo(portal.x - portal.radius, y);
          portalCtx.lineTo(portal.x + portal.radius, y);
          portalCtx.stroke();
        }
        
        // Draw vertical grid lines
        for (let i = -10; i <= 10; i++) {
          const x = portal.x + (i * 10);
          portalCtx.beginPath();
          portalCtx.moveTo(x, portal.y - portal.radius);
          portalCtx.lineTo(x, portal.y + portal.radius);
          portalCtx.stroke();
        }
        
        // Draw particles within portal view
        const portalParticleCount = 30; // Number of particles to show in portal
        
        for (let i = 0; i < portalParticleCount; i++) {
          const size = (Math.random() * 3 + 1) * targetConfig.sizeFactor;
          const x = portal.x - portal.radius + Math.random() * portal.radius * 2;
          const y = portal.y - portal.radius + Math.random() * portal.radius * 2;
          const color = targetConfig.particleColors[Math.floor(Math.random() * targetConfig.particleColors.length)];
          const glowSize = targetConfig.glowIntensity;
          
          // Draw glow
          portalCtx.beginPath();
          const particleGradient = portalCtx.createRadialGradient(
            x, y, 0,
            x, y, size * glowSize
          );
          
          particleGradient.addColorStop(0, color);
          particleGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          portalCtx.fillStyle = particleGradient;
          portalCtx.arc(x, y, size * glowSize, 0, Math.PI * 2);
          portalCtx.fill();
          
          // Draw particle core
          portalCtx.beginPath();
          portalCtx.fillStyle = color;
          portalCtx.arc(x, y, size, 0, Math.PI * 2);
          portalCtx.fill();
        }
        
        portalCtx.restore();
        
        // Draw portal edge
        portalCtx.beginPath();
        portalCtx.arc(portal.x, portal.y, portal.radius * pulse, 0, Math.PI * 2);
        portalCtx.lineWidth = 3;
        portalCtx.strokeStyle = toRGBA(targetColor, 0.8);
        portalCtx.stroke();
        
        // Second ring
        portalCtx.beginPath();
        portalCtx.arc(portal.x, portal.y, portal.radius * pulse * 1.05, 0, Math.PI * 2);
        portalCtx.lineWidth = 2;
        portalCtx.strokeStyle = toRGBA(secondaryColor, 0.6);
        portalCtx.stroke();
        
        // Draw ripple effect
        const rippleTime = time % 2;
        if (rippleTime < 1) {
          const rippleRadius = portal.radius + rippleTime * portal.radius;
          portalCtx.beginPath();
          portalCtx.arc(portal.x, portal.y, rippleRadius, 0, Math.PI * 2);
          portalCtx.lineWidth = 2;
          portalCtx.strokeStyle = toRGBA(targetColor, 0.3 * (1 - rippleTime));
          portalCtx.stroke();
        }
        
        // Draw dimension indicator
        portalCtx.save();
        portalCtx.font = 'bold 16px monospace';
        portalCtx.fillStyle = targetColor;
        portalCtx.textAlign = 'center';
        portalCtx.textBaseline = 'middle';
        portalCtx.shadowColor = targetColor;
        portalCtx.shadowBlur = 5;
        portalCtx.fillText(`${targetDimension}`, portal.x, portal.y - portal.radius - 15);
        portalCtx.restore();
      } catch (portalError) {
        console.warn("Error drawing portal:", portalError);
      }
    });
  } catch (e) {
    console.error("Error updating portals:", e);
    
    // Try to clear the canvas at least
    try {
      if (portalCtx) {
        portalCtx.clearRect(0, 0, portalCanvas.width, portalCanvas.height);
      }
    } catch (innerError) {
      console.error("Failed to clear portal canvas:", innerError);
    }
  }
}

// Remove a portal
function removePortal(index) {
  if (index >= 0 && index < portals.length) {
    portals.splice(index, 1);
    showNotification("Portal Closed");
  }
}

// ==========================================================================
// Dimension Transition System
// ==========================================================================

// Handle scroll events
function handleScroll() {
  const currentScrollY = window.scrollY;
  const deltaY = currentScrollY - lastScrollPosition;
  lastScrollPosition = currentScrollY;
  
  // Detect scroll direction
  if (Math.abs(deltaY) > 5) {
    scrollDirection = deltaY > 0 ? 1 : -1;
  } else {
    scrollDirection = 0;
  }
  
  // Don't process during transitions
  if (transitionInProgress) return;
  
  // Accumulate scroll distance
  scrollAccumulator += Math.abs(deltaY);
  
  // Increase chaos based on scroll accumulation
  const newChaosLevel = Math.min(MAX_CHAOS, Math.floor(scrollAccumulator / (SCROLL_THRESHOLD / MAX_CHAOS)));
  chaosLevel = newChaosLevel;
  
  // Update chaos level display
  const chaosPercentage = document.getElementById('chaos-percentage');
  if (chaosPercentage) {
    chaosPercentage.textContent = `${Math.floor(chaosLevel / MAX_CHAOS * 100)}%`;
  }
  
  // Apply parallax effects based on scroll
  applyParallaxEffects(deltaY);
  
  // Apply distortion effects based on scroll speed
  if (Math.abs(deltaY) > 10) {
    // Visual distortion proportional to scroll speed
    const distortionAmount = Math.min(50, Math.abs(deltaY)) / 50;
    
    // Apply to content container
    const contentContainer = document.getElementById('content-container');
    if (contentContainer) {
      // Scale distortion
      const scaleDistortion = 1 + (distortionAmount * 0.05);
      
      // Apply transform
      contentContainer.style.transition = 'transform 0.1s ease-out';
      
      // Direction-based distortion
      if (deltaY > 0) {
        // Scrolling down
        contentContainer.style.transform = `scaleY(${scaleDistortion})`;
      } else {
        // Scrolling up
        contentContainer.style.transform = `scaleY(${1/scaleDistortion})`;
      }
      
      // Reset after a short delay
      clearTimeout(contentContainer.resetTimeout);
      contentContainer.resetTimeout = setTimeout(() => {
        contentContainer.style.transform = '';
      }, 100);
    }
  }
  
  // Add direction change effect when scrolling direction changes
  if (scrollDirection !== 0 && previousScrollDirection !== undefined && scrollDirection !== previousScrollDirection) {
    // Direction changed - create reality "indecision" effect
    createRealityIndecisionEffect();
  }
  
  // Store current direction for next time
  previousScrollDirection = scrollDirection;
  
  // Check if we've scrolled enough to change dimension
  if (scrollAccumulator >= SCROLL_THRESHOLD) {
    // Determine direction for next dimension (circular navigation)
    const nextDimension = deltaY > 0 ? 
                      (currentDimension % 3) + 1 : // Scrolling down: 1->2->3->1
                      (currentDimension === 1 ? 3 : currentDimension - 1); // Scrolling up: 1->3->2->1
    
    // Start transition
    startDimensionTransition(nextDimension);
    
    // Reset accumulator
    scrollAccumulator = 0;
  }
}

// Apply parallax effects to background elements
function applyParallaxEffects(deltaY) {
  const grid = document.getElementById('grid');
  const sun = document.getElementById('sun');
  const mountains = document.getElementById('mountains');
  
  if (!grid && !sun && !mountains) return;
  
  // Normalize delta
  const normalizedDelta = deltaY * 0.1;
  
  // Parallax factors for different elements
  const gridFactor = 0.2;
  const sunFactor = 0.05;
  const mountainsFactor = 0.1;
  
  // Update positions if elements exist
  if (grid) {
    // Get current transform or initialize
    let gridTransform = grid.style.transform || 'translateY(0) rotateX(60deg)';
    let gridY = 0;
    
    if (gridTransform.includes('translateY')) {
      const match = gridTransform.match(/translateY\(([^)]+)\)/);
      if (match && match[1]) {
        gridY = parseFloat(match[1]);
      }
    }
    
    grid.style.transform = `translateY(${gridY + normalizedDelta * gridFactor}px) rotateX(60deg)`;
    
    // Scale effect on grid
    const scrollProgress = scrollAccumulator / SCROLL_THRESHOLD;
    const scaleEffect = 1 + scrollProgress * 0.2;
    grid.style.backgroundSize = `${50 * scaleEffect}px ${50 * scaleEffect}px`;
    
    // Apply color shift based on chaos level
    if (chaosLevel > MAX_CHAOS * 0.5) {
      const chaosRatio = chaosLevel / MAX_CHAOS;
      grid.style.filter = `hue-rotate(${chaosRatio * 30}deg) brightness(${1 + chaosRatio * 0.5})`;
    } else {
      grid.style.filter = 'none';
    }
  }
  
  if (sun) {
    // Get current transform or initialize
    let sunTransform = sun.style.transform || 'translateX(-50%)';
    let sunY = 0;
    
    if (sunTransform.includes('translateY')) {
      const match = sunTransform.match(/translateY\(([^)]+)\)/);
      if (match && match[1]) {
        sunY = parseFloat(match[1]);
      }
    }
    
    // For sun, keep the horizontal centering (-50%) and add vertical translation
    sun.style.transform = `translateX(-50%) translateY(${sunY - normalizedDelta * sunFactor}px)`;
  }
  
  if (mountains) {
    // Get current transform or initialize
    let mountainsTransform = mountains.style.transform || 'translateY(0)';
    let mountainsY = 0;
    
    if (mountainsTransform.includes('translateY')) {
      const match = mountainsTransform.match(/translateY\(([^)]+)\)/);
      if (match && match[1]) {
        mountainsY = parseFloat(match[1]);
      }
    }
    
    mountains.style.transform = `translateY(${mountainsY + normalizedDelta * mountainsFactor}px)`;
  }
}

// Start dimension transition
function startDimensionTransition(nextDimension) {
  if (transitionInProgress) return;
  
  transitionInProgress = true;
  
  // Show notification
  showNotification(`Shifting to Dimension ${nextDimension}...`);
  
  // Apply transition effect to current dimension
  const currentElement = document.getElementById(`dimension-${currentDimension}`);
  if (currentElement) {
    currentElement.classList.add('dimension-transition');
  }
  
  // Create dramatic glitch effect on content
  const contentContainer = document.getElementById('content-container');
  if (contentContainer) {
    contentContainer.style.animation = 'content-glitch 0.5s';
  }
  
  // Apply dramatic transform to fact container
  const factContainer = document.querySelector('.fact-container');
  if (factContainer) {
    factContainer.style.transform = 'scale(1.05) translateZ(20px)';
    factContainer.style.filter = 'hue-rotate(90deg) brightness(1.5)';
    
    // Apply glitch to content after a delay
    setTimeout(() => {
      const glitchAmount = Math.floor(Math.random() * 10) + 5;
      
      // Create multiple glitch animations
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const xOffset = Math.floor(Math.random() * glitchAmount) - glitchAmount/2;
          const yOffset = Math.floor(Math.random() * glitchAmount) - glitchAmount/2;
          factContainer.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(${1 + Math.random() * 0.1})`;
        }, i * 50);
      }
    }, 200);
  }
  
  // Enhanced transition effects
  createRealityTearEffect();
  createDimensionalEchoes(currentDimension, nextDimension);
  
  // Play dimension shift sound
  playDimensionShiftSound();
  
  // After 1 second, complete the transition
  setTimeout(() => {
    finishDimensionTransition(nextDimension);
  }, 1000);
}

// Complete dimension transition
function finishDimensionTransition(nextDimension) {
  // Update dimension
  const oldDimension = currentDimension;
  currentDimension = nextDimension;
  
  // Update CSS variables for active dimension styling
  updateActiveDimensionStyles();
  
  // Hide current dimension and show next dimension
  const oldDimensionElement = document.getElementById(`dimension-${oldDimension}`);
  const newDimensionElement = document.getElementById(`dimension-${currentDimension}`);
  
  if (oldDimensionElement) {
    oldDimensionElement.classList.remove('active-dimension', 'dimension-transition');
  }
  
  if (newDimensionElement) {
    newDimensionElement.classList.add('active-dimension', 'dimension-reveal');
  }
  
  // Reset content animation
  const contentContainer = document.getElementById('content-container');
  if (contentContainer) {
    contentContainer.style.animation = '';
  }
  
  // Apply finishing styles to fact container
  const factContainer = document.querySelector('.fact-container');
  if (factContainer) {
    factContainer.style.filter = 'brightness(2) contrast(2)';
    factContainer.style.transform = 'scale(1)';
    
    // Then smoothly transition to new dimension style
    setTimeout(() => {
      factContainer.style.filter = 'none';
      
      // Reset transform with slight bounce effect
      factContainer.style.transform = 'scale(1.03)';
      setTimeout(() => {
        factContainer.style.transform = 'scale(1)';
      }, 150);
    }, 100);
  }
  
  // Apply new dimension styles
  applyDimensionStyles(currentDimension);
  
  // Reset transition state
  transitionInProgress = false;
  chaosLevel = 0;
  const chaosPercentage = document.getElementById('chaos-percentage');
  if (chaosPercentage) {
    chaosPercentage.textContent = '0%';
  }
  
  // Reset parallax positions
  const grid = document.getElementById('grid');
  const sun = document.getElementById('sun');
  const mountains = document.getElementById('mountains');
  
  if (grid) grid.style.transform = 'translateY(0) rotateX(60deg)';
  if (sun) sun.style.transform = 'translateX(-50%)';
  if (mountains) mountains.style.transform = 'translateY(0)';
  
  // Remove any filters
  if (grid) grid.style.filter = 'none';
  
  // Show notification
  showNotification(`Dimension ${currentDimension} Activated`);
  
  // Reset portals
  portals = [];
}

// Update CSS variables for active dimension
function updateActiveDimensionStyles() {
  const root = document.documentElement;
  
  // Set active dimension CSS variables
  switch (currentDimension) {
    case 1:
      root.style.setProperty('--active-primary', 'var(--dim1-primary)');
      root.style.setProperty('--active-secondary', 'var(--dim1-secondary)');
      root.style.setProperty('--active-accent', 'var(--dim1-accent)');
      root.style.setProperty('--active-background', 'var(--dim1-background)');
      root.style.setProperty('--active-grid-color', 'var(--dim1-grid-color)');
      root.style.setProperty('--active-text-color', 'var(--dim1-text-color)');
      root.style.setProperty('--active-sun-gradient', 'var(--dim1-sun-gradient)');
      break;
    case 2:
      root.style.setProperty('--active-primary', 'var(--dim2-primary)');
      root.style.setProperty('--active-secondary', 'var(--dim2-secondary)');
      root.style.setProperty('--active-accent', 'var(--dim2-accent)');
      root.style.setProperty('--active-background', 'var(--dim2-background)');
      root.style.setProperty('--active-grid-color', 'var(--dim2-grid-color)');
      root.style.setProperty('--active-text-color', 'var(--dim2-text-color)');
      root.style.setProperty('--active-sun-gradient', 'var(--dim2-sun-gradient)');
      break;
    case 3:
      root.style.setProperty('--active-primary', 'var(--dim3-primary)');
      root.style.setProperty('--active-secondary', 'var(--dim3-secondary)');
      root.style.setProperty('--active-accent', 'var(--dim3-accent)');
      root.style.setProperty('--active-background', 'var(--dim3-background)');
      root.style.setProperty('--active-grid-color', 'var(--dim3-grid-color)');
      root.style.setProperty('--active-text-color', 'var(--dim3-text-color)');
      root.style.setProperty('--active-sun-gradient', 'var(--dim3-sun-gradient)');
      break;
  }
}

// Apply dimension-specific styles
function applyDimensionStyles(dimension) {
  const config = dimensionConfigs[dimension];
  
  // Apply styles to background elements
  const vaporwaveBg = document.querySelector('.vaporwave-bg');
  const grid = document.getElementById('grid');
  const sun = document.getElementById('sun');
  
  if (vaporwaveBg) {
    vaporwaveBg.style.background = config.background;
  }
  
  if (grid) {
    grid.style.backgroundImage = `linear-gradient(to right, ${config.gridColor} 1px, transparent 1px), 
                                  linear-gradient(to bottom, ${config.gridColor} 1px, transparent 1px)`;
  }
  
  if (sun) {
    sun.style.background = config.sunGradient;
    sun.style.boxShadow = `0 0 50px ${config.textColor}`;
  }
  
  // Set mountain colors based on dimension
  const mountains = document.querySelectorAll('.mountain');
  if (mountains.length > 0) {
    let colors;
    switch(dimension) {
      case 1:
        colors = ['rgba(128, 0, 128, 0.7)', 'rgba(80, 0, 160, 0.7)', 'rgba(128, 0, 128, 0.7)'];
        break;
      case 2:
        colors = ['rgba(0, 100, 100, 0.7)', 'rgba(0, 80, 160, 0.7)', 'rgba(0, 100, 100, 0.7)'];
        break;
      case 3:
        colors = ['rgba(100, 100, 0, 0.7)', 'rgba(160, 100, 0, 0.7)', 'rgba(100, 100, 0, 0.7)'];
        break;
      default:
        colors = ['rgba(128, 0, 128, 0.7)', 'rgba(80, 0, 160, 0.7)', 'rgba(128, 0, 128, 0.7)'];
    }
    
    mountains.forEach((mountain, index) => {
      mountain.style.borderBottomColor = colors[index % colors.length];
    });
  }
  
  // Show random fact for the new dimension
  showRandomFact(dimension);
}

// ==========================================================================
// Reality Distortion Effects
// ==========================================================================

// Create reality tear effect
function createRealityTearEffect() {
  // Create a canvas for the tear effect
  const tearCanvas = document.createElement('canvas');
  tearCanvas.width = window.innerWidth;
  tearCanvas.height = window.innerHeight;
  tearCanvas.style.position = 'fixed';
  tearCanvas.style.top = '0';
  tearCanvas.style.left = '0';
  tearCanvas.style.zIndex = '990';
  tearCanvas.style.pointerEvents = 'none';
  
  document.body.appendChild(tearCanvas);
  
  const ctx = tearCanvas.getContext('2d');
  
  // Create a jagged tear line
  const points = [];
  const numPoints = 20;
  
  // Starting point on left side of screen
  points.push({
    x: 0,
    y: window.innerHeight * (0.3 + Math.random() * 0.4)
  });
  
  // Random middle points
  for (let i = 1; i < numPoints - 1; i++) {
    points.push({
      x: window.innerWidth * (i / (numPoints - 1)),
      y: window.innerHeight * (0.3 + Math.random() * 0.4)
    });
  }
  
  // Ending point on right side of screen
  points.push({
    x: window.innerWidth,
    y: window.innerHeight * (0.3 + Math.random() * 0.4)
  });
  
  // Draw the tear with animation
  let progress = 0;
  const tearInterval = setInterval(() => {
    ctx.clearRect(0, 0, tearCanvas.width, tearCanvas.height);
    
    // Draw glow effect
    ctx.shadowBlur = 20;
    ctx.shadowColor = dimensionConfigs[currentDimension].textColor;
    
    // Draw up to current progress point
    const currentPoints = Math.floor(progress * points.length);
    
    if (currentPoints > 1) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < currentPoints; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      
      ctx.lineWidth = 3;
      ctx.strokeStyle = dimensionConfigs[currentDimension].textColor;
      ctx.stroke();
      
      // Draw particles along the tear
      for (let i = 0; i < currentPoints - 1; i++) {
        const x = points[i].x + (Math.random() - 0.5) * 30;
        const y = points[i].y + (Math.random() - 0.5) * 30;
        
        ctx.beginPath();
        ctx.arc(x, y, 1 + Math.random() * 3, 0, Math.PI * 2);
        ctx.fillStyle = dimensionConfigs[currentDimension].textColor;
        ctx.fill();
      }
    }
    
    // Increase progress
    progress += 0.05;
    
    // End animation
    if (progress >= 1) {
      clearInterval(tearInterval);
      
      // Flash effect at completion
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, tearCanvas.width, tearCanvas.height);
      
      // Remove the canvas after the effect is complete
      setTimeout(() => {
        if (tearCanvas.parentNode) {
          tearCanvas.parentNode.removeChild(tearCanvas);
        }
      }, 300);
    }
  }, 50);
}

// Create dimensional echoes
function createDimensionalEchoes(fromDimension, toDimension) {
  // Create snapshot elements of key components
  const factContainer = document.querySelector(`#dimension-${fromDimension} .fact-container`);
  const title = document.querySelector(`#dimension-${fromDimension} .title`);
  
  if (factContainer) {
    const echo = factContainer.cloneNode(true);
    echo.style.position = 'fixed';
    echo.style.zIndex = '100';
    echo.style.left = `${factContainer.getBoundingClientRect().left}px`;
    echo.style.top = `${factContainer.getBoundingClientRect().top}px`;
    echo.style.width = `${factContainer.offsetWidth}px`;
    echo.style.opacity = '0.7';
    echo.style.pointerEvents = 'none';
    echo.style.transition = 'all 1.5s ease-out';
    
    document.body.appendChild(echo);
    
    // Create movement effect
    setTimeout(() => {
      echo.style.transform = `scale(1.1) translateY(${Math.random() > 0.5 ? 50 : -50}px)`;
      echo.style.opacity = '0';
      
      // Remove after animation
      setTimeout(() => {
        if (echo.parentNode) {
          echo.parentNode.removeChild(echo);
        }
      }, 1500);
    }, 100);
  }
  
  if (title) {
    const titleEcho = title.cloneNode(true);
    titleEcho.style.position = 'fixed';
    titleEcho.style.zIndex = '100';
    titleEcho.style.left = `${title.getBoundingClientRect().left}px`;
    titleEcho.style.top = `${title.getBoundingClientRect().top}px`;
    titleEcho.style.opacity = '0.5';
    titleEcho.style.pointerEvents = 'none';
    titleEcho.style.transition = 'all 1.2s ease-out';
    titleEcho.style.transformOrigin = 'center center';
    
    document.body.appendChild(titleEcho);
    
    // Create movement effect
    setTimeout(() => {
      titleEcho.style.transform = 'scale(1.3) rotate(5deg)';
      titleEcho.style.opacity = '0';
      
      // Remove after animation
      setTimeout(() => {
        if (titleEcho.parentNode) {
          titleEcho.parentNode.removeChild(titleEcho);
        }
      }, 1200);
    }, 200);
  }
}

// Create a ripple effect around a new portal
function createRealityRipple(x, y, targetDimension) {
  // Create a canvas for the ripple effect
  const rippleCanvas = document.createElement('canvas');
  rippleCanvas.width = window.innerWidth;
  rippleCanvas.height = window.innerHeight;
  rippleCanvas.style.position = 'fixed';
  rippleCanvas.style.top = '0';
  rippleCanvas.style.left = '0';
  rippleCanvas.style.zIndex = '100';
  rippleCanvas.style.pointerEvents = 'none';
  
  document.body.appendChild(rippleCanvas);
  
  const ctx = rippleCanvas.getContext('2d');
  
  // Get colors from target dimension
  const config = dimensionConfigs[targetDimension];
  
  // Draw the ripple with animation
  let radius = 0;
  const maxRadius = Math.max(window.innerWidth, window.innerHeight) / 2;
  const rippleInterval = setInterval(() => {
    ctx.clearRect(0, 0, rippleCanvas.width, rippleCanvas.height);
    
    // Draw ripple circles
    for (let i = 0; i < 3; i++) {
      const rippleRadius = radius - i * 20;
      if (rippleRadius > 0) {
        ctx.beginPath();
        ctx.arc(x, y, rippleRadius, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(${getRgbFromHex(config.textColor)}, ${0.7 - (rippleRadius / maxRadius) * 0.7})`;
        ctx.stroke();
      }
    }
    
    // Increase radius
    radius += 5;
    
    // End animation
    if (radius > maxRadius) {
      clearInterval(rippleInterval);
      
      // Remove the canvas after the effect is complete
      rippleCanvas.parentNode.removeChild(rippleCanvas);
    }
  }, 16);
}

// Show glimpses of target dimension's particles
function showDimensionGlimpses(targetDimension) {
  // Store current particles
  if (!particles) return;
  
  // Create temporary particles from target dimension
  const targetConfig = dimensionConfigs[targetDimension];
  const glimpseCount = 20;
  
  for (let i = 0; i < glimpseCount; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: (Math.random() * 3 + 2) * targetConfig.sizeFactor,
      color: targetConfig.particleColors[Math.floor(Math.random() * targetConfig.particleColors.length)],
      baseSpeedX: (Math.random() - 0.5) * 4,
      baseSpeedY: (Math.random() - 0.5) * 4,
      speedX: (Math.random() - 0.5) * 4 * targetConfig.speedFactor,
      speedY: (Math.random() - 0.5) * 4 * targetConfig.speedFactor,
      glowSize: targetConfig.glowIntensity * 1.5,
      portalInfluence: targetDimension,
      z: Math.random() * 3,
      age: 0,
      lifespan: 100 + Math.random() * 50,
      isGlimpse: true
    });
  }
  
  // Restore original particles after a short time
  setTimeout(() => {
    // Remove glimpse particles
    particles = particles.filter(p => !p.isGlimpse);
  }, 2000);
}

// Create reality "indecision" effect when changing scroll direction
function createRealityIndecisionEffect() {
  // Don't trigger during transitions
  if (transitionInProgress) return;
  
  // Create a quick flash effect
  const flash = document.createElement('div');
  flash.style.position = 'fixed';
  flash.style.top = '0';
  flash.style.left = '0';
  flash.style.width = '100%';
  flash.style.height = '100%';
  flash.style.backgroundColor = dimensionConfigs[currentDimension].textColor;
  flash.style.opacity = '0.1';
  flash.style.zIndex = '900';
  flash.style.pointerEvents = 'none';
  
  document.body.appendChild(flash);
  
  // Remove flash after a short time
  setTimeout(() => {
    flash.style.opacity = '0';
    flash.style.transition = 'opacity 0.2s ease';
    
    setTimeout(() => {
      if (flash.parentNode) {
        flash.parentNode.removeChild(flash);
      }
    }, 200);
  }, 50);
  
  // Apply slight image distortion
  const vaporwaveBg = document.querySelector('.vaporwave-bg');
  if (vaporwaveBg) {
    vaporwaveBg.style.transition = 'filter 0.1s ease';
    vaporwaveBg.style.filter = 'hue-rotate(30deg) blur(2px)';
    
    setTimeout(() => {
      vaporwaveBg.style.filter = '';
    }, 150);
  }
  
  // Apply temporary text distortion
  const textElements = document.querySelectorAll('.title, .fact-title');
  textElements.forEach(element => {
    const originalText = element.textContent;
    const glitchedText = generateGlitchText(originalText);
    
    element.textContent = glitchedText;
    
    setTimeout(() => {
      element.textContent = originalText;
    }, 200);
  });
}

// ==========================================================================
// "Breaking the Fourth Wall" Moments
// ==========================================================================

// Add occasional fourth wall breaks
function addFourthWallBreaks() {
  // Minimum time between fourth wall breaks (ms)
  const minInterval = 120000; // 2 minutes
  
  // Add random fourth wall break events
  setInterval(() => {
    // Only break the fourth wall occasionally
    if (Math.random() < 0.3 && !transitionInProgress) {
      createFourthWallBreak();
    }
  }, minInterval);
}

// Create a fourth wall breaking moment
function createFourthWallBreak() {
  // Choose a random fourth wall break type
  const breakType = Math.floor(Math.random() * 5);
  
  switch (breakType) {
    case 0: // Direct message to user
      showDirectMessage();
      break;
    case 1: // UI glitch
      glitchUI();
      break;
    case 2: // Fake error
      showFakeError();
      break;
    case 3: // Whisper audio
      playWhisperAudio();
      break;
    case 4: // "I see you" moment
      createWatchingEffect();
      break;
  }
}

// Show a direct message to the user
function showDirectMessage() {
  const messages = [
    "You've been here for a while now.",
    "Are you enjoying the experience?",
    "GEN-R-L MiLLz is aware of your presence.",
    "Some users never find all the secrets.",
    "Have you tried tilting your device?",
    "There's something hidden in dimension 2.",
    "Reality stability at 78% and declining.",
    "Your browser history is... interesting."
  ];
  
  const message = messages[Math.floor(Math.random() * messages.length)];
  
  // Show in a special notification style
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '50%';
  notification.style.left = '50%';
  notification.style.transform = 'translate(-50%, -50%)';
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  notification.style.color = dimensionConfigs[currentDimension].textColor;
  notification.style.padding = '15px 25px';
  notification.style.borderRadius = '5px';
  notification.style.fontFamily = "'VCR', monospace";
  notification.style.fontSize = '18px';
  notification.style.textAlign = 'center';
  notification.style.zIndex = '2000';
  notification.style.opacity = '0';
  notification.style.transition = 'opacity 1s ease';
  notification.style.whiteSpace = 'nowrap';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Fade in
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 100);
  
  // Fade out after a few seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 1000);
  }, 4000);
}

// Create UI glitch
function glitchUI() {
  // Target a random UI element
  const targets = [
    '.title',
    '.subtitle',
    '.fact-container',
    '.chaos-meter',
    '.btn',
    '.control-btn'
  ];
  
  const target = document.querySelector(targets[Math.floor(Math.random() * targets.length)]);
  if (!target) return;
  
  // Save original styles
  const originalTransform = target.style.transform;
  const originalFilter = target.style.filter;
  const originalPosition = target.style.position;
  const originalZIndex = target.style.zIndex;
  
  // Apply glitch effect
  target.style.transition = 'none';
  target.style.position = 'relative';
  target.style.zIndex = '2000';
  
  // Create glitch animation
  let glitchCount = 0;
  const maxGlitches = 8;
  const glitchInterval = setInterval(() => {
    // Random transform
    const translateX = (Math.random() - 0.5) * 20;
    const translateY = (Math.random() - 0.5) * 20;
    const skewX = (Math.random() - 0.5) * 10;
    const skewY = (Math.random() - 0.5) * 10;
    
    target.style.transform = `translate(${translateX}px, ${translateY}px) skew(${skewX}deg, ${skewY}deg)`;
    
    // Random color/filter
    const hueRotate = Math.floor(Math.random() * 360);
    const invert = Math.random() > 0.7 ? 1 : 0;
    
    target.style.filter = `hue-rotate(${hueRotate}deg) invert(${invert})`;
    
    glitchCount++;
    
    if (glitchCount >= maxGlitches) {
      clearInterval(glitchInterval);
      
      // Restore original styles
      target.style.transform = originalTransform;
      target.style.filter = originalFilter;
      target.style.position = originalPosition;
      target.style.zIndex = originalZIndex;
      target.style.transition = '';
    }
  }, 100);
}

// Show fake error
function showFakeError() {
  const errors = [
    "Dimension buffer overflow",
    "Reality integrity failure",
    "Unexpected neural pattern detected",
    "Cereality engine malfunction",
    "User perception anomaly",
    "Dimensional anchor lost"
  ];
  
  const error = errors[Math.floor(Math.random() * errors.length)];
  
  // Create error message overlay
  const errorOverlay = document.createElement('div');
  errorOverlay.style.position = 'fixed';
  errorOverlay.style.top = '10px';
  errorOverlay.style.right = '10px';
  errorOverlay.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
  errorOverlay.style.color = '#fff';
  errorOverlay.style.padding = '8px 15px';
  errorOverlay.style.borderRadius = '5px';
  errorOverlay.style.fontFamily = "'VCR', monospace";
  errorOverlay.style.fontSize = '14px';
  errorOverlay.style.zIndex = '2000';
  errorOverlay.style.border = '1px solid rgba(255, 0, 0, 0.5)';
  errorOverlay.textContent = `ERROR: ${error}`;
  
  document.body.appendChild(errorOverlay);
  
  // Remove after a few seconds
  setTimeout(() => {
    if (errorOverlay.parentNode) {
      errorOverlay.style.opacity = '0';
      errorOverlay.style.transition = 'opacity 0.5s ease';
      
      setTimeout(() => {
        if (errorOverlay.parentNode) {
          errorOverlay.parentNode.removeChild(errorOverlay);
        }
      }, 500);
    }
  }, 3000);
}

// Create "I see you" watching effect
function createWatchingEffect() {
  // Create an "eye" that follows the mouse
  const eye = document.createElement('div');
  eye.style.position = 'fixed';
  eye.style.width = '60px';
  eye.style.height = '60px';
  eye.style.borderRadius = '50%';
  eye.style.background = 'radial-gradient(circle at center, #000 20%, rgba(255,255,255,0.9) 30%, rgba(150,150,150,0.8) 70%)';
  eye.style.boxShadow = '0 0 20px rgba(255,0,255,0.5)';
  eye.style.top = '50%';
  eye.style.left = '50%';
  eye.style.transform = 'translate(-50%, -50%)';
  eye.style.zIndex = '1500';
  eye.style.opacity = '0';
  eye.style.transition = 'opacity 2s ease';
  eye.style.pointerEvents = 'none';
  
  document.body.appendChild(eye);
  
  // Fade in
  setTimeout(() => {
    eye.style.opacity = '0.8';
  }, 100);
  
  // Follow mouse or center of screen
  const moveEye = (e) => {
    const x = e ? e.clientX : window.innerWidth / 2;
    const y = e ? e.clientY : window.innerHeight / 2;
    
    // Calculate eye pupil position (limited movement)
    const eyeX = window.innerWidth / 2;
    const eyeY = window.innerHeight / 2;
    
    const deltaX = x - eyeX;
    const deltaY = y - eyeY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 100;
    
    let moveX, moveY;
    
    if (distance <= maxDistance) {
      moveX = deltaX;
      moveY = deltaY;
    } else {
      const ratio = maxDistance / distance;
      moveX = deltaX * ratio;
      moveY = deltaY * ratio;
    }
    
    eye.style.transform = `translate(calc(-50% + ${moveX * 0.1}px), calc(-50% + ${moveY * 0.1}px))`;
    
    // Update pupil position
    eye.style.backgroundPosition = `${50 + moveX * 0.2}% ${50 + moveY * 0.2}%`;
  };
  
  // Initial position
  moveEye();
  
  // Track mouse movement
  document.addEventListener('mousemove', moveEye);
  
  // Show message after a couple seconds
  setTimeout(() => {
    showNotification("I see you.", 2000);
  }, 2000);
  
  // Remove after a few seconds
  setTimeout(() => {
    document.removeEventListener('mousemove', moveEye);
    
    eye.style.opacity = '0';
    setTimeout(() => {
      if (eye.parentNode) {
        eye.parentNode.removeChild(eye);
      }
    }, 2000);
  }, 6000);
}

// ==========================================================================
// Audio System
// ==========================================================================

// Initialize audio context
function initAudio() {
  if (audioContext) return;
  
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create master gain node
    const masterGain = audioContext.createGain();
    masterGain.gain.value = 0.5;
    masterGain.connect(audioContext.destination);
    
    // Store reference
    window.audioNodes = {
      masterGain: masterGain
    };
    
    // Enable audio
    audioEnabled = true;
    
    // Start ambient background sound
    playAmbientBackground();
    
    console.log("Audio system initialized");
  } catch (e) {
    console.warn("Audio system could not be initialized:", e);
    audioEnabled = false;
  }
}

// Play ambient background sound
function playAmbientBackground() {
  if (!audioContext || audioContext.state !== 'running' || !audioEnabled) return;
  
  try {
    // Create oscillators for ambient drone
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    
    // Create filter
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 500;
    filter.Q.value = 10;
    
    // Create gain node
    const gain = audioContext.createGain();
    gain.gain.value = 0;
    
    // Connect nodes
    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(filter);
    filter.connect(gain);
    gain.connect(window.audioNodes.masterGain);
    
    // Set frequencies based on current dimension
    const dimensionFrequencies = {
      1: [55, 110, 165],  // A1, A2, E3 - vaporwave dimension
      2: [65.41, 130.81, 196.00],  // C2, C3, G3 - cyber dimension
      3: [73.42, 110, 220]  // D2, A2, A3 - golden dimension
    };
    
    const freqs = dimensionFrequencies[currentDimension] || dimensionFrequencies[1];
    
    osc1.frequency.value = freqs[0];
    osc2.frequency.value = freqs[1];
    osc3.frequency.value = freqs[2];
    
    osc1.type = 'sine';
    osc2.type = 'sine';
    osc3.type = 'triangle';
    
    // Start oscillators
    osc1.start();
    osc2.start();
    osc3.start();
    
    // Fade in
    gain.gain.setValueAtTime(0, audioContext.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 2);
    
    // Add subtle modulation
    const lfoRate = 0.1; // Hz
    window.ambientInterval = setInterval(() => {
      const time = audioContext.currentTime;
      const modAmount = 5;
      
      osc1.detune.setValueAtTime(Math.sin(time * lfoRate) * modAmount, time);
      osc2.detune.setValueAtTime(Math.sin(time * lfoRate * 1.1) * modAmount, time);
      
      // Subtle filter modulation
      filter.frequency.setValueAtTime(400 + Math.sin(time * lfoRate * 0.7) * 100, time);
    }, 100);
    
    // Stop after 30 seconds and restart
    setTimeout(() => {
      // Fade out
      gain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 2);
      
      // Stop oscillators after fade out
      setTimeout(() => {
        osc1.stop();
        osc2.stop();
        osc3.stop();
        
        if (window.ambientInterval) {
          clearInterval(window.ambientInterval);
        }
        
        // Restart ambient sound if still enabled
        if (audioEnabled) {
          playAmbientBackground();
        }
      }, 2000);
    }, 30000);
  } catch (e) {
    console.warn("Error playing ambient background:", e);
  }
}

// Play portal sound
function playPortalSound() {
  if (!audioContext || audioContext.state !== 'running' || !audioEnabled) return;
  
  try {
    // Create noise for swoosh effect
    const bufferSize = 2 * audioContext.sampleRate;
    const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    
    // Create noise source
    const noise = audioContext.createBufferSource();
    noise.buffer = noiseBuffer;
    
    // Create filter for whoosh effect
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 800;
    filter.Q.value = 0.5;
    
    // Create gain node for envelope
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0;
    
    // Connect nodes
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(window.audioNodes.masterGain);
    
    // Start noise
    noise.start();
    
    // Apply envelope and filter sweep
    const now = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.3, now + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
    
    filter.frequency.setValueAtTime(100, now);
    filter.frequency.exponentialRampToValueAtTime(8000, now + 0.5);
    filter.frequency.exponentialRampToValueAtTime(100, now + 1.5);
    
    // Stop noise
    noise.stop(now + 1.5);
  } catch (e) {
    console.warn("Error playing portal sound:", e);
  }
}

// Play dimension shift sound
function playDimensionShiftSound() {
  if (!audioContext || audioContext.state !== 'running' || !audioEnabled) return;
  
  try {
    // Create oscillators for complex sound
    const oscillators = [];
    const frequencies = [220, 277, 330, 440, 554]; // Harmonic series
    
    for (let i = 0; i < frequencies.length; i++) {
      const osc = audioContext.createOscillator();
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.value = frequencies[i];
      
      const gainNode = audioContext.createGain();
      gainNode.gain.value = 0;
      
      osc.connect(gainNode);
      gainNode.connect(window.audioNodes.masterGain);
      
      oscillators.push({ osc, gain: gainNode });
    }
    
    // Start oscillators with cascading effect
    const now = audioContext.currentTime;
    
    for (let i = 0; i < oscillators.length; i++) {
      const { osc, gain } = oscillators[i];
      const startTime = now + i * 0.1;
      
      osc.start(startTime);
      
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.15 / oscillators.length, startTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.0);
      
      osc.frequency.setValueAtTime(frequencies[i], startTime);
      osc.frequency.exponentialRampToValueAtTime(frequencies[i] * 1.5, startTime + 0.5);
      
      osc.stop(startTime + 1.0);
    }
  } catch (e) {
    console.warn("Error playing dimension shift sound:", e);
  }
}

// Play whisper audio
function playWhisperAudio() {
  if (!audioContext || audioContext.state !== 'running' || !audioEnabled) return;
  
  try {
    // Create noise source for whisper
    const bufferSize = audioContext.sampleRate;
    const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    // Fill buffer with filtered noise
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * 0.15;
    }
    
    // Create noise source
    const whiteNoise = audioContext.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    
    // Create filters
    const lowpass = audioContext.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 1000;
    lowpass.Q.value = 1;
    
    const highpass = audioContext.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = 500;
    highpass.Q.value = 1;
    
    // Create gain node
    const gain = audioContext.createGain();
    gain.gain.value = 0;
    
    // Connect nodes
    whiteNoise.connect(highpass);
    highpass.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(audioContext.destination);
    
    // Start noise
    whiteNoise.start();
    
    // Create whisper effect with gain automation
    const now = audioContext.currentTime;
    gain.gain.setValueAtTime(0, now);
    
    // Random whisper pattern
    for (let i = 0; i < 5; i++) {
      const startTime = now + i * 0.4;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.05 + Math.random() * 0.1, startTime + 0.05);
      gain.gain.linearRampToValueAtTime(0, startTime + 0.2);
    }
    
    // Stop noise source after whispers
    whiteNoise.stop(now + 3);
  } catch (e) {
    console.warn("Error playing whisper audio:", e);
  }
}
// ==========================================================================
// General Utilities
// ==========================================================================

// Update date display in fact containers
function updateDateDisplay() {
  try {
    const currentDate = new Date();
    const dateFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    let dateString;
    try {
      dateString = currentDate.toLocaleDateString('en-US', dateFormatOptions);
    } catch (e) {
      // Fallback if toLocaleDateString fails
      dateString = currentDate.toString().split(' ').slice(0, 4).join(' ');
    }
    
    const dateElements = [
      document.getElementById('current-date'),
      document.getElementById('current-date-dim2'),
      document.getElementById('current-date-dim3')
    ];
    
    dateElements.forEach(element => {
      if (element) {
        element.textContent = dateString;
      }
    });
  } catch (e) {
    console.error("Error updating date display:", e);
    // Non-critical, continue initialization
  }
}

// Improved notification system with fallback
function showNotification(message, duration = 3000) {
  try {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notification-message');
    
    if (!notification || !messageElement) {
      // Create fallback notification if elements don't exist
      createFallbackNotification(message, duration);
      return;
    }
    
    // Clear any existing timeout
    if (notification.timeout) {
      clearTimeout(notification.timeout);
    }
    
    // Set message
    messageElement.textContent = message;
    
    // Show notification
    notification.style.opacity = 1;
    
    // Apply glitch effect for high chaos
    if (chaosLevel > MAX_CHAOS * 0.5) {
      let glitchInterval;
      let originalText = message;
      
      glitchInterval = setInterval(() => {
        if (Math.random() < 0.3) {
          messageElement.textContent = generateGlitchText(originalText);
          
          setTimeout(() => {
            messageElement.textContent = originalText;
          }, 100);
        }
      }, 300);
      
      setTimeout(() => {
        clearInterval(glitchInterval);
      }, duration);
    }
    
    // Hide after duration
    notification.timeout = setTimeout(() => {
      notification.style.opacity = 0;
    }, duration);
  } catch (e) {
    console.error("Error showing notification:", e);
    
    // Use alert as a fallback in case of error
    if (initializationComplete) {
      console.log("Fallback notification:", message);
    }
  }
}

// Create a fallback notification
function createFallbackNotification(message, duration = 3000) {
  // Create a temporary notification element
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '2rem';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff)';
  notification.style.color = '#fff';
  notification.style.padding = '1rem 2rem';
  notification.style.borderRadius = '5px';
  notification.style.fontSize = '1.2rem';
  notification.style.textAlign = 'center';
  notification.style.zIndex = '9999';
  notification.style.opacity = '0';
  notification.style.transition = 'opacity 0.3s ease';
  notification.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.5)';
  notification.style.backdropFilter = 'blur(5px)';
  notification.style.border = '2px solid #fff';
  notification.style.maxWidth = '80%';
  notification.textContent = message;
  
  // Add to body
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 10);
  
  // Remove after duration
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, duration);
}

// Generate glitch text effect
function generateGlitchText(text) {
  const glitchChars = '!@#$%^&*()_+-={}[]|;:,.<>?/~`';
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    if (Math.random() < 0.3) {
      result += glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
    } else {
      result += text.charAt(i);
    }
  }
  
  return result;
}

// Show random fact based on dimension
function showRandomFact(dimension) {
  if (!dimensionFacts[dimension]) return;
  
  const facts = dimensionFacts[dimension];
  const randomIndex = Math.floor(Math.random() * facts.length);
  
  let factElement;
  switch(dimension) {
    case 1:
      factElement = document.getElementById('daily-fact');
      break;
    case 2:
      factElement = document.getElementById('daily-fact-dim2');
      break;
    case 3:
      factElement = document.getElementById('daily-fact-dim3');
      break;
    default:
      return;
  }
  
  if (factElement) {
    // Add glitch effect during change
    factElement.style.opacity = 0;
    
    setTimeout(() => {
      factElement.textContent = facts[randomIndex];
      factElement.style.opacity = 1;
    }, 500);
  }
  
  showNotification("New Cosmic Truth Received");
}

// Convert hex color to RGB
function getRgbFromHex(hex) {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse the color
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
}

// ==========================================================================
// Secret Code and Artifact System
// ==========================================================================

// Open secret code modal
function openSecretCodeModal() {
  const modal = document.getElementById('secret-input');
  if (modal) {
    modal.style.display = 'flex';
    
    // Focus on input
    setTimeout(() => {
      const input = document.getElementById('secret-code-input');
      if (input) {
        input.focus();
      }
    }, 100);
  }
}

// Close secret code modal
function closeSecretCodeModal() {
  const modal = document.getElementById('secret-input');
  const input = document.getElementById('secret-code-input');
  
  if (modal) {
    modal.style.display = 'none';
  }
  
  if (input) {
    input.value = '';
  }
}

// Validate secret code and reveal artifact
function checkSecretCode() {
  const codeInput = document.getElementById('secret-code-input');
  
  if (!codeInput) return;
  
  const code = codeInput.value.trim().toUpperCase();
  
  if (code === SECRET_CODE) {
    // Valid code - reveal artifact
    revealArtifact();
    closeSecretCodeModal();
  } else {
    // Invalid code - shake effect
    codeInput.style.animation = 'shake 0.5s';
    setTimeout(() => {
      codeInput.style.animation = '';
    }, 500);
    
    showNotification("Invalid Secret Code");
  }
}

// Reveal a random artifact based on rarity
function revealArtifact() {
  // Determine artifact rarity with weighted randomness
  const roll = Math.random();
  let rarity;
  
  if (roll < 0.01) {
    rarity = 'legendary';
  } else if (roll < 0.05) {
    rarity = 'epic';
  } else if (roll < 0.15) {
    rarity = 'rare';
  } else if (roll < 0.40) {
    rarity = 'uncommon';
  } else {
    rarity = 'common';
  }
  
  // Determine image ID based on rarity (1-100)
  const id = Math.floor(Math.random() * 100) + 1;
  
  // Prepare artifact reveal
  const artifactContainer = document.getElementById('artifact-reveal');
  const artifactImageContainer = document.getElementById('artifact-image-container');
  const artifactTitle = document.getElementById('artifact-title');
  const artifactDescription = document.getElementById('artifact-description');
  
  if (!artifactContainer || !artifactImageContainer || !artifactTitle || !artifactDescription) {
    console.error("Artifact elements not found");
    showNotification("Artifact system could not initialize properly", 3000);
    return;
  }
  
  // Create colored placeholder since images likely don't exist
  const placeholder = document.createElement('div');
  placeholder.style.width = '200px';
  placeholder.style.height = '200px';
  placeholder.style.backgroundColor = getRarityColor(rarity);
  placeholder.style.display = 'flex';
  placeholder.style.alignItems = 'center';
  placeholder.style.justifyContent = 'center';
  placeholder.style.fontSize = '24px';
  placeholder.style.color = getRarityTextColor(rarity);
  placeholder.style.textAlign = 'center';
  placeholder.style.borderRadius = '10px';
  placeholder.style.boxShadow = `0 0 20px ${getRarityColor(rarity)}`;
  placeholder.style.fontFamily = "'VCR', monospace";
  placeholder.style.flexDirection = 'column';
  placeholder.style.padding = '10px';
  placeholder.innerHTML = `<strong>${rarity.toUpperCase()}</strong><br>#${id}`;
  
  // Clear previous content
  while (artifactImageContainer.firstChild) {
    artifactImageContainer.removeChild(artifactImageContainer.firstChild);
  }
  
  // Try to load the actual image, fallback to placeholder if it fails
  const artifactImage = new Image();
  artifactImage.className = 'artifact-image';
  artifactImage.alt = `${rarity.charAt(0).toUpperCase() + rarity.slice(1)} Artifact #${id}`;
  
   
  // Set up error handler before setting src
  artifactImage.onerror = function() {
    console.log(`Artifact image for ${rarity} #${id} not found, using placeholder`);
    artifactImageContainer.appendChild(placeholder);
  };
  
  // Set up load handler
  artifactImage.onload = function() {
    artifactImageContainer.appendChild(artifactImage);
  };
  
  // Now set src to attempt loading
  artifactImage.src = `images/artifacts/${rarity}/${id}.jpg`;
  
  // Add fallback timeout in case neither onload nor onerror triggers
  setTimeout(() => {
    if (artifactImageContainer.children.length === 0) {
      console.log("Fallback - adding placeholder after timeout");
      artifactImageContainer.appendChild(placeholder);
    }
  }, 1000);
  
  // Set title based on rarity
  artifactTitle.textContent = `${rarity.toUpperCase()} ARTIFACT DISCOVERED`;
  
  // Set description based on rarity
  switch(rarity) {
    case 'legendary':
      artifactDescription.textContent = "You have discovered one of the most powerful artifacts in the multiverse. Its energy resonates across all dimensions.";
      break;
    case 'epic':
      artifactDescription.textContent = "A powerful piece of the cosmic breakfast puzzle. Collectors search for these across many realities.";
      break;
    case 'rare':
      artifactDescription.textContent = "This golden relic contains significant energy patterns from the Breakfast Dimension.";
      break;
    case 'uncommon':
      artifactDescription.textContent = "A moderately rare cereal fragment with unique properties. Keep it safe.";
      break;
    case 'common':
      artifactDescription.textContent = "A common breakfast token. Collect more to unlock dimensional secrets.";
      break;
  }
  
  // Set rarity class for styling
  artifactContainer.className = 'modal-container';
  artifactContainer.classList.add(`artifact-${rarity}`);
  
  // Show artifact modal
  artifactContainer.style.display = 'flex';
  
  // Save to collection
  saveArtifactToCollection(rarity, id);
  
  // Show notification
  showNotification(`${rarity.toUpperCase()} Artifact Discovered!`);
  
  // Play discovery sound
  playArtifactSound(rarity);
}

// Play artifact discovery sound
function playArtifactSound(rarity) {
  if (!audioContext || audioContext.state !== 'running' || !audioEnabled) return;
  
  try {
    // Create oscillators
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    
    // Create gain node
    const gain = audioContext.createGain();
    gain.gain.value = 0;
    
    // Create filter
    const filter = audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    
    // Connect nodes
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(window.audioNodes.masterGain);
    
    // Set frequencies based on rarity
    let freq1, freq2, fadeTime;
    
    switch(rarity) {
      case 'legendary':
        freq1 = 523.25; // C5
        freq2 = 659.25; // E5
        fadeTime = 3;
        filter.frequency.value = 2000;
        break;
      case 'epic':
        freq1 = 440; // A4
        freq2 = 554.37; // C#5
        fadeTime = 2;
        filter.frequency.value = 1500;
        break;
      case 'rare':
        freq1 = 392; // G4
        freq2 = 493.88; // B4
        fadeTime = 1.5;
        filter.frequency.value = 1200;
        break;
      case 'uncommon':
        freq1 = 349.23; // F4
        freq2 = 440; // A4
        fadeTime = 1;
        filter.frequency.value = 1000;
        break;
      default: // common
        freq1 = 329.63; // E4
        freq2 = 392; // G4
        fadeTime = 0.8;
        filter.frequency.value = 800;
        break;
    }
    
    osc1.frequency.value = freq1;
    osc2.frequency.value = freq2;
    
    osc1.type = 'sine';
    osc2.type = 'triangle';
    
    // Start oscillators
    osc1.start();
    osc2.start();
    
    // Apply envelope
    const now = audioContext.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.1);
    gain.gain.linearRampToValueAtTime(0.05, now + fadeTime * 0.8);
    gain.gain.exponentialRampToValueAtTime(0.001, now + fadeTime);
    
    // Create filter sweep
    filter.frequency.setValueAtTime(filter.frequency.value * 0.5, now);
    filter.frequency.exponentialRampToValueAtTime(filter.frequency.value * 2, now + 0.2);
    filter.frequency.exponentialRampToValueAtTime(filter.frequency.value, now + fadeTime);
    
    // Stop oscillators
    osc1.stop(now + fadeTime);
    osc2.stop(now + fadeTime);
  } catch (e) {
    console.warn("Error playing artifact sound:", e);
  }
}

// Get color for artifact rarity
function getRarityColor(rarity, asRgba = true) {
  const colors = {
    legendary: asRgba ? 'rgba(255, 69, 0, 0.8)' : 'rgb(255, 69, 0)',
    epic: asRgba ? 'rgba(148, 0, 211, 0.8)' : 'rgb(148, 0, 211)',
    rare: asRgba ? 'rgba(255, 215, 0, 0.8)' : 'rgb(255, 215, 0)',
    uncommon: asRgba ? 'rgba(192, 192, 192, 0.8)' : 'rgb(192, 192, 192)',
    common: asRgba ? 'rgba(205, 127, 50, 0.8)' : 'rgb(205, 127, 50)'
  };
  return colors[rarity] || (asRgba ? 'rgba(255, 255, 255, 0.8)' : 'rgb(255, 255, 255)');
}

// Get text color for artifact rarity
function getRarityTextColor(rarity) {
  const colors = {
    legendary: '#ffffff',
    epic: '#ffffff',
    rare: '#000000',
    uncommon: '#000000',
    common: '#ffffff'
  };
  return colors[rarity] || '#ffffff';
}

// Close artifact modal
function closeArtifactModal() {
  const modal = document.getElementById('artifact-reveal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Save artifact to collection in localStorage
function saveArtifactToCollection(rarity, id) {
  try {
    // Get existing collection or initialize
    let collection = localStorage.getItem('genrl_artifacts');
    
    if (collection) {
      try {
        collection = JSON.parse(collection);
      } catch (e) {
        console.error("Error parsing artifacts collection, resetting:", e);
        collection = [];
      }
    } else {
      collection = [];
    }
    
    // Add new artifact
    collection.push({
      rarity,
      id,
      dateCollected: new Date().toISOString()
    });
    
    // Save back to localStorage
    localStorage.setItem('genrl_artifacts', JSON.stringify(collection));
    console.log(`Saved ${rarity} artifact #${id} to collection`);
  } catch (e) {
    console.error("Error saving artifact to collection:", e);
    // Continue anyway - this is non-critical functionality
  }
}

// Load collected artifacts from localStorage with error handling
function loadCollectedArtifacts() {
  try {
    const collection = localStorage.getItem('genrl_artifacts');
    if (collection) {
      try {
        const artifacts = JSON.parse(collection);
        console.log(`Loaded ${artifacts.length} collected artifacts`);
        return artifacts;
      } catch (e) {
        console.error("Error parsing artifacts collection:", e);
        // If parsing fails, reset the collection
        localStorage.removeItem('genrl_artifacts');
        return [];
      }
    }
    return [];
  } catch (e) {
    console.error("Error loading artifacts:", e);
    return [];
  }
}


// Add collection button to control panel (optional feature)
function addCollectionButton() {
  const controlPanel = document.querySelector('.control-panel');
  if (controlPanel) {
    const collectionBtn = document.createElement('button');
    collectionBtn.id = 'view-collection-btn';
    collectionBtn.className = 'control-btn';
    collectionBtn.textContent = 'VIEW COLLECTION';
    collectionBtn.addEventListener('click', displayArtifactCollection);
    
    controlPanel.appendChild(collectionBtn);
  }
}

// Display artifact collection
function displayArtifactCollection() {
  const artifacts = loadCollectedArtifacts();
  
  // Create modal for displaying collection
  const modal = document.createElement('div');
  modal.className = 'modal-container';
  modal.style.display = 'flex';
  
  // Modal content
  const content = document.createElement('div');
  content.className = 'modal-content';
  content.style.width = '80%';
  content.style.maxWidth = '800px';
  content.style.maxHeight = '80vh';
  content.style.overflow = 'auto';
  
  // Title
  const title = document.createElement('h3');
  title.textContent = 'YOUR COSMIC COLLECTION';
  title.style.marginBottom = '2rem';
  
  content.appendChild(title);
  
  // Collection grid
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(150px, 1fr))';
  grid.style.gap = '1rem';
  
  if (artifacts.length === 0) {
    // Empty collection message
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'Your collection is empty. Discover artifacts using the SECRET CODE button.';
    emptyMessage.style.gridColumn = '1 / -1';
    emptyMessage.style.textAlign = 'center';
    emptyMessage.style.padding = '2rem';
    grid.appendChild(emptyMessage);
  } else {
    // Sort artifacts by rarity
    const rarityOrder = {
      'legendary': 0,
      'epic': 1,
      'rare': 2,
      'uncommon': 3,
      'common': 4
    };
    
    artifacts.sort((a, b) => {
      return rarityOrder[a.rarity] - rarityOrder[b.rarity];
    });
    
    // Add artifacts to grid
    artifacts.forEach(artifact => {
      const item = document.createElement('div');
      item.style.background = 'rgba(0, 0, 0, 0.3)';
      item.style.padding = '1rem';
      item.style.borderRadius = '5px';
      item.style.border = `2px solid ${getRarityColor(artifact.rarity)}`;
      item.style.display = 'flex';
      item.style.flexDirection = 'column';
      item.style.alignItems = 'center';
      
      // Artifact image/placeholder
      const imageContainer = document.createElement('div');
      imageContainer.style.width = '100px';
      imageContainer.style.height = '100px';
      imageContainer.style.backgroundColor = getRarityColor(artifact.rarity);
      imageContainer.style.display = 'flex';
      imageContainer.style.alignItems = 'center';
      imageContainer.style.justifyContent = 'center';
      imageContainer.style.borderRadius = '5px';
      imageContainer.style.marginBottom = '0.5rem';
      imageContainer.style.color = getRarityTextColor(artifact.rarity);
      imageContainer.textContent = `#${artifact.id}`;
      
      // Artifact info
      const info = document.createElement('div');
      info.style.textAlign = 'center';
      
      const rarityText = document.createElement('div');
      rarityText.textContent = artifact.rarity.toUpperCase();
      rarityText.style.fontWeight = 'bold';
      rarityText.style.color = getRarityColor(artifact.rarity, false);
      rarityText.style.textShadow = `0 0 5px ${getRarityColor(artifact.rarity)}`;
      
      const dateText = document.createElement('div');
      dateText.textContent = new Date(artifact.dateCollected).toLocaleDateString();
      dateText.style.fontSize = '0.8rem';
      dateText.style.opacity = '0.7';
      
      info.appendChild(rarityText);
      info.appendChild(dateText);
      
      item.appendChild(imageContainer);
      item.appendChild(info);
      grid.appendChild(item);
    });
  }
  
  content.appendChild(grid);
  
  // Close button
  const closeButton = document.createElement('button');
  closeButton.className = 'btn';
  closeButton.textContent = 'CLOSE';
  closeButton.style.marginTop = '2rem';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  content.appendChild(closeButton);
  modal.appendChild(content);
  
  // Add to body
  document.body.appendChild(modal);
  
  // Show notification
  showNotification('Viewing Artifact Collection');
}

// ==========================================================================
// Initialize Reality Distortion Enhancements
// ==========================================================================

function enhanceRealitySystem() {
  // Add fourth wall breaks
  addFourthWallBreaks();
  
  // Add variable to track previous scroll direction
  window.previousScrollDirection = 0;
  
  console.log("Reality distortion enhancements initialized");
}

// Call enhancement function in main initialization
// This is already added to the completeInitialization function
