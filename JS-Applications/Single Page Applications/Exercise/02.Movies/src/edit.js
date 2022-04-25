import { showView } from "./dom.js";

const section = document.getElementById(`edit-movie`);
section.remove();

export function showEdit() {
    showView(section);
}

export async function onUpdate(id, event) {
    event.preventDefault();

    const formData = new FormData(form);

    const title = formData.get(`title`).trim();
    const description = formData.get(`description`).trim();
    const img = formData.get(`imageUrl`).trim();

    const userData = JSON.parse(sessionStorage.getItem(`userData`));

    try {
        const res = await fetch(`http://localhost:3030/data/movies` + id, {
            method: "patch",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": userData.token,
            },
            body: JSON.stringify({ title, description, img })
        });

        if (res.ok != true) {
            const error = await res.json();
            throw new Error(error.message);
        }

        form.reset();

        showHome();
    } catch (err) {
        alert(err.message)
    }
}