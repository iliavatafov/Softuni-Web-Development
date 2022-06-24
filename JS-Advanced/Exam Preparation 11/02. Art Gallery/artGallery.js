class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (Object.keys(this.possibleArticles).some(a => a == articleModel)) {
            const article = this.listOfArticles.filter(a => a.articleName == articleName);

            if (article.length == 0) {
                this.listOfArticles.push({ articleModel, articleName, quantity });
            } else if (articleModel == article[0].articleModel) {
                article[0].quantity += quantity;
            }

            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        } else {
            throw new Error('This article model is not included in this gallery!');
        }
    }

    inviteGuest(guestName, personality) {

        const isGuestRegistrated = this.guests.some(g => g.guestName == guestName);

        if (isGuestRegistrated) {
            throw new Error(`${guestName} has already been invited.`)
        } else {
            let points = 0;

            if (personality == 'Vip') {
                points = 500;
            } else if (personality == 'Middle') {
                points = 250;
            } else {
                points = 50;
            }

            this.guests.push({
                guestName,
                points,
                purchaseArticle: 0
            });

            return `You have successfully invited ${guestName}!`;
        }
    }

    buyArticle(articleModel, articleName, guestName) {

        const articleData = this.listOfArticles.filter(a => a.articleName == articleName);
        const guestData = this.guests.filter(g => g.guestName == guestName);

        if (articleData.length == 0 || articleData[0].articleModel != articleModel) {
            throw new Error('This article is not found.');
        } else if (articleData[0].quantity == 0) {
            return `The ${articleName} is not available.`;
        } else if (guestData.length == 0) {
            return 'This guest is not invited.';
        } else {
            if (guestData[0].points >= this.possibleArticles[articleModel]) {
                guestData[0].points -= this.possibleArticles[articleModel];
                articleData[0].quantity--;
                guestData[0].purchaseArticle++;

                return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
            } else {
                return 'You need to more points to purchase the article.';
            }
        }
    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
        } else if (criteria == 'guest') {
            result.push('Guests information:');
            this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle} `));
        }

        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));