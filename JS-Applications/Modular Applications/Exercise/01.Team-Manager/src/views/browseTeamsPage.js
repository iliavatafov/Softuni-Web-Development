import { getAllMembers, getAllTeams } from '../api/data.js';
import { html, until } from '../lib.js'
import { getUserData } from '../util.js';

const browsePageTemplate = (userData, dataPromise) => html `
            <section id="browse">

                <article class="pad-med">
                    <h1>Team Browser</h1>
                </article>
                ${userData ? html`<article class="layout narrow">
                    <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
                </article>` : null}
                ${until(dataPromise, html`<p>Loading &hellip;</p>`)}
            </section>`

            const teamTemplate = (team) => html`
                <article class="layout">
                    <img src="${team.logoUrl}" class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${team.name}</h2>
                        <p>${team.description}</p>
                        <span class="details">${team.membersCount} Members</span>
                        <div><a href="/team-details/${team._id}" class="action">See details</a></div>
                    </div>
                </article>`


export function browsePage(ctx) {
    const userData = getUserData();
    ctx.render(browsePageTemplate(userData, loadItems()));
}

async function loadItems() {
    const teams = await getAllTeams();
    const members = await getAllMembers();

    teams.forEach(team => {

        let currentTeamCount = 0;

        for(let member of members) {
            if(team._id == member.teamId) {
                currentTeamCount++;
            }
        }

        team.membersCount = currentTeamCount;
    });

    return teams.map(teamTemplate);
}