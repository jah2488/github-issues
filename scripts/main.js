var token = '4e24233dd25e934e684267a8beaacb3620b2b90d';

$.ajaxSetup({
      headers: {
          "Authorization": "token " + token
      }
});

var issueTemplate = _.template( $('#issueTemplate').html() );
var issues = $('#issues');
var APIURL = 'https://api.github.com/repos/jah2488/github-issues/issues';


var getIssues = function () {
  $.ajax({url: APIURL}).done(function (data) {
    var templates = _.map(data, function (issue) {
      return issueTemplate(issue);
    });
    issues.html(templates);
  });
};

setInterval(getIssues, 1000);
