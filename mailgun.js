var api_key = 'key-9biyu7b2qtf85kb5xy-z7xbktcoivlt4';
var domain = 'mailgun.clusterhq.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


module.exports = {
  email_user: function (email) {
    var data = {
    from: 'ClusterHQ <support@clusterhq.com>',
    to: email,
    subject: 'Thanks for trying the demo!',
    html: '<p>Thank you for stopping by ClusterHQ and trying out the demo!</p><p>If you would like to continue your demo, check out the github repo again: <p><a href="https://github.com/ClusterHQ/volume-plugins-demo/tree/ucp">Flocker Demo Repo</a><br><br><p>Thanks for trying out ClusterHQ and remember to visit our website: </p><a href="https://clusterhq.com">ClusterHQ.com</a><br><br><p>Also, checkout our blog for more demos and videos. </p><a href="https://clusterhq.com/blog">ClusterHQ Blog</a><br><br><br><p>Cheers,</p><img src="https://clusterhq.com/assets/images/logo@2x.png"><p>ClusterHQ</p>',
    'h:X-Mailgun-Campaign-Id': 'n0j46'
   };

   mailgun.messages().send(data, function (error, body) {
     console.log(body);
    });
  },
};

