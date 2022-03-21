class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();

        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error(`This article model is not included in this gallery!`);
        } else {
            this.listOfArticles.forEach(a => {
                if (a.articleModel === articleModel) {
                    a.quantity += Number(quantity);
                    return;
                }
            });

            this.listOfArticles.push({ articleModel, articleName, quantity: Number(quantity) });
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }
    }

    inviteGuest(guestName, personality) {

        const currentGuest = this.guests.find(g => g.guestName === guestName);
        let points = 0;

        if (currentGuest !== undefined) {
            throw new Error(`${guestName} has already been invited.`);
        } else {

            if (personality === `Vip`) {
                points = 500;
            } else if (personality === `Middle`) {
                points = 250;
            } else {
                points = 50;
            }

            this.guests.push({ guestName, points, purchaseArticle: 0 });

            return `You have successfully invited ${guestName}!`;
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        const currentArticle = this.listOfArticles.find(a => a.articleName === articleName);
        const currentGuest = this.guests.find(g => g.guestName === guestName);

        if (currentArticle === undefined || currentArticle.articleModel !== articleModel) {
            throw new Error(`This article is not found.`);
        } else {
            if (currentArticle.quantity === 0) {
                return `The ${articleName} is not available.`;
            } else if (currentGuest === undefined) {
                return `This guest is not invited.`;
            } else {

                let neededPoints = 0;

                if (articleModel === `picture`) {
                    neededPoints = 200;
                } else if (articleModel === `photo`) {
                    neededPoints = 50;
                } else if (articleModel === `item`) {
                    neededPoints = 250;
                }

                if (neededPoints > currentGuest.points) {
                    return `You need to more points to purchase the article.`;
                } else {
                    for (let guest of this.guests) {
                        if (guest.guestName === currentGuest.guestName) {
                            guest.points -= neededPoints;
                            guest.purchaseArticle += 1;
                        }
                    }

                    this.listOfArticles.forEach(a => {
                        if (a.articleName === articleName) {
                            a.quantity -= 1;
                            if (a.quantity === 0) {
                                let indexToBeDeleted = this.listOfArticles.findIndex(a => a[articleModel]);
                                this.listOfArticles.splice(indexToBeDeleted, 1);
                            }
                        }
                    });

                    return `${guestName} successfully purchased the article worth ${neededPoints} points.`

                }
            }
        }
    }

    showGalleryInfo(criteria) {

        let result = [];

        if (criteria === `article`) {

            result.push(`Articles information:`);
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));

        } else if (criteria === `guest`) {

            result.push(`Guests information:`);
            this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`));
        }

        return result.join(`\n`);
    }
}