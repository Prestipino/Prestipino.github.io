document.addEventListener("DOMContentLoaded", function() {
    const toc = document.getElementById("toc");
    const headings = document.querySelectorAll(".main-content h2, .main-content h3, .main-content h4");

    // Generate TOC
    headings.forEach((heading) => {
        const level = heading.tagName.toLowerCase();
        const id = heading.getAttribute("id");
        const text = heading.textContent;

        const listItem = document.createElement("li");
        listItem.className = `toc-${level}`;

        const link = document.createElement("a");
        link.href = `#${id}`;
        link.textContent = text;

        listItem.appendChild(link);
        toc.appendChild(listItem);
    });

    // Highlight current section
    window.addEventListener("scroll", function() {
        let current = "";
        headings.forEach((heading) => {
            const headingTop = heading.getBoundingClientRect().top;
            if (headingTop <= 100) {
                current = heading.getAttribute("id");
            }
        });

        const tocLinks = document.querySelectorAll("#toc a");
        tocLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});
