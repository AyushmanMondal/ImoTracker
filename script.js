const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});

const exportBtn = document.getElementById("exportBtn");

exportBtn.addEventListener("click", () => {

    const title =
        document.getElementById("docTitle").value.trim() ||
        "untitled";

    const content =
        document.getElementById("docContent").value;

    const text =
`Title: ${title}

${content}`;

    const blob = new Blob(
        [text],
        { type: "text/plain" }
    );

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        `${title}.txt`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);
});
