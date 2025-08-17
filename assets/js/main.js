(function () {
  "use strict";

  /**
   * Scroll top button
   */
  // let scrollTop = document.querySelector(".scroll-top");

  // function toggleScrollTop() {
  //   if (scrollTop) {
  //     window.scrollY > 100
  //       ? scrollTop.classList.add("active")
  //       : scrollTop.classList.remove("active");
  //   }
  // }
  // scrollTop.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // });

  // window.addEventListener("load", toggleScrollTop);
  // document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  // function aosInit() {
  //   AOS.init({
  //     duration: 600,
  //     easing: "ease-in-out",
  //     once: true,
  //     mirror: false,
  //   });
  // }
  // window.addEventListener("load", aosInit);

  const form = document.getElementById("contact-form");
  if (!form) return;

  const $ = (sel) => document.querySelector(sel);
  const show = (sel) => {
    const el = $(sel);
    if (el) el.style.display = "block";
  };
  const hide = (sel) => {
    const el = $(sel);
    if (el) el.style.display = "none";
  };
  const setText = (sel, text) => {
    const el = $(sel);
    if (el) el.textContent = text;
  };

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const projectTypeRaw = form["project-type"]?.value || "";
    const otherProject =
      document.getElementById("other-project-type")?.value?.trim() || "";

    const displayProjectType =
      projectTypeRaw === "Other"
        ? otherProject
          ? `Custom — ${otherProject}`
          : "Custom"
        : projectTypeRaw;

    const subject = `New inquiry${
      displayProjectType ? ` · ${displayProjectType}` : ""
    }${budget ? ` · Budget: ${budget}` : ""}`;

    const formData = {
      name: form.name?.value?.trim() || "",
      email: form.email?.value?.trim() || "",
      company: form.company?.value?.trim() || "",
      projectType: projectTypeRaw,
      budget,
      subject,
      message: form.message?.value?.trim() || "",
      otherProjectType: otherProject,
    };

    hide(".error-message");
    hide(".sent-message");
    show(".loading");

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        show(".sent-message");
        form.reset();
      } else {
        setText(".error-message", data.message || "Failed to send.");
        show(".error-message");
      }
    } catch (err) {
      setText(".error-message", "An unexpected error occurred.");
      show(".error-message");
    } finally {
      hide(".loading");
    }
  });
})();

const pt = document.getElementById("project-type");
const wrap = document.getElementById("other-type-wrapper");
pt?.addEventListener("change", () => {
  wrap.classList.toggle("hidden", pt.value !== "Other");
});
