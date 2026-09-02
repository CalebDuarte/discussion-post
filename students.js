/* const boardContainer = document.getElementById("discussion-board");

function renderVersionOne(post) {

    let categoryHTML = "";

    for (let i = 0; i < post.categories.length; i++) {
        categoryHTML += `
            <span class="category">${post.categories[i]}</span>
        `;
    }

    const postHTML = `
        <article class="discussion-post version-one" id="post-${post.id}">
            <div class="post-author">
                <img src="${post.author.image}" alt="Profile photo" class="profile-image">
                <div class="author-info">
                    <p class="author-name">${post.author.name}</p>
                    <p class="author-username">@${post.author.username}</p>
                </div>
                <p class="post-date">${post.postedDate}</p>
            </div>
            <h2 class="post-title">${post.title}</h2>
            <img src="${post.articleImage}" alt="${post.title}" class="article-image">
            <p class="post-message">${post.message}</p>
            <div class="post-categories">
                ${categoryHTML}
            </div>
            <div class="post-engagement">
                <p>❤️ <strong>${post.likes}</strong> likes</p>
                <p>👁️ <strong>${post.views}</strong> views</p>
                <p>💬 <strong>${post.replies}</strong> replies</p>
            </div>
        </article>
    `;

    return postHTML;
}


function renderVersionTwo(post) {

    let categoryHTML = "";

    for (let i = 0; i < post.categories.length; i++) {
        categoryHTML += `
            <span class="category">${post.categories[i]}</span>
        `;
    }

    const postHTML = `
        <article class="discussion-post version-two" id="post-${post.id}">
            <img src="${post.articleImage}" alt="${post.title}" class="article-image">
            <div class="version-two-overlay">
                <div class="post-top-row">
                    <div class="post-categories">
                        ${categoryHTML}
                    </div>
                    <div class="post-author">
                        <img src="${post.author.image}" alt="Profile photo" class="profile-image">
                        <div class="author-info">
                            <p class="author-name">${post.author.name}</p>
                            <p class="author-username">@${post.author.username}</p>
                        </div>
                    </div>
                </div>
                <div class="post-glass-content">
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-message">${post.message}</p>
                    <div class="post-bottom-row">
                        <p class="post-date">${post.postedDate}</p>
                        <div class="post-engagement">
                            <p>❤️ <strong>${post.likes}</strong> likes</p>
                            <p>👁️ <strong>${post.views}</strong> views</p>
                            <p>💬 <strong>${post.replies}</strong> replies</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `;
    return postHTML;
}

function renderVersionThree(post) {
    let categoryHTML = "";
    for (let i = 0; i < post.categories.length; i++) {
        categoryHTML += `
            <span class="category">${post.categories[i]}</span>
        `;
    }

    const postHTML = `
        <article class="discussion-post version-three" id="post-${post.id}">
            <img src="${post.articleImage}" alt="${post.title}" class="article-image">
            <div class="post-content">
                <div class="post-author">
                    <img src="${post.author.image}" alt="Profile photo" class="profile-image">
                    <div class="author-info">
                        <p class="author-name">${post.author.name}</p>
                        <p class="author-username">@${post.author.username}</p>
                    </div>
                    <p class="post-date">${post.postedDate}</p>
                </div>
                <h2 class="post-title">${post.title}</h2>
                <p class="post-message">${post.message}</p>
                <div class="post-categories">
                    ${categoryHTML}
                </div>
                <div class="post-engagement">
                    <p>❤️ <strong>${post.likes}</strong> likes</p>
                    <p>👁️ <strong>${post.views}</strong> views</p>
                    <p>💬 <strong>${post.replies}</strong> replies</p>
                </div>
            </div>
        </article>
    `;
    return postHTML;
}

for (let i = 0; i < discussionPosts.length; i++) {
    let post = discussionPosts[i];
    if (i % 3 === 0) {
        boardContainer.innerHTML += renderVersionOne(post);
    } else if (i % 3 === 1) {
        boardContainer.innerHTML += renderVersionTwo(post);
    } else {
        boardContainer.innerHTML += renderVersionThree(post);
    }
}
 */
//DOM version
const boardContainer = document.getElementById("discussion-board");

function buildCatContainer(categories) {
    const catContainer = document.createElement("div");
    catContainer.className = "post-categories";

    for(let i = 0; i < categories.length; i++) {
        const badge = document.createElement("span");
        badge.className = " category";
        badge.textContent = categories[i];
        catContainer.appendChild(badge);
    }
    return catContainer;
}

