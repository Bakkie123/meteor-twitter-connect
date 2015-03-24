Package.describe({
  summary: "Facebook Connect package to connect facebook users to existing users."
});

Package.on_use(function (api) {
  api.use(['accounts-twitter'], ['client', 'server']);

  //add dependency for overriding core
  api.use('oauth-encryption', 'server', {weak: true});
  api.use('oauth');
  api.use('twitter', ['client', 'server']);

  api.add_files(["client.js"], 'client');
  api.add_files(["server.js"], 'server');
});
