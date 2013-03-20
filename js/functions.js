var camsDB = [['http://207.251.86.238/cctv403.jpg','Broadway @ 42 St'],
					['http://207.251.86.238/cctv26.jpg','Broadway @ 46 Street'],
					['http://207.251.86.238/cctv301.jpg','Madison Ave @ 49 St'],
					['http://207.251.86.238/cctv402.jpg','Sutton Pl @ 58 St'],
					['http://207.251.86.238/cctv422.jpg','7 Ave and 43 St'],
					['http://207.251.86.238/cctv12.jpg','6 Avenue @ 42 Street'],
					['http://207.251.86.238/cctv6.jpg','5 avenue @ 42 Street'],
					['http://207.251.86.238/cctv258.jpg','2 Ave @ 49 St'],
					['http://207.251.86.238/cctv8.jpg','5 Avenue @ 49 Street'],
					['http://207.251.86.238/cctv306.jpg','7 Ave @ 49 St'],
					['http://207.251.86.238/cctv18.jpg','8 Avenue @ Columbus Cr'],
					['http://207.251.86.238/cctv5.jpg','Central Park S @ Columbus Cr'],
					['http://207.251.86.238/cctv294.jpg','Lexington Ave @ 57 ST'],
					['http://207.251.86.238/cctv90.jpg','West Street @ Intrepid'],
					['http://207.251.86.238/cctv212.jpg','Water St @ Wall St'],
					['http://207.251.86.238/cctv327.jpg','FDR @ Brooklyn Bridge NB'],
					['http://207.251.86.238/cctv328.jpg','South Street @ Pike Street'],
					['http://207.251.86.238/cctv22.jpg','FDR Dr @ Catherine Street'],
					['http://207.251.86.238/cctv338.jpg','Montgomergy @ South St'],
					['http://207.251.86.238/cctv337.jpg','Broadway @ Chambers St'],
					['http://207.251.86.238/cctv50.jpg','West St @ Canal St'],
					['http://207.251.86.238/cctv13.jpg','Bowery @ Canal Street'],
					['http://207.251.86.238/cctv325.jpg','Canal Street @ Allen Street'],
					['http://207.251.86.238/cctv253.jpg','1 Ave @ 23 St'],
					['http://207.251.86.238/cctv312.jpg','7 Ave @ 23 St'],
					['http://207.251.86.238/cctv9.jpg','6 Avenue @ 34 Street'],
					['http://207.251.86.238/cctv404.jpg','QBB SOR @ 1 Ave'],
					['http://207.251.86.238/cctv407.jpg','QBB NOR @ York Ave'],
					['http://207.251.86.238/cctv415.jpg','QBB UL @ Queens Pier'],
					['http://207.251.86.238/cctv305.jpg','5 Ave @ 34 St'],
					['http://207.251.86.238/cctv9.jpg','6 Avenue @ 34 Street'],
					['http://207.251.86.238/cctv17.jpg','9th Avenue @ 34 Street'],
					['http://207.251.86.238/cctv302.jpg','Lexington Ave @ 49 St'],
					['http://207.251.86.238/cctv299.jpg','5 Ave @ 57 St'],
					['http://207.251.86.238/cctv304.jpg','6 Ave @ 57 St'],
					['http://207.251.86.238/cctv48.jpg','WBB Manhattan Entrance'],
					['http://207.251.86.238/cctv356.jpg','WBB-1 @ Bklyn Plaza'],
					['http://207.251.86.238/cctv357.jpg','WBB-2 @ NOR Bklyn-Driggs'],
					['http://207.251.86.238/cctv263.jpg','1 Ave @ 86 St'],
					['http://207.251.86.238/cctv182.jpg','Lexington Ave @ 86 St'],
					['http://207.251.86.238/cctv24.jpg','FDR Dr @ 78 Street'],
					['http://207.251.86.238/cctv329.jpg','Flatbush Ave @ Tillary St'],
					['http://207.251.86.238/cctv57.jpg','Queens Blvd @ 36 Street'],
					['http://207.251.86.238/cctv185.jpg','Queens Blvd @ 51 St'],
					['http://207.251.86.238/cctv287.jpg','BQE @ Metropolitan Ave'],
					['http://207.251.86.238/cctv275.jpg','BQE @ Varick St'],
					['http://207.251.86.238/cctv288.jpg','BQE @ 31 St'],
					['http://207.251.86.238/cctv45.jpg','Gowanus Expy @ Sackett St'],
					['http://207.251.86.238/cctv44.jpg','BQE @ Hamilton Ave B-G Ramp'],
					['http://207.251.86.238/cctv46.jpg','Gowanus Expy @ Gowanus Prospect'],
					['http://207.251.86.238/cctv280.jpg','Gowanus Expy WB @ 6 Ave'],
					];
		var cams = [];	// Array of cameras to be used
		var camOrder = [];
		var imageCache = [];
		var loadedCameras =0;
		var camX = 352;
		var camY = 240;
		var camSize = [];
				
		// Add hidden element
		var hidden = $('body').append('<div id="img-cache" style="display:none/>').children('#img-cache');
		
		var loadImage = function (url,cam){
			
			 /*
			 Java Script version
			  
			 //var img = $('<img id="hidden'+cam+'" />');
			 var imgC = document.createElement('img');
			 imgC.src = url;
			 imgC.className = "camImage";
			 imgC.width = camX;
			 imgC.height = camY;
			 imgC.onload = function(){
				 //$("#cam"+cam+"").attr("src",url);
				 $("#imgBox"+cam+"").html(imageCache[cam]);
				 loadedCameras = loadedCameras < cams.length ? loadedCameras+=1 : cams.length;
				 console.log("img "+loadedCameras);

			 }
			 imageCache[cam]=imgC;
			 //loadedCameras = imageCache.length;
			 var percentage = Math.round((imageCache.length/cams.length)*100);
			 $( "#progressbar" ).progressbar({value: percentage});
			 */
			
			var img = $('<img id="cache'+cam+'">');
			img.attr({class:"camImage",src:url,width:camX,height:camY})
			.one('load',function(){
				$('#imgBox'+cam).empty();
				var cachedImage = this;
				$('#imgBox'+cam).html(cachedImage);
				
				 loadedCameras = loadedCameras < cams.length ? loadedCameras+=1 : cams.length;
				
			 	var percentage = (loadedCameras/cams.length)*100;
			 	$( "#progressbar" ).progressbar({value: percentage});
				if (loadedCameras == cams.length) {
					$('.progress-label').html('Complete!');
					$('#loader').delay(600).slideUp({duration:700});
			}
				 

			}).each(function(){

				if(this.complete) $(this).load();
			})
			.appendTo("#cameraCache");
			 
			 imageCache[cam]=img;

		}
		
		var refreshImage = function() {

			for (i=0;i<cams.length;i++){
				$("#cam"+i+"Title").html(cams[i][1]);
				var src = cams[i][0]+"?math="+Math.random();
				loadImage(src,i);				
			}
		
			setTimeout('refreshImage()',4000);
		}
		
		/*
		Function zoom
			increase or decrease images .2x 
		 */
		function zoom(io) {
			var direction = io == 'in' ? 'in' : 'out';
			if (direction == 'in'){
				var cX=camX+Math.round(camX*0.2);
				var cY=camY+Math.round(camY*0.2);
			} else {
				var cX=camX-Math.round(camX*0.2);
				var cY=camY-Math.round(camY*0.2);
			}
			if (cX>50 && cX<1024){
				camX=cX;
				camY=cY;
			
				$(".cameraItem").css({"height" : camY,"width" : camX});
				$(".imgBoxContainer").css({"height" : camY,"width" : camX});
				$(".title").css({"width" : camX});
				$(".camImage").css({"height" : camY,"width" : camX});
				camSize[0]=camX;
				camSize[1]=camY;
				$.cookie("NYCamSize",camSize,{ expires: 14 });
			}
			return false;
		}

		
		Array.prototype.move = function (old_index, new_index) {
		    if (new_index >= this.length) {
		        var k = new_index - this.length;
		        while ((k--) + 1) {
		            this.push(undefined);
		        }
		    }
		    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
		};
		function getSorted(arr, sortArr) {
		  var result = [];
		  for(var i=0; i<sortArr.length; i++) {
		    result[i] = arr[sortArr[i]];
		  }
		  return result;
		}

		function restore(){
			cams = camsDB;
			camX = 352;
			camY = 240;
			for (i=0;i<cams.length;i++){
				camOrder[i] = i;
			}
			$("#cameraContainer").html("");
			
			$.cookie("NYCamOrder",camOrder,{ expires: 14 });
			createContent();
			return false;
		}

		function createContent(){
			cams = getSorted(camsDB,camOrder);
			$.each(cams, function(index){
				var node = "<div class=\"cameraItem\"><div id=\"cam"+index+"Title\" class=\"title\"></div>"+
				"<img src=\"del.png\" class=\"delbutton\"/ rel=\""+index+"\">"+
				"<div id=\"imgBox"+index+"\" class=\"imgBoxContainer\">"+
				"<img src=\"\" class=\"camImage\" id=\"cam"+index+"\"/></div></div>";
				
				$("#cameraContainer").append(node);
			});

			$(".cameraItem").css({"height" : camY,"width" : camX});
			//$(".title").css({"width" : camX});
			

			$(".imgBoxContainer").css({"height" : camY,"width" : camX});
			$(".cameraItem").on({
				mouseenter: function(){
				  	$(this).children(".delbutton").show();
				  },
				  mouseleave: function(){
				  	$(this).children(".delbutton").hide();
				  }
				  });
			$(".delbutton").on("click",function(){
				var camid = $(this).attr("rel");
				//console.log("camid="+camid);
				$(this).parent(".cameraItem").remove();
				//cams.splice(camOrder[camid],1);
				camOrder.splice(camid,1);
				$.cookie("NYCamOrder",camOrder,{ expires: 14 });

			});
		}
				
		$(function(){
			$( "#progressbar" ).progressbar({value: 0});
			$( "#icons li" ).hover(function() {
			$( this ).addClass( "ui-state-hover" );},function() {
			$( this ).removeClass( "ui-state-hover" );});

			$("#btn-zoomin").click(function(){zoom('in');});
			$("#btn-zoomout").click(function(){zoom('out');});
			$("#btn-restore").click(function(){restore();});

			//$.removeCookie("NYCamOrder");
			
			if ($.cookie("NYCamOrder") !==null) {
				console.log("Initialized with saved camera order "+$.cookie("NYCamOrder"));
				var cookie = $.cookie("NYCamOrder");
				camOrder = cookie ? cookie.split(/,/) : new Array();
			} else {
				for (i=0;i<camsDB.length;i++){
					camOrder.push(i);
					console.log("camOrder="+camOrder);
				}
			}

			if ($.cookie("NYCamSize") !==null) {
				var cookie = $.cookie("NYCamSize");
				camSize = cookie ? cookie.split(/,/) : new Array();
				if (camSize[0]>0 && camSize[1]>0){
					camX = parseInt(camSize[0]);
					camY = parseInt(camSize[1]);
				}
			}

			cams = getSorted(camsDB,camOrder);
			createContent();
			  
			$("#cameraContainer").sortable({ opacity: 0.6, cursor: 'move',
				forceHelperSize: false,
				forcePlaceholderSize: false,
				start: function(event, ui) {
					ui.placeholder.height(ui.item.height());
					ui.placeholder.width(ui.item.width());
					var start_pos = ui.item.index();
					ui.item.data('start_pos', start_pos);
				},
				update: function(event, ui) {
					var start_pos = ui.item.data('start_pos');
					var end_pos = $(ui.item).index();
					camOrder.move(start_pos,end_pos);
					$.cookie("NYCamOrder",camOrder,{ expires: 14 });
				}
        		});
			  
			$('#cameraContainer').masonry({
				itemSelector : '#cameraItem',
				columnWidth : camX
			});
			    
			setTimeout('refreshImage()',1000);
			setTimeout(
				function(){
					$("#infohelp").fadeOut('slow',function(){
					$("#facebooklike").fadeIn();
				});
			  },15000);
		});