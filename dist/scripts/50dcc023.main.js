var $navbar=$(".navbar"),$navOffset=$navbar.offset().top;$navbar.wrap('<div class="nav-placeholder"></div>'),$(".nav-placeholder").height($navbar.outerHeight()),$(window).scroll(function(){var a=$(window).scrollTop();a>=$navOffset?$navbar.addClass("navbar-fixed-top"):$navbar.removeClass("navbar-fixed-top")});