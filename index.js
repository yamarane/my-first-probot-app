//probot can create comment on new issue opened
//https://github.com/yamarane/test-probot-repo2/issues/5
module.exports = (robot) => {
  robot.on('issues.opened', (context) => {
    const body = 'Hello world from Probot';
    context.github.issues.createComment(context.issue({ body }));
  });
}

