//This is the base javascript filefunction billme()

function billme()
{
        var v1= document.order.W.value;
        var v2= document.order.LATNH.value;
        var v3= document.order.LAWAH.value;
        var v4= document.order.WL.value;
        var v5= document.order.LAWL.value;
        var v6= document.order.LAES.value;


        //These lines define the variables.
        
         var   W= parseFloat(v1);
         var   LATNH= parseFloat(v2);
         var   LAWAH= parseFloat(v3);
         var   WL= parseFloat(v4);
         var   LAWL= parseFloat(v5);
         var   LAES= parseFloat(v6);

        //These lines make sure that variables 1, 2, and 3 are numbers.
         order.WTNH.value= W*0.545
	 order.WAH.value= W*0.107
         order.subtotalBox.value= (W*0.545*LATNH+W*0.107*LAWAH+WL*LAWL)/LAES

	 document.order.WTNH.value=document.order.WTNH.value
	 document.order.WAH.value=document.order.WAH.value
			//document.order.subtotalBox.value=document.order.subtotalBox.value
	 document.order.subtotalBox.value=document.order.subtotalBox.value.toFixed(2);
}     
