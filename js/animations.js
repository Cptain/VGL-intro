// SOCCER BALL ANIMATION
TweenMax.to("#ball", 3, {ease: Linear.easeNone, rotation: 360, smoothOrigin: true, repeat:-1, transformOrigin: "50% 50%"});

// SOCCER PLAYER ANIMATION
TweenMax.to("#soccer-particles", 3, {delay: -6, ease: Linear.easeNone, y:8, x: -3, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%", yoyo: true});
TweenMax.to("#soccer-player", 3, {delay: -6, ease: Linear.easeNone, y:10, x: -3, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%", yoyo: true});

// NBA PLAYER ANIMATION
TweenMax.to("#nba-particles", 3, {delay: -4, ease: Linear.easeNone, y:8, x: -3, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%", yoyo: true});
TweenMax.to("#nba-player", 3, {delay: -4, ease: Linear.easeNone, y:10, x: -3, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%", yoyo: true});

// TENNIS PLAYER ANIMATION
TweenMax.to("#formula1-particles", 3, {delay: -2, ease: Linear.easeNone, y: 8, y: -26, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%", yoyo: true});
TweenMax.to(".formula1-car", 3, {delay: -2, ease: Linear.easeNone, y: 8, y: -26, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%", yoyo: true});

// PARTICLE 360 ROTATION ANIMATION
TweenMax.to(".rotate360", 3, {delay: -1, ease: Linear.easeNone, rotation: 360, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%"});

// GLOWING SPARKLES ON COIN ANIMATION
// TweenMax.fromTo("#star-1", 1, {opacity: 0, scale: 0, yoyo: true}, {opacity: 1, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%", yoyo: true, scale: 2});
// TweenMax.fromTo("#star-2", 1, {opacity: 0, scale: 0, yoyo: true}, {opacity: 1, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%", yoyo: true, scale: 1, delay: 0.5});

// 360 ROTATION ANIMATION ON THE COIN LINES
// TweenMax.to("#coin-lines", 20, {rotation: 360, smoothOrigin: true, repeat: -1, transformOrigin: "50% 50%", ease: Linear.easeNone});
