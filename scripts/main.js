const nav = document.querySelector(".nav");

function setNavDividers() {
    nav.querySelectorAll(".nav__divider").forEach((divider) => divider.remove());

    const links = [...nav.querySelectorAll(".nav__link")];
    const navRect = nav.getBoundingClientRect();

    links.slice(0, -1).forEach((link, index) => {
        const currentRect = link.getBoundingClientRect();
        const nextRect = links[index + 1].getBoundingClientRect();

        const middle = currentRect.right + (nextRect.left - currentRect.right) / 2;

        const divider = document.createElement("span");
        divider.className = "nav__divider";
        divider.style.left = `${middle - navRect.left}px`;

        nav.append(divider);
    });
}

window.addEventListener("load", setNavDividers);
window.addEventListener("resize", setNavDividers);