/**
 * Javascript functions related to Facebook features
 */
 // TODO: use FQL: fql?q=SELECT online_presence FROM user WHERE uid=529944185


function isConnected() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    if(networkState == 'none')
    	return false;
    
    return true; 
}




function getFriendList(){
  var fdata;
  FB.api('/me/friends', { fields: 'id, name, picture' },  function(response) {
    if (response.error) {
      alert(JSON.stringify(response.error));
    } else {
      var friends = document.getElementById('friendlist');
      fdata = response.data;
      response.data.forEach(function(item) {
        var d = document.createElement('li');
        d.innerHTML = "<div class=\"friend_info ui-btn-inner ui-li\"><div class=\"profile_pic\"><img src=\"https://graph.facebook.com/" + item.id + "/picture\" /></div>" + 
        			"<div class=\"friend_name\">" +item.name + "</div></div>" ;
        friends.appendChild(d);
     });
    }    
  });
}
      
function FBlogin() {
  FB.login(
    function(response) {
      if (response.authResponse) {
        // alert("Welcome to AppFBInfi");
      } else {
        alert('not logged in');
      }
    },
    { scope: "email, friends_online_presence" }
  );
}
