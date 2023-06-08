$(function () { // wait for document ready
  $textContainer = $('.text__container');
  var panTriggered = false;
  var zoomTriggered = false;
  //$textContainer.on('scroll',handleWindowScroll);

  function handleWindowScroll(e){
    console.log($textContainer.scrollTop());
  }
  
  var controller = new ScrollMagic.Controller();
  
  var scene1 = new ScrollMagic.Scene({
    triggerElement: '.text--01',
    duration: 5000
  })
  .addTo(controller);
  
  scene1.on('progress',onRoomProgress);
  
  function onRoomProgress(e){
    console.log(e.progress);
    var curPan = (e.progress)*100;
    
    $('.room').css({
      'object-position': `${curPan}% 50%`  
    });
    
    if (e.progress > .7){
      var curScale = 1 + (e.progress-.7);
      $('.room__container').css({
        transform: `scale(${curScale})`
      })
    }
    
  }
  
  var scene2 = new ScrollMagic.Scene({
    triggerElement: '.text--02',
    triggerHook: 'onEnter',
    reverse: true,
    duration: 1000
  })
  .addTo(controller);
  scene2.on('enter',onSceneTwoEnter);
  scene2.on('leave',onSceneTwoLeave);
  
  var scene3 = new ScrollMagic.Scene({
    triggerElement: '.text--03',
    triggerHook: 'onEnter',
    reverse: true,
    duration: 1000
  })
  .addTo(controller);
  scene3.on('enter',onSceneThreeEnter);
  scene3.on('leave',onSceneThreeLeave);

  
  function onSceneTwoEnter(){
    $('.room--02').addClass('active');
  }
  
  function onSceneTwoLeave(){
    $('.room--02').removeClass('active');
  }
  
  function onSceneThreeEnter(){
    $('.room--03').addClass('active');
  }
  
  function onSceneThreeLeave(){
    $('.room--03').removeClass('active');
  }

  
});
