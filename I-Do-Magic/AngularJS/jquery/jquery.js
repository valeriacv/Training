var context =  {
			  "users": 
			  [ 
			    { "Name": "Roger Mcdonalid", "Tweets": 1, "Followers": 3, "ReTweets": 56, "Profile":"https://randomuser.me/api/portraits/men/36.jpg"},
			    { "Name": "Florence Allen", "Tweets": 7, "Followers": 12, "ReTweets": 3, "Profile":"https://randomuser.me/api/portraits/women/29.jpg"},
			    { "Name": "Erika Vargas", "Tweets": 9, "Followers": 67, "ReTweets": 4, "Profile":"https://randomuser.me/api/portraits/women/12.jpg"},
			    { "Name": "Lily Marshall", "Tweets": 3, "Followers": 4, "ReTweets": 23, "Profile":"https://randomuser.me/api/portraits/women/11.jpg"},
			    { "Name": "Aiden Terry", "Tweets": 9, "Followers": 3, "ReTweets": 1, "Profile":"https://randomuser.me/api/portraits/men/23.jpg"},
			    { "Name": "Alexis Austin", "Tweets": 12, "Followers": 345, "ReTweets": 221, "Profile":"https://randomuser.me/api/portraits/women/31.jpg"},
			    { "Name": "Mattie James", "Tweets": 15, "Followers": 546, "ReTweets": 34, "Profile":"https://randomuser.me/api/portraits/women/26.jpg"},
			    { "Name": "Nicole Craig", "Tweets": 2, "Followers": 222, "ReTweets": 44, "Profile":"https://randomuser.me/api/portraits/women/24.jpg"},
			    { "Name": "Wilma Wade", "Tweets": 3, "Followers": 45, "ReTweets": 234, "Profile":"https://randomuser.me/api/portraits/women/72.jpg"},
			    { "Name": "Elijah Murphy", "Tweets": 6, "Followers": 613, "ReTweets": 14, "Profile":"https://randomuser.me/api/portraits/men/13.jpg"},
			    { "Name": "Ida Ford", "Tweets": 13, "Followers": 23, "ReTweets": 21, "Profile":"https://randomuser.me/api/portraits/women/6.jpg"}
			  ]
			};


var app = angular.module('app', []);

app.controller('firstCtrl', function($scope) {
	var str = "abcdefghijklmnopqrstuvwxyz";
	$scope.alphabet = str.toUpperCase().split("");

	$scope.activeLetter = '';

	$scope.activateLetter = function(letter) {

		$scope.activeLetter = letter
	}

	$scope.noActive = '';


	$scope.noaActiveLetter = function(letter) {

		if(startsWithLetter(letter) === []){
			$scope.noActive  = letter
		}	
	}
	$scope.users = context.users;

});


app.filter('startsWithLetter', function() {
  return function(items, letter) {

    var filtered = [];
    var letterMatch = new RegExp(letter, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (letterMatch.test(item.Name.substring(0, 1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});
