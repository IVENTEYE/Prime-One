const menu = document.querySelector('.header-menu__icon');
const menu_body = document.querySelector('.header-menu');

menu.addEventListener('click', () => {
	menu.classList.toggle('active');
	menu_body.classList.toggle('menu-active');
});

// window.addEventListener('resize', function() {
// 	adaptive_function();
// });

// function adaptiveMenu(w,h) {
// 	if (w < 751) {
// 		if (!document.querySelector('.header-top-lang').classList.contains('done')) {
// 			document.querySelector('.header-top-lang').classList.add('done');
// 			document.querySelector('.header-menu').appendChild(document.querySelector('.header-top-lang'));
// 		}
// 	} else {
// 		if (document.querySelector('.header-top-lang').classList.contains('done')) {
// 			document.querySelector('.header-top-lang').classList.remove('done');
// 			document.querySelector('.header-top').appendChild(document.querySelector('.header-top-lang'));
// 		}
//     }
    
//     if (w < 751) {
// 		if (!document.querySelector('.header-bottom__menu').classList.contains('done')) {
// 			document.querySelector('.header-bottom__menu').classList.add('done');
// 			document.querySelector('.header-menu').appendChild(document.querySelector('.header-bottom__menu'));
// 		}
//     } 
//     else {
// 		forEach( (item, index) => {
// 			if (item.classList.contains('header-bottom-menu--right')) {
// 				if (item).classList.contains('done') {
// 					item.classList.remove('done');
// 					item.append
// 				}
// 			}
// 		});
// 	}
// }

// function adaptive_function() {
// 	let w = window.screen.width;
// 	let h = window.screen.height;
// 	adaptiveMenu(w,h);
// }

// adaptive_function();

$(window).resize(function(event) {
	adaptive_function();
});

function adaptive_header(w,h) {
	if (w < 767) {
		if (!$('.header-top-lang').hasClass('done')) {
			$('.header-top-lang').addClass('done').appendTo($('.header-menu'));
		}
	} else {
		if ($('.header-top-lang').hasClass('done')) {
			$('.header-top-lang').removeClass('done').prependTo($('.header-top'));
		}
	}

	if (w < 767) {
		if (!$('.header-bottom__menu').hasClass('done')) {
			$('.header-bottom__menu').addClass('done').appendTo($('.header-menu'));
		}
	} else {
		$.each($('.header-bottom__menu'), function () {
			if ($(this).hasClass('header-bottom__menu-right')) {
				if ($(this).hasClass('done')) {
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
				}
			} else {
				if ($(this).hasClass('done')) {
					$(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
				}
			}
		});
	}
}

function adaptive_function() {
	let w = $(window).outerWidth();
	let h = $(window).outerHeight();
	adaptive_header(w,h);
}

adaptive_function();

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	  if (ibg[i].querySelector("img")) {
		ibg[i].style.backgroundImage =
		  "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
	  }
	}
  }
  
  ibg();

function slowScroll() {
	const links = document.querySelectorAll('a[href*="#"]');

	for (let link of links) {
		link.addEventListener('click', (e) => {
		  e.preventDefault();
		  const blockId = link.getAttribute('href');
		  document.querySelector('' + blockId).scrollIntoView({
			behavior: 'smooth', 
			block: 'start'
		  });
		});
	  }
}

slowScroll();

function langTabs() {
	let lang = document.querySelectorAll('.header-top-lang__item');

	lang.forEach(item => {
		item.addEventListener('click', selectLang);
	});

	function selectLang() {
		lang.forEach(item => {
			item.classList.remove('active');
		});
		this.classList.add('active');
	}
}

langTabs();