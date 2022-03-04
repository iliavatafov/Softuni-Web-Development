class Contact {
    constructor(name, lastName, phone, email) {
        this.name = name;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(v) {
        this._online = v;

        if (this.onlineDiv) {
            this.onlineDiv.className = this._online ? 'title online' : 'title';
        }
    }

    eCreator(tag, content = ``) {
        const e = document.createElement(tag);
        e.innerHTML = content;

        return e;
    }

    render(id) {
        this.article = this.eCreator(`article`);
        this.onlineDiv = this.eCreator(`div`, `${this.name} ${this.lastName}`)
        this.toggleButton = this.eCreator(`button`, `&#8505;`);
        this.infoDiv = this.eCreator(
            'div',
            `<span>&phone; ${this.phone}</span><span>&#9993; ${this.email}</span>`
        );

        this.onlineDiv.className = this.online ? 'title online' : 'title';
        this.infoDiv.className = 'info';
        this.infoDiv.style.display = 'none';


        this.onlineDiv.appendChild(this.toggleButton);
        this.article.appendChild(this.onlineDiv);
        this.article.appendChild(this.infoDiv);

        document.getElementById(id).appendChild(this.article);

        this.toggleButton.addEventListener(`click`, () => {
            this.infoDiv.style.display = this.infoDiv.style.display === `none` ? `block` : `none`;
        });
    }

}


let contacts = new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com");
console.log(contacts.online);