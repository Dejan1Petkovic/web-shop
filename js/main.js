var mainRow = $('#mainRow');
var zenskiLink = $('#zenskiLink');
var muskiLink = $('#muskiLink');
var novaKolekcija = $('#novaKolekcija');
var popularno = $('#popularno');
var akcija = $('#akcija');
var optLi = $('.optionLink');
var template = $('#productTemplate').html();
$.ajax({
  url: 'https://raw.githubusercontent.com/Dejan1Petkovic/shop-json/master/shop-master/shop.json',
  type: 'GET',
  dataType: 'json',
})
.done(function(res) {
  var text = "";
  $(res).each(function (i,e) {
    text = template.replace('{{img}}',e.imgSrc)
                  .replace('{{productTitle}}',e.productTitle)
                  .replace('{{model}}',e.model)
                  .replace('{{price}}',e.price)
    mainRow.append(text);
  })
})
//
optLi.on('click',function (event) {
  event.preventDefault();
  optLi.removeClass('active');
  $(this).addClass('active');
})


zenskiLink.on('click',function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(res) {
    var zenskaKolekcija = res.filter(function (e) {
      return e.colection == 'female';
    })
    mainRow.html('');
    var text = '';
    $(zenskaKolekcija).each(function (i,e) {
    text = template.replace('{{img}}',e.imgSrc)
                    .replace('{{productTitle}}',e.productTitle)
                    .replace('{{model}}',e.model)
                    .replace('{{price}}',e.price)
      mainRow.append(text);
    })
  });

});


muskiLink.on('click',function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(res) {
    var muskaKolekcija = res.filter(function (e) {
      return e.colection == 'male';
    })
    mainRow.html('');
    var text = '';
    $(muskaKolekcija).each(function (i,e) {
      text = template.replace('{{img}}',e.imgSrc)
                    .replace('{{productTitle}}',e.productTitle)
                    .replace('{{model}}',e.model)
                    .replace('{{price}}',e.price)
      mainRow.append(text);
    })
  });

});



novaKolekcija.on('click',function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(res) {
    var newKolekcija = res.filter(function (e) {
      return e.newCol;
    })
    mainRow.html('');
    var text = '';
    $(newKolekcija).each(function (i,e) {
      text = template.replace('{{img}}',e.imgSrc)
                    .replace('{{productTitle}}',e.productTitle)
                    .replace('{{model}}',e.model)
                    .replace('{{price}}',e.price)
      mainRow.append(text);
    })
  });

});


popularno.on('click',function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(res) {
    var popular = res.filter(function (e) {
      return e.popular;
    })
    mainRow.html('');
    var text = '';
    $(popular).each(function (i,e) {
      text = template.replace('{{img}}',e.imgSrc)
                    .replace('{{productTitle}}',e.productTitle)
                    .replace('{{model}}',e.model)
                    .replace('{{price}}',e.price)
      mainRow.append(text);
    })
  });

});


akcija.on('click',function (event) {
  event.preventDefault();
  $.ajax({
    url: 'https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(res) {
    var akcion = res.filter(function (e) {
      return e.action;
    })
    mainRow.html('');
    var text = '';
    $(akcion).each(function (i,e) {
      text = template.replace('{{img}}',e.imgSrc)
                    .replace('{{productTitle}}',e.productTitle)
                    .replace('{{model}}',e.model)
                    .replace('{{price}}',e.price)
      mainRow.append(text);
    })
  });

});









































$("#back-to-top").click(function () {
    $("html, body").animate({scrollTop: 0}, 1000);
});
