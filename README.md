#meteor-twitter-connect

## Twitter Connect package to connect facebook users to existing users.

### Why use this package?

#### use case 1
Your users might have registered to your app using the email/password based registration process. When they decide to connect their twitter account, they are (without this package) currently being forced to logout, create a new account using fb-login. At this point you might have added custom logic on a onCreatUser callback to look for duplicate users...

No more... If you want to connect allready authenticated users in your app to their fb-account, this package provides extra methods in the Meteor's Account package to do this the proper way. Add a twitter connect button inside their profile, and add their fb profile to their meteor-app-profile. The next time they login, they can use the (unmodified) twitter-login button.

#### use case 2
You don't use twitter login. You have millions of users that have properly registered to your service, using their email and providing a password for authentication. Now you decide to add twitter login functionality nevertheless. Your loggedin users notice the twitter connect-button in their profile (from use case 1) and make the connection.

But there are millions of other users who will notice, the next time they want to login, that fancy twitter login button. Without this package, they end up with 2 accounts.

No more... When they use the twitter-login button, their existing account is searched for based on the email-address twitter returns. If this email was found, the twitter profile is addeded and the next time they login, they can use the (unmodified) twitter-login button.

### How to use
Just install the package:
```bash
$ mrt install twitter-connect
```

You get email-based existing user detection out of the box for twitter-login. No onCreateUser callback will run, because no new user will be created of the user was found.

When you want to add a twitter-connect button in your user's profile pages, just add an event handler:

```javascript
Template.twitterConnect.events({
  'click span.connectTwitter' : function () {
    Meteor.connectWithTwitter(options, function () {
      console.log(arguments);
    });
  }
});
```

Meteor.connectWithTwitter is completely analogue to the Meteor.loginWithTwitter method from the account-twitter package (http://docs.meteor.com/#meteor_loginwithexternalservice)
