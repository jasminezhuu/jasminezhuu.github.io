$(document).ready( function(){

    
    $('#sidebarToggler, #dismiss, .overlay').on('click', function() {
        toggleSidebar();
    });

});

function toggleSidebar() {
    $('#sidebar').toggleClass('active');
    $('#sidebarToggler').toggleClass('active');
    $('.overlay').toggleClass('active');
}
