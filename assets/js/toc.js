document.addEventListener("DOMContentLoaded", function() {
    const toc = document.getElementById("toc");
    const headings = document.querySelectorAll(".main-content h2, .main-content h3, .main-content h4");

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
});
