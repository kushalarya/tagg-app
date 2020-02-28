$( document ).ready(function() {

    var dataArray = new Array();

    for ( var k=0; k<10; k++ ) {

      d = localStorage.getItem("data_" + k);
      console.log(d != null);

      if ( d != null ) {
        dataArray[k] = localStorage.getItem("data_" + k);
        $('#imageslist').append("<a href='https://kushalarya.github.io/camera-app?img=data_" + k + "' > Image " + k + "</a><br/></br>" );
      }

    }


    console.log( dataArray );

});
