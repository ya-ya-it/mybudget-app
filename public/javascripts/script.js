/**
* Project name: Assignment 1: Express Portfolio Site
* File name: script.js
* Author's name: Daria Davydenko
* Web-site: https://dariadavydenko.herokuapp.com/
* File description: This is a javascript file with the custom scripts.
* Pictures were taken from www.pexels.com
* Framework: materializecss.com
*/

//function to show mobile menu
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    var tabs = M.Tabs.init("tabs");
  });

  $(document).ready(function(){
      $('.tabs').tabs();
    });
