const loadPhotos = () => {
    $.ajax( {
        type: "get",
        url: "https://jsonplaceholder.typicode.com/photos",
        dataType: "json",
        success: function ( response ) {
            const photos = response.slice( 0, 8 );
            photos.forEach( photo => {
                const col = $( '<div></div>' );
                col.addClass( 'col-lg-3 col-md-6 col-sm-12 mt-5' )
                // <div class="card">
                const card = $( '<div></div>' );
                card.addClass( 'card' )
                //<img class="card-img-top" src="./img/jobs/guilherme-cunha-222318.jpg" alt="Card image cap">
                const img = $( '<img>' )
                img.attr( 'src', photo.url )
                img.addClass( 'card-img-top', photo.url )
                card.append( img );
                //  <div class="card-body">
                const cardBody = $( '<div></div>' );
                cardBody.addClass( 'card-body' );
                // <h5 class="card-title">Special title treatment</h5>
                const cardTitle = $( '<h5></h5>' ).html( photo.title )
                cardBody.append( cardTitle );
                // <p class="card-text">With supporting text below as a natural lead-in to additional content.
                const cardText = $( '<p></p>' ).html( photo.title )
                cardBody.append( cardText );

                // <a href="#" class="btn btn-primary">Go somewhere</a>
                const btn = $( '<a>' ).attr( 'href', photo.url ).css( 'btn btn-primary' );
                cardBody.append( btn );

                card.append( cardBody );
                col.append( card );

                $( '#job_row' ).append( col );
            } );
        }

        /*
           <div class="col-lg-3 col-md-6 col-sm-12 mt-5">
                <div class="card">
                    <img class="card-img-top" src="./img/jobs/guilherme-cunha-222318.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.
                        </p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        */
    } );
}


const menuClickHandler = () => {
    $( 'ul.left-menu > li > a' ).on( 'click', function () {
        $( 'ul.left-menu > li' ).removeClass( 'active' );
        $( this ).parent().addClass( 'active' );
    } );
}