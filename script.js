
/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {

        menuBtn.textContent = "×";

    } else {

        menuBtn.textContent = "☰";

    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        menuBtn.textContent = "☰";

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    const savedTheme =
        localStorage.getItem("portfolioTheme");


    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeBtn.textContent = "🌙";

    } else {

        themeBtn.textContent = "☀️";

    }


    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");


        if (isLight) {

            themeBtn.textContent = "🌙";

            localStorage.setItem(
                "portfolioTheme",
                "light"
            );

        } else {

            themeBtn.textContent = "☀️";

            localStorage.setItem(
                "portfolioTheme",
                "dark"
            );

        }

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("main section");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   PROJECT FILTER
===================================================== */

const projectFilters =
    document.querySelectorAll(".project-filter");

const projectCards =
    document.querySelectorAll(".project-card");

const noProjects =
    document.getElementById("noProjects");


projectFilters.forEach(button => {

    button.addEventListener("click", () => {

        projectFilters.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.dataset.filter;

        let visibleProjects = 0;


        projectCards.forEach(card => {

            const categories =
                card.dataset.category.split(" ");


            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                card.classList.remove("hide");

                visibleProjects++;

            } else {

                card.classList.add("hide");

            }

        });


        if (visibleProjects === 0) {

            noProjects.classList.add("show");

        } else {

            noProjects.classList.remove("show");

        }

    });

});


/* =====================================================
   PROJECT MODAL
===================================================== */

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalIcon =
    document.getElementById("modalIcon");

const modalType =
    document.getElementById("modalType");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTech =
    document.getElementById("modalTech");

const modalDemo =
    document.getElementById("modalDemo");

const modalGithub =
    document.getElementById("modalGithub");


const projectDetails = {

    gallery: {

        icon: "🖼️",

        type: "Frontend",

        title: "Professional Image Gallery",

        description:
            "A responsive image gallery I built to showcase photos with smart search, category filters, favorites, lightbox view, and dark mode. It focuses on a clean UI and smooth user interaction for browsing images easily.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "UI Design"
        ],

        demo: "#projects",

        github: "https://github.com/chandanikumari943058-ck"

    },


    calculator: {

        icon: "🧮",

        type: "Frontend",

        title: "Interactive Calculator",

        description:
            "A simple but functional calculator project created to practice JavaScript logic and responsive UI design. It supports everyday arithmetic operations and provides a clean user experience on desktop and mobile screens.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "DOM Manipulation"
        ],

        demo: "#projects",

        github: "https://github.com/chandanikumari943058-ck"

    },


    portfolio: {

        icon: "💼",

        type: "Frontend",

        title: "Personal Portfolio Website",

        description:
            "This portfolio website showcases my academic background, technical skills, projects, and contact details. It was designed to present my work professionally and make it easy for recruiters to connect with me.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design"
        ],

        demo: "#home",

        github: "https://github.com/chandanikumari943058-ck"

    }

};


const detailButtons =
    document.querySelectorAll(".details-btn");


detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectName =
            button.dataset.project;

        const project =
            projectDetails[projectName];


        if (!project) {
            return;
        }


        modalIcon.textContent =
            project.icon;

        modalType.textContent =
            project.type;

        modalTitle.textContent =
            project.title;

        modalDescription.textContent =
            project.description;


        modalTech.innerHTML = "";


        project.technologies.forEach(tech => {

            const span =
                document.createElement("span");

            span.textContent = tech;

            modalTech.appendChild(span);

        });


        modalDemo.dataset.project = projectName;
        modalGithub.dataset.project = projectName;

        projectModal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    });

});


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    projectModal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


projectModal.addEventListener(
    "click",
    event => {

        if (event.target === projectModal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =====================================================
   MODAL BUTTONS
===================================================== */

modalDemo.addEventListener("click", () => {

    const projectName = modalDemo.dataset.project;
    const project = projectDetails[projectName];

    if (project && project.demo) {
        window.open(project.demo, "_blank", "noopener,noreferrer");
    }

});


modalGithub.addEventListener("click", () => {

    const projectName = modalGithub.dataset.project;
    const project = projectDetails[projectName];

    if (project && project.github) {
        window.open(project.github, "_blank", "noopener,noreferrer");
    }

});


/* =====================================================
   COPY EMAIL
===================================================== */

const copyEmailBtn =
    document.getElementById("copyEmailBtn");

const emailText =
    document.getElementById("emailText");


copyEmailBtn.addEventListener(
    "click",
    async () => {

        const email =
            emailText.textContent.trim();


        try {

            await navigator.clipboard.writeText(email);

            showToast(
                "Email copied successfully! 📋"
            );

        } catch (error) {

            showToast(
                "Could not copy email."
            );

        }

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById("name")
            .value
            .trim();


        const email =
            document.getElementById("email")
            .value
            .trim();


        const message =
            document.getElementById("message")
            .value
            .trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            showToast(
                "Please fill all fields."
            );

            return;

        }


        showToast(
            "Message submitted successfully! 🚀"
        );


        contactForm.reset();

    }
);


/* =====================================================
   TOAST
===================================================== */

const toast =
    document.getElementById("toast");

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card, .timeline-item"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});
