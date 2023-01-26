export const state = () => ({
  githubProjects: []
});

export const mutations = {
  updateGithubProjects: (state, payload) => {
    state.githubProjects = payload;
  }
};

export const actions = {
  async getGithubProjects({ state, commit }) {
    if (state.githubProjects.length) return;

    try {
      let githubProjects = await fetch(
        "https://api.github.com/users/uvacoder/repos?page=1&per_page=100?sort=stars&order=asc"
      ).then(res => res.json());

      githubProjects = githubProjects
        
        .map(
          ({
            id,
            name,
            languages,
            license,
            description,
            stargazers_count,
            homepage,
            html_url
          }) => ({
            id,
            name,
            languages,
            license,
            description,
            stargazers_count,
            homepage,
            html_url
          })
        );

      commit("updateGithubProjects", githubProjects);
    } catch (err) {
      console.log(err);
    }
  }
};
