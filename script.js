const exportBtn = document.getElementById("exportBtn");

exportBtn.addEventListener("click", function () {

    const title =
        document.getElementById("docTitle").value || "untitled";

    const content =
        document.getElementById("docContent").value;

    const fileContent =
        "Title: " + title + "\n\n" + content;

    const blob =
        new Blob([fileContent], { type: "text/plain" });

    const url =
        window.URL.createObjectURL(blob);

    const a =
        document.createElement("a");

    a.href = url;
    a.download = title + ".txt";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
});