function buildAuthorBlock(post, includeDate){
    const authorDiv = document.createElement('div');
    authorDiv.className = "post-author";

    const avatar = document.createElement("img");
    avatar.src = post.author.image;
    avatar.alt = post.author.name;
    avatar.className = "profile-image";
    authorDiv.appendChild(avatar);

    const authorInfo = document.createElement('div');
    authorInfo.className = "author-info";

    const nameEl = document.createElement('p');
    nameEl.className = "author-name";
    nameEl.textContent = post.author.name;
    authorInfo.appendChild(nameEl);

    const usernameEl = document.createElement('p');
    usernameEl.className = "author-username";
    usernameEl.textContent = `@${post.author.username}`;
    authorInfo.appendChild(usernameEl);
    authorDiv.appendChild(authorInfo);

    if(includeDate){
        const dateEl = document.createElement('p');
        dateEl.className = "post-date";
        dateEl.textContent = post.postedDate;
        authorDiv.appendChild(dateEl)
    }
    return authorDiv
}   

function buildEngagementBlock(post){
    const engagmentDiv = document.createElement('div');
    engagmentDiv.className = "post-engagement";

    const likesP = document.createElement('p');
    likesP.innerHTML = `&hearts; <strong>${post.likes}</strong> likes`;
    engagmentDiv.appendChild(likesP);

    const viewsP = document.createElement('p');
    viewsP.innerHTML = `&#128065; <strong>${post.views}</strong> views`;
    engagmentDiv.appendChild(viewsP);

    const repliesP = document.createElement('p');
    repliesP.innerHTML = `&#128172; <strong>${post.replies}</strong> replies`;
    engagmentDiv.appendChild(repliesP);

    return engagmentDiv;
}

function versionOne(post){
    const article = document.createElement('article');
    article.classList.add("discussion-post", "version-one");
    article.id = `post-${post.id}`;
    article.appendChild(buildAuthorBlock(post, true));

    const titleEl = document.createElement('h2');
    titleEl.className = "post-title";
    titleEl.textContent = post.title;
    article.appendChild(titleEl);

    const articleImg = document.createElement('img');
    articleImg.src = post.articleImage;
    articleImg.alt = post.title;
    articleImg.className = "article-image";
    article.appendChild(articleImg);

    const messageEl = document.createElement('p');
    messageEl.className = "post-message";
    messageEl.textContent = post.message;
    article.appendChild(messageEl);

    article.appendChild(buildCatContainer(post.categories));
    article.appendChild(buildEngagementBlock(post));

    return article;
}
function versionTwo(post) {
    const article = document.createElement("article");
    article.classList.add("discussion-post", "version-two");
    article.id = `post-${post.id}`;

    const articleImg = document.createElement("img");
    articleImg.src = post.articleImage;
    articleImg.alt = post.title;
    articleImg.className = "article-image";
    article.appendChild(articleImg);

    const overlay = document.createElement("div");
    overlay.className = "version-two-overlay";

    const topRow = document.createElement("div");
    topRow.className = "post-top-row";
    topRow.appendChild(buildCatContainer(post.categories));
    topRow.appendChild(buildAuthorBlock(post, false));
    overlay.appendChild(topRow);

    const glassContent = document.createElement("div");
    glassContent.className = "post-glass-content";

    const titleEl = document.createElement("h2");
    titleEl.className = "post-title";
    titleEl.textContent = post.title;
    glassContent.appendChild(titleEl);

    const messageEl = document.createElement("p");
    messageEl.className = "post-message";
    messageEl.textContent = post.message;
    glassContent.appendChild(messageEl);

    const bottomRow = document.createElement("div");
    bottomRow.className = "post-bottom-row";

    const dateEl = document.createElement("p");
    dateEl.className = "post-date";
    dateEl.textContent = post.postedDate;
    bottomRow.appendChild(dateEl);

    bottomRow.appendChild(buildEngagementBlock(post));
    glassContent.appendChild(bottomRow);

    overlay.appendChild(glassContent);
    article.appendChild(overlay);

    return article;
}

function versionThree(post) {
    const article = document.createElement("article");
    article.classList.add("discussion-post", "version-three");
    article.id = `post-${post.id}`;

    const articleImg = document.createElement("img");
    articleImg.src = post.articleImage;
    articleImg.alt = post.title;
    articleImg.className = "article-image";
    article.appendChild(articleImg);

    const contentDiv = document.createElement("div");
    contentDiv.className = "post-content";

    contentDiv.appendChild(buildAuthorBlock(post, true));

    const titleEl = document.createElement("h2");
    titleEl.className = "post-title";
    titleEl.textContent = post.title;
    contentDiv.appendChild(titleEl);

    const messageEl = document.createElement("p");
    messageEl.className = "post-message";
    messageEl.textContent = post.message;
    contentDiv.appendChild(messageEl);

    contentDiv.appendChild(buildCatContainer(post.categories));
    contentDiv.appendChild(buildEngagementBlock(post));

    article.appendChild(contentDiv);

    return article;
}


for(let i = 0; i < discussionPosts.length; i++){
    const post = discussionPosts[i];
    let card;
    if(i % 3 === 0){
        card = versionOne(post);
    }else if (i % 3 === 1){
        card = versionTwo(post);
    }else{
        card = versionThree(post);
    }

    boardContainer.appendChild(card);
}