$(function() {
      $(".menu-padrao").removeClass("menu-atualizado");
  	  $(".imgEu").addClass("imgEu-visivel");
	  $(".imgEu").removeClass("imgEu-invisivel");
	  
	  var movimentacao = false;
	  var menuAtualizado = false;
	  var posicaoAtual;
	  let width;
	  let height;
	  let esquerda;




	  
			if(!movimentacao){
				$(window).on("scroll", function() {
					  
						
						if(	$(window).scrollTop() > 100 && !movimentacao && !menuAtualizado){
							if(!movimentacao){
							  posicaoAtual = 0;
							  width = 85.2;
							  height = 85;
							  esquerda = 8;

							  
							  let imgWidth = 30;
							  let imgLeft = 35;
								
								
								
								movimentacao = true;
								width = width-0.2
								height = height-0.3
								esquerda = esquerda+0.1
								
								imgWidth = imgWidth-0.1
								imgLeft = imgLeft-0.1
								
								if(width < 85.2 && height < 85 && esquerda > 8 && imgWidth > 4 && imgLeft > 0){
									const timer = setInterval(function() {
									  if (width <= 70 && height <= 6 && esquerda >=12 && imgWidth == 4 && imgLeft == 1) {
										// aborta a execução caso a condição seja atingida
										clearInterval(timer)
										
										if(width == 70){
											menuAtualizado = true;
											movimentacao = false;

										}else{
											menuAtualizado = false;
										}
									  }

									
									if(!menuAtualizado){
										
									  //Menu
									  width = width-0.2
									  height = height-0.3
									  esquerda = esquerda+0.1
									  
									  if( esquerda > 12 && movimentacao){
										$(".menu").css({"marginleft" : esquerda+"%"});
									  }
									  if( width > 70 ){
										$(".menu").css({"width" : width+"%"});
									  }
									  if( height > 6 ){
										$(".menu").css({"height" : height+"%"});
									  }
									  
									  //Imagem
									  imgWidth = imgWidth-0.1
									  imgLeft = imgLeft-0.2
									  
									  if( imgWidth > 4){
										$(".imgEu-visivel").css({"width" : imgWidth+"%"});
									  }
									  if( imgLeft > 1){
										$(".imgEu-visivel").css({"left" : imgLeft+"%"});
									  }
									  
									  
									  //Botoes Menu
									  $(".menuSub").css({"padding-top" : "0.5%"});
									  $("a").css({"padding" : "5px 30px"});
									  $("li").css({"left" : "10%"});
									  $("li").css({"border" : "black"});
									  $("li").css({"top" : "-35px"});
									  $(".menulili").css({"top" : "0px"});
									  $(".menulili").css({"left" : "0px"});
									  $(".pTitulo").css({"visibility" : "hidden"});
									  $(".pSubTitulo").css({"visibility" : "hidden"});
										$(".imgLinkedIn").css({"visibility" : "hidden"});
										$(".imgFacebook").css({"visibility" : "hidden"});
										$(".imgWhatsapp").css({"visibility" : "hidden"});

									  

									  
									}
									  
									}, 1)
								}
							}
							
						}else if( $(window).scrollTop() <= 100 && $(window).scrollTop() >= 50){
							let el = document.getElementById('menuID');
							let elCoordenadas = el.getBoundingClientRect();
								movimentacao = false;
								width = 50
								height = 5
								esquerda = 12
								
								imgWidth = 4
								imgLeft = 1

							if(elCoordenadas.width == 679.1875 && !movimentacao){								
								width = width+0.2
								height = height+0.3
								esquerda = esquerda-0.1
								
								imgWidth = imgWidth+0.1
								imgLeft = imgLeft+0.1
								
								if(width >= 50 && height >= 5){
									movimentacao = true;
									const timer = setInterval(function() {
									  if (width >= 85.2 && height >= 85) {
										// aborta a execução caso a condição seja atingida
										clearInterval(timer)
										if(width == 85.2){
											menuAtualizado = false;
											movimentacao = false;
										}else{
											menuAtualizado = true;
											$(".menuSub").css({"visibility" : "visible"});
											$(".menuSub").css({"padding-top" : "35%"});
											$("a").css({"padding" : "5px 79.5px"});
											$("li").css({"left" : "0%"});
											$("li").css({"border" : "black"});
										    $("li").css({"top" : "62px"});
										    $(".menulili").css({"top" : "0px"});
											$(".menulili").css({"left" : "0px"});
										    $(".pTitulo").css({"visibility" : "visible"});
										    $(".pSubTitulo").css({"visibility" : "visible"});
										    $(".imgLinkedIn").css({"visibility" : "visible"});
										    $(".imgFacebook").css({"visibility" : "visible"});
										    $(".imgWhatsapp").css({"visibility" : "visible"});

											}									  
									}

										
									  //Menu
									  width = width+0.2;
									  height = height+0.3;
									  esquerda = esquerda-0.1;

									  
									  if( esquerda >= 8 && movimentacao){
										$(".menu").css({"marginleft" : esquerda+"%"});
										$(".menuSub").css({"visibility" : "hidden"});
									  }
									  if( width <= 85.2 ){
										$(".menu").css({"width" : width+"%"});
									  }else{
										$(".menu").css({"width" : "85.2%"});
									  }
									  if( height <= 85 ){
										$(".menu").css({"height" : height+"%"});
									  }else{
										$(".menu").css({"height" : "85%"});
									  }
									  
									  //Imagem
									  imgWidth = imgWidth+0.1;
									  imgLeft = imgLeft+0.2;
									  
									  if( imgWidth <= 30){
										$(".imgEu-visivel").css({"width" : imgWidth+"%"});
									  }
									  if( imgLeft <= 35){
										$(".imgEu-visivel").css({"left" : imgLeft+"%"});
									  }
									  

									  
									
									  
									}, 1)
								}
							}

						}
				});
			}
});