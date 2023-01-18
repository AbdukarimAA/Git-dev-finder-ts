export type LocalGitHubUser = {
    login:string,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string,
    repos: number,
    followers: number,
    following: number,
    created: string
};

export type GitHubUser = {
    login:string,
    id: number,
    avatar_url: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string
};

export type GitHubError = {
    message: string,
    documentation_url: string
};

/*
"login": "AbdukarimAA",
  "id": 93397997,
  "node_id": "U_kgDOBZEj7Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/93397997?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/AbdukarimAA",
  "html_url": "https://github.com/AbdukarimAA",
  "followers_url": "https://api.github.com/users/AbdukarimAA/followers",
  "following_url": "https://api.github.com/users/AbdukarimAA/following{/other_user}",
  "gists_url": "https://api.github.com/users/AbdukarimAA/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/AbdukarimAA/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/AbdukarimAA/subscriptions",
  "organizations_url": "https://api.github.com/users/AbdukarimAA/orgs",
  "repos_url": "https://api.github.com/users/AbdukarimAA/repos",
  "events_url": "https://api.github.com/users/AbdukarimAA/events{/privacy}",
  "received_events_url": "https://api.github.com/users/AbdukarimAA/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Abdukarim",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-10-29T16:30:37Z",
  "updated_at": "2022-10-03T20:56:47Z"
  */