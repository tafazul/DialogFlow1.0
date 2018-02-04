jQuery(document).ready(function(){
  jQuery(".chatLogo, .initialText").on("click",function(){
      jQuery('.chatSection').animate({"right":"0px"}, "slow").addClass('visible');
      jQuery(".chatApp").addClass("hide");
  });
  jQuery(".closeIcon").on("click",function(){
      jQuery(".chatSection").animate({"right":"-1000px"}, "slow").removeClass('visible');
      jQuery(".chatApp").removeClass("hide");
  });
  jQuery("#inputText").on("keypress",function(e){
    if(e.keyCode == 13){
      var userSays = jQuery("#inputText").val();
      console.log(userSays);
      jQuery("#inputText").val('');
      send(userSays);
      var qContainer = jQuery("<div>");
      var ansContainer = jQuery("<div>");
      var userQ = jQuery("<div>",{
        "html": userSays,
        "class": "userQuestion"
      });
      var userQtail = jQuery("<div>",{
        "class": "userQtail"
      });
      var eveAnswer = jQuery("<div>",{
        "html": "Loading...",
        "class": "eveAnswer"
      });
      var eveTail = jQuery("<div>",{
        "class": "eveTail"
      });
      var clearDivLeft = jQuery("<div>",{
        "class": "clearLeft"
      });
      var clearDivRight = jQuery("<div>",{
        "class": "clearRight"
      });
      qContainer.append(userQ);
      qContainer.append(clearDivLeft);
      qContainer.append(userQtail).append("</br>");
      jQuery(".chatBody").append(qContainer);
      ansContainer.append(eveAnswer).append(clearDivRight).append(eveTail).append("</br>");
      jQuery(".chatBody").append(ansContainer);
    }
  });
  function send(userSays) {
			var text = userSays;
      var url = "https://api.dialogflow.com/v1/query?v=20150910";
      var accessToken = "88cb98a1cacb4ec4804cd24d0cf86d73";
			$.ajax({
				type: "POST",
				url: url,
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				headers: {
					"Authorization": "Bearer " + accessToken
				},
				data: JSON.stringify({ query: text, lang: "en", sessionId: "somerandomthing" }),
				success: function(data) {
          console.log("succesful chat");
					//setResponse(JSON.stringify(data, undefined, 2));
          console.log(data.result.fulfillment.speech);
          setResponse(data.result.fulfillment.speech);
				},
				error: function() {
					setResponse("Internal Server Error");
				}
			});
		}
    function setResponse(val) {
			jQuery(".chatBody div.eveAnswer").last().html(val);
		}
});
