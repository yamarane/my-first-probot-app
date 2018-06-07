//probot can create comment on new issue opened
//https://github.com/yamarane/test-probot-repo2/issues/5
const octokit = require('@octokit/rest')({
  debug: true
})

module.exports = (robot) => {
  robot.on('issues.opened', (context) => {
    const body = 'Hello world from Probot';
    context.github.issues.createComment(context.issue({ body }));
  });
  robot.on('issues.closed', (context) => {
    const body = 'Thanks from Probot';
    context.github.issues.createComment(context.issue({ body }));
  });
  robot.on('create', (context) => {
    //robot.log(context);
    if (context.payload.ref_type=="tag"){
    const URL=context.payload.repository.url
    const head=context.payload.ref
    octokit.repos.getTags({owner: context.payload.repository.owner.login, repo: context.payload.repository.name}).then(result => {
      const base=result.data[1].name
      console.log(base)
      const diff_URL=URL+"/compare/"+base+"..."+head
      console.log(diff_URL)
    })
    }
  });
}

