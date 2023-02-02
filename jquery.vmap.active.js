$(function() {
  function sizeMap() {
    var containerWidth = $('.container-default').width(),
      containerHeight = (containerWidth / 1.4);

    $('#vmap-local, #vmap-global').css({
      'width': containerWidth,
      'height': containerHeight
    });
  }
  sizeMap();

  $('#vmap-local').vectorMap({
    map: 'world_en',
    backgroundColor: '#ffffff',
    borderColor: '#F1F1F1',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#F1EEEF',
    enableZoom: true,
    hoverColor: '#F1EEEF',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#CCDAFC',
    selectedRegions: ['sg', 'my', 'jp', 'th', 'vn', 'ph', 'au', 'kr', 'hk', 'nz', 'om', 'qa', 'sa', 'ae', 'br', 'mx', 'co', 'cl', 'pa', 'pe', 'ar', 'eg', 'gh', 'ng', 'za', 'ke', 'tz', 'ug'], // Add all selected country code
    showTooltip: true,
    onLoad: function(event, map) {
      console.log(map)
    },
    onLabelShow: function(event, label, code) {
    if (code == 'sg') {
      label.html('<span class="country-name">Singapore</span><br><span class="country-detail">Paynow, eNets, GrabPay</span>');
    } else if (code == 'my') {
        label.html('<span class="country-name">Malaysia</span><br><span class="country-detail">FPX - Maybank, FPX - Public Bank, FPX - Hong Leong</span>');
    } else if (code == 'jp') {
        label.html('<span class="country-name">Japan</span><br><span class="country-detail">Coming Soon</span>');
    } else if (code == 'th') {
        label.html('<span class="country-name">Thailand</span><br><span class="country-detail">FPX - Krungthai Bank, PromptPay (Thai QR)</span>');
    } else if (code == 'vn') {
        label.html('<span class="country-name">Vietnam</span><br><span class="country-detail">momo, ViettelPay, ZaloPay, Asia Commercial Bank, DongA Bank, BIDV, Sacombank, Techcombank, Vietcombank, Vietin Bank</span>');
    } else if (code == 'ph') {
          label.html('<span class="country-name">Philippines</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'au') {
        label.html('<span class="country-name">Australia</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'kr') {
        label.html('<span class="country-name">Korea</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'hk') {
        label.html('<span class="country-name">Hong Kong</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'nz') {
        label.html('<span class="country-name">New Zealand</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'om') {
        label.html('<span class="country-name">Oman</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'qa') {
        label.html('<span class="country-name">Qatar</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'sa') {
        label.html('<span class="country-name">Saudi Arabia</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'ae') {
        label.html('<span class="country-name">UAE</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'br') {
        label.html('<span class="country-name">Brazil</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'mx') {
        label.html('<span class="country-name">Mexico</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'co') {
        label.html('<span class="country-name">Colombia</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'cl') {
        label.html('<span class="country-name">Chile</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'pa') {
        label.html('<span class="country-name">Panama</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'pe') {
        label.html('<span class="country-name">Peru</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'ar') {
        label.html('<span class="country-name">Argentina</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'eg') {
        label.html('<span class="country-name">Egypt</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'gh') {
        label.html('<span class="country-name">Ghana</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'ng') {
        label.html('<span class="country-name">Nigeria</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'za') {
        label.html('<span class="country-name">South Africa</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'ke') {
        label.html('<span class="country-name">Kenya</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'tz') {
        label.html('<span class="country-name">Tanzania</span><br><span class="country-detail">coming soon</span>');
    } else if (code == 'ug') {
        label.html('<span class="country-name">Uganda</span><br><span class="country-detail">coming soon</span>');
    } else {
        label.html('');
      }
    },
    onResize: function(event, width, height) {
      sizeMap();
    }
  });

  $('#vmap-global').vectorMap({
    map: 'world_en',
    backgroundColor: '#ffffff',
    borderColor: '#F1F1F1',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#F1EEEF',
    enableZoom: true,
    hoverColor: '#F1EEEF',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#1A4FD6',
    selectedRegions: ['eu', 'SE'],
    showTooltip: true,
    onLabelShow: function(event, label, code) {
      if (code == 'eu') {
          label.html('<span class="country-name">Europe</span><br><span class="country-detail">Credit card Debit card SEPA Bank</span>');
      } else {
        label.html('<span class="country-name">Rest of the word (In global payment)</span><br><span class="country-detail">Credit card  Debit Card</span>');
      }
    },
    onResize: function(event, width, height) {
      sizeMap();
    }
  });
});
