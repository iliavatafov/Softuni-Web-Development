import { getTeamDetails, getMembershipData, joinTeam, approveRequest, onDelete } from '../api/data.js';
import { html, until } from '../lib.js'
import { getUserData } from '../util.js';

const teamDetailsPageTemplate = (teamData, membersData, membresCount, userData, memberPromise, join, pendingPromise, deleteItem) => html `
            <section id="team-home">
                <article class="layout">
                    <img src=${teamData.logoUrl} class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${teamData.name}</h2>
                        <p>${teamData.description}</p>
                        <span class="details">${membresCount}</span>
                        <div>
                            ${(userData && userData.id == teamData._ownerId) ? 
                            html`<a href="#" class="action">Edit team</a>` : null}
                            ${(userData && membersData.filter( m => m._ownerId == userData.id).length == 0) ?
                            html`<a @click="${join}" href="#" class="action">Join team</a>` : null}
                            ${(userData && userData.id != teamData._ownerId && membersData.filter( m => m._ownerId == userData.id && m.status != 'pending').length == 1) ?
                            html`<a @click="${deleteItem}" href="#" class="action invert">Leave team</a>` : null}
                            ${(userData && membersData.filter( m => m._ownerId == userData.id && m.status == 'pending').length == 1) ?
                            html`Membership pending. <a href="#">Cancel request</a>` : null}
                        </div>
                    </div>
                    <div class="pad-large">
                        <h3>Members</h3>
                        <ul class="tm-members">
                            ${userData && userData._ownerId == teamData._ownerId ? html`<li>${userData.username}</li>` : null}
                            ${until(memberPromise, html`<p>Loading &hellip;</p>`)}
                        </ul>
                    </div>
                    ${userData && userData.id == teamData._ownerId && membersData.filter(m => m.status == 'pending').length > 0 ? html`
                    <div class="pad-large">
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                        ${until(pendingPromise, html`<p>Loading &hellip;</p>`)}
                        </ul>
                    </div>` : null}
                </article>
            </section>`

        const teamMemberTemplate = (memberData, teamData, userData, deleteItem) => html`
        <li>${memberData.user.username}${userData && teamData._ownerId == userData.id && memberData._ownerId != teamData._ownerId ? html`<a @click="${deleteItem}" id="${memberData._id}" href="/team-details/${teamData._id}" class="tm-control action">Remove from team</a>` : null}</li>`
        
        const penidngMembersTemplate = (data, approve, deleteItem) => html`
        <li>${data.user.username}<a @click="${approve}" href="/team-details/${data.teamId}" id="${data._id}" class="tm-control action">Approve</a><a id="${data._id}" @click="${deleteItem}" href="/team-details/${data.teamId}" class="tm-control action">Decline</a></li>`

export async function teamDetailsPage(ctx) {

    const teamId = ctx.params.id;

    const [teamData, membersData] = await Promise.all([
        getTeamDetails(teamId),
        getMembershipData(teamId)
    ]);

    const membresCount = membersData.length;

    const userData = getUserData();

    ctx.render(teamDetailsPageTemplate(teamData, membersData, membresCount, userData, loadItems(), join, loadPending(), deleteItem));

    async function loadItems() {
        const members = membersData.filter(m => m.status == 'member');
        return members.map(m => teamMemberTemplate(m, teamData, userData, deleteItem))
    }

    async function loadPending() {
        const pending = membersData.filter(m => m.status == 'pending');
        return pending.map(m => penidngMembersTemplate(m, approve, deleteItem));
    }
    
    async function join() {
        await joinTeam(teamId)
    }

    async function approve(event) {
        await approveRequest(event.target.id, { status: "member"});
    }

    async function deleteItem(event) {
        await onDelete(event.target.id)
    }
    
}