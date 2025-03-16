document.addEventListener("DOMContentLoaded", function() {
	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener("click", function(e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				window.scrollTo({
					top: target.offsetTop,
					behavior: "smooth"
				});
			}
		});
	});

	// Simple fade-in effect on scroll
	const sections = document.querySelectorAll("section");
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = 1;
				entry.target.style.transform = "translateY(0)";
			}
		});
	}, { threshold: 0.3 });

	sections.forEach(section => {
		section.style.opacity = 0;
		section.style.transform = "translateY(50px)";
		observer.observe(section);
	});
});
