require('dotenv').config()
const express = require('express')
const app = express();
const port = 4000

const githubData = {
        "login": "Shkkhwaja",
        "id": 109279460,
        "node_id": "U_kgDOBoN45A",
        "avatar_url": "https://avatars.githubusercontent.com/u/109279460?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Shkkhwaja",
        "html_url": "https://github.com/Shkkhwaja",
        "followers_url": "https://api.github.com/users/Shkkhwaja/followers",
        "following_url": "https://api.github.com/users/Shkkhwaja/following{/other_user}",
        "gists_url": "https://api.github.com/users/Shkkhwaja/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Shkkhwaja/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Shkkhwaja/subscriptions",
        "organizations_url": "https://api.github.com/users/Shkkhwaja/orgs",
        "repos_url": "https://api.github.com/users/Shkkhwaja/repos",
        "events_url": "https://api.github.com/users/Shkkhwaja/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Shkkhwaja/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Khwaja Shaikh",
        "company": null,
        "blog": "https://khwaja-portfolio.vercel.app/",
        "location": "Mumbai-IN",
        "email": null,
        "hireable": true,
        "bio": "Front-end Web Developer 🔰",
        "twitter_username": null,
        "public_repos": 13,
        "public_gists": 0,
        "followers": 1,
        "following": 3,
        "created_at": "2022-07-14T09:28:40Z",
        "updated_at": "2024-07-22T08:44:02Z"
      
}

app.get('/' ,(req,res) => {
    res.send('mohammad')
})

app.get('/login', (req,res) => {
    res.send('<h1>Login page</h1>')
})
app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`listening port ${port}`);
})