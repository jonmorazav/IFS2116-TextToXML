function getSelectionText(){return userTextInput.value.substring(userTextInput.selectionStart,userTextInput.selectionEnd)}var textToProcess="",programStep=0,userTextInput=document.getElementById("usrTextInput");$("#generate-btn").hide(),$(function(){$(".button-collapse").sideNav(),$(".modal").modal()}),$("#nxt-btn").click(function(){switch(programStep){case 0:textToProcess=$("#usrTextInput").val(),$("#instructions p").html("Select heading text and click Next"),programStep++;break;case 1:var e=getSelectionText().length;textToProcess=[textToProcess.slice(0,textToProcess.indexOf(getSelectionText())),'<div type="head">',textToProcess.slice(textToProcess.indexOf(getSelectionText()))].join(""),textToProcess=[textToProcess.slice(0,textToProcess.indexOf(getSelectionText())+e),"</div>",textToProcess.slice(textToProcess.indexOf(getSelectionText())+e)].join(""),$("#instructions p").html("Select sub heading text and click Next"),programStep++;break;case 2:var e=getSelectionText().length;textToProcess=[textToProcess.slice(0,textToProcess.indexOf(getSelectionText())),'<div type="subhead">',textToProcess.slice(textToProcess.indexOf(getSelectionText()))].join(""),textToProcess=[textToProcess.slice(0,textToProcess.indexOf(getSelectionText())+e),"</div>",textToProcess.slice(textToProcess.indexOf(getSelectionText())+e)].join(""),$("#instructions p").html("Select paragraph text and click Next"),programStep++;break;case 3:var e=getSelectionText().length;textToProcess=[textToProcess.slice(0,textToProcess.indexOf(getSelectionText())),"<p>",textToProcess.slice(textToProcess.indexOf(getSelectionText()))].join(""),textToProcess=[textToProcess.slice(0,textToProcess.indexOf(getSelectionText())+e),"</p>",textToProcess.slice(textToProcess.indexOf(getSelectionText())+e)].join(""),$("#generate-btn").show(),$("#instructions p").html('Done! Please hit the "Generate" button to get your XML!'),programStep++;break;case 4:$("#nxt-btn").html("Next"),$("#xmlOutput").val(""),$("#usrTextInput").val(""),$("#instructions p").html("Ready to get started? Paste your text and click 'Next'!"),$("#xmlOutput").trigger("autoresize"),$("#usrTextInput").trigger("autoresize"),programStep=0;break;default:programStep=0,$("#instructions p").html("An Error has occured. Please refesh this page")}}),$("#generate-btn").click(function(){$("#generate-btn").hide(),$("#nxt-btn").html("Reset"),$("#xmlOutput").val(vkbeautify.xml(textToProcess)),$("#xmlOutput").trigger("autoresize")});