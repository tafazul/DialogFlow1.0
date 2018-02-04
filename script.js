jQuery(document).ready(function(){
  alert("doc loaded");
jQuery(".chatLogo, .initialText").on("click",function(){
    jQuery('.chatSection').animate({"right":"0px"}, "slow").addClass('visible');
    jQuery(".chatApp").addClass("hide");
});
jQuery(".closeIcon").on("click",function(){
    jQuery(".chatSection").animate({"right":"-1000px"}, "slow").removeClass('visible');
    jQuery(".chatApp").removeClass("hide");

})
});
